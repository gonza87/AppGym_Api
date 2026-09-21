const { findUserByUsername } = require("../repositories/user.repository");
//const jwt = require("jsonwebtoken");

const patchUserPremium = async (req, res) => {
  //const { body } = req;
  const { username } = req.user;

  console.log("test");
  console.log(username);
  const user = await findUserByUsername(username);

  if (!user) {
    res.status(400).json({ message: "Usuario no existente" });
    //res.status(400).json({message: "Credenciales invalidas"});
    return;
  }

  try {
    user.premium = true;
    await user.save();
    return res.status(200).json({
      message: "Usuario actualizado a premium con éxito",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Ha ocurrido un error: ", error });
  }
};

module.exports = {
  patchUserPremium,
};
