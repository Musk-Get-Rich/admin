<template>
  <div>
    <el-card>
      <Title name="联系我们" />
      <div class="text-16px text-#3A3541 mb-20">在线客服</div>
      <el-row class="mb-50">
        <div class="border-1 border-solid border-#25D55B text-#25D55B px-10px py-5px mr-10 rounded-4px">主线客服1</div>
        <div class="border-1 border-solid border-#25D55B text-#25D55B px-10px py-5px rounded-4px">主线客服2</div>
      </el-row>
      <div class="text-16px text-#3A3541 mb-20">投诉箱</div>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-80px text-right">意见类型</span>
        <el-select v-model="value" class="!w-571px" placeholder="请选择问题类型" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-row>
      <el-row class="!w-full items-center">
        <span class="mr-10 block w-80px text-right">描述</span>
        <el-input
          v-model="value"
          class="!w-571px !h-92px"
          :rows="4"
          type="textarea"
          placeholder=""
        />
      </el-row>
      <el-row class="pl-90 mt-20">
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-row>
      <el-row class="pl-90 mt-20">
        <el-button class="!w-300px !h-46px !rounded-40px !bg-#25D55B" type="success">确认</el-button>
      </el-row>
      <div class="text-16px text-#3A3541 mb-20 mt-50">回电服务</div>
      <div class="mt-20 text-14px text-#3A3541 mb-40">本公司提供24小时全天候的高素质客户服务热线，及多种语言选择，包括中文、台语及英语，如有任何疑问请与我们联系。</div>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-80px text-right">问题类型</span>
        <el-select v-model="value" class="!w-571px" placeholder="请选择问题类型" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-row>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-80px text-right">语言</span>
        <el-select v-model="value" class="!w-571px" placeholder="请选择语言" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-row>
      <el-row class="!w-full items-center mb-20">
        <span class="mr-10 block w-80px text-right">手机号码</span>
        <el-select v-model="value" class="!w-571px" placeholder="+请加上区域码 例如大陆地区+86 台湾地区+886" size="large">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-row>
      <el-row class="flex flex-col">
        <div class="text-16px text-#3A3541 mb-20 mt-30">回电服务</div>
        <div class="text-14px text-#3A3541 mb-30 my-10">本公司提供24小时全天候的高素质客户服务热线，及多种语言选择，包括中文、台语及英语，如有任何疑问请与我们联系。
        </div>
        <div class="w-300px h-46px border-1 border-solid border-#25D55B text-#25D55B px-10px mr-10 rounded-8px flex items-center justify-center">
          0063 9615728888
        </div>
      </el-row>
      <el-row class="flex flex-col mt-30">
        <div class="text-16px text-#3A3541 mb-20 mt-30">回电服务</div>
        <div class="text-14px text-#3A3541 mb-30 my-10">本公司提供24小时全天候的高素质客户服务热线，及多种语言选择，包括中文、台语及英语，如有任何疑问请与我们联系。
        </div>
        <div class="w-300px h-46px border-1 border-solid border-#25D55B text-#25D55B px-10px mr-10 rounded-8px flex items-center justify-center">
          0063 2-2-2-32662-1
        </div>
      </el-row>
      <el-row class="flex flex-col mt-30">
        <div class="text-16px text-#3A3541 mb-20 mt-30">回电服务</div>
        <div class="text-14px text-#3A3541 mb-30 my-10">本公司提供24小时全天候的高素质客户服务热线，及多种语言选择，包括中文、台语及英语，如有任何疑问请与我们联系。
        </div>
        <div class="w-300px h-46px border-1 border-solid border-#25D55B text-#25D55B px-10px mr-10 rounded-8px flex items-center justify-center">
          BA88dsnhdfvs$@gmail.com
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script setup>
import Title from "@/components/Title/index.vue";
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const value = ref('')

const options = [
  {
    value: '选项1',
    label: '黄金糕',
  },
  {
    value: '选项2',
    label: '双皮奶',
  },
  {
    value: '选项3',
    label: '蚵仔煎',
  },
  {
    value: '选项4',
    label: '龙须面',
  },
  {
    value: '选项5',
    label: '北京烤鸭',
  },
];

const imageUrl = ref('')

const handleAvatarSuccess = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}

</script>

<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>