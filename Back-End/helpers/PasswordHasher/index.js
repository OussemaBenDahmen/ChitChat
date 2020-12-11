const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  hashPass: async (pass) => {
    let hashedPass = await bcrypt.hash(pass, saltRounds);
    return hashedPass;
  },

  comparePass: async (pass, hash) => {
    const match = await bcrypt.compare(pass, hash);
    return match;
  },
};
