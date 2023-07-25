import { Injectable } from "@nestjs/common";
import { IDataServices } from "../../core/abstract";
import { AddSoilMoistureDto, GetByTimeDto } from "../../core/dtos";
import { SoilMoisture } from "../../core/entities";
import { SoilMoistureFactoryService } from "./soil-moisture-factory.service";

@Injectable()
export class SoilMoistureUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly soilMoistureFactory: SoilMoistureFactoryService,
    ) {}

    public create(addSoilMoistureDto: AddSoilMoistureDto): Promise<SoilMoisture> {
        const newSoilMoistureData = this.soilMoistureFactory.createNewData(addSoilMoistureDto);

        return this.dataServices.soilMoisture.create(newSoilMoistureData);
    }

    public getTimeAgo({ fromDate, toDate }: GetByTimeDto) {
        fromDate = fromDate ?? new Date('2000-01-01');
        toDate = toDate ?? new Date();

        return this.dataServices.soilMoisture.getByRange({ fromDate, toDate });
    }
}