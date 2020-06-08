import Router from "@koa/router";
import executeTest from '../service/executeTest'

const router = new Router();

router.get("/hello",ctx =>{
    ctx.body="hello"
})

router.get("/testgauge",async ctx =>{
    const result = await executeTest()
    ctx.response.body = result
})

export  default  router