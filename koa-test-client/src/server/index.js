import Koa from "koa"
import router from "./router";
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser())
app.use(router.routes(app));

app.listen(3003)


export default app;