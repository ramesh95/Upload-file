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
const upload_1 = require("../model/upload");
class ImageEndpoints {
    //method to add  
    addFileData(imageName, fileName, imageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("mmmmmmmm", imageName, imageUrl);
            if (!imageName || !imageUrl || !fileName) {
                console.log("Invalid imageName, fileName or imageurl");
            }
            try {
                let imageInfoModel = new upload_1.ImageInfoModel();
                yield imageInfoModel.defineSchema();
                yield imageInfoModel.insertData(imageName, fileName, imageUrl);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.ImageEndpoints = ImageEndpoints;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXNvdXJjZS91cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRDQUFnRDtBQUVoRCxNQUFhLGNBQWM7SUFFekIsaUJBQWlCO0lBQ0osV0FBVyxDQUN0QixTQUFpQixFQUNqQixRQUFnQixFQUNoQixRQUFnQjs7WUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTdDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQzthQUN4RDtZQUVELElBQUk7Z0JBQ0YsSUFBSSxjQUFjLEdBQUcsSUFBSSx1QkFBYyxFQUFFLENBQUE7Z0JBQ3pDLE1BQU0sY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFBO2dCQUNuQyxNQUFNLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTthQUMvRDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQXRCRCx3Q0FzQkMiLCJmaWxlIjoicmVzb3VyY2UvdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VJbmZvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvdXBsb2FkXCJcblxuZXhwb3J0IGNsYXNzIEltYWdlRW5kcG9pbnRzIHtcblxuICAvL21ldGhvZCB0byBhZGQgIFxuICBwdWJsaWMgYXN5bmMgYWRkRmlsZURhdGEoXG4gICAgaW1hZ2VOYW1lOiBzdHJpbmcsXG4gICAgZmlsZU5hbWU6IHN0cmluZyxcbiAgICBpbWFnZVVybDogc3RyaW5nLFxuICApIHtcbiAgICBjb25zb2xlLmxvZyhcIm1tbW1tbW1tXCIsIGltYWdlTmFtZSwgaW1hZ2VVcmwpO1xuXG4gICAgaWYgKCFpbWFnZU5hbWUgfHwgIWltYWdlVXJsIHx8ICFmaWxlTmFtZSkge1xuICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIGltYWdlTmFtZSwgZmlsZU5hbWUgb3IgaW1hZ2V1cmxcIik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBpbWFnZUluZm9Nb2RlbCA9IG5ldyBJbWFnZUluZm9Nb2RlbCgpXG4gICAgICBhd2FpdCBpbWFnZUluZm9Nb2RlbC5kZWZpbmVTY2hlbWEoKVxuICAgICAgYXdhaXQgaW1hZ2VJbmZvTW9kZWwuaW5zZXJ0RGF0YShpbWFnZU5hbWUsIGZpbGVOYW1lLCBpbWFnZVVybClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxufVxuIl19
