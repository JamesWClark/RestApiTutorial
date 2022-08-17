const bcrypt = require('bcrypt');
const config = require('config');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true }
    }, 
    {
        timestamps: true
    }
);

userSchema.pre("save", async function(next) {
    let user = this;

    if(!user.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(config.get('saltWorkFactor'));
    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
    const user = this;
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };