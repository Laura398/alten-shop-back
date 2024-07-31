import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({
    required: true,
    unique: true,
    index: true,
    type: Number,
  })
  id: number;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  inventoryStatus: string;

  @Prop({ required: true })
  category: string;

  @Prop()
  image: string;

  @Prop()
  rating: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
