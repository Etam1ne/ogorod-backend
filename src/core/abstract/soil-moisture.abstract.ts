import { GetByTimeDto } from "../dtos";
import { SoilMoisture } from "../entities";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class ISoilMoistureRepository extends IGenericRepository<SoilMoisture> {
    abstract getByRange(getByTimeDto: GetByTimeDto): Promise<SoilMoisture>;
}