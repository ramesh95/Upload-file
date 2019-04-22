import { ImageEndpoints } from "../resource/upload"
import express = require('express')
var multer = require('multer');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router()
app.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: function(req:any, file:any, callback:any) {
        callback(null, "./Images");
    },
    filename: function(req:any, file:any, callback:any) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: storage
}).array("imgUploader", 3); //Field name and max count

router.get("/", function(req:any, res:any) {
    res.sendFile(__dirname + "/index.html");
});

router.post("/api/Upload", function(req:any, res:any) {
    upload(req, res, function(err:any) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong!");
        }
        let imageEndpoints = new ImageEndpoints();
        imageEndpoints.addFileData(req.files[0].originalname, req.files[0].filename, req.files[0].destination)
        return res.end("File uploaded sucessfully!.");
    });
});

module.exports = router;