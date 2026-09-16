const bcrypt = require("bcryptjs")

const users = [
  {
    id: 1,
    name: "Jose",
    username: "jope",
    password: "$2b$10$03IX8vNyeMmWbzmU11gA.Oo0ksPKtguO8t5vityc4NV3maps8p2lO",
    premium: true,
    role: "user"
  },
    {
    id: 2,
    name: "Martin",
    username: "tincho",
    password: "$2b$10$03IX8vNyeMmWbzmU11gA.Oo0ksPKtguO8t5vityc4NV3maps8p2lO",
    premium: false,
    role: "admin"
  }
];

const getUsers = () => users;

const isValidPassword = async (password, userPassword) => {
  console.log(password);
  console.log(userPassword);
  
    const result = await bcrypt.compare(password, userPassword);
  console.log(result);

    return result;
}

const saveUser = async (name, username, password) => {
    const lastUser = users[users.length - 1];
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        name: name,
        username: username,
        password: hashedPassword,
        active: true,
    };
    if (lastUser) {
        newUser.id = lastUser.id + 1;
    } else {
        newUser.id = 1;
    }
    users.push(newUser);

    console.log(newUser);
    
    return newUser.id;
}


const findUserByUserName = (username) => {
  const user = users.find((u) => u.username == username);
  return user;
};

module.exports = {
    saveUser,
    findUserByUserName,
    isValidPassword
};
