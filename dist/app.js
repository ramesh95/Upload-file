"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
var path = require('path');
const router = require("./router/upload");
const mongoose = require("mongoose");
app.use('/', router);
app.use(Express.static(path.join(__dirname, 'public')));
const uri = "mongodb+srv://dev:qwerty123@cluster0-6kkji.mongodb.net/test?retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true, }).then(() => __awaiter(this, void 0, void 0, function* () {
    console.log("conected");
})).catch((e) => {
    console.log(e);
});
const port = 3000;
app.listen(port, () => console.log(`server started on port ${port}`));
module.exports = app;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDMUMscUNBQXFDO0FBRXJDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEQsTUFBTSxHQUFHLEdBQUcsOEVBQThFLENBQUM7QUFFM0YsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBQyxlQUFlLEVBQUUsSUFBSSxHQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBUyxFQUFFO0lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFHSCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFFbEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRXJFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmNvbnN0IGFwcCA9IEV4cHJlc3MoKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyL3VwbG9hZFwiKTtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuYXBwLnVzZSgnLycsIHJvdXRlcilcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycpKSk7XG5cbmNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9kZXY6cXdlcnR5MTIzQGNsdXN0ZXIwLTZra2ppLm1vbmdvZGIubmV0L3Rlc3Q/cmV0cnlXcml0ZXM9dHJ1ZVwiO1xuXG5tb25nb29zZS5jb25uZWN0KHVyaSwge3VzZU5ld1VybFBhcnNlcjogdHJ1ZSx9KS50aGVuKGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNvbmVjdGVkXCIpO1xufSkuY2F0Y2goKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTsgXG59KTtcblxuXG5jb25zdCBwb3J0ID0gMzAwMDtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgc2VydmVyIHN0YXJ0ZWQgb24gcG9ydCAke3BvcnR9YCkpXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwIl19
