<template>
  <Header/>
  <router-view></router-view>
  <DialogForm
    v-if="isShow"
    :params="dialogFormParams"
  />
</template>

<script setup>
import { useUserStore } from "@/store/modules/user.store.js";
import DialogForm from "@/components/DialogForm/DialogForm.vue";
import {useDialogFormStore} from "@/components/DialogForm/store/dialogForm.store.js";
import { storeToRefs } from "pinia"
import {useDeviceStore} from "@/store/modules/device.store.js";
import Header from "@/components/Header/index.vue"
import {_getUserInfo} from "@/service/api/user.js";

const { isShow, dialogFormParams } = storeToRefs(useDialogFormStore())

const userStore = useUserStore()

if (userStore.token) {
  userStore.changeUserInfo()
}

const { changeDevice } = useDeviceStore()

// 禁用鼠标滚轮缩放
// document.addEventListener('wheel', function(event) {
//   if (event.ctrlKey) {
//     event.preventDefault();
//   }
// }, { passive: false });

// 判断是否为移动设备
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 设置 viewport 的 initial-scale
function setViewport() {
  var viewport = document.querySelector("meta[name=viewport]");
  if (!viewport) {
    viewport = document.createElement("meta");
    viewport.name = "viewport";
    document.head.appendChild(viewport);
  }

  if (isMobile()) {
    viewport.content = "width=device-width, initial-scale=0.6";
  } else {
    viewport.content = "width=device-width, initial-scale=1.0";
  }
}

changeDevice(isMobile())

// 调用设置函数
// setViewport();
</script>

<style lang="scss">
html, body {
  width: 100%;
  overflow-x: hidden;
}

.avue-form__menu--left {
  margin-left: 18px;
}
</style>

