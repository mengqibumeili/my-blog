<template>
  <div class="home">
    <!-- 添加导航栏 -->
    <el-container class="homeContainer">
      <!-- 导航栏 -->
      <el-header>
        <div id="title"><h2>东郭先生der猫</h2></div>
        <div id="tabs">
          <ul>
            <li class="tabitems" @click="toHome"><span>首页</span></li>
            <li class="tabitems"><span>博文管理</span></li>
            <li class="tabitems" ><span>创作</span></li>
            <li class="tabitems" @click="toLogin"><span>登录</span></li>
          </ul>
        </div>
      </el-header>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside >

          <!-- 头像 -->
          <div>
            <div id="headshot"></div>
            <h3>东郭先生der猫</h3>
          </div>

          <div class="blog_info">
            <span>园龄</span>
            <span>粉丝</span>
            <span>关注</span>
          </div>

          <el-button>加关注</el-button>

        <!-- 我的标签 -->
          <div class="box">
            <p class="aside_title">我的标签</p>
            <div>
              <el-tag v-for="item in taglist" :type="item.type">{{
                item.content
              }}</el-tag>
            </div>
          </div>

          <!-- 最新评论 -->
          <div class="box">
            <p class="aside_title">最新评论</p>
            <ul>
              <li v-for="item in commentslist">
                <p>{{ item }}</p>
              </li>
            </ul>
          </div>

          <!-- 热门文章 -->
          <div class="box">
            <p class="aside_title">热门文章</p>
            <ul>
              <li v-for="item in hotlist">
                <p><a href="">{{item}}</a></p>
              </li>
            </ul>
          </div>

        </el-aside>

        <!-- 主体文章区域 -->
        <el-main>
          <!--添加路由占位符 -->
          <router-view></router-view>
          
        </el-main>

      
      </el-container>
    </el-container>
  </div>
</template>
  <!-- 添加标签页 -->
    


<script>
export default {
  data(){
    return{
      taglist: [
        { content: "html", type: "primary" },
        { content: "css", type: "success" },
        { content: "javascript", type: "warning" },
        { content: "vue.js", type: "success" },
        { content: "更多", type: "danger" },
      ],
      value: new Date(),
      commentslist: ["这里是最新评论", "没有数据好可怜"],
      hotlist:['html5的新特性','css常见的布局','你不知道的算法']
    }
  },
  methods:{
    toLogin(){
      this.$router.push('./login')
    },
    toHome(){
      this.$router.push('./')
    },
    
  }
}
</script>

<style lang="less" scoped>
// 导航栏样式
.homeContainer {
  height: 100vh;
  padding: 0 60px;
  box-sizing: border-box;
}
// 头部导航
.el-header {
  border-bottom: 1px solid #e5e8ee;
  #title {
    float: left;
    cursor: pointer;
  }
  #tabs {
    float: right;
    padding: 0 20px;
  }
  .tabitems {
    float: left;
    padding: 0 15px;
    span {
      padding: 19px 5px;
      font-size: 16px;
      cursor: pointer;
    }
    span:hover {
      border-bottom: 4px solid #606266;
    }
  }
}
// 侧边栏样式
.el-aside {
  width: 250px !important;
  border-right: 1px solid #eef2f8;
  padding-right: 10px;
  box-sizing: border-box;
  #headshot {
    margin-top: 15px;
    width: 190px;
    height: 190px;
    margin-left: 25px;
    background-image: url("../assets/img/head1.png");
    background-size: cover;
  }
 
  p {
    padding: 5px;
    margin-top: 10px;
  }
  .el-button {
    width: 100%;
    margin-top: 15px;
  }
  h3 {
    width: 100%;
    text-align: center;
  }
  .blog_info {
    span {
      margin-left: 35px;
    }
  }
  .el-tag {
    margin: 10px;
  }
  .box {
    margin-top: 20px;
  }
  .aside_title {
    padding: 5px;
    border-left: 4px solid rgb(3, 150, 235);
  }
}
.el-main {
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
  
}
</style>
