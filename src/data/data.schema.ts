import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: process.env.COLLECTION_NAME })
export class Data extends Document {
    @Prop()
    id: number;

    @Prop()
    owner: string;

    @Prop()
    name: string;
    
    @Prop()
    meter: number;

    @Prop()
    owner_contact: string;

    @Prop()
    mobile_buying: number;

    @Prop()
    postal_address2: string;

    @Prop()
    serial_number: number;

    @Prop()
    xy_coordnates: string;

    @Prop()
    phone_2: string;

    @Prop()
    email: string;    

    @Prop()
    document_id: number;    
}

export const DataSchema = SchemaFactory.createForClass(Data);
