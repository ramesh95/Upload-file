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
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const UUID = require("uuid");
class ImageInfoModel {
    // Method to define scheam
    defineSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.ImageModel = mongoose.model('Imagedb', new mongoose_1.Schema({
                    _id: mongoose_1.SchemaTypes.String,
                    imageName: mongoose_1.SchemaTypes.String,
                    fileName: mongoose_1.SchemaTypes.String,
                    imageUrl: mongoose_1.SchemaTypes.String
                }, { versionKey: false }));
            }
            catch (e) {
                throw e;
            }
        });
    }
    // method to insert data
    insertData(imageName, fileName, imageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.ImageModel != undefined) {
                    yield this.ImageModel.insertMany({
                        _id: UUID.v4(),
                        imageName: imageName,
                        fileName: fileName,
                        imageUrl: imageUrl
                    });
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.ImageInfoModel = ImageInfoModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2RlbC91cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUF5RDtBQUN6RCxxQ0FBcUM7QUFDckMsNkJBQTRCO0FBUzVCLE1BQWEsY0FBYztJQUd2QiwwQkFBMEI7SUFDYixZQUFZOztZQUVyQixJQUFJO2dCQUNBLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBc0IsU0FBUyxFQUFFLElBQUksaUJBQU0sQ0FBQztvQkFDeEUsR0FBRyxFQUFFLHNCQUFXLENBQUMsTUFBTTtvQkFDckIsU0FBUyxFQUFFLHNCQUFXLENBQUMsTUFBTTtvQkFDN0IsUUFBUSxFQUFFLHNCQUFXLENBQUMsTUFBTTtvQkFDNUIsUUFBUSxFQUFFLHNCQUFXLENBQUMsTUFBTTtpQkFDakMsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixNQUFNLENBQUMsQ0FBQTthQUNWO1FBQ0wsQ0FBQztLQUFBO0lBRUQsd0JBQXdCO0lBQ1gsVUFBVSxDQUNuQixTQUFpQixFQUNmLFFBQWdCLEVBQ2hCLFFBQWdCOztZQUVsQixJQUFJO2dCQUNBLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQzVCO3dCQUNJLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO3dCQUNiLFNBQVMsRUFBRSxTQUFTO3dCQUNwQixRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLFFBQVE7cUJBQ3RCLENBQUMsQ0FBQztpQkFDVjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osTUFBTSxLQUFLLENBQUM7YUFDZjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBdENELHdDQXNDQyIsImZpbGUiOiJtb2RlbC91cGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudCwgU2NoZW1hLCBTY2hlbWFUeXBlcyB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCAqIGFzIFVVSUQgZnJvbSAndXVpZCdcblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VJbmZvRG9jdW1lbnRzIGV4dGVuZHMgRG9jdW1lbnQge1xuICAgIF9pZDogc3RyaW5nLFxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgaW1hZ2VVcmw6IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VJbmZvTW9kZWwge1xuICAgIEltYWdlTW9kZWw6IG1vbmdvb3NlLk1vZGVsPElJbWFnZUluZm9Eb2N1bWVudHM+O1xuXG4gICAgLy8gTWV0aG9kIHRvIGRlZmluZSBzY2hlYW1cbiAgICBwdWJsaWMgYXN5bmMgZGVmaW5lU2NoZW1hKFxuICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5JbWFnZU1vZGVsID0gbW9uZ29vc2UubW9kZWw8SUltYWdlSW5mb0RvY3VtZW50cz4oJ0ltYWdlZGInLCBuZXcgU2NoZW1hKHtcbiAgICAgICAgICAgICAgICBfaWQ6IFNjaGVtYVR5cGVzLlN0cmluZ1xuICAgICAgICAgICAgICAgICwgaW1hZ2VOYW1lOiBTY2hlbWFUeXBlcy5TdHJpbmdcbiAgICAgICAgICAgICAgICAsIGZpbGVOYW1lOiBTY2hlbWFUeXBlcy5TdHJpbmdcbiAgICAgICAgICAgICAgICAsIGltYWdlVXJsOiBTY2hlbWFUeXBlcy5TdHJpbmdcbiAgICAgICAgICAgIH0sIHsgdmVyc2lvbktleTogZmFsc2UgfSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtZXRob2QgdG8gaW5zZXJ0IGRhdGFcbiAgICBwdWJsaWMgYXN5bmMgaW5zZXJ0RGF0YShcbiAgICAgICAgaW1hZ2VOYW1lOiBzdHJpbmdcbiAgICAgICAgLCBmaWxlTmFtZTogc3RyaW5nXG4gICAgICAgICwgaW1hZ2VVcmw6IHN0cmluZ1xuICAgICl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5JbWFnZU1vZGVsICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuSW1hZ2VNb2RlbC5pbnNlcnRNYW55KFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IFVVSUQudjQoKVxuICAgICAgICAgICAgICAgICAgICAgICAsIGltYWdlTmFtZTogaW1hZ2VOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICwgZmlsZU5hbWU6IGZpbGVOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICwgaW1hZ2VVcmw6IGltYWdlVXJsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
