import Router from "koa-router";

const router = new Router();

router.get("/hello",ctx =>{
    ctx.body="hello"
})

router.post("/addUser",(ctx, next) =>{
    let param = ctx.request.body
    console.info(`接收报文${JSON.stringify(param)}`)
    param.email = '123@ceb.com'
    ctx.response.body = param
})

export  default  router
