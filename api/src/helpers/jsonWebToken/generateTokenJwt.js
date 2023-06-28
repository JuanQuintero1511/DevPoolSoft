const jwt = require("jsonwebtoken");

const generateTokenJwt = (user) => {
    return jwt.sign(
        {
            id: user.id,
            rol: user.rolId
        },
        process.env.JWT_SECRET, //Se agrega una clave secreta para la generación del token
        {
            expiresIn: "2h",
        }
    );
};

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null
    }
}


module.exports = {generateTokenJwt,verifyToken}