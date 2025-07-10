const bcrypt = require('bcryptjs');

async function hashPassword(next) {
    const update = this.getUpdate?.() || this;  //object chaining operator (?.) with this there will not be error if there is no this.update()

    // Determine if we're dealing with a direct password update
    const password = update.password;
    const provider = update.provider || this.provider;

    if (provider === 'local' && password && typeof password === 'string') {
        const salt = await bcrypt.genSalt(10);
        update.password = await bcrypt.hash(password, salt);
        if (typeof this.set === 'function') {
            this.set(update); // ensure mongoose applies updated fields correctly
        }
    }
    next();
}

module.exports={
    hashPassword,
}