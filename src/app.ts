const Express = require("express");
const app = Express();
var path = require('path');
const router = require("./router/upload");
import * as mongoose from 'mongoose';

app.use('/', router)
app.use(Express.static(path.join(__dirname, 'public')));

const uri = "mongodb+srv://dev:qwerty123@cluster0-6kkji.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, {useNewUrlParser: true,}).then(async () => {
    console.log("conected");
}).catch((e) => {
    console.log(e); 
});


const port = 3000;

app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app