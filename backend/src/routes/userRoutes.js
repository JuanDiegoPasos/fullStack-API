const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');



//PUBLIC ROUTES
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

//PRIVATE ROUTES
router.get('/', authenticateToken, userController.getAllUsers);
router.patch('/:id', authenticateToken,userController.updateUser);
router.delete('/:id', authenticateToken,userController.deleteUser);
module.exports = router;
