const jwt = require('jsonwebtoken');

const jwtComponents = {
    generateAccessToken: (user) => {
        console.log(user._id)
        return jwt.sign({
            id: user._id,
            admin: user.admin,
        },
        process.env.JWT_ACCESS_KEY,
        {expiresIn: "30s"}
        );
    },

    generateRefreshToken: (user) => {
        return jwt.sign({
            id: user._id,
            admin: user.admin,
        },
        process.env.JWT_REFRESH_KEY,
        {expiresIn: "365d"}
        );
    },

}

module.exports = jwtComponents;