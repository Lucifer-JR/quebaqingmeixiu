<template>
  <div class="Mine">
    <li class="content">
      <div class="left">
        <ul class="type">
          <div style="overflow:hidden">
            <div class="headportrait">
              <img src="../../static/liqingzhao.jpg" alt />
            </div>
            <div class="usermain">
              <li class="username">李清照</li>
              <li class="birthday">
                生日&nbsp;&nbsp;
                <span>12-4</span>
              </li>
              <li class="sex">
                性别&nbsp;&nbsp;
                <span>男</span>
              </li>
              <li class="habitation">
                邮箱&nbsp;&nbsp;
                <span>1091564315@qq.com</span>
              </li>
            </div>
            <div class="signature">
              <div class="signaturetop">
                <div class="signature-left"></div>
                <div class="signaturetop-right">
                  <span @click="editsignature">
                    <i class="iconfont iconsquare_pencil"></i>编辑
                  </span>
                </div>
              </div>
              <div class="signaturecont">
                <div id="signaturemain" v-show="ifsignature">{{signature}}</div>
                <textarea id="signaturemain1" v-show="!ifsignature" :value="signature" wrap="soft"></textarea>
                <button @click="keepsignature" v-show="!ifsignature">保存</button>
                <button @click="editsignature" v-show="!ifsignature">取消</button>
              </div>
            </div>
          </div>

          <div class="mineworks">
            
          </div>
          
        </ul>
        <div class="create">
            <h3>我的作品</h3>
            <div class="mineworklist"
            v-for="(item,index) in CreateList" 
            :key="index">
              <p class="minename">{{item.Name}}</p>
              <p class="minekeywords">{{item.KeyWords}}</p>
              <Likehot :index="index" :CreateList="CreateList" class="LikehotinHome" />
            </div>
        </div>
        <ul class="create">
          <h3>我的收藏</h3>
           <div class="mineworklist"
            v-for="(item,index) in CreateList" 
            :key="index">
              <p class="minename">{{item.Name}}</p>
              <p class="minekeywords">{{item.KeyWords}}</p>
              <Likehot :index="index" :CreateList="CreateList" class="LikehotinHome" />
            </div>
        </ul>
      </div>
      <div class="right"></div>
      
    </li>
  </div>
</template>

<script>
import Likehot from "./Likehot";


