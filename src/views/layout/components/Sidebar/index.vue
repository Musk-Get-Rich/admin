<template>
  <div class="py-4 flex-1 overflow-auto menu-wrapper">
    <el-menu
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      :default-active="defaultActive"
    >
      <template
        v-for="(item, index) in routes"
      >
        <!-- 二级菜单 -->
        <template v-if="item.meta">
          <el-sub-menu
            :key="index"
            :index="String(index)"
          >
            <template #title>
              <SvgIcon size="18" :name="item.meta.icon"/>
              <span class="ml-12 text-14">{{ item.meta.name }}</span>
            </template>
            <el-menu-item
              v-for="(sub, i) in item.children"
              :key="sub.id"
              :index="`${index}-${i}`"
              @click="handleClick(`${item.path}/${sub.path}`, `${index}-${i}`, sub)"
            >
              <SvgIcon v-if="sub.icon" size="18" :name="sub.icon"/>
              <span class="ml-8 text-14">{{ sub.meta.name }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
        <!-- 二级菜单 -->

        <template v-else>
          <el-menu-item
            :key="index"
            :index="String(index)"
            @click="handleClick(`/${item.children[0].path}`, index, item)"
          >
            <SvgIcon size="18" :name="item.children[0].meta.icon"/>
            <span class="ml-8 text-14">{{ item.children[0].meta.name }}</span>
          </el-menu-item>
        </template>
      </template>

    </el-menu>
  </div>
</template>
<script setup>
import {useRouter} from "vue-router";
import {MENU_ACTIVE_INDEX, MENU_TYPE} from "@/config/storageKey.js";
import {useSessionStorage} from "@vueuse/core";
import {dashBoard} from "@/config/routes.js";
import {routes} from "@/router/routes.js";
import {useTags} from "@/components/TagsView/hook/useTags.js";
import {storeToRefs} from "pinia";
import {useTagsStore} from "@/store/modules/tags.store.js";

const props = defineProps({
  collapse: Boolean,
  active: {
    type: Number,
    required: true
  }
})

const { addTag } = useTagsStore()

const router = useRouter()

/**
 * 默认展示的菜单
 */
const defaultActive = useSessionStorage(MENU_ACTIVE_INDEX, '0')

// 菜单切换
const openeds = ref(['0']) // 默认展开的索引

const handleClick = (path, index, item) => {

  setMenuActive(index)

  addTag({
    path,
    name: item.meta ? item.meta.name : item.children[0].meta.name,
    index
  })

  router.push({
    path,
  })
}

const setMenuActive = (index) => {
  defaultActive.value = String(index)
}

defineExpose({
  setMenuActive
})
</script>

<style lang="scss" scoped>
:deep(.el-menu) {
  background: var(--main-color);
  border-right: none;

  .el-sub-menu {
    overflow: hidden;
  }

  .el-sub-menu__title {
    padding-right: 0;
    color: #b8c7ce;
    font-size: 14px;

    &:hover {
      background-color: #181f23;
      color: #fff;
    }
  }

  .el-sub-menu.is-active .el-sub-menu__title {
    background-color: var(--main-color);
    color: #fff;
  }

  .el-menu-item {
    position: relative;
    transition: ease .4s;
    box-sizing: border-box;
    color: #b8c7ce;
    font-size: 14px;

    &.is-active,
    &:hover {
      box-sizing: border-box;
      //border-left: 4px solid deepskyblue;
      background-color: #181f23;
      color: #fff;
    }

    &.is-active::after,
    &:hover::after {
      opacity: 1;
    }

    //&.is-active {
    //  &::after {
    //    content: "";
    //    position: absolute;
    //    bottom: 6px;
    //    left: 49px;
    //    width: 50px;
    //    height: 3px;
    //    background: var(--main-color-yellow);
    //  }
    //}
  }

  .el-menu--collapse {

  }
}

.menu-wrapper::-webkit-scrollbar {
  display: none;
}
</style>
