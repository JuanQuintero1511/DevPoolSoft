const bcrypt = require("bcryptjs")

//ENCRIPTAMOS LA PASSWORD
const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain, 10);
    return hash;
}

//COMPARAMOS LA PASSWORD CON LA DE LA DB
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = {
    encrypt, 
    compare
}