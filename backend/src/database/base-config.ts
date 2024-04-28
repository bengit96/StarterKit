import 'dotenv/config';

import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const base: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // https://docs.nestjs.com/techniques/database#auto-load-entities
  synchronize: false, // do not automatically sync entities
  // js for runtime, ts for typeorm cli
  entities: [join(__dirname, 'entities', '*.entity{.js,.ts}')],
  // ref: https://github.com/typeorm/typeorm/issues/3388 to set pool size
  extra: {
    max: process.env.DB_MAX_POOL,
    idleTimeoutMillis: 10 * 60 * 1000,
    keepAlive: true,
  },
  namingStrategy: new SnakeNamingStrategy(),
};
