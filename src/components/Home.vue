<template>
  <li class="content">
    <div class="recommend List">
      <div class="recomend Title">本周推荐</div>
      <div class="recomendcont" 
          v-for="(item) in this.$store.state.CreateList"
          :key="item.id"
          v-show="item.id==1">
          <!-- 上面写死作品的id值 -->
        <p>
          <a href="http://www.baidu.com" class="recomendname">{{item.Name}}</a>
          <span class="torecomend" @click="torecomend">我要推荐</span>
        </p>
        <p>
          <a href="http://www.baidu.com" class="recomendwriter">{{item.CreateTime}}</a>
          <span>:</span>
          <a href="http://www.baidu.com" class="recomendwriter">{{item.Creator}}</a>
        </p>
        <p class="recomendtext">{{item.Content}}<Likehot :id="item.id"  class="recomendindex" />
        </p>
        <p class="recomendReason">推荐人：Lucifer</p>
        <p class="recomendReason">推荐理由：仅仅最后一句“和羞走，倚门回首，却把青梅嗅”就让人想起那时年少，青春羞涩，回味无穷</p>
      </div>
    </div>

    <div class="poetryList List">
      <div class="Title">诗歌榜单</div>
      <ul class="poetryCont" ref="poetryCont">
        <li
          v-for="(item,index) in this.$store.state.CreateList"
          style="position: relative"
          :key="item.id"
          v-show="item.type=='writing'"
        >
          <span class="ranking">{{index+1}}.</span>
          <a href="http://www.baidu.com" class="recomendname">{{item.Name}}</a>
          ——
          <a href="http://www.baidu.com" class="recomendwriter">{{item.Creator}}</a>
          <br />
          <p class="poetryContent">{{item.KeyWords}}</p>

          <Likehot :id="item.id"   class="LikehotinHome" />
        </li>
      </ul>

      <Unfold v-on:func="getHeight" />
    </div>

    <div class="movieList List">
      <div class="Title">电影榜单</div>
      <ul class="poetryCont" ref="poetryCont">
        <li
          v-for="(item,index) in this.$store.state.CreateList"
          style="position:relative"
          :key="item.id"
          v-show="item.type=='film'"
        >
          <span class="ranking">{{index-3}}</span>
          <a href="http://www.baidu.com" class="recomendname">{{item.Name}}</a>——
          <a href="http://www.baidu.com" class="recomendwriter">{{item.Creator}}</a>
          <br />
          <p class="poetryContent">{{item.KeyWords}}</p>

          <Likehot :id="item.id"  class="LikehotinHome" />
        </li>
      </ul>

      <Unfold v-on:func="getHeight($event)" />
    </div>

    <div class="musicList List">
      <div class="Title">音乐榜单</div>
      <ul class="poetryCont" ref="poetryCont">
        <li
          v-for="(item,index) in this.$store.state.CreateList"
          :key="item.id"
          style="position:relative"
          v-show="item.type=='music'"
        >
          <span class="ranking">{{index-6}}</span>
          <a href="http://www.baidu.com" class="recomendname">{{item.Name}}</a>——
          <a href="http://www.baidu.com" class="recomendwriter">{{item.Creator}}</a>
          <br />
          <p class="poetryContent">{{item.KeyWords}}</p>

          <Likehot :id="item.id"  class="LikehotinHome" />
        </li>
      </ul>

      <Unfold v-on:func="getHeight(event)" />
    </div>

  </li>
</template>

<script>
import Likehot from "./Likehot";
import Unfold from "./Unfold";
export default {
  name: "Home",
  watch() {
    this.$store.state.CreateList=this.$store.state.CreateList.sort((a, b) => {
      return (b.LikeNum - b.UnLikeNum * 3) - (a.LikeNum - a.UnLikeNum * 3);
    });
    //根据用户喜欢数和不喜欢数对作品进行排序
  },
  components: {
    Likehot,
    Unfold
  },
  
  methods: {
    torecomend(){
      this.$store.state.iftorecomend=true;
    },
    getHeight(e) {
      if (true) {
        console.log(event)
        // console.log(e.target.previousSibling.className)
        // this.$refs.poetryCont.style.height="auto"
      } else {
        // this.$refs.poetryCont.style.height="228px"
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.recomendindex{
  float: right;
}
.torecomend{
  float: right;
  font-size: 19px;
  color: #908822;
  text-align: center;
  line-height: 30px;
  font-family: cursive;
  border-radius: 2px;
  display: block;
  width: 100px;
  height: 30px;
}
.torecomend:hover{
  background: #5d6146;color: white;
  cursor: pointer;
}
.LikehotinHome {
  overflow: hidden;
  padding-left: 20px;
  position: absolute;
  top: 40px;
  left: 720px;
}

.ranking {
  font-size: 20px;
  font-weight: bold;
}

.content {
  width: 1000px;
  margin: 60px auto;
  overflow: hidden;
}

.List {
  background: #f0efe2;
  margin-bottom: 60px;
  border: 1px solid #c8c7bc;
}

.recomendcont > p {
  margin-bottom: 20px;
}

.Title {
  width: 100%;
  height: 76px;
  line-height: 76px;
  font-size: 30px;
  font-weight: 500;
  color: rgb(28, 28, 28);
  text-align: center;
  cursor: pointer;
}

.recomendname {
  font-size: 18px;
  color: #19537d;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.recomendname:hover {
  text-decoration: underline;
}

.recomendwriter {
  cursor: pointer;
  font-size: 15px;
  color: #5d6146;
  text-decoration: none;
}

.recomendwriter:hover {
  text-decoration: underline;
}

.recomendtext {
  line-height: 200%;
  white-space: pre-line;
  font-size: 20px;
}

.recomendReason {
  font-size: 18px;
  color: #908822;
}

.poetryCont {
  height: 228px;
  overflow: hidden;
}

.poetryCont li {
  padding: 7px 20px 0 20px;
}

.poetryCont li:hover {
  background: #d8ddf2;
}

.poetryContent {
  text-indent: 21px;
  font-size: 18px;
  line-height: 45px;
  color: #373835;
}

.recomendcont {
  padding: 0 20px;
}
</style>