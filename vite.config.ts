import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx';
import Delete from 'rollup-plugin-delete'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build:{
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'x-ui',
      fileName: format => `x-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
      plugins:[
          Delete({
            targets: ["dist/*.{ico,txt}"],
            hook: "generateBundle"
          })
      ]
    }
  }
})
