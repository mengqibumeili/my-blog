<template>
  <div>
    <div class="arcticle" v-for="item in arcticlelist" :key="item.index">
      <p class="item_title" @click="addCount">{{ item.title }}</p>
      <p class="content"><span v-html="item.content.slice(0, 100)"></span></p>
      <p>
        <span class="read" @click="toDetail(item.id)">阅读原文></span>
        <span class="item_info"> 浏览量：{{ count }} </span>
        <span class="item_info">收藏</span>
        <span class="item_info">评论</span>
        <span class="item_info">{{ item.adtime }}</span>
      </p>
    </div>

    <div class="yejiao">
      <span class="banquan">版权：@东郭先生der猫</span>
      <div>
        <span class="next">第{{ pagenum }}页</span>
         <el-button type="info" class="next" @click="toPrvePage" size="mini">
          < 上一页
        </el-button>
        <el-button type="info" class="next" @click="toNextPage" size="mini"
          >下一页 ></el-button
        >
       
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      arcticlelist: [],
      count: 0,
      id: "",
      pagenum: 1,
    };
  },
  created() {
    this.getArcticleList();
  },
  methods: {
    // 获取文章列表
    async getArcticleList() {
      const { data: res } = await this.$axios.get(
        "http://api.soword.cn/articles?key=MTYyNTI2NTE4MTI2NA==SHORT&page=1"
      );
      this.arcticlelist = res.message.data; //得到的是地址，不能修改属性
      // 给数组添加属性id
      for (let i = 0; i <= this.arcticlelist.length; i++) {
        // 给数组添加id属性
        this.$set(this.arcticlelist[i], "id", i);
        // console.log(this.arcticlelist[i]);
      }
    },
    // 点击率
    addCount() {
      this.count++;
    },
    toDetail(num) {
      //  console.log();
      this.$router.push("/detail" + num);
    },
    toNextPage() {
      // 此处应该是跳转
      this.pagenum++;
    },
    toPrvePage() {
      // 此处应该是跳转
      this.pagenum--;
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
  .read {
    cursor: pointer;
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

.yejiao {
  width: 100%;
  height: 50px;
  position: relative;
  line-height: 50px;
  font-weight: 100;
  font-size: 14px;
  .banquan {
    float: left;
  }
  div {
    height: 50px;
    float: right;
    line-height: 50px;
    .next {
      float: left;
      margin-left: 10px;
    }
    .el-button {
      margin-top: 10px;
    }
  }
}
</style>