const jwt = require('jsonwebtoken')

const checkAuthUser = (req, res, next) => {
    const token = req.headers['x-auth-token']

    if(!token){
        return res.status(401).json({ message: 'not auth'})
    }


    const isVerifed = jwt.verify(token, 'KEY-SECRET')


    if(!isVerifed){
        return res.status(401).json({ message: 'not auth'})
    }

    next()

}

module.exports = { checkAuthUser }