import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModule } from './data/data.module'; // Import the DataModule

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    DataModule,
  ],
})
export class AppModule {}