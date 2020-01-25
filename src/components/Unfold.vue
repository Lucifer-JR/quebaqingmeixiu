<template>
  <div class="unfold" @click="unfold">
    {{Unfold}}
    <img :src='(this.ifunfold==true) ? "../../static/down.png":"../../static/up.png"' class="unfoldimage" ref="unfold" />
  </div>
</template>

<script>
export default {
  name: "Unfold",
  data() {
    return {
      Unfold: "展开",
      ifunfold:true
    };
  },
  methods: {
    unfold() {
        this.$emit('func')
        if(this.ifunfold){
            this.Unfold = "收起";
        }else{
            this.Unfold = "展开";
        }
        this.ifunfold=!this.ifunfold;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unfold {
  height: 76px;
  line-height: 22px;
  width: 53px;
  margin: 0 auto;
  font-size: 16px;
  color: #13227a;
  cursor: pointer;
  padding: 27px 0;
  box-sizing: border-box;
}

.unfoldimage {
  display: block;
  width: 16px;
  height: 22px;
  float: right;
}

.packupimage {
  display: none;
  width: 16px;
  height: 22px;
  float: right;
}
</style>