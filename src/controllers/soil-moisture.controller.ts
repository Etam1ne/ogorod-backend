import { Controller, Post, Body, Get } from "@nestjs/common";
import { AddSoilMoistureDto, GetByTimeDto } from "../core/dtos";
import { SoilMoistureUseCases } from "src/use-cases/soil-moisture/soil-moisture.use-case";

@Controller('soil-moisture')
export class SoilMoistureController {
    constructor(
        private readonly soilMoistureUseCases: SoilMoistureUseCases,
    ) {}

    @Post()
    create(@Body() addSoilMoistureDto: AddSoilMoistureDto) {
        return this.soilMoistureUseCases.create(addSoilMoistureDto);
    }

    @Get('range')
    getTimeAgo(@Body() getByTimeDto: GetByTimeDto) {
        return this.soilMoistureUseCases.getTimeAgo(getByTimeDto);
    }
}