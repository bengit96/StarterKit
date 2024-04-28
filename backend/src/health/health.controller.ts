import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthRes } from '~shared/dtos';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async getHealth(): Promise<HealthRes> {
    const health = await this.healthService.getHealth();

    return { status: health.status };
  }
}
