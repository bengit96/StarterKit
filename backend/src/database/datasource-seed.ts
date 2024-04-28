import { join } from 'path';
import { DataSource } from 'typeorm';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { base } from './base-config';

const config: PostgresConnectionOptions = {
  ...base,
  migrations: [join(__dirname, 'seeds', '*{.js,.ts}')],
};

export const appDataSource = new DataSource(config);
