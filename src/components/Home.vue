<template>
  <el-container class="home-container">
    <!--头部栏-->
    <el-header>
      <div>
<!--        <img src="{#user.avatar}" alt=""/>-->
        <img src="../assets/logo.jpg" alt="" class="home-logo"/>
        <span>博客主页面</span>
      </div>
      <div class="test" @click="goHome('/welcome')">
        <i class="el-icon-s-home">
        </i>
      </div>
    </el-header>

    <!--侧边栏-->
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
        <div @click="toGgleColl" class="toggle-button">
          <i class="el-icon-s-fold" v-show="!isCollapse">
          </i>
          <i class="el-icon-s-unfold" v-show="isCollapse"></i>
        </div>
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff"
                 :collapse="isCollapse" :collapse-transition="true" :default-active="active" :router="true">
          <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>博客管理</span>
            </template>
          <el-menu-item-group>
            <el-menu-item index="/blog/list" @click="saveNavState('/blog/list')">
              <i class="el-icon-document"></i>
              博客列表
            </el-menu-item>
            <el-menu-item index="/addblog">
              <i class="el-icon-edit"></i>
              博客新增
            </el-menu-item>
          </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>访客管理</span>
            </template>
          <el-menu-item-group>
            <el-menu-item index="1-3">
              <i class="el-icon-monitor"></i>
              访客查看
            </el-menu-item>
            <el-menu-item index="1-4">
              <i class="el-icon-s-comment"></i>
              访客评论
            </el-menu-item>
          </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3" @click="logout">
              <i class="el-icon-delete"></i>
              <span>安全退出</span>
          </el-menu-item>
        </el-menu>
<!--        <el-button type="info" round @click="logout">安全退出</el-button>-->
      </el-aside>
      <!--主页面栏-->
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--脚部栏-->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return{
      //menu列表
      menuList:[],
      isCollapse: false,
      active: '/welcome',
    }
  },
  //onload 事件
  created() {
    //查询menuList
    this.getMenuList();
    this.active = window.sessionStorage.getItem('active');
  },
  methods: {
    //安全退出方法
    logout() {
      window.sessionStorage.clear();//清除session
      this.$router.push("/login");//回到首页
    },
    //获取导航菜单方法
    getMenuList() {
      console.log("success");
    },
    goHome(active) {
      window.sessionStorage.setItem("active",active);//存放在session之中
      this.active = active;
      this.$router.push({path: '/home'});
    },
    test() {
      console.log("test");
    },
    toGgleColl() {
      this.isCollapse = !this.isCollapse;
    },
    async saveNavState(active) {
      window.sessionStorage.setItem("active", active);//存放在session之中
      this.active = active;
    },
  }
}
</script>

<style>
/*图片样式*/
.home-logo{
  width: 55px;
  height: 55px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/*头样式*/
.el-header{
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0%;
  color: cornsilk;
  font-size: 20px;
  align-items: center;
}
/*脚样式*/
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/*边样式*/
.el-aside {
  background-color: #333744;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu{
  border-right: none;
}
/*主体样式*/
.el-main {
  background-color: #eaedf1;
  color: #333;
  text-align: center;
  /*line-height: 160px;*/
}
.home-container{
height: 100%;
}
.test{
  cursor: pointer;
}
.toggle-button{
  background-color: #4A5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
