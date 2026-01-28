const pool = require('../config/db');

async function findUserByEmail(email){
    const [rows] = await pool.execute(`SELECT * FROM users WHERE email = ?`,[email]);
    return rows[0];
}
async function createUser(username, email, password_hash){
    const [user] = await pool.execute(`INSERT INTO users (username, email, password_hash) VALUES (?,?,?)`,[username,email,password_hash]);
    return(user);
}

async function getAllUsers(){
    const [users] = await pool.execute(`SELECT * FROM users`);
    return(users);
}
async function getUserById(id){
    const [rows] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [id]);
    return rows[0];
}

async function updateUser(id, username, email, password_hash){
    const [result] = await pool.execute('UPDATE users SET username = ?, email = ?, password_hash = ? WHERE id = ?',[username, email, password_hash, id] );
    return result.affectedRows;

}

async function deleteUser(id){
    const [user] = await pool.execute(`DELETE FROM users WHERE id = ?;`, [id]);
    return(user);
}

module.exports = {
    findUserByEmail,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
