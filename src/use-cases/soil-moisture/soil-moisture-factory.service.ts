import { Injectable } from "@nestjs/common";
import { AddSoilMoistureDto } from "../../core/dtos";
import { SoilMoisture } from "../../core/entities";
import { randomUUID } from "crypto";

@Injectable()
export class SoilMoistureFactoryService {
    createNewData(addSoilMoistureDto: AddSoilMoistureDto): SoilMoisture {
        
          const date = new Date();
          const dateWithTimezone = date.toLocaleString('en-US', { timeZone: "Etc/GMT-3"});

        const newSoilMoistureData: SoilMoisture = {
            _id: randomUUID(),
            time: new Date(dateWithTimezone),
            ...addSoilMoistureDto
        };

        return newSoilMoistureData
    }
}