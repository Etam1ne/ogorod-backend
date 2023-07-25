import { Module } from '@nestjs/common';
import { DataServicesModule } from './services/data-services/data-services.module';
import { SoilMoistureController } from './controllers/soil-moisture.controller';
import { SoilMoistureUseCasesModule } from './use-cases/soil-moisture/soil-moisture.module';

@Module({
  imports: [DataServicesModule, SoilMoistureUseCasesModule],
  controllers: [SoilMoistureController],
  providers: [],
})
export class AppModule {}
