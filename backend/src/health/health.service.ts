import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Health } from 'src/database/entities/health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepo: Repository<Health>,
  ) {}
  async getHealth(): Promise<Health> {
    return await this.healthRepo.findOne({
      where: { id: 1 },
    });
  }
}
