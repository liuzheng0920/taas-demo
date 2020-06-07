import Router from "@koa/router";
import cellGaugeByLocal from '../service/callGaugeTest'

const router = new Router();

router.get("/hello",ctx =>{
    ctx.body="hello"
})

router.get("/testgage",async ctx =>{
    const result = await cellGaugeByLocal()
    ctx.response.body = result
})

export  default  router