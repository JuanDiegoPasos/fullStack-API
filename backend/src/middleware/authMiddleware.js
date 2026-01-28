const jwt = require('jsonwebtoken');

function authenticateToken( req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token === null){
        return res.status(401).json({ message: `se requiere iniciar sesión`});
    }
    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
        if(err){
            return res.status(403).json({ message: 'token invalido o expirado, se necesita iniciar sesión'});
        }
        req.user = user;
        next();
    });

}

module.exports = authenticateToken;