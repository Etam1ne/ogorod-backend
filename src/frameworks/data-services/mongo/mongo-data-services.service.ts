import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDataServices } from '../../../core/abstract';
import { Model } from 'mongoose';
import { SoilMoisture } from './models';
import { SoilMoistureRepository } from './soil-moisture.repository';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  soilMoisture: any;

  constructor(
    @InjectModel(SoilMoisture.name)
    private SoilMoistureRepository: Model<SoilMoisture>,
  ) {}

  onApplicationBootstrap() {
    this.soilMoisture = new SoilMoistureRepository(this.SoilMoistureRepository);
  }
}