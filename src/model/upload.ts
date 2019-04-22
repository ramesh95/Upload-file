import { Document, Schema, SchemaTypes } from 'mongoose';
import * as mongoose from 'mongoose';
import * as UUID from 'uuid'

export interface IImageInfoDocuments extends Document {
    _id: string,
    imageName: string,
    fileName: string,
    imageUrl: string
}

export class ImageInfoModel {
    ImageModel: mongoose.Model<IImageInfoDocuments>;

    // Method to define scheam
    public async defineSchema(
    ) {
        try {
            this.ImageModel = mongoose.model<IImageInfoDocuments>('Imagedb', new Schema({
                _id: SchemaTypes.String
                , imageName: SchemaTypes.String
                , fileName: SchemaTypes.String
                , imageUrl: SchemaTypes.String
            }, { versionKey: false }));
        } catch (e) {
            throw e
        }
    }

    // method to insert data
    public async insertData(
        imageName: string
        , fileName: string
        , imageUrl: string
    ){
        try {
            if (this.ImageModel != undefined) {
                await this.ImageModel.insertMany(
                    {
                        _id: UUID.v4()
                       , imageName: imageName
                       , fileName: fileName
                       , imageUrl: imageUrl
                    });
            }
        } catch (error) {
            throw error;
        }
    }
}
