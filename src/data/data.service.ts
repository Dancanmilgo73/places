import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Data } from './data.schema';

@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<Data>) {}

  // async findAll(): Promise<Data[]> {
  //   return this.dataModel.find().exec();
  // }

  async paginate(page: number, limit: number): Promise<Data[]> {
    return this.dataModel.find().skip((page - 1) * limit).limit(limit).exec();
  }

  async search(keyword: string): Promise<Data[]> {
    return this.dataModel.find({
      $or: [
        { name: { $regex: keyword, $options: 'i' } },
        { owner: { $regex: keyword, $options: 'i' } },
        { email: { $regex: keyword, $options: 'i' } },
      ],
    }).exec();
    }
    async searchByColumn(column: string, value: string): Promise<Data[]> {
    // Check if the column is a number type
    const isNumberColumn = !isNaN(parseFloat(value));

    // Construct the filter based on the column type
    const filter = isNumberColumn ? { [column]: parseFloat(value) } : { [column]: { $regex: value, $options: 'i' } };

    return this.dataModel.find(filter).exec();      
    // const filter = { [column]: { $regex: value, $options: 'i' } };
    // return this.dataModel.find(filter).exec();
  }
}
