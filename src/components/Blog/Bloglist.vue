<template>
<div class="justify-content: flex-end;">

<!--面包屑-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>博客列表</el-breadcrumb-item>
    </el-breadcrumb>
  <el-card>
  <!--搜索区域-->
  <el-row :gutter="25">
    <el-col :span="10">
      <!-- 搜索添加 -->
      <el-input placeholder="请输入搜索内容" size="mini" >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </el-col>
  </el-row>
  </el-card>
<!--  v-for="item in blogList" :key="item.id"-->
  <div style="width:100%;overflow: hidden;height:550px;margin: auto;" >
    <el-scrollbar style="height:100%" aria-hidden="true">
            <el-timeline v-for="item in blogList" :key="item.created">
              <el-timeline-item :timestamp="item.created" placement="top" type="info" icon="el-icon-more">
                <el-card>
                  <h4>{{ item.title }}</h4>
                  <p>{{item.description}}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
    </el-scrollbar>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      input: '',
      blogList:[],
    }
  },
  created() {
    this.getBlogList();
  },
  methods: {
    goHome(active) {
      window.sessionStorage.setItem("active",active);//存放在session之中
      this.$router.push({path: '/home'});
    },
    async getBlogList() {
      console.log(JSON.parse(window.sessionStorage.getItem("user")).id);
      const {data: res} = await axios.post("api/blog/list",JSON.parse(window.sessionStorage.getItem("user")));
      console.log(res);
      if (res){
        this.blogList = res;
        console.log(this.blogList)
      }
    },
  }
}
</script>

<style scoped>

</style>
