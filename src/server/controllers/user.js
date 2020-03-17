const user = require('../models/user');
const jwt = require('koa-jwt');

const getUserInfo = async(ctx)=> {
  const id = ctx.params.id;
  const result = await user.getUserById(id);
  this.body = result;
}

const postUserAuth = async(ctx)=>{
  const data = ctx.request.body; // post过来的数据存在request.body里
  // console.log('data.name'+ data.name);
  const userInfo = await user.getUserByName(data.name);
  

  if(userInfo != null){ // 如果查无此用户会返回null
    // console.log('userInfo'+ userInfo);
    if(userInfo.password != data.password){
      ctx.body = {
        code: 200,
        success: false, // success标志位是方便前端判断返回是正确与否
        info: '密码错误！'
      }
    }else{ // 如果密码正确
      // const userToken = {
      //   name: userInfo.user_name,
      //   id: userInfo.id
      // }
      // const secret = 'vue-koa-demo'; // 指定密钥，这是之后用来判断token合法性的标志
      // const token = jwt.sign(userToken,secret); // 签发token
      console.log('密码正确')
      ctx.body = {
        code: 200,
        success: true,
        // token: token, // 返回token
      }
    }
  }else{
    
    ctx.body = {
      success: false,
      info: '用户不存在！' // 如果用户不存在返回用户不存在
    }
  }
}

module.exports = {
  getUserInfo,
  postUserAuth
}