export default {
  name: "Mine",
  components:{
    Likehot,
   
  },
  data() {
    return {
      ifsignature: true,

      signature: "一壶浊酒喜相逢"+"\n"+"古今多少事"+"\n"+"都付笑谈中",
      CreateList: [
        {
          id: 1,
          type: "writing",
          ifLike: true,
          Value: 0,
          ifannotation: false,
          LikeNum: 2000,
          UnLikeNum: 3,
          CollectNum: 5,
          Name: "寒雪",
          CreateTime: "现代",
          Creator: "蝶",
          KeyWords: "初识笑声今犹在，相顾无言陌路人",
          Content:
            "门外足迹悄无声，雪落满庭空留影" +
            "\n" +
            "初识笑声今犹在，相顾无言陌路人",
          Annotation:
            "蹴：踏。此处指打秋千。慵：懒，倦怠的样子。" +
            "\n" +
            "袜刬：这里指跑掉鞋子以袜着地。金钗溜：意谓快跑时首饰从头上掉下来。" +
            "\n" +
            "倚门回首：这里只是靠着门回头看的意思。"
        },
         {
          id: 1,
          type: "writing",
          ifLike: true,
          Value: 0,
          ifannotation: false,
          LikeNum: 2000,
          UnLikeNum: 3,
          CollectNum: 5,
          Name: "雪",
          CreateTime: "现代",
          Creator: "蝶",
          KeyWords: "初识笑声今犹，相顾无言陌路",
          Content:
            "门外足迹悄无声，雪落满庭空留影" +
            "\n" +
            "初识笑声今犹在，相顾无言陌路人",
          Annotation:
            "蹴：踏。此处指打秋千。慵：懒，倦怠的样子。" +
            "\n" +
            "袜刬：这里指跑掉鞋子以袜着地。金钗溜：意谓快跑时首饰从头上掉下来。" +
            "\n" +
            "倚门回首：这里只是靠着门回头看的意思。"
        },
         {
          id: 1,
          type: "writing",
          ifLike: true,
          Value: 0,
          ifannotation: false,
          LikeNum: 2000,
          UnLikeNum: 3,
          CollectNum: 5,
          Name: "寒雪",
          CreateTime: "现代",
          Creator: "蝶",
          KeyWords: "初识笑声今犹在，相顾无言陌路人",
          Content:
            "门外足迹悄无声，雪落满庭空留影" +
            "\n" +
            "初识笑声今犹在，相顾无言陌路人",
          Annotation:
            "蹴：踏。此处指打秋千。慵：懒，倦怠的样子。" +
            "\n" +
            "袜刬：这里指跑掉鞋子以袜着地。金钗溜：意谓快跑时首饰从头上掉下来。" +
            "\n" +
            "倚门回首：这里只是靠着门回头看的意思。"
        },
         {
          id: 1,
          type: "writing",
          ifLike: true,
          Value: 0,
          ifannotation: false,
          LikeNum: 2000,
          UnLikeNum: 3,
          CollectNum: 5,
          Name: "寒雪",
          CreateTime: "现代",
          Creator: "蝶",
          KeyWords: "初识笑声今犹在，相顾无言陌路人",
          Content:
            "门外足迹悄无声，雪落满庭空留影" +
            "\n" +
            "初识笑声今犹在，相顾无言陌路人",
          Annotation:
            "蹴：踏。此处指打秋千。慵：懒，倦怠的样子。" +
            "\n" +
            "袜刬：这里指跑掉鞋子以袜着地。金钗溜：意谓快跑时首饰从头上掉下来。" +
            "\n" +
            "倚门回首：这里只是靠着门回头看的意思。"
        },
      ]
    };
  },

  methods: {
    editsignature() {
      this.ifsignature = !this.ifsignature;
      this.signature=this.signature.replace(/<br\/>/g,"\n")
    },
    keepsignature() {
      this.ifsignature = !this.ifsignature;
      let a = document.getElementById("signaturemain1").value;
      let cont=a.replace(/\n/g,'<br/>');
      document.getElementById("signaturemain").innerHTML=cont;
      this.signature=cont;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.LikehotinHome {
  padding-left: 20px;
  float: right;
  margin-top: -10px
}
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
  padding: 16px;
  overflow: hidden;
}
.type {
  width: 100%;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
  padding: 16px;
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
.headportrait {
  float: left;
  margin: 0 15px 0 0;
}
.headportrait img {
  width: 120px;
  height: 170px;
}
.usermain .username {
  font-size: 30px;
  line-height: 40px;
  height: 40px;
  color: #0e87a2;
  margin: 0;
}
.usermain {
  float: left;
}
.usermain li {
  line-height: 23px;
  font-size: 16px;
  height: 20px;
  margin-top: 24px;
}
.usermain li span {
  font-size: 15px;
  color: #908822;
}
.signature {
  float: right;
  width: 270px;
  height: 170px;
  /* border:1px solid #BCE8F1; */
  background: #e1e0c7;
}
.signaturetop {
  height: 33px;
  background: rgba(200, 199, 165, 0.59);
  font-size: 12px;
  padding: 0 10px;
}
.signaturetop-right {
  float: right;
  height: 33px;
  line-height: 33px;
}
.signaturetop span {
  border-radius: 2px;
  line-height: 2;
  padding: 3px 6px;
  cursor: pointer;
  /* background: white */
}
.iconsquare_pencil {
  margin: 0 1px 0 0;
}
.signaturetop span:hover {
  background: #fcf8e3;
  color: #8a6d3b;
}
.signaturecont {
  padding: 10px 10px;
}
.signature-left {
  float: left;
  height: 33px;
  line-height: 33px;
}
#signaturemain{
  white-space: pre-line;
  font-size: 16px;
  line-height: 22px;

}
#signaturemain1 {
  height: 80px;
  width: 288px;
  padding: 5px;
  font-size: 14px;
}
.signaturecont button {
  float: right;
  margin: 0 0 0 5px;
}

.minename{
  /* float: left; */
  color: #19537d;
  font-weight:bold;
  font-size: 18px;
}
.mineworklist{
  height: 50px;
  margin-top: 14px;
}
.minekeywords{
  float: left;
}
</style>