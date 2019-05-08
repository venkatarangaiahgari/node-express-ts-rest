import express = require("express");

import * as testController from './controller/TestController'

const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', testController.hello);

app.post('/hi', testController.hiPost);

export default app;