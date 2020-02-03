<template>
  <div class="signinbox" >
    <p class="welcome">
      欢迎加入青梅网
      <i class="iconfont iconmultiply" @click="closesignin"></i>
    </p>
    <div class="signinput">
      <div class="left">
        <p>手机号</p>
        <input type="text" placeholder="请输入手机号" />
       
        <p>密码</p>
        <div class="passwordbox">
          <input type="password" id="password1" placeholder="请输入密码" />
          <i class="iconfont iconeye_slash" id="passwordeye1" @click="ifpassword"></i>
        </div>
      </div>
      <div class="right">
        <p @click="verification" class="verification">获取验证码</p>
        <input type="text" placeholder="请输入验证码" />
         <p>邮箱</p>
        <input type="text" placeholder="请输入邮箱" />
      </div>
    </div>
    <div class="agreement">
        <input type="checkbox">我同意<a href="">青梅网用户服务协议</a>及<a href="">
            知识产权声明及隐私权政策
        </a>
    </div>
    <input type="button" value="注册" id="signinbutton1" />
  </div>
</template>

<script>
export default {
  name: "Signup",

  data() {
    return {
      
    };
  },
  methods: {
      verification(){

      },
    ifpassword() {
      let passworddom = document.getElementById("password1");
      let passwordi = document.getElementById("passwordeye1");

      if (passworddom.type == "password") {
        passworddom.type = "text";
        passwordi.className = "iconfont iconeye";
      } else {
        passworddom.type = "password";
        passwordi.className = "iconfont iconeye_slash";
      }
    },
    closesignin() {
      this.$store.state.ifsignup=false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agreement{
    width: 428px;
    margin: 30px auto 0;
    display: flex;justify-content: space-around;align-items: center;
    
}
.agreement input{
    width: 17px;
    height: 17px;
    cursor: pointer;
}
.agreement a{
    text-decoration: none;
    color: #165aa6
}
.verification{
    cursor: pointer;
}
.left {
  float: left;
  margin: 0 40px 0 0;
}
.right {
  float: left;
}
.iconmultiply {
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
  color: #2c3e50;
}
.passwordbox {
  position: relative;
}
#passwordeye1 {
  position: absolute;
  top: 5px;
  right: 4px;
  font-size: 20px;
  cursor: pointer;
}
.signinbox {
  width: 700px;
  height: 430px;
  position: fixed;
  border-radius: 16px;
  margin: -215px 0 0 -350px;
  top: 50%;
  left: 50%;
  background: url("../../static/signup.jpg") no-repeat;
  background-size: 100%;
  box-shadow: 0px 0px 30px 0px black;
}
#signinbutton1 {
  border: none;
  outline: none;
  padding-left: 8px;
  border-radius: 2px;
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
#signinbutton1:hover {
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
  width: 456px;
  overflow: hidden;
}
.signinput p {
  color: #908822;
  font-size: 17px;
  margin: 20px 0 4px 0;
}
.signinput input {
  border: none;
  outline: none;
  background: #5d61462e;
  padding-left: 8px;
  border-radius: 2px;
  width: 200px;
  height: 32px;
}
</style>