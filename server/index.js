const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
// const http = require('http');

// Import and Set Nuxt.js options

// 创建一个 Express 实例
const app = express()

// 配置路由
const router = express.Router()
router.get('/api/hello', async (req, res) => {
  res.send('Hello World!')
})

// 将路由添加到 Express 实例
app.use(router)

// 配置 Nuxt.js
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

// 创建 Nuxt.js 实例
const nuxt = new Nuxt(config)

// 使用 Builder 构建静态文件（可选）
const builder = new Builder(nuxt)
builder.build()

// 将 Express 服务器挂载到指定的端口
app.listen(3000, () => {
  consola.ready({
    message: 'Server is running on port 3000',
    symbol: '🎉'
  })
})
