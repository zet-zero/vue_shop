<template>
  <el-container class="home-container">
    <el-header>
      <div>
<!--        <img src="{#user.avatar}" alt=""/>-->
        <img src="../assets/logo.jpg" alt="" class="home-logo"/>
        <span>博客主页面</span>
      </div>
      <div  @click="gethome">
        <i class="el-icon-s-home"></i>
      </div>
    </el-header>


    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#409eff">
          <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-s-order"></i>
            <span>博客管理</span>
            </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-edit"></i>
              博客新增
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-document"></i>
              博客列表
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
            <el-menu-item index="1-4-1" @click="logout">安全退出</el-menu-item>
        </el-menu>
<!--        <el-button type="info" round @click="logout">安全退出</el-button>-->
      </el-aside>
      <el-container>
        <el-main>
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods:{
    logout(){
      window.sessionStorage.clear();//清除session
      this.$router.push("/login");//回到首页
    },
    gethome(){
      this.$router.push("/home");
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
  display: flex;
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
</style>
