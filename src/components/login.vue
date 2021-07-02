<template>
  <div class="login_container">
    <div class="photo_wall">
      <img src="../assets/img/cat1.jpg" alt="">
      <img src="../assets/img/cat2.jpg" alt="">
      <img src="../assets/img/cat3.jpg" alt="">
      <img src="../assets/img/cat4.jpg" alt="">
      <img src="../assets/img/cat5.jpg" alt="">
    </div>

    <!-- 标题 -->
    <div class="title">
      <h1>My Blog</h1>
    </div>

    <div class="login_box">
      <!-- 登录表单区域 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="80px" class="login_form">
        <!-- 用戶名 -->
        <el-form-item label="用戶名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>

        <!-- 密碼 -->
        <el-form-item label="密碼" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item class="btns">
          <!-- 注册 -->
          <el-button type="primary">注册</el-button>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是表单的数据
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    // 注册
    login() {
    //   this.$refs.loginFormRef.validate(async (vaild) => {
    //     if (!vaild) return
    //     const { data: res } = await this.$axios.post('login')
    //     if (res.meta.status != 200) return this.$message.console.error('登录失败，请输入正确的用户名和密码')
        // 保存返回的token值
        // window.sessionStorage.setItem('token', res.data.token)
        // 实现页面跳转
        this.$router.push('/')
    //   })
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  background-image: url('../assets/img/bac.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  .photo_wall{
    position: absolute;
    width: 700px;
    // 
    margin-top: 10%;
    margin-left:5%;
    background-color: rgba(255, 255, 255, 0.514);
    padding: 20px;
    img{
      width: 30%;
      margin-left: 20px;
    }
  }
  .title{
    position: absolute;
    left:80%;
    top:20%;
    transform: translate(-50%,-50%);
    font-size: 40px;
    border:3px solid #fff;
    border-bottom:8px solid #fff;
    padding:20px;

  }
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: rgba(236, 241, 245, 0.808);
  border-radius: 3px;
  position: absolute;
  left: 80%;
  top: 68%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.login_form {
  position: absolute;
  top: 60px;
  /* bottom: 0px; */
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
.btns {
  width: 100%;
  margin-top: 15px;
}
</style>
