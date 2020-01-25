<template>
  <div class="backtop" @click="backtop" ref="top">
    <img class="backtopimage" src="@/assets/backtop.png">
  </div>
</template>

<script>
export default {
  name: 'Backtop',
  methods:{
      backtop() {
                document.documentElement.scrollTop = 0;
            },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     
        .backtop {
            width: 52px;
            height: 52px;
            background: #304b5e;
            position: fixed;
            bottom: 20px;
            right: 50px;
            cursor: pointer;
        }

        .backtopimage {
            width: 27px;
            height: 15px;
            position: relative;
            top: 17px;
            left: 13px
        }
</style>