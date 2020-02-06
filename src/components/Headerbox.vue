<template>
  <div class="headerbox">
    <header>
      <ul class="header-left">
        <li v-for="(item,index) in items" :key="index" @click="goto(item.path)">
          {{item.name}}
        </li>
      </ul>

      <ul class="header-right">
        <li @click="ifSignup">注册</li>
        <li @click="ifSignin">登陆</li>
      </ul>

      <div class="searchbox">
        <div class="searchtype">
          <p id="searchtype">
            <span>全部</span>
            <i class="iconfont iconchevron_down"></i>
          </p>

          <ul class="searchtypeul">
            <li
              class="searchtypeli"
              v-for="(item,index) in type"
              :key="index"
              @click="tabtype(item,index)"
            >{{item}}</li>
          </ul>
        </div>
        <input type="text" class="search" placeholder="请输入关键词"/>
        <div class="searchbutton">
          <i class="iconfont iconsearch"></i>
        </div>
      </div>
      <div class="data">
        <i class="iconfont iconthermometer_sun">37°C</i>
        <i class="iconfont iconcloud_sun"></i>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Headerbox",
  data() {
    return {
      items: [
        {
          name: "首页",
          path: "/Home"
        },
        {
          name: "作品",
          path: "/Works"
        },
        {
          name: "名句",
          path: "/Classic"
        },
        {
          name: "作者",
          path: "/Creator"
        },
        {
          name: "我的",
          path: "/Mine"
        }
      ],
      type: ["全部", "诗歌", "文章", "宋词","作者"]
    };
  },

  methods: {
    goto(p){
      this.$router.push({path:p})
    },
    tabtype(item,index) {
      let a = document.getElementById("searchtype").getElementsByTagName("span")[0];
      a.innerText=item;
    },
    ifSignin() {
      this.$store.state.ifsignin = true;
    },
    ifSignup() {
      this.$store.state.ifsignup = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconcloud_sun{
  font-size:23px;
}
.iconthermometer_sun{
  font-size: 17px;
}
.data{
  float: right;
  height: 60px;
  line-height:60px;
  margin:0 18px 0 0;
  color: white;

}
.searchtypeul {
  display: none;
  width: 100px;
  margin: 1px 0 0 -22px;
  border: solid 1px #c8c7bc;
  border-radius: 2px;
}

.searchtypeul > li {
  height: 36px;
  background: white;
  border-bottom: solid 1px #c8c7bc;
  font-size: 15px;
  text-align: center;
  color: black;
  line-height: 36px;
}
.searchtypeul > li:hover {
  background: #d8ddf2;
  color: #097bfb;
}
.searchtype > p {
  line-height: 30px;
  font-size: 15px;
  text-align: center;
}
.searchtype:hover .searchtypeul {
  display: block;
}
.searchtype {
  width: 65px;
  float: left;
  height: 30px;
  cursor: pointer;
}

.iconsearch {
  font-size: 22px;
  line-height: 18px;
}
.headerbox {
  width: 100%;
  background: #5d6146;
  position: fixed;
  top:0;left: 0;
  z-index: 3;
  height: 60px;
}

header {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  font-size: 17px;
}
header li{
  color: white;
   line-height: 60px;
   padding: 0 20px 0 20px;
   cursor: pointer;
}
.header-left li {
  float: left;
}

.header-right li {
  float: right;
}

header li:hover {
  background: #373835;
}

.searchbox {
  float: right;
  position: relative;
  margin: 16px 5px 0 0;
  padding: 0 30px 0 10px;
  height: 30px;
  border-radius: 30px;
  background: white;
}

.search {
  border: none;
  outline: none;
  font-size: 14px;
  height: 30px;
  width: 130px;
}

.searchbutton {
  position: absolute;
  width: 19px;
  height: 19px;
  top: 6px;
  right: 9px;
  cursor: pointer;
  background: url("/assets/spirit.png") -115px -45px no-repeat;
}
</style>