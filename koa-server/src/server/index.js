import Koa from "koa"
import router from "./router";

const app = new Koa();

app.use(router.routes(app));

app.listen(3002)


export default app;