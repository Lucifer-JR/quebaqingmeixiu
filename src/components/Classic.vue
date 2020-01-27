<template>
  <div class="Classic">
     <li class="content">
      <div class="left">
        <ul class="type">
          <li class="typetitle type1">不限</li>
          <li
            id="typetype"
            v-for="(item,index) in typeList"
            class="type1"
            :class="{typeLastStyle:index === typeList.length -1}"
            :key="index"
          >
            <div class="type-a">{{item.a}}</div>
            <div class="type-b">
              <a v-for="(item1,index) in item.b" href :key="index">{{item1}}</a>
            </div>
            <div class="typeunfold" @click="typeunfold($event,index)">
              <img src="../../static/down.png" class="typeunfoldimage" ref="down" />
              <img src="../../static/up.png" class="typeupimage" ref="up" />
            </div>
          </li>
        </ul>
        <ul class="create">
          <li v-for="(item,index) in CreateList" :key="index" class="classic">
            <div class="keywords">
              {{item.KeyWords}}
            </div>
            <div class="creator">
              {{item.Creator}}
            </div>
           
          </li>
        </ul>
      </div>
      <div class="right"></div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Classic',
  
  data() {
    return {
      typeList: [
        {
          a: "类型：",
          b: [
            "春天",
            "夏天",
            "秋天",
            "写物",
            "抒情",
            "雪",
            "酒",
            "梅",
            "花",
            "荷花",
            "节日",
            "田园",
            "婉约",
            "豪放",
            "离别"
          ]
        },
        {
          a: "作者：",
          b: [
            "王维",
            "苏轼",
            "白居易",
            "李清照",
            "刘禹锡",
            "纳兰性德",
            "辛弃疾",
            "陆游",
            "李白",
            "杜甫",
            "曹操",
            "杜牧",
            "李煜",
            "欧阳修",
            "陶渊明"
          ]
        },
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
        },
        { a: "形式：", b: ["诗", "词", "文言文", "散文", "电影", "歌曲"] }
      ],
       CreateList: [
        {
          id: 1,
          type: "writing",
          ifLike: true,
          Value: 0,
          ifannotation: false,
          LikeNum: 2000,
          UnLikeNum: 3,
          CollectNum: 5,
          Name: "点绛唇·蹴罢秋千",
          CreateTime: "宋朝",
          Creator: "李清照",
          KeyWords: "和羞走，倚门回首，却把青梅嗅",
          Content:
            "蹴罢秋千，起来慵整纤纤手。露浓花瘦，薄汗轻衣透。" +
            "\n" +
            "见客入来，袜刬金钗溜。和羞走，倚门回首，却把青梅嗅。",
          Annotation:
            "蹴：踏。此处指打秋千。慵：懒，倦怠的样子。" +
            "\n" +
            "袜刬：这里指跑掉鞋子以袜着地。金钗溜：意谓快跑时首饰从头上掉下来。" +
            "\n" +
            "倚门回首：这里只是靠着门回头看的意思。"
        },

        {
          id: 2,
          type: "writing",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 2000,
          UnLikeNum: 3,
          CollectNum: 2,
          Name: "将进酒",
          CreateTime: "宋朝",
          Creator: "李白",
          KeyWords: "呼儿将出换美酒，与尔同消万古愁",
          Content:
            "君不见，黄河之水天上来，奔流到海不复回。" +
            "\n" +
            "君不见，高堂明镜悲白发，朝如青丝暮成雪。" +
            "\n" +
            "人生得意须尽欢，莫使金樽空对月。" +
            "\n" +
            "天生我材必有用，千金散尽还复来。" +
            "\n" +
            "烹羊宰牛且为乐，会须一饮三百杯。" +
            "\n" +
            "岑夫子，丹丘生，将进酒，杯莫停。" +
            "\n" +
            "与君歌一曲，请君为我倾耳听。" +
            "\n" +
            "钟鼓馔玉不足贵，但愿长醉不复醒。" +
            "\n" +
            "古来圣贤皆寂寞，惟有饮者留其名。" +
            "\n" +
            "陈王昔时宴平乐，斗酒十千恣欢谑。" +
            "\n" +
            "主人何为言少钱，径须沽取对君酌。" +
            "\n" +
            "五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。",
          Annotation:
            "将进酒：劝酒歌，属乐府旧题。将（qiāng）：请。君不见：乐府中常用的一种夸语。天上来：黄河发源于青海，因那里地势极高，故称。" +
            "\n" +
            "高堂：高大的厅堂。一说指父母。青丝：黑发。" +
            "\n" +
            "得意：适意高兴的时候。金樽：中国古代的盛酒器具。" +
            "\n" +
            "会须：正应当。" +
            "\n" +
            "岑夫子：岑勋。丹丘生：元丹丘。二人均为李白的好友。杯莫停：一作“君莫停”。" +
            "\n" +
            "与君：给你们，为你们。君，指岑、元二人。倾耳听：一作“侧耳听”。" +
            "\n" +
            "钟鼓：富贵人家宴会中奏乐使用的乐器。馔玉：形容食物如玉一样精美。不愿醒：也有版本为“不用醒”或“不复醒”。" +
            "\n" +
            "陈王：指陈思王曹植。平乐：观名。在洛阳西门外，为汉代富豪显贵的娱乐场所。恣：纵情任意。谑：戏。" +
            "\n" +
            "主人：指宴请李白的人，元丹丘。言少钱：一作“言钱少”。径须：干脆，只管。沽：买。" +
            "\n" +
            "五花马：指名贵的马。一说毛色作五花纹，一说颈上长毛修剪成五瓣。裘：皮衣。尔：你。销：同“消”。"
        },

        {
          id: 3,
          type: "writing",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 310,
          UnLikeNum: 9,
          CollectNum: 4,
          Name: "念奴娇·赤壁怀古",
          CreateTime: "宋朝",
          Creator: "苏轼",
          KeyWords: "人生如梦，一樽还酹江月",
          Content:
            "大江东去，浪淘尽，千古风流人物。" +
            "\n" +
            "故垒西边，人道是，三国周郎赤壁。" +
            "\n" +
            "乱石穿空，惊涛拍岸，卷起千堆雪。" +
            "\n" +
            "江山如画，一时多少豪杰。" +
            "\n" +
            "遥想公瑾当年，小乔初嫁了，雄姿英发。" +
            "\n" +
            "羽扇纶巾，谈笑间，樯橹灰飞烟灭。" +
            "\n" +
            "故国神游，多情应笑我，早生华发。" +
            "\n" +
            "人生如梦，一尊还酹江月。",
          Annotation:
            "大江：指长江。淘：冲洗，冲刷。风流人物：指杰出的历史名人。" +
            "\n" +
            "故垒：过去遗留下来的营垒。周郎：指三国时吴国名将周瑜，字公瑾，少年得志，二十四为中郎将，掌管东吴重兵，吴中皆呼为“周郎”。下文中的“公瑾”，即指周瑜。" +
            "\n" +
            "雪：比喻浪花。" +
            "\n" +
            "遥想：形容想得很远；回忆。小乔初嫁了：乔，本作“桥”。其时距赤壁之战已经十年，此处言“初嫁”，是言其少年得意，倜傥风流。雄姿英发：谓周瑜体貌不凡，言谈卓绝。英发，谈吐不凡，见识卓越。" +
            "\n" +
            "羽扇纶巾：古代儒将的便装打扮。羽扇，羽毛制成的扇子。纶巾，青丝制成的头巾。樯橹：这里代指曹操的水军战船。樯，挂帆的桅杆。橹，一种摇船的桨。“樯橹”一作“强虏”，又作“樯虏”，又作“狂虏”。" +
            "\n" +
            "故国神游：“神游故国”的倒文。故国：这里指旧地，当年的赤壁战场。神游：于想象、梦境中游历。“多情”二句：“应笑我多情，早生华发”的倒文。华发：花白的头发。" +
            "\n" +
            "一尊还酹江月：古人祭奠以酒浇在地上祭奠。这里指洒酒酬月，寄托自己的感情。尊：通“樽”，酒杯。"
        },

        {
          id: 4,
          type: "writing",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 231,
          UnLikeNum: 29,
          CollectNum: 1,
          Name: "水调歌头·明月几时有",
          CreateTime: "宋朝",
          Creator: "苏轼",
          KeyWords: "但愿人长久，千里共婵娟",
          Content:
            "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄          清影，何似在人间？" +
            "\n" +
            "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
          Annotation:
            "丙辰：指公元1076年（宋神宗熙宁九年）。这一年苏轼在密州(今山东省诸城市)任太守。达旦：到天亮。子由：苏轼的弟弟苏辙的字。" +
            "\n" +
            "把酒：端起酒杯。把，执、持。天上宫阙：指月中宫殿。阙，古代城墙后的石台。归去：回去，这里指回到月宫里去。琼楼玉宇：美玉砌成的楼宇，指想象中的仙宫。不胜：经受不住。胜：承担、承受。弄清影：意思是月光下的身影也跟着做出各种舞姿。弄：赏玩。何似：何如，哪里比得上。" +
            "\n" +
            "转朱阁，低绮户，照无眠：月儿移动，转过了朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的人（指诗人自己）。朱阁：朱红的华丽楼阁。绮户：雕饰华丽的门窗。不应有恨，何事长向别时圆：（月儿）不该（对人们）有什么怨恨吧，为什么偏在人们分离时圆呢？何事：为什么。此事：指人的“欢”“合” 和月的“晴”“圆”。但：只。千里共婵娟：只希望两人年年平安﹐虽然相隔千里，也能一起欣赏这美好的月光。共：一起欣赏。婵娟：指月亮。"
        },

        {
          id: 5,
          type: "film",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 231,
          UnLikeNum: 29,
          CollectNum: 1,
          Name: "美丽人生",
          CreateTime: "1997",
          Creator: "罗伯托·贝尼尼",
          Actor: "罗伯托·贝尼尼",
          KeyWords: "为了记住你的笑容，我拼命按下心中的快门",
          Content:
            "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄          清影，何似在人间？" +
            "\n" +
            "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
          Annotation:
            "丙辰：指公元1076年（宋神宗熙宁九年）。这一年苏轼在密州(今山东省诸城市)任太守。达旦：到天亮。子由：苏轼的弟弟苏辙的字。" +
            "\n" +
            "把酒：端起酒杯。把，执、持。天上宫阙：指月中宫殿。阙，古代城墙后的石台。归去：回去，这里指回到月宫里去。琼楼玉宇：美玉砌成的楼宇，指想象中的仙宫。不胜：经受不住。胜：承担、承受。弄清影：意思是月光下的身影也跟着做出各种舞姿。弄：赏玩。何似：何如，哪里比得上。" +
            "\n" +
            "转朱阁，低绮户，照无眠：月儿移动，转过了朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的人（指诗人自己）。朱阁：朱红的华丽楼阁。绮户：雕饰华丽的门窗。不应有恨，何事长向别时圆：（月儿）不该（对人们）有什么怨恨吧，为什么偏在人们分离时圆呢？何事：为什么。此事：指人的“欢”“合” 和月的“晴”“圆”。但：只。千里共婵娟：只希望两人年年平安﹐虽然相隔千里，也能一起欣赏这美好的月光。共：一起欣赏。婵娟：指月亮。"
        },

        {
          id: 6,
          type: "film",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 231,
          UnLikeNum: 29,
          CollectNum: 1,
          Name: "肖申克的救赎",
          CreateTime: "1994",
          Creator: "弗兰克·达拉邦特",
          Actor: "摩根·弗里曼，蒂姆·罗宾斯",
          KeyWords: "人生可以归结为一种简单的选择:不是忙着活,就是忙着死",
          Content:
            "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄          清影，何似在人间？" +
            "\n" +
            "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
          Annotation:
            "丙辰：指公元1076年（宋神宗熙宁九年）。这一年苏轼在密州(今山东省诸城市)任太守。达旦：到天亮。子由：苏轼的弟弟苏辙的字。" +
            "\n" +
            "把酒：端起酒杯。把，执、持。天上宫阙：指月中宫殿。阙，古代城墙后的石台。归去：回去，这里指回到月宫里去。琼楼玉宇：美玉砌成的楼宇，指想象中的仙宫。不胜：经受不住。胜：承担、承受。弄清影：意思是月光下的身影也跟着做出各种舞姿。弄：赏玩。何似：何如，哪里比得上。" +
            "\n" +
            "转朱阁，低绮户，照无眠：月儿移动，转过了朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的人（指诗人自己）。朱阁：朱红的华丽楼阁。绮户：雕饰华丽的门窗。不应有恨，何事长向别时圆：（月儿）不该（对人们）有什么怨恨吧，为什么偏在人们分离时圆呢？何事：为什么。此事：指人的“欢”“合” 和月的“晴”“圆”。但：只。千里共婵娟：只希望两人年年平安﹐虽然相隔千里，也能一起欣赏这美好的月光。共：一起欣赏。婵娟：指月亮。"
        },

        {
          id: 7,
          type: "film",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 231,
          UnLikeNum: 29,
          CollectNum: 1,
          Name: "阿甘正传",
          CreateTime: "1994",
          Creator: "罗伯特·泽米吉斯",
          Actor: "汤姆汉克斯",
          KeyWords: "妈妈说过，要往前走，就得先忘掉过去。我想，这就是跑的用意",
          Content:
            "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄          清影，何似在人间？" +
            "\n" +
            "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
          Annotation:
            "丙辰：指公元1076年（宋神宗熙宁九年）。这一年苏轼在密州(今山东省诸城市)任太守。达旦：到天亮。子由：苏轼的弟弟苏辙的字。" +
            "\n" +
            "把酒：端起酒杯。把，执、持。天上宫阙：指月中宫殿。阙，古代城墙后的石台。归去：回去，这里指回到月宫里去。琼楼玉宇：美玉砌成的楼宇，指想象中的仙宫。不胜：经受不住。胜：承担、承受。弄清影：意思是月光下的身影也跟着做出各种舞姿。弄：赏玩。何似：何如，哪里比得上。" +
            "\n" +
            "转朱阁，低绮户，照无眠：月儿移动，转过了朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的人（指诗人自己）。朱阁：朱红的华丽楼阁。绮户：雕饰华丽的门窗。不应有恨，何事长向别时圆：（月儿）不该（对人们）有什么怨恨吧，为什么偏在人们分离时圆呢？何事：为什么。此事：指人的“欢”“合” 和月的“晴”“圆”。但：只。千里共婵娟：只希望两人年年平安﹐虽然相隔千里，也能一起欣赏这美好的月光。共：一起欣赏。婵娟：指月亮。"
        },

        {
          id: 8,
          type: "music",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 231,
          UnLikeNum: 29,
          CollectNum: 1,
          Name: "甜蜜蜜",
          CreateTime: "不详",
          Creator: "印尼民歌",
          Actor: "",
          Singer: "邓丽君",
          KeyWords: "你的笑容这样熟悉，我一时想不起",
          Content:
            "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄          清影，何似在人间？" +
            "\n" +
            "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
          Annotation:
            "丙辰：指公元1076年（宋神宗熙宁九年）。这一年苏轼在密州(今山东省诸城市)任太守。达旦：到天亮。子由：苏轼的弟弟苏辙的字。" +
            "\n" +
            "把酒：端起酒杯。把，执、持。天上宫阙：指月中宫殿。阙，古代城墙后的石台。归去：回去，这里指回到月宫里去。琼楼玉宇：美玉砌成的楼宇，指想象中的仙宫。不胜：经受不住。胜：承担、承受。弄清影：意思是月光下的身影也跟着做出各种舞姿。弄：赏玩。何似：何如，哪里比得上。" +
            "\n" +
            "转朱阁，低绮户，照无眠：月儿移动，转过了朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的人（指诗人自己）。朱阁：朱红的华丽楼阁。绮户：雕饰华丽的门窗。不应有恨，何事长向别时圆：（月儿）不该（对人们）有什么怨恨吧，为什么偏在人们分离时圆呢？何事：为什么。此事：指人的“欢”“合” 和月的“晴”“圆”。但：只。千里共婵娟：只希望两人年年平安﹐虽然相隔千里，也能一起欣赏这美好的月光。共：一起欣赏。婵娟：指月亮。"
        },

        {
          id: 8,
          type: "music",
          ifLike: true,
          ifannotation: false,
          Value: 0,
          LikeNum: 231,
          UnLikeNum: 29,
          CollectNum: 1,
          Name: "喜欢你",
          CreateTime: "1988",
          Creator: "Beyond",
          Actor: "",
          Singer: "Beyond",
          KeyWords: "细风带雨湿透黄昏的街道",
          Content:
            "明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄          清影，何似在人间？" +
            "\n" +
            "转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。",
          Annotation:
            "丙辰：指公元1076年（宋神宗熙宁九年）。这一年苏轼在密州(今山东省诸城市)任太守。达旦：到天亮。子由：苏轼的弟弟苏辙的字。" +
            "\n" +
            "把酒：端起酒杯。把，执、持。天上宫阙：指月中宫殿。阙，古代城墙后的石台。归去：回去，这里指回到月宫里去。琼楼玉宇：美玉砌成的楼宇，指想象中的仙宫。不胜：经受不住。胜：承担、承受。弄清影：意思是月光下的身影也跟着做出各种舞姿。弄：赏玩。何似：何如，哪里比得上。" +
            "\n" +
            "转朱阁，低绮户，照无眠：月儿移动，转过了朱红色的楼阁，低低地挂在雕花的窗户上，照着没有睡意的人（指诗人自己）。朱阁：朱红的华丽楼阁。绮户：雕饰华丽的门窗。不应有恨，何事长向别时圆：（月儿）不该（对人们）有什么怨恨吧，为什么偏在人们分离时圆呢？何事：为什么。此事：指人的“欢”“合” 和月的“晴”“圆”。但：只。千里共婵娟：只希望两人年年平安﹐虽然相隔千里，也能一起欣赏这美好的月光。共：一起欣赏。婵娟：指月亮。"
        }
      ],
    };
  },
  methods: {
    typeunfold(e, i) {
      if (e.target.parentNode.parentNode.style.height < "37px") {
        e.target.parentNode.parentNode.style.overflow = "visable";
        e.target.parentNode.parentNode.style.height = "auto";
        this.$refs.down[i].style.display = "none";
        this.$refs.up[i].style.display = "block";
      } else {
        e.target.parentNode.parentNode.style.overflow = "hidden";
        e.target.parentNode.parentNode.style.height = "36px";
        this.$refs.up[i].style.display = "none";
        this.$refs.down[i].style.display = "block";
      }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 1000px;
  margin: 60px auto;
  overflow: hidden;
}
.type {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
  padding: 10px 10px 0 10px;
}
.type-a {
  float: left;
  font-size: 14px;
  color: #505063;
  font-weight: 200;
  margin-right: 8px;
  line-height: 36px;
}
.type1 {
  border-bottom: solid 1px #c8c7bc;
  height: 36px;
  overflow: hidden;
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

.left {
  width: 650px;
  float: left;
}
.create {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: solid 1px #c8c7bc;
  margin-top: 30px;
  background: #f0efe2;
  overflow: hidden;
}
.right {
  width: 300px;
  height: 800px;
  float: right;
  border: solid 1px #c8c7bc;
  background: #f0efe2;
}

.typeunfold {
  float: right;
  width: 16px;
  height: 18px;
  margin: 10px 6px 0px 0px;
}

.typeunfoldimage {
  width: 16px;
  height: 18px;
  cursor: pointer;
}

.typeupimage {
  display: none;
  cursor: pointer;
}

.typeLastStyle {
  border-bottom: none;
  height: 36px;
  overflow: hidden;
}
.classic{
  width: 100%;
  height: 50px;
  padding: 0 10px;
  line-height: 50px;
  box-sizing: border-box
}
.classic:hover{
  background: #d8ddf2
}
.keywords{
  float: left;
  font-size: 16px;
  cursor: pointer;
}
.creator{
  float: right;
  font-size: 14px;
  color:#908822;
}
.creator:hover{
  cursor: pointer;
}

</style>