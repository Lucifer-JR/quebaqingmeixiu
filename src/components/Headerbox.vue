<template>
    <div class="headerbox">
        <header>
                <ul class="header-left">
                    <li v-for="(item,index) in items" :key="index">
                        <router-link :to="{path:item.path}">
                                {{item.name}}
                        </router-link>
                    </li>
                </ul>

                <ul class="header-right">
                    <li>注册</li>
                    <li>登陆</li>
                </ul>
                <div class="searchbox">
                    <input type="text" class="search">
                    <div class="searchbutton"></div>
                </div>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Headerbox',
  data () {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .headerbox {
            width: 100%;
            background: #5D6146;
            height: 60px
        }

        header {
            width: 1000px;
            margin: 0 auto;
            box-sizing: border-box;
            font-size: 17px
        }

        .header-left li{
            float: left;
            color: #c8c8c8;
            line-height: 60px;
            padding: 0 20px 0 20px;
            cursor: pointer
        }
        .header-left li a{
            text-decoration: none;
            color: #fff;
        }
         .header-left li a:hover {
            color: #c8c8c8;
        }

        .header-right li {
            float: right;
            color: #c8c8c8;
            line-height: 60px;
            padding: 0 20px 0 20px;
            cursor: pointer
        }

        header li:hover {
            color: #fff;
            background: black
        }

        .searchbox {
            float: right;
            position: relative;
            margin: 16px 40px 0 0;
            padding: 0 30px 0 20px;
            height: 30px;
            border-radius: 30px;
            width: 150px;
            background: white
        }

        .search {
            border: none;
            outline: none;
            font-size: 14px;
            height: 30px;
            width: 145px
        }

        .searchbutton {
            position: absolute;
            width: 19px;
            height: 19px;
            top: 6px;
            right: 9px;
            cursor: pointer;
            background: url("/assets/spirit.png") -115px -45px no-repeat
        }
</style>