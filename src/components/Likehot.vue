<template>
  <div>
    <img
      :src="this.CreateList[index1].ifLike ? '../../static/like_fill.png' : '../../static/like.png'"
      title="喜欢"
      @click="changeSrc1(index1)"
    />
    <div class="likeNumber">{{CreateList[index1].LikeNum}}</div>
    <img
      :src='this.CreateList[index1].ifUnlike ? "../../static/unlike_fill.png":"../../static/unlike.png"'
      title="不喜欢"
      @click="changeSrc2(index1)"
    />
    <div class="unlikeNumber">{{CreateList[index1].UnLikeNum}}</div>
    <img
      :src='this.CreateList[index1].ifCollect ? "../../static/star_fill.png":"../../static/star.png"'
      title="收藏"
      @click="changeSrc3(index1)"
    />
    <div class="unlikeNumber">{{CreateList[index1].CollectNum}}</div>
  </div>
</template>

<script>
export default {
  name: "Likehot",
  props: ["id"],
  data() {
    return {
      CreateList: this.$store.state.CreateList
    };
  },
  computed:{
    index1:function(){
      console.log(this.CreateList.findIndex(e=>e.id==this.id))
      return this.CreateList.findIndex(e=>e.id==this.id)
    }
  },
  methods: {
    changeSrc1(i) {
      if (this.CreateList[i].ifLike) {
        this.CreateList[i].LikeNum--;
      } else {
        this.CreateList[i].LikeNum++;
      }
      this.CreateList[i].ifLike = !this.CreateList[i].ifLike;
    },

    changeSrc2(i) {
      if (this.CreateList[i].ifUnlike) {
        this.CreateList[i].UnLikeNum--;
      } else {
        this.CreateList[i].UnLikeNum++;
      }
      this.CreateList[i].ifUnlike = !this.CreateList[i].ifUnlike;
    },

    changeSrc3(i) {
      if (this.CreateList[i].ifCollect) {
        this.CreateList[i].CollectNum--;
      } else {
        this.CreateList[i].CollectNum++;
      }
      this.CreateList[i].ifCollect = !this.CreateList[i].ifCollect;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
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