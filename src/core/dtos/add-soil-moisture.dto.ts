import { IsNotEmpty, IsNumber } from "class-validator";

export class AddSoilMoistureDto {
    @IsNotEmpty()
    @IsNumber()
    moisture: number;
}