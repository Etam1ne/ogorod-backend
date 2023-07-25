import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SoilMoistureDocument = SoilMoisture & Document;

@Schema()
export class SoilMoisture {
  @Prop()
  _id: string;
  
  @Prop()
  moisture: number;

  @Prop({})
  time: Date;
}

export const SoilMoistureSchema = SchemaFactory.createForClass(SoilMoisture);