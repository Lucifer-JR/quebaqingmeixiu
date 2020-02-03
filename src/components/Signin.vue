<template>
  <div class="signinbox" >
    <p class="welcome">欢迎登录青梅网<i class="iconfont iconmultiply" @click="closesignin"></i></p>
    <div class="signinput">
      <p>账号</p>
      <input type="text" placeholder="请输入邮箱或手机号" />
      <p>密码</p>
      <div class="passwordbox">
        <input type="password" id="password" placeholder="请输入密码" />
        <i class="iconfont iconeye_slash" id="passwordeye" @click="ifpassword"></i>
      </div>

      <input type="button" value="登录" id="signinbutton" />
      <div>
        <i class="iconfont iconQQfang"></i>
        <i class="iconfont iconweixinzhifu"></i>
        <span class="forgetpassword">忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signin",

  data() {
    return {
        
    }
  },
  methods: {
      ifpassword(){
          let  passworddom=document.getElementById("password");
          let  passwordi=document.getElementById("passwordeye");

          if(passworddom.type=="password"){
            passworddom.type="text";
            passwordi.className="iconfont iconeye"
          }
          else{
            passworddom.type="password"
            passwordi.className="iconfont iconeye_slash"
          }
      },
      closesignin(){
          this.$store.state.ifsignin=false;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconmultiply{
    position: absolute;
    top:8px;
    left: 10px;
    font-size: 30px;
    cursor: pointer;
    color: #2c3e50;
}
.passwordbox{
    position: relative;
}
#passwordeye{
    position: absolute;
    top:5px;
    right: 4px;font-size: 20px;
    cursor: pointer;
}
.signinbox {
  width: 400px;
  height: 400px;
  position: fixed;
  border-radius: 16px;
  margin: -200px 0 0 -200px;
  top: 50%;
  left: 50%;
  background: url("../../static/signin.jpg") no-repeat;
  background-size: 100%;
  box-shadow: 0px 0px 30px 0px black;
}
#signinbutton {
  width: 100px;
  cursor: pointer;
  height: 36px;
  border-radius: 2px;
  font-size: 26px;
  letter-spacing: 6px;
  color: #5d6146;
  line-height: 36px;
  font-family: cursive;
  margin: 34px auto 25px;
  background: #5d61464d;
  text-align: center;
  display: block;
}
#signinbutton:hover {
  background: #5d61468a;
  color: white;
}
.welcome {
  text-align: center;
  color: #908822;
  font-size: 32px;
  font-family: cursive;
  margin: 29px 0;
  letter-spacing: 2px;
}
.signinput {
  margin: 0 auto;
  width: 280px;
  height: 200px;
  /* background: salmon; */
}
.signinput p {
  color: #908822;
  font-size: 17px;
  margin: 30px 0 6px 0;
}
.signinput input {
  border: none;
  outline: none;
  background: #5d61462e;
  padding-left: 8px;
  border-radius: 2px;
  width: 100%;
  height: 32px;
}
.iconQQfang {
  font-size: 30px;
  cursor: pointer;
}
.iconweixinzhifu {
  font-size: 30px;
  cursor: pointer;
}
.forgetpassword{
    float: right;
    font-size: 18px;
    color: #5d6146;
    font-family: cursive;
    line-height: 32px;
    cursor: pointer;
}

</style>