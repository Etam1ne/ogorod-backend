import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { SoilMoistureUseCases } from './soil-moisture.use-case';
import { SoilMoistureFactoryService } from './soil-moisture-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [SoilMoistureFactoryService, SoilMoistureUseCases ],
  exports: [SoilMoistureFactoryService, SoilMoistureUseCases],
})
export class SoilMoistureUseCasesModule {}