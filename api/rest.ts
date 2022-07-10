import * as oak  from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { qrgen } from '../files/qrcode.ts'

const port = 5000

const app = new oak.Application()
const route = new oak.Router()

route.get('/', (ctx) => {
    ctx.response.body = {message: 'Hello, World!'}
})

route.all('/qrgen/:item', async (ctx) => {
    ctx.response.status = 200
    ctx.response.headers.set("Content-Type", "text/html") // set 
    ctx.response.body = `<center><img src="${await qrgen(ctx.params.item)}" /></center>`
})

app.use(route.routes())

app.listen({ port })
console.log(`Server started at port: http://localhost:${port}`)