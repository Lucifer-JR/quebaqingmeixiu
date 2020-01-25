<template>
  <div class="Mine">
    <li class="content">
      <div class="left">
        <ul class="type">
          <div class="headportrait">
            <img src="../../static/liqingzhao.jpg" alt="">
          </div>
          <div class="usermain">
            <li class="username">Lucifer</li>
            <li class="birthday">生日<br/> <span>12-4</span></li>
            <li class="sex">性别<br/><span>男</span></li>
            <li class="habitation">星座<br/><span>射手</span></li>
          </div>
          <div class="signature">
            <div class="signaturetop"><img src="../../static/square_pencil.png">编辑</div>
            希望大家多多指教
          </div>
        </ul>
        <ul class="create">
         
        </ul>
      </div>
      <div class="right"></div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Mine'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 1000px;
  margin: 60px auto;
  overflow: hidden;
}
.create {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  margin-top: 30px;
  background: #f0efe2;
  overflow: hidden;
}
.type {
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
  padding: 10px 10px 0 10px;
}
.left {
  width: 650px;
  float: left;
}
.right {
  width: 300px;
  height: 800px;
  float: right;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
}
.headportrait{
  float: left;
  margin: 0 15px 0 0;
}
.headportrait img{
  width: 120px;
  height: 170px;
}
.usermain .username{
  font-size: 20px;
  /* font-weight: bold; */
  color: #0e87a2;
  margin:5px 0 5px 0; 
}
.usermain{
  float: left;
}
.usermain li{
  line-height: 23px;
  font-size: 16px;
}
.usermain li span{
  font-size: 15px;
  color: #8ba59c
}
.signature{
  float: right;
  width: 300px;
  height: 170px;
  /* border:1px solid #BCE8F1; */
  background: #D9EDF7
}
.signaturetop{
  height: 33px;
  background: #cfcedaba;
  padding: 0 20px;
  line-height: 33px;
}
</style>