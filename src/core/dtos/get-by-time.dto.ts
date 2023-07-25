import { IsOptional, IsDate } from "class-validator";
export class GetByTimeDto {
    @IsOptional()
    @IsDate()
    fromDate?: Date;

    @IsOptional()
    @IsDate()
    toDate?: Date;
}