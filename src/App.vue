<template>
  <div id="app">
    <Headerbox/>
    <div>
      <router-view/>
    </div>
    <Backtop/>
    <Gongxinbu/>
    <Signin v-show="this.$store.state.ifsignin"/>
    <Signup v-show="this.$store.state.ifsignup"/>
    <Torecomend v-show="this.$store.state.iftorecomend"/>
  </div>
</template>

<script>
import Gongxinbu from './components/Gongxinbu'
import Backtop from './components/Backtop'
import Headerbox from './components/Headerbox'
import Home from './components/Home'
import Mine from './components/Mine'
import Classic from './components/Classic'
import Works from './components/Works'
import Creator from './components/Creator'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Torecomend from "./components/Torecomend";

export default {
  name: 'App',
  components:{
    Headerbox,
    
    Home,
    Mine,
    Classic,
    Creator,
    Works,

    Signin,
    Signup,
    Torecomend,

    Backtop,
    Gongxinbu,
  }
}
</script>

<style>
#app{
  background-image:url("../static/background.jpg");
  background-repeat: repeat-y;
  background-size: 100% auto;
  padding-top: 60px;
} 
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
* {
   margin: 0;
   padding: 0;
   list-style: none
      }

</style>
