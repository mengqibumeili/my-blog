<template>
  <div>
    <div class="arcticle" v-for="item in arcticlelist" :key="item.index">
      <p class="item_title" @click="addCount">{{ item.title }}</p>
      <p class="content"> <span v-html="item.content.slice(0,100)"></span></p>
      <p>
        <span @click="toDetail"><a href="">阅读全文 ></a></span>
        <span class="item_info"> 浏览量：{{ count }} </span>
        <span class="item_info">收藏</span>
        <span class="item_info">评论</span>
        <span class="item_info">{{ item.adtime }}</span>
      </p>
    </div>
    <span class="banquan">版权：@东郭先生der猫</span>
      <el-button type="info" class="next">下一页</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arcticlelist: [],
      count: 0,
    };
  },
  created() {
    this.getArcticleList();
  },
  methods: {
    // 获取文章列表
    async getArcticleList() {
      const { data: res } = await this.$axios.get(
        "http://api.soword.cn/articles?key=MTYyNTE4NjA0MzI2NA==SHORT&page=1"
      );
      this.arcticlelist = res.message.data;
      console.log(this.arcticlelist);
    },
    // 点击率
    addCount() {
      this.count++;
    },
    toDetail() {
      this.$router.push("/detail");
    },
  },
};
</script>

<style lang="less" scoped>
.arcticle {
  width: 100%;
  // height: 300px;
  padding: 10px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #b1b1b1;
  overflow: hidden;

  // margin-bottom: 10px;
  .item_title {
    font-size: 22px;
    font-weight: 100;
  }
  .content {
    display: block;
    width: 100%;
    margin: 10px;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    
  }
  p {
    margin: 15px;
    font-weight: 100;
  }

  .item_info {
    float: right;
    margin-left: 10px;
  } 

}
.banquan{
  line-height: 50px;
  font-weight: 100;
  font-size: 14px;
}
 .next{
    position: relative;
    margin-top: 15px;
    float:right
    }  
</style>