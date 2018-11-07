const express = require('express')
const next = require('next')

// 不等于'production'则表示运行的是开发环境
const dev = process.env.NODE_ENV !== 'production'
// 创建一个服务端运行的Next app
const app = next({dev})
// 请求处理器
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/p/:id', (req, res) => {
            //将/p/:id的路径切换成/post?title=req.params.id的路径
            app.render(req, res, '/post', {title: req.params.id})
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })