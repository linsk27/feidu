/*
 * @Author: linsk27 14062626+linsk27@user.noreply.gitee.com
 * @Date: 2025-03-30 15:48:02
 * @LastEditors: linsk27 14062626+linsk27@user.noreply.gitee.com
 * @LastEditTime: 2025-03-31 21:40:53
 * @FilePath: \入门项目\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    'element-plus/dist/index.css'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
