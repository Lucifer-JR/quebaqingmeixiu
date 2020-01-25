<template>
  <div id="app">
    <Headerbox/>
    <div>
      <router-view/>
    </div>
    <Backtop/>
    <Gongxinbu/>
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

export default {
  name: 'App',
  components:{
    Gongxinbu,
    Backtop,
    Home,
    Headerbox,
    Mine,
    Classic,
    Creator,
    Works
  }
}
</script>

<style>
body{
  background: #E1E0C7
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
* {
            margin: 0;
            padding: 0;
            list-style: none
      }

</style>
