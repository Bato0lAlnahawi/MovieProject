const registerValidation = (body) => {
    const {userName, email, password,isAdmin} = body
    let error = null
    if(!email || !password || !userName || !isAdmin) {
        error = 'Please fill all fields'
    }
    return error
}

module.exports = { registerValidation }