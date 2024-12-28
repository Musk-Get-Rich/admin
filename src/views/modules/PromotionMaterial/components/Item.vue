<template>
    <el-row
        class="!w-full h-344px border-double border-gray-200 border-1 rounded-3xl shadow-gray-500 py-20 px-20 mb-20">
        <el-col :span="12" class="w-full h-full flex items-center justify-center p-10">
            <img crossOrigin="Anonymous" class="w-100% h-100%" :src="data.url" alt="">
            <canvas ref="mergeCanvas" class="w-100% h-100% hidden" :width="imageSize.width"
                :height="imageSize.height"></canvas>
        </el-col>
        <el-col :span="12" class="h-full flex flex-col items-center justify-center">
            <div class="w-300px text-left">
                <div class="mb-20">
                    <span class="text-#868D88">{{ $t('所属平台') }}：</span>
                    <span>{{ $t('马来西亚') }}</span>
                </div>
                <div class="mb-20">
                    <span class="text-#868D88">{{ $t('更新日期') }}：</span>
                    <span>{{ data.time }}</span>
                </div>
                <div class="flex mb-20">
                    <span class="text-#868D88">{{ $t('图片尺寸') }}：</span>
                    <span>{{ imageSize.width }}x{{ imageSize.height }}</span>
                    <div class="flex ml-10 cursor-pointer">
                        <img crossOrigin="" class="w-20 h-20 mr-5" src="@/assets/images/promotion/import.png" alt="">
                        <span class="text-#25D55B" @click="downloadImage(data.url)">{{ $t('立即下载') }}</span>
                    </div>
                </div>
                <div class="w-124px h-46px bg-#25D55B text-white rounded-50px flex items-center justify-center cursor-pointer"
                    @click="downloadMergedImage">
                    {{ $t('生成二维码') }}
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'
import { useImageDownload } from '../hooks';

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
    inviteUrl: {
        type: String,
        required: true
    },
})

const mergeCanvas = ref(null)
const imageSize = ref({ width: 0, height: 0 })
const backgroundImage = ref(null)
const qrcodeUrl = ref('')

const { downloadImage } = useImageDownload()

// 获取图片尺寸
const getImageSize = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height
            })
        }
        img.onerror = reject
        img.src = url
    })
}

// 生成二维码
const generateQRCode = async () => {
    if (!props.inviteUrl) {
        return null;
    }
    try {
        return await QRCode.toDataURL(props.inviteUrl, {
            width: 150,
            margin: 1,
            color: {
                dark: '#000',
                light: '#ffffff'
            }
        })
    } catch (err) {
        console.error('二维码生成失败', err)
        return null
    }
}

const generateBackground = async (qrcodeDataUrl = '') => {
    // 清空画布
    const canvas = mergeCanvas.value
    const ctx = canvas.getContext('2d')
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 创建背景图片
    backgroundImage.value = new Image()
    backgroundImage.value.crossOrigin = 'Anonymous'
    backgroundImage.value.src = props.data.url

    await new Promise(resolve => {
        backgroundImage.value.onload = resolve
    })

    // 绘制背景图片
    ctx.drawImage(backgroundImage.value, 0, 0, canvas.width, canvas.height)

    if (qrcodeDataUrl) {

        // 创建并绘制二维码
        const qrcodeImage = new Image()
        qrcodeImage.onload = () => {
            // 在右下角绘制二维码
            ctx.drawImage(
                qrcodeImage,
                canvas.width - 200,
                canvas.height - 200,
                150,
                150
            )
        }
        qrcodeImage.src = qrcodeDataUrl
    }
}

// 生成带背景的二维码图片
const generateQRCodeWithBackground = async () => {
    const qrcodeDataUrl = await generateQRCode()
    // 创建背景图片
    generateBackground(qrcodeDataUrl);
}

// 下载合并后的图片
const downloadMergedImage = async () => {
    await generateQRCodeWithBackground()
    await nextTick()
    setTimeout(() => {
        const canvas = mergeCanvas.value
        try {
            // 将 canvas 转换为 Blob
            canvas.toBlob((blob) => {
                if (!blob) return

                // 创建下载链接
                const link = document.createElement('a')
                link.download = `Invite-image-${Date.now()}.png`
                link.href = URL.createObjectURL(blob)

                // 触发下载
                link.click()

                // 释放资源
                URL.revokeObjectURL(link.href)
                generateBackground()
            }, 'image/png')
        } catch (error) {
            console.error('下载失败', error)
            ElMessage.error('图片下载失败')
        }
    }, 1000);
}

// 页面挂载时获取图片尺寸
onMounted(async () => {
    const size = await getImageSize(props.data.url)
    imageSize.value = size
    generateBackground()
})
</script>
