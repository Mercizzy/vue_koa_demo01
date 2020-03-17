const db = require('../moudle/db');
const userModel = '../schema/user';

const TodoListDb = db.Todolist;

const User = TodoListDb.import(userModel);

// console.log(TodoListDb);


const getUserById = async(id)=> {
  const userInfo = await User.findOne({
    where: {
      id: id
    }
  });

  return userInfo;
}

const getUserByName = async(name)=> {
  const userInfo = await User.findOne({
    where: {
      username: name
    }
  });

  return userInfo
}

module.exports = {
  getUserById,
  getUserByName
}