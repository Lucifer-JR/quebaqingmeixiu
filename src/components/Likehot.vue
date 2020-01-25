<template>
  <div>
    <img src="../../static/like.png" title="喜欢" class="like" @click="changeSrc1($event,index)" />
    <div class="likeNumber">{{this.CreateList[index].LikeNum}}</div>
    <img src="../../static/unlike.png" title="不喜欢" class="like" @click="changeSrc2($event,index)" />
    <div class="unlikeNumber">{{this.CreateList[index].UnLikeNum}}</div>
    <img src="../../static/star.png" title="收藏" class="like" @click="changeSrc3($event,index)" />
    <div class="unlikeNumber">{{this.CreateList[index].CollectNum}}</div>
  </div>
</template>

<script>
export default {
  name: "Likehot",
  props: ["index", "CreateList"],
  data() {
    return {};
  },
  methods: {
    changeSrc1(e, i) {
      if (this.CreateList[i].ifLike) {
        e.target.src = "../../static/like_fill.png";
        this.CreateList[i].LikeNum++;
      } else {
        e.target.src = "../../static/like.png";
        this.CreateList[i].LikeNum--;
      }
      this.CreateList[i].ifLike = !this.CreateList[i].ifLike
    },

    changeSrc2(e, i) {
      if (this.CreateList[i].ifLike) {
        e.target.src = "../../static/unlike_fill.png";
        this.CreateList[i].UnLikeNum++;
      } else {
        e.target.src = "../../static/unlike.png";
        this.CreateList[i].UnLikeNum--;
      }
      this.CreateList[i].ifLike = !this.CreateList[i].ifLike;
      
    },

    changeSrc3(e, i) {
      if (this.CreateList[i].ifLike) {
        e.target.src = "../../static/star_fill.png";
        this.CreateList[i].CollectNum++;
      } else {
        e.target.src = "../../static/star.png";
        this.CreateList[i].CollectNum--;
      }
      this.CreateList[i].ifLike = !this.CreateList[i].ifLike;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.like {
  width: 27px;
  height: 26px;
  cursor: pointer;
  margin: 0 6px 0px 0px;
  float: left;
}
.likeNumber {
  width: 20px;
  margin-right: 18px;
  font-size: 13px;
  color: #515151;
  float: left;
  line-height: 37px;
}

.unlikeNumber {
  width: 20px;
  margin-right: 18px;
  font-size: 13px;
  color: #515151;
  float: left;
  line-height: 37px;
}
</style>