import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
    base: '/',
    server: {
      host: '0.0.0.0',
      port: 8268,
    },
    esbuild: {
      drop: ['console', 'debugger']
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        dts: 'src/auto-import.js',
      }),
      UnoCSS(),
      createSvgIconsPlugin({
        // 指定要缓存的文件夹
        iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
        // 指定symbolId格式
        symbolId: "icon-[name]"
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
    ],
    resolve: {
      // ↓路径别名
      alias: {
        "@": resolve(__dirname, "src")
      },
      // 不用写后缀名
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss', '.css']
    },
    build: {
      dynamicImportVarsOptions: {
        preload: true,
        includeFileExtension: true,
        exportType: 'auto',
        strictESM: false
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      target: 'es2015',
      assetsDir: "static",
      rollupOptions: {
        input: {
          index: resolve(__dirname, "index.html"),
        },
        output: {
          dir: `dist/`,
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/name-[hash].[ext]"
        }
      },
    },
  })
}



