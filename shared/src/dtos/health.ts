import { IsString } from 'class-validator';

export class HealthReq {
  @IsString()
  param: string;
}

export type HealthRes = {
  status: string;
};
