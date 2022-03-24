  强迫症，不喜欢用以开源的ssr框架，封装的东西太多了！！！

1 借助：vite-plugin-ssr https://vite-plugin-ssr.com/

2 预渲染：
  示例：*.page.server.js文件

3 ui库：naive-ui
  动态按需引入库，组件无需单独引入，但函数api组件需要引入再使用：如message

4 路由配置：*.page.route.js文件
  按文件结构映射路由

5 scripts：{
    dev：开发环境
    prod：生产环境（yarn build && yarn server:prod）
  }
  
6 ui： naive-ui vfont sass 不需要自行删除

7 代码实例：

****在*.page.route.js中配置路由设置，包含动态参数配置****

****路由跳转-路由记忆-静默切换****

****在*.page.server.js中定义异步请求或暴露数据****

****在*.page.server.js中配置当前路由的SEO配置****

****异步数据通过实例的defineProps得到****

-----------------------------------------------------------------

****如果有什么缺陷，帮忙提出或者修改****

****修改创建一个新的分支****
