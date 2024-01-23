const bcrypt = require('bcrypt');
const verifyPassword = async (candidatePassword, userPassword) => {
    return await bcrypt.compare(candidatePassword, userPassword);
};


module.exports = verifyPassword