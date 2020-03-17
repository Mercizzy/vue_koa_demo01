<template>
  <div class="login">
    <div class="middle">
      <el-input placeholder="account" v-model="account"></el-input> <br />
      <el-input placeholder="password" v-model="password"></el-input> <br />
      <el-button type="primary" @click="goTodo">
        login
      </el-button>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    goTodo() {
      // let obj = {
      //   name: this.account,
      //   password: this.password
      // } 
      // this.$http.post('/auth/user', obj) // 将信息发送给后端
      //   .then((res) => { // axios返回的数据都在res.data里
      //     if(res.data.success){ // 如果成功
      //       // sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
      //       this.$message({ // 登录成功，显示提示语
      //         type: 'success',
      //         message: '登录成功！'
      //       }); 
      //       this.$router.push({
      //         name: 'todoList'
      //       }) // 进入todolist页面，登录成功
      //     }else{
      //       this.$message.error(res.data.info); // 登录失败，显示提示语
      //       // sessionStorage.setItem('demo-token',null); // 将token清空
      //     }
      //   }, (err) => {
      //       this.$message.error('请求错误!'+err)
      //       // sessionStorage.setItem('demo-token',null); // 将token清空
      //   })
    
      let params = {
        url: "/auth/user",
        method: "post",
        isForm: true,
        body: {
          name: this.account,
          password: this.password
        },
      };
      this.http(params).then(
        res => {
          // console.log('res'+res)
          if(res.success){ // 如果成功
            // sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
            this.$message({ // 登录成功，显示提示语
              type: 'success',
              message: '登录成功！'
            }); 
            this.$router.push({
              name: 'todoList'
            }) // 进入todolist页面，登录成功
          }else{
            this.$message.error(res.info); // 登录失败，显示提示语
            // sessionStorage.setItem('demo-token',null); // 将token清空
          }
        },
        error => {
          console.log('error'+error)
          this.$message.error('请求错误!'+error)
          // sessionStorage.setItem('demo-token',null); // 将token清空
        }
      );
      
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;

  .middle {
    height: 400px;
    width: 200px;
  }
}
</style>