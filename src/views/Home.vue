<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="left">
          <img class="logo" src="../assets/images/logo.png" alt="">
          <span class="title">智能家居助手</span>
        </div>
        <el-menu mode="horizontal" @select="menuSelect">
          <el-menu-item index="1">应用管理</el-menu-item>
          <el-menu-item index="2">用户管理</el-menu-item>
          <el-menu-item index="3">运营管理</el-menu-item>
          <el-menu-item index="4">商城管理</el-menu-item>
          <el-menu-item index="5">系统管理</el-menu-item>
        </el-menu>

        <div class="right">
          <span class="identity">管理员</span>
          <el-dropdown>
            <div class="user">
              <span>admin</span>
              <div class="user-icon"></div>
              <!-- <img src="../assets/images/user.png" alt=""> -->
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="quit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <!-- @open="handleOpen" @close="handleClose" -->
          <el-menu default-active="2">
            <el-submenu index="1" v-for="items in asideMenu" :key="items.type.toString()">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ items.type }}</span>
              </template>
              <el-menu-item-group v-for="item in items.children" :key="item.id">
                <el-menu-item :index=item.id>{{ item.name }}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->
          </el-menu>

        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>@智能家居有限公司</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { menuData } from '../config/menuData'
export default {
  name: 'HomeView',
  data() {
    return {
      asideMenu: []
    }
  },
  methods: {
    quit() {
      this.$router.push('/login');
    },
    menuSelect(id) {
      menuData.forEach(item => {
        if (item.id == id){
          console.log(this.asideMenu = item.child);
          return this.asideMenu = item.child
        }
      });

    }
  }

}
</script>

<style lang="scss" scoped>
.el-header {
  height: 90px;
  // border: 1px solid darkcyan;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 5px 5px 10px rgb(243, 241, 241);

  .left {
    display: flex;
    align-items: center;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    .title {
      font-size: 18px;
      color: #0099FF;
    }
  }

  .el-menu--horizontal .el-menu-item {
    width: 100px;
    border: none;

    &:hover,
    &:focus {
      color: #0099FF;
    }
  }


  .right {
    display: flex;
    align-items: center;

    .identity {
      color: #CCCCCC;
    }

    .user {
      margin-left: 20px;
      display: flex;

      .user-icon {
        width: 20px;
        height: 20px;
        background: url(../assets/images/user.png) no-repeat;
        background-size: cover;
        margin-left: 10px;
      }

      &:hover {
        color: #0099FF;

        .user-icon {
          width: 20px;
          height: 20px;
          background: url(../assets/images/user_active.png) no-repeat;
          background-size: cover;
          margin-left: 10px;
        }
      }
    }
  }
}

.el-main {
  height: 100vh;
  background: #F6F7F8;
}
</style>
<style>
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: black !important;
  background: #F2F2F2 !important;
}
</style>