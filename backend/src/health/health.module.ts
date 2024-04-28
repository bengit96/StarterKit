import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Health } from 'src/database/entities/health.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Health])],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
