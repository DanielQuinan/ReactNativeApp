const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
      const hash = await bcrypt.hash(this.password, 10);
      this.password = hash;
    }
    next();
});

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);