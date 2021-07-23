<template>
    <div class="login_container">
      <!--登录块-->
      <div class="login_box">
      <!--Login-->
        <div class="avatar_box">
          <img src="../assets/logo.png"/>
        </div>
        <!--表单区域-->
        <el-form ref="loginform" :rules="login_rules" :model="loginform" class="loginform" label-width="0">
        <!--用户名-->
          <el-form-item prop="username">
            <el-input v-model="loginform.username" prefix-icon="iconfont icon-user"></el-input>
          </el-form-item>
          <!--密码-->
          <el-form-item prop="password">
            <el-input v-model="loginform.password" prefix-icon="iconfont icon-mima" show-password></el-input>
          </el-form-item>
          <!--按钮-->
          <el-form-item class="butt">
            <el-button type="primary" round @click="login">提交</el-button>
<!--            <el-button type="success" round>注册</el-button>-->
            <el-button type="info" round @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
<!--    Login页面-->
</template>

<script>
export default {
  data(){
    return{
      //表单数据
      loginform:{
        username:"admin",
        password:"123456"
      },
      //验证对象
      login_rules:{
        //校验用户名
        username: [
          { required: true, message: '用户名必填', trigger: 'blur' },//必填项验证
          { min: 4, max: 12, message: '长度在 4 到 12 个字符', trigger: 'blur' }//长度校验
        ],
        //校验密码
        password: [
          { required: true, message: '密码必填', trigger: 'blur' },//必填项验证
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }//长度校验
        ]
      },
    }
  },
  methods: {
    //登陆事件
    login(){
      this.$refs.loginform.validate( async valid=>{
        console.log(valid)
        if (!valid) return;
        console.log(this.loginform);
        const {data:res} = await axios.post("api/login",this.loginform);
        // const {data:res} = await this.$http.get("api/test");
        console.log(res);
        if (res.code == "1"){
          window.sessionStorage.setItem("user",JSON.stringify(res.data));
          this.$message.success("操作成功！");//操作提示
          this.$router.push({path:'/home'});//页面跳转
        }
        else{
          this.$message.error("操作失败！");//失败提示
        }
      });
      console.log("success")
    },
    reset(){
      //重置表单内容
      this.$refs.loginform.resetFields();
      console.log("success")
    }
  }
}
</script>

<style>
.login_container{
  background-color: #0e0847;
  height: 100%;
}
.login_box{
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.avatar_box{
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 1px;
  box-shadow: 0 0 1px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #eee;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.butt{
  display: flex;
  justify-content: flex-end;
  /*right: 50%;*/
}
.loginform{
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
/*.el-image-viewer__img*/
</style>
