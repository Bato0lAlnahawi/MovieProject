const jwt = require('jsonwebtoken')

const checkAuthUser = (req, res, next) => {
    const token = req.headers['x-auth-token']

    if(!token){
        return res.status(401).json({ message: 'not auth'})
    }


    try {
        const isVerified = jwt.verify(token, 'secret');
        next();
    } catch (error) {
        return res.status(401).json({ message: 'not auth'})
    }


}

module.exports = { checkAuthUser }