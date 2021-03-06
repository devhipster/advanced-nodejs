const jwt = require('jsonwebtoken')
const config = require('config');

module.exports = function auth(req,res,next){
    const token = req.header('x-auth-token');
    if(!token) res.status(400).sendd('Access denied. No token provided.')
    try{

        const decoded = jwt.verify(token,config.get('jwtPrivateKey'));
        req.user = decoded;
    }catch(ex){
        res.status(400).send('Invalid token')
    }
    next();
}
