import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SoilMoisture, SoilMoistureSchema } from './models';
import { IDataServices } from '../../../core/abstract';
import { MongoDataServices } from './mongo-data-services.service';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'development.env'}),
    MongooseModule.forFeature([{ name: SoilMoisture.name, schema: SoilMoistureSchema }]),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}