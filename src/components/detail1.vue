<template>
  <div>
      <h2>{{this.arcticlelist[1].title}}</h2>
     <p class="content"><span v-html="this.arcticlelist[1].content"></span></p>
  </div>
</template>

<script>
export default {
   data() {
    return {
      arcticlelist: [],
      id:''
    };
  },
  created() {
    this.getArcticleList();
  },
  methods: {
     async getArcticleList() {
      const { data: res } = await this.$axios.get(
        "http://api.soword.cn/articles?key=MTYyNTI2NTE4MTI2NA==SHORT&page=1"
      );
      this.arcticlelist = res.message.data;
      // 给数组添加属性id
      for (let i = 0; i <= this.arcticlelist.length; i++) {
        // 给数组添加id属性
        this.$set(this.arcticlelist[i], "id", i);

        console.log(this.arcticlelist[i]);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.detail{
  padding: 10px 20px;
  }
  h2{
    margin-top: 0;
    width: 100%;
    position: relative;
    text-align: center;
    margin-bottom: 30px;
  }
</style>