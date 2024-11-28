<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in breadcrumbs"
    >
      <div class="text-16">{{ item.meta.name }}</div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import {ArrowRight} from "@element-plus/icons-vue";
import {useRoute} from "vue-router";

const route = useRoute()

const breadcrumbs = ref([])

console.log(route.matched);

const getBreadcrumb = () => {
  breadcrumbs.value = route.matched.filter((item) => {
    return item.meta && item.meta.name
  })
}
getBreadcrumb()

watch(
  () => route.path,
  (path) => {
    if (path.startsWith("/redirect/")) {
      return
    }
    getBreadcrumb()
  }
)


</script>
