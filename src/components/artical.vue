<template>
<div>
    <div class="arcticle" v-for = 'item in arcticlelist' :key="item.index">
               <p class="item_title">{{item.title}}</h3>
               <p>{{item.description}}</p>
               <p>
                 <span> <a href="">阅读全文 ></a></span>
                  <span class="item_info">日期: {{item.ctime}}</span>
               </p>            
          </div>
          </div>
</template>

<script>
export default {
      data() {
    return {
      arcticlelist: [],

      key: "af3949f7c4ebde3c37a732216e23cfc2",
      num: 10,
      page: 1,
      word: "深圳",
      src: "人民日报",
      
    };
  },
  created() {
    this.getArcticleList();
  },
  methods: {
    // 获取文章列表
    async getArcticleList() {
      var params =
        "key=" +
        this.key +
        "&num=" +
        this.num +
        "&page=" +
        this.page +
        "&word=" +
        this.word +
        "&src=" +
        this.src;
      // console.log(params);
      const res = await this.$axios.get(
        "http://api.tianapi.com/topnews/index?" + params
      );
      console.log(res.data);
      this.arcticlelist = res.data.newslist;
      console.log(this.arcticlelist);
    },
  },
}
</script>

<style lang="less" scoped>
.arcticle {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #b1b1b1;
    // margin-bottom: 10px;
    .item_title {
      font-size: 22px;
      font-weight: 100;
    }
    p {
      margin: 15px;
      font-weight: 100;
    }

    .item_info {
      float: right;
    }
  }
</style>