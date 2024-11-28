<template>
  <el-upload
    v-loading="loading"
    ref="uploadRef"
    :action="ACTION"
    list-type="picture-card"
    v-model:file-list="fileList"
    :limit="limit"
    :headers="{
      Authorization: getToken()
    }"
    :disabled="fullDisabled"
    :before-upload="handleBeforeUpload"
    :on-success="handleSuccess"
    :on-error="handleError"
  >
    <template #default>
      <slot name="default">
        <el-icon>
          <Plus/>
        </el-icon>
      </slot>
    </template>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in/></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete/></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

<!--渲染到body，解决层级问题-->
  <Teleport to="body">
    <el-dialog v-model="dialogVisible">
      <img class="w-full" :src="dialogImageUrl" alt="Preview Image"/>
    </el-dialog>
  </Teleport>
</template>

<script setup>
import {ACTION} from "@/service/config.js";
import {getToken} from "@/utils/cookie/index.js";
import {useVModels} from "@vueuse/core";
import {handleImagePath} from "@/utils/index.js";

const props = defineProps({
  limit: {
    type: Number,
    default: 10
  },
  images: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const fullDisabled = computed(() => {
  if (props.disabled) return true

  return +fileList.value.length === +props.limit
})

const emit = defineEmits(['update:images'])

const {images} = useVModels(props, emit)

const uploadRef = ref(null)

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const fileList = ref([])

// 待解决图片问题
if (props.images) {
  const urls = props.images.split(',').map(url => ({url}))

  fileList.value = urls
}

// watchEffect(() => {
//   if (props.images) {
//     const urls = props.images.split(',').map(url => ({url}))
//
//     fileList.value = urls
//   }
// })

// 图片上传
const loading = ref(false)
const handleBeforeUpload = () => {
  loading.value = true
}

// 图片上传成功
const handleSuccess = (res) => {
  changeImages()

  loading.value = false
}

// 上传失败
const handleError = () => {
  loading.value = false
}

// 将图片发给父组件
const changeImages = () => {
  images.value = fileList.value.map(item => {
    if (item?.response) {
      return handleImagePath(item.response.data)
    } else {
      // item.url 是编辑状态下
      return handleImagePath(item?.url)
    }
  }).join(',')
}

const handleRemove = (file) => {
  const index = fileList.value.findIndex((item) => item.uid === file.uid)
  fileList.value.splice(index, 1)

  changeImages()
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

defineExpose({
  upload: uploadRef
})
</script>

<style lang="scss" scoped>
:deep(.el-upload-list__item) {
  > div {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      //object-fit: cover;
    }
  }
}
</style>
