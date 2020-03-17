const Sequelize = require('sequelize');

const Todolist = new Sequelize('mysql://merci:merci2000@localhost/todo',{
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
}) 

module.exports = {
  Todolist // 将Todolist暴露出接口方便Model调用
}