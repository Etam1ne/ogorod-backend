import { GetByTimeDto } from "../../../core/dtos";
import { SoilMoisture } from "./models";
import { MongoGenericRepository } from "./mongo-generic-repository";
import { Model } from "mongoose";

export class SoilMoistureRepository extends MongoGenericRepository<SoilMoisture> {
    constructor(_repository: Model<SoilMoisture>) {
        super(_repository);
      }

    public getByRange({ fromDate, toDate }: GetByTimeDto) {
        return this._repository.find({ time: { $gte: fromDate, $lte: toDate }}).exec();
    }
}