<template>
  <div class="Classic">
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
              <a v-for="(item1,index) in item.b" href :key="index">{{item1}}</a>
            </div>
            <div class="typeunfold" @click="typeunfold($event,index)">
              <img src="../../static/down.png" class="typeunfoldimage" ref="down" />
              <img src="../../static/up.png" class="typeupimage" ref="up" />
            </div>
          </li>
        </ul>
        
        <ul class="create">
          <li v-for="(item,index) in CreateList" :key="index" class="classic">
            <div class="keywords">
              {{item.KeyWords}}
            </div>
            <div class="creator">
              {{item.Creator}}
            </div>
           
          </li>
        </ul>
      </div>
      <div class="right"></div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Classic',
  
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
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 1000px;
  margin: 60px auto;
  overflow: hidden;
}
.type {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
  padding: 10px 10px 0 10px;
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

.left {
  width: 650px;
  float: left;
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
.right {
  width: 300px;
  height: 800px;
  float: right;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
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

.typeLastStyle {
  border-bottom: none;
  height: 36px;
  overflow: hidden;
}
.classic{
  width: 100%;
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  box-sizing: border-box
}
.classic:hover{
  background: #d8ddf2
}
.keywords{
  float: left;
  font-size: 16px;
  cursor: pointer;
}
.creator{
  float: right;
  font-size: 14px;
  color:#908822;
}
.creator:hover{
  cursor: pointer;
}

</style>