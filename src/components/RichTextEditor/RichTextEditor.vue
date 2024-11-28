<template>
  <div
    class="relative z-full border-1 border-solid border-#ccc"
    @contextmenu="handleContextmenu"
  >
    <Toolbar
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
      class="border-b-1 border-b-solid border-b-#ccc"
    />
    <Editor
      style="height: 400px; overflow-y: hidden"
      :defaultConfig="editorConfig"
      :mode="mode"
      v-model="valueHtml"
      @onCreated="handleCreated"
      @onDestroyed="handleDestroyed"
      @onFocus="handleFocus"
      @onBlur="handleBlur"
      @customAlert="customAlert"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {Editor, Toolbar} from '@wangeditor/editor-for-vue';
import {i18nChangeLanguage} from '@wangeditor/editor'
import {ACTION} from "@/service/config.js";
import {getToken} from "@/utils/cookie/index.js";

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
})

// 切换语言 - 'en' 或者 'zh-CN'
i18nChangeLanguage('zh-CN')

const mode = 'default';

// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref(``);

const getHtml = () => {
  const val = editorRef.value.getHtml()
  return val.replace('<p><br></p>', '')
}

watch(
  () => props.content,
  (val) => {
    if (val) {
      nextTick(() => {
        // 换行符转义，以正确在编辑器中显示
        editorRef.value.setHtml(val.replace("<br>", "\n"))
      })
    }
  },
  {
    deep: true,
    immediate: true
  }
)

const toolbarConfig = {};
const editorConfig = {
  placeholder: 'Please enter content...',
  MENU_CONF: {
    // 上传图片
    uploadImage: {
      fieldName: "file", // 上传到服务器的文件字段名
      server: ACTION,
      headers: {
        Authorization: getToken()
      },
      // 超时时间，默认为 10 秒
      timeout: 5 * 1000, // 5 秒
      // 自定义插入图片
      customInsert(res, insertFn) {  // TS 语法
        console.log(res);
        // res 即服务端的返回结果

        // 从 res 中找到 url alt href ，然后插入图片
        insertFn(res.data)
      },
    },
  },
};

// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.destroy();
});

// 编辑器回调函数
const handleCreated = (editor) => {
  // console.log('created', editor);
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleDestroyed = (editor) => {
  // console.log('destroyed', editor);
};
const handleFocus = (editor) => {
  // console.log('focus', editor);
};
const handleBlur = (editor) => {
  // console.log('blur', editor);
};
const customAlert = (info, type) => {
  // alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor, event, callback) => {
  console.log('ClipboardEvent 粘贴事件对象', event);

  // 自定义插入内容
  editor.insertText('xxx');

  // 返回值（注意，vue 事件的返回值，不能用 return）
  callback(true); // 返回 false ，阻止默认粘贴行为
  // callback(true) // 返回 true ，继续默认的粘贴行为
};

const insertText = () => {
  const editor = editorRef.value;
  if (editor == null) return;

  editor.insertText('hello world');
};

const printHtml = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  console.log(editor.getHtml());
};

const disable = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.disable();
};

// 禁用右键菜单
const handleContextmenu = (e) => {
  e.preventDefault();
}

defineExpose({
  getHtml
})
</script>
