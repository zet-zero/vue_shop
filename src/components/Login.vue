<template>
  <div id="app">
    <div class="login_container">
      <!--登录块-->
      <div class="login_box">
      <!--Login-->
        <div class="avatar_box">
          <img src="../assets/logo.png"/>
        </div>
<!--        表单区域-->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    Login页面
  </div>
</template>

<script>

</script>

<style lang="less">

</style>
