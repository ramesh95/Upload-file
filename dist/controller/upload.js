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
    addImage(imageName, imageUrl, image) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("mmmmmmmm", imageName, imageUrl);
            // if (!body.imageName || !body.imageUrl) {
            //   console.log("Invalid imageName and imageurl");
            // }
            try {
                let imageInfoModel = new upload_1.ImageInfoModel();
                yield imageInfoModel.defineSchema();
                yield imageInfoModel.insertData(imageName, imageUrl);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.ImageEndpoints = ImageEndpoints;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb250cm9sbGVyL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQWdEO0FBRWhELE1BQWEsY0FBYztJQUNaLFFBQVEsQ0FDbkIsU0FBaUIsRUFDakIsUUFBZ0IsRUFDaEIsS0FBVTs7WUFHVixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFN0MsMkNBQTJDO1lBQzNDLG1EQUFtRDtZQUNuRCxJQUFJO1lBRUosSUFBSTtnQkFDRixJQUFJLGNBQWMsR0FBRyxJQUFJLHVCQUFjLEVBQUUsQ0FBQTtnQkFDekMsTUFBTSxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUE7Z0JBQ25DLE1BQU0sY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7YUFDckQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixNQUFNLENBQUMsQ0FBQzthQUNUO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFyQkQsd0NBcUJDIiwiZmlsZSI6ImNvbnRyb2xsZXIvdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VJbmZvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWwvdXBsb2FkXCJcblxuZXhwb3J0IGNsYXNzIEltYWdlRW5kcG9pbnRzIHtcbiAgcHVibGljIGFzeW5jIGFkZEltYWdlKFxuICAgIGltYWdlTmFtZTogc3RyaW5nLFxuICAgIGltYWdlVXJsOiBzdHJpbmcsXG4gICAgaW1hZ2U6IGFueVxuXG4gICkge1xuICAgIGNvbnNvbGUubG9nKFwibW1tbW1tbW1cIiwgaW1hZ2VOYW1lLCBpbWFnZVVybCk7XG5cbiAgICAvLyBpZiAoIWJvZHkuaW1hZ2VOYW1lIHx8ICFib2R5LmltYWdlVXJsKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcIkludmFsaWQgaW1hZ2VOYW1lIGFuZCBpbWFnZXVybFwiKTtcbiAgICAvLyB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IGltYWdlSW5mb01vZGVsID0gbmV3IEltYWdlSW5mb01vZGVsKClcbiAgICAgIGF3YWl0IGltYWdlSW5mb01vZGVsLmRlZmluZVNjaGVtYSgpXG4gICAgICBhd2FpdCBpbWFnZUluZm9Nb2RlbC5pbnNlcnREYXRhKGltYWdlTmFtZSwgaW1hZ2VVcmwpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
