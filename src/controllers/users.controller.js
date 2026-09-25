const { findUserByUsername } = require("../repositories/user.repository");
//const jwt = require("jsonwebtoken");

const patchUserPremium = async (req, res) => {
  //const { body } = req;
  const { username } = req.user;

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      res.status(400).json({ message: "Usuario no existente" });
      return;
    }

    user.premium = true;
    await user.save();
    return res.status(200).json({
      message: "Usuario actualizado a premium con éxito",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el usuario.", error: error.message });
  }
};

module.exports = {
  patchUserPremium,
};
