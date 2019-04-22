import { ImageInfoModel } from "../model/upload"

export class ImageEndpoints {

  //method to add  
  public async addFileData(
    imageName: string,
    fileName: string,
    imageUrl: string,
  ) {
    console.log("mmmmmmmm", imageName, imageUrl);

    if (!imageName || !imageUrl || !fileName) {
      console.log("Invalid imageName, fileName or imageurl");
    }

    try {
      let imageInfoModel = new ImageInfoModel()
      await imageInfoModel.defineSchema()
      await imageInfoModel.insertData(imageName, fileName, imageUrl)
    } catch (e) {
      throw e;
    }
  }
}
