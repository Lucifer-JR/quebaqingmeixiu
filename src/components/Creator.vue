<template>
  <div class="Creator">
    <li class="content">
      <div class="left">
        <ul class="type">
          <li class="typetitle type1">不限</li>

          <li
            v-for="(item,index) in creatorTypeList"
            :key="index"
            class="type1"
            :class="{typeLastStyle:index === creatorTypeList.length -1}"
          >
            <div class="type-a">{{item.a}}</div>

            <div class="type-b">
              <a v-for="(item1,index) in item.b" :key="index" href>{{item1}}</a>
            </div>
          </li>
        </ul>

        <ul
          v-for="(item,index) in creatorList"
          :key="index"
          class="create"
          style="overflow: hidden;"
        >
          <div style="overflow: hidden ;margin-bottom: 10px">
            <div class="creatorImage">
              <img :src="item.creatorPic" />
            </div>
            <p class="creatorName">
              <a href class="recomendname">{{item.Name}}</a>
            </p>
            <p class="creatorIntro">{{item.creatorIntro}}</p>
          </div>
        </ul>
      </div>
      <div class="right"></div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Creator",
  data() {
    return {
      creatorTypeList: [
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
        }
      ],
      creatorList: [
        {
          Name: "李清照",
          creatorPic: "../../static/liqingzhao.jpg",
          creatorIntro:
            "李清照（1084年3月13日～1155年5月12日）号易安居士，汉族，" +
            " 山东省济南章丘人。宋代（南北宋之交）女词人，婉约词派代表， 有“千古第一才女”之称。" +
            "所作词，前期多写其悠闲生活，后期多悲叹身世， 情调感伤。形式上善用白描手法，自辟途径，" +
            "语言清丽。论词强调协律，崇尚典雅， 提出词“别是一家”之说，反对以作诗文之法作词。能诗，" +
            "留存不多， 部分篇章感时咏史，情辞慷慨，与其词风不同。有《易安居士文集》《易安词》， 已散佚。" +
            "后人有《漱玉词》辑本。今有《李清照集校注》。"
        },
        {
          Name: "李白",
          creatorPic: "../../static/libai.jpg",
          creatorIntro:
            "李白（701年－762年），字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。" +
            "祖籍陇西成纪(待考)，出生于西域碎叶城，4岁再随父迁至剑南道绵州。李白存世诗文千余篇，" +
            "有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。"
        },
        {
          Name: "白居易",
          creatorPic: "../../static/baijuyi.jpg",
          creatorIntro:
            "白居易（772年－846年），字乐天，号香山居士，又号醉吟先生，祖籍太原，到其曾祖父时迁居下邽，" +
            "生于河南新郑。是唐代伟大的现实主义诗人，唐代三大诗人之一。白居易与元稹共同倡导新乐府运动，" +
            "世称“元白”，与刘禹锡并称“刘白”。白居易的诗歌题材广泛，形式多样，语言平易通俗，" +
            "有“诗魔”和“诗王”之称。官至翰林学士、左赞善大夫。公元846年，白居易在洛阳逝世，" +
            "葬于香山。有《白氏长庆集》传世，代表诗作有《长恨歌》、《卖炭翁》、《琵琶行》等"
        },
        {
          Name: "苏轼",
          creatorPic: "../../static/sushi.jpg",
          creatorIntro:
            "苏轼（1037－1101），北宋文学家、书画家、美食家。字子瞻，号东坡居士。" +
            "汉族，四川人，葬于颍昌（今河南省平顶山市郏县）。一生仕途坎坷，学识渊博，天资极高，" +
            "诗文书画皆精。其文汪洋恣肆，明白畅达，与欧阳修并称欧苏，为“唐宋八大家”之一；" +
            "诗清新豪健，善用夸张、比喻，艺术表现独具风格，与黄庭坚并称苏黄；词开豪放一派，" +
            "对后世有巨大影响，与辛弃疾并称苏辛；书法擅长行书、楷书，能自创新意，用笔丰腴跌宕，" +
            "有天真烂漫之趣，与黄庭坚、米芾、蔡襄并称宋四家；画学文同，论画主张神似，提倡“士人画”。" +
            "著有《苏东坡全集》和《东坡乐府》等。"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.creatorName {
  margin: 0 0 10px 0;
}

.creatorIntro {
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1px;
}
.creatorImage {
  width: 105px;
  float: left;
  height: 150px;
  margin: 0px 14px 0 0;
}
.content {
  width: 1000px;
  margin: 60px auto;
  overflow: hidden;
}

.left {
  width: 650px;
  float: left;
}

.right {
  width: 300px;
  height: 800px;
  float: right;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
}
.type {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
  padding: 10px 10px 0 10px;
}
.typetitle {
  font-size: 20px;
  font-weight: bold;
  line-height: 36px;
}
.type1 {
  border-bottom: solid 1px #c8c7bc;
  height: 36px;
  overflow: hidden;
}
.typeLastStyle {
  border-bottom: none;
  height: 36px;
  overflow: hidden;
}
.type-a {
  float: left;
  font-size: 14px;
  color: #505063;
  font-weight: 200;
  margin-right: 8px;
  line-height: 36px;
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
.create {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  margin-top: 30px;
  background: #f0efe2;
  padding: 16px;
}
</style>