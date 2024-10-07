<template>
  <div class="login-bg">
    <div class="login-content">
      <div class="left">
        <img src="../assets/images/login1.png" alt="">
      </div>
      <div class="right">
        <div class="right-content">
          <span>智能家居助手 | 后台系统</span>
          <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
            <el-form-item prop="phone">
              <el-input class="phone" placeholder="手机号码" v-model="loginForm.phone" autocomplete="off">
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="password" placeholder="登录密码" type="password" v-model="loginForm.password"
                autocomplete="off">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="login">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      loginForm: {
        phone: '',
        password: '',
      },
      rules: {
        phone: [
          { message: '请输入手机号码', trigger: 'blur' },
          // { min: 11, message: '请输入正确的手机号码', trigger: 'blur' }
        ],
        password: [
          { message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    login() {
      if (this.loginForm.phone == 'admin' && this.loginForm.password == '123456') {
        this.$router.push('/');
      } else {
        alert('重新登录')
      }
      // console.log(this.loginForm)
    },
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100vh;
  background: url(../assets/images/background.jpg) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-content {
  width: 65%;
  height: 65%;
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgb(228, 228, 228);

  .left {
    width: 50%;
    background: url(../assets/images/login2.png) no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;

    span {
      font-size: 28px;
      color: #A7ACFE;
    }

    .right-content {
      width: 65%;
    }

    .el-form {
      margin: 60px 0;

      /deep/ .el-form-item__content {
        margin: 0 !important;
      }

      /deep/ .phone .el-input__inner {
        background: url(@/assets/images/phone.png) no-repeat 10px center;
        padding: 0px 35px;
      }

      /deep/ .password .el-input__inner {
        background: url(@/assets/images/password.png) no-repeat 10px center;
        padding: 0px 35px;
      }

      .el-button {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        background: linear-gradient(to right, #99CAFD, #999BCE);
        color: white;
      }
    }
  }
}
</style>