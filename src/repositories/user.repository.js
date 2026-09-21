const User = require("../models/user.model");
const bcrypt = require("bcryptjs")

const findUserByUsername = async (username) => {
    return await User.findOne({username:username});
}

const saveUser = async (name, username, password, telefono) => {
    console.log(name, username, password, telefono);
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        name: name,
        username: username,
        password: hashedPassword,
        telefono: telefono
    });
    console.log("new user", newUser);
    
    try {
        const res = await newUser.save();
        return res;

    } catch (error) {
        console.log("error", error);
        throw error;
    }
}





module.exports = {
    findUserByUsername,
    saveUser
    
}