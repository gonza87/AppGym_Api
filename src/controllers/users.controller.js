const { findUserByUserName } = require("../models/user.model");
//const jwt = require("jsonwebtoken");

const patchUserPremium = async (req, res) => {
    //const { body } = req;
    const { username} = req.user;
    console.log("test")
    console.log(username);
    const user = findUserByUserName(username);

    if (!user) {
         res.status(400).json({message: "Usuario no existente"});
        //res.status(400).json({message: "Credenciales invalidas"});
        return;
    }

    user.premium = true; 

  return res.status(200).json({ 
    mensaje: "Plan actualizado a Premium con éxito", 
    name: user.name,
    username: user.username,
    premium: user.premium,
     
  });

    }

    module.exports = {
        patchUserPremium
    };