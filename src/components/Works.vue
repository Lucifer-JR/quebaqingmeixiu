<template>
  <div class="Works">
    <li class="content">
      <div class="left">
        <ul class="type">
          <li class="typetitle type1">不限</li>
          <li
            id="typetype"
            v-for="(item,index) in typeList"
            class="type1"
            :class="{typeLastStyle:index === typeList.length -1}"
            :key="index"
          >
            <div class="type-a">{{item.a}}</div>
            <div class="type-b">
              <a v-for="(item1,index) in item.b"  :key="index">{{item1}}</a>
            </div>
            <div class="typeunfold" @click="typeunfold($event,index)">
              <img src="../../static/down.png" class="typeunfoldimage" ref="down" />
              <img src="../../static/up.png" class="typeupimage" ref="up" />
            </div>
          </li>
        </ul>

        <ul class="create" v-for="(item,index) in CreateList" :key="index">
          <li style="margin-bottom: 16px">
            <a href class="createName">{{item.Name}}</a>
            <div class="annotationIcon" @click="annotationClick($event,index)">注</div>
          </li>

          <li>
            <a href class="creator">{{item.CreateTime}}</a>
            <span>:</span>
            <a href class="creator">{{item.Creator}}</a>
          </li>
          <li class="createContent">{{item.Content}}</li>

          <li class="annotation" v-show="item.ifannotation">{{item.Annotation}}</li>

          <Likehot :index="index"  class="LikehotinWorks" />
        </ul>
      </div>

      <div class="right"></div>
    </li>
  </div>
</template>

<script>
import Likehot from "./Likehot";

export default {
  name: "Works",
  created() {
    this.CreateList = this.CreateList.sort((a, b) => {
      return b.LikeNum - b.UnLikeNum * 3 - (a.LikeNum - a.UnLikeNum * 3);   
    });
    //根据用户喜欢数和不喜欢数对作品进行排序
  },
  components: {
    Likehot
  },
  data() {
    return {
      CreateList:this.$store.state.CreateList,
      typeList: [
        {
          a: "类型：",
          b: [
            "春天",
            "夏天",
            "秋天",
            "写物",
            "抒情",
            "雪",
            "酒",
            "梅",
            "花",
            "荷花",
            "节日",
            "田园",
            "婉约",
            "豪放",
            "离别"
          ]
        },
        {
          a: "作者：",
          b: [
            "王维",
            "苏轼",
            "白居易",
            "李清照",
            "刘禹锡",
            "纳兰性德",
            "辛弃疾",
            "陆游",
            "李白",
            "杜甫",
            "曹操",
            "杜牧",
            "李煜",
            "欧阳修",
            "陶渊明"
          ]
        },
        {
          a: "朝代：",
          b: [
            "唐朝之前",
            "唐朝",
            "宋朝",
            "元代",
            "明朝",
            "清朝",
            "近现代",
            "现代"
          ]
        },
        { a: "形式：", b: ["诗", "词", "文言文", "散文", "电影", "歌曲"] }
      ],

     
    };
  },
  methods: {
    annotationClick(e, i) {
      if (e.target.style.color === "white") {
        e.target.style.background = "#F0EFE2";
        e.target.style.color = "#9a9a96";
        this.CreateList[i].ifannotation = false;
      } else {
        e.target.style.background = "#9a9a96";
        e.target.style.color = "white";
        this.CreateList[i].ifannotation = true;
      }
    },
    typeunfold(e, i) {
      if (e.target.parentNode.parentNode.style.height < "37px") {
        e.target.parentNode.parentNode.style.overflow = "visable";
        e.target.parentNode.parentNode.style.height = "auto";
        this.$refs.down[i].style.display = "none";
        this.$refs.up[i].style.display = "block";
      } else {
        e.target.parentNode.parentNode.style.overflow = "hidden";
        e.target.parentNode.parentNode.style.height = "36px";
        this.$refs.up[i].style.display = "none";
        this.$refs.down[i].style.display = "block";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.LikehotinWorks {
  overflow: hidden;
}
.type-a {
  float: left;
  font-size: 14px;
  color: #505063;
  font-weight: 200;
  margin-right: 8px;
  line-height: 36px;
}
.type1 {
  border-bottom: solid 1px #c8c7bc;
  height: 36px;
  overflow: hidden;
}
.type-b {
  float: left;
  width: 546px;
}
.type-b > a {
  margin-right: 16px;
  text-decoration: none;
  float: left;
  line-height: 36px;
  font-size: 14px;
  font-weight: 200;
  color: #13227a;
}

.type-b > a:hover {
  text-decoration: underline;
}
.creator {
  cursor: pointer;
  font-size: 15px;
  color: #5d6146;
  text-decoration: none;
}
.creator:hover {
  text-decoration: underline;
}
.content {
  width: 1000px;
  margin: 60px auto;
  overflow: hidden;
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
.type {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
  padding: 10px 10px 0 10px;
}
.create {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  margin-top: 30px;
  background: #f0efe2;
  padding: 16px;
}

.typeunfold {
  float: right;
  width: 16px;
  height: 18px;
  margin: 10px 6px 0px 0px;
}

.typeunfoldimage {
  width: 16px;
  height: 18px;
  cursor: pointer;
}

.typeupimage {
  display: none;
  cursor: pointer;
}
.createName {
  color: #19537d;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 13px;
  cursor: pointer;
  text-decoration: none;
}

.createName:hover {
  text-decoration: underline;
}
.typeLastStyle {
  border-bottom: none;
  height: 36px;
  overflow: hidden;
}
.createContent {
  margin-top: 20px;
  white-space: pre-line;
  font-size: 18px;
  color: #373835;
  line-height: 40px;
  margin: 16px 0 16px;
}
.annotationIcon {
  float: right;
  width: 26px;
  height: 26px;
  border: 2px solid #9a9a96;
  border-radius: 26px;
  font-size: 19px;
  text-align: center;
  color: #9a9a96;
  font-weight: bold;
  line-height: 25px;
  font-family: "KaiTi";
  cursor: pointer;
  background: #f0efe2;
}
.annotation {
  color: #908822;
  font-size: 16px;
  line-height: 30px;
  white-space: pre-line;
  margin: -14px 0 10px 0;
}
</style>