"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const upload_1 = require("../resource/upload");
const express = require("express");
var multer = require('multer');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
app.use(bodyParser.json());
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});
var upload = multer({
    storage: storage
}).array("imgUploader", 3); //Field name and max count
router.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
router.post("/api/Upload", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return res.end("Something went wrong!");
        }
        let imageEndpoints = new upload_1.ImageEndpoints();
        imageEndpoints.addFileData(req.files[0].originalname, req.files[0].filename, req.files[0].destination);
        return res.end("File uploaded sucessfully!.");
    });
});
module.exports = router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXIvdXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQW1EO0FBQ25ELG1DQUFtQztBQUNuQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3hDLElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDN0IsV0FBVyxFQUFFLFVBQVMsR0FBTyxFQUFFLElBQVEsRUFBRSxRQUFZO1FBQ2pELFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNELFFBQVEsRUFBRSxVQUFTLEdBQU8sRUFBRSxJQUFRLEVBQUUsUUFBWTtRQUM5QyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDaEIsT0FBTyxFQUFFLE9BQU87Q0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7QUFFdEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBUyxHQUFPLEVBQUUsR0FBTztJQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVMsR0FBTyxFQUFFLEdBQU87SUFDaEQsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsVUFBUyxHQUFPO1FBQzdCLElBQUksR0FBRyxFQUFFO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksY0FBYyxHQUFHLElBQUksdUJBQWMsRUFBRSxDQUFDO1FBQzFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN0RyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoicm91dGVyL3VwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlRW5kcG9pbnRzIH0gZnJvbSBcIi4uL3Jlc291cmNlL3VwbG9hZFwiXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxudmFyIG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xudmFyIGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxudmFyIHN0b3JhZ2UgPSBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xuICAgIGRlc3RpbmF0aW9uOiBmdW5jdGlvbihyZXE6YW55LCBmaWxlOmFueSwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIFwiLi9JbWFnZXNcIik7XG4gICAgfSxcbiAgICBmaWxlbmFtZTogZnVuY3Rpb24ocmVxOmFueSwgZmlsZTphbnksIGNhbGxiYWNrOmFueSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBmaWxlLmZpZWxkbmFtZSArIFwiX1wiICsgRGF0ZS5ub3coKSArIFwiX1wiICsgZmlsZS5vcmlnaW5hbG5hbWUpO1xuICAgIH1cbn0pO1xuXG52YXIgdXBsb2FkID0gbXVsdGVyKHtcbiAgICBzdG9yYWdlOiBzdG9yYWdlXG59KS5hcnJheShcImltZ1VwbG9hZGVyXCIsIDMpOyAvL0ZpZWxkIG5hbWUgYW5kIG1heCBjb3VudFxuXG5yb3V0ZXIuZ2V0KFwiL1wiLCBmdW5jdGlvbihyZXE6YW55LCByZXM6YW55KSB7XG4gICAgcmVzLnNlbmRGaWxlKF9fZGlybmFtZSArIFwiL2luZGV4Lmh0bWxcIik7XG59KTtcblxucm91dGVyLnBvc3QoXCIvYXBpL1VwbG9hZFwiLCBmdW5jdGlvbihyZXE6YW55LCByZXM6YW55KSB7XG4gICAgdXBsb2FkKHJlcSwgcmVzLCBmdW5jdGlvbihlcnI6YW55KSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmVuZChcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW1hZ2VFbmRwb2ludHMgPSBuZXcgSW1hZ2VFbmRwb2ludHMoKTtcbiAgICAgICAgaW1hZ2VFbmRwb2ludHMuYWRkRmlsZURhdGEocmVxLmZpbGVzWzBdLm9yaWdpbmFsbmFtZSwgcmVxLmZpbGVzWzBdLmZpbGVuYW1lLCByZXEuZmlsZXNbMF0uZGVzdGluYXRpb24pXG4gICAgICAgIHJldHVybiByZXMuZW5kKFwiRmlsZSB1cGxvYWRlZCBzdWNlc3NmdWxseSEuXCIpO1xuICAgIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyJdfQ==
