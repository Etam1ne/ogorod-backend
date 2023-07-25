import { ISoilMoistureRepository } from './soil-moisture.abstract';

export abstract class IDataServices {
  abstract soilMoisture: ISoilMoistureRepository;
}