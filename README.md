vite-vue-ssr

1 借助：vite-plugin-ssr
  https://vite-plugin-ssr.com/

2 已引入sass scss css

3 预渲染：
  示例：*.page.server.js文件

4 ui库：naive-ui
  动态按需引入库，组件无需单独引入，但函数api组件需要引入再使用：如message

5 路由配置：*.page.route.js文件
  路由没有使用route-view
  按文件结构映射路由

6 scripts：{
    dev：开发环境
    prod：生产环境
  }

7 seo优化处理：
  示例：
  import { usePageContext } from '../../pageContext/usePageContext';
  usePageContext().then(pageContext => {
    pageContext.documentProps = {
      title: `ssr vite vue`,
      description: `ssr vite vue`
    }
  })

****如果有什么缺陷，帮忙提出或者修改***********
****修改创建一个新的分支**********************