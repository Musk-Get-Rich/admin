<template>
  <div>
    <Search />
    <el-row class="mt-20">
      <el-table :data="tableData" :header-cell-style="{background:'#E7F4EB',height: '60px'}">
        <el-table-column prop="date" label="请选择" />
        <el-table-column prop="name" label="加密货币名称" />
        <el-table-column prop="state" label="加密货币地址" />
        <el-table-column prop="city" label="协议" />
        <el-table-column prop="address" label="操作" />
      </el-table>
    </el-row>
  </div>
</template>

<script setup>
import Search from './Search.vue';

</script>

<style lang="scss" scoped>

</style>