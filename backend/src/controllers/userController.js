const express = require('express');
const bycrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


async function loginUser(req,res){
    try{
        const {email,password} = req.body;
        const user = await userModel.findUserByEmail(email);
        if(!user){
            return res.status(404).json({message: 'credenciales invalidas'});
        }
        
        const isMatch = await bycrypt.compare(password,user.password_hash);
        if(!isMatch){
            return res.status(400).json({message: 'contraseña erronea'});
        }
        const username = user.username;
        const token = jwt.sign(
            {id: user.id,},
            process.env.JWT_SECRET,
            { expiresIn: '1h'}
        );
        res.status(200).json({message: 'inicio de sesión exitoso', token, username});

    }
    catch(error){
        res.status(500).json({message: `ERROR EN EL INICIO DE SESION`, error: error.message});
        
    }
}


async function registerUser (req,res){
    try{
        const {username,email,password} = req.body;
        if(!username || !email ||!password) {
            return res.status(400).json({ message: 'todos los campos son obligatorios'});
        }
        const user = await userModel.findUserByEmail(email);
        if(user){
            return res.status(409).json({message: 'el correo electrónico ya está registrado'});
        }
        const password_hash = await bycrypt.hash(password, 10);

        await userModel.createUser(username, email, password_hash);
        res.status(201).json({ message: 'Usuario registrado exitosamente.' });
    }
    catch(error){
        res.status(500).json({message: 'ERROR AL REGISTRAR EL USUARIO', error:error.message});
    }
}

async function getAllUsers (req,res){
    try {
        const users = await userModel.getAllUsers();
        const sanitizedUsers = users.map(({password_hash, ...rest}) => rest);
        res.status(200).json(sanitizedUsers);
    } catch (error) {
        res.status(500).json({message: 'ERROR AL MOSTRAR USUARIOS', error:error.message});
    }

}

async function updateUser (req,res){
    try {
        const id =req.params.id;
        const user = await userModel.getUserById(id);
        const updates = req.body;
        if(!user){
            return res.status(404).json({message: 'usuario no encontrado'});
        }
        const updatedData ={
            ...user,
            ...updates
        };


        //HASH PASSWORD
        if(updatedData.password){
            updatedData.password_hash = await bycrypt.hash(updates.password, 10);
        }
        delete updatedData.password; 
        const affectedRows = await userModel.updateUser(
                id, 
                updatedData.username, 
                updatedData.email, 
                updatedData.password_hash
        );        
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
        res.status(201).json({ message: 'Cambios guardados.' });
    } catch (error) {
        res.status(500).json({message: 'ERROR AL ACTUALIZAR USUARIO', error:error.message});
    }
}


async function deleteUser (req,res){
    try {
        const id = req.params.id;
        const user = await userModel.getUserById(id);
        if(!user){
            return res.status(404).json({message: 'usuario no encontrado'});
        }
        await userModel.deleteUser(id);
        res.status(201).json({ message: 'usuario eliminado.' });
    } catch (error) {
        res.status(500).json({message: 'ERROR AL ELIMINAR USUARIO', error:error.message});
    }
}

module.exports = {
    loginUser,
    registerUser,
    getAllUsers,
    updateUser,
    deleteUser
};

