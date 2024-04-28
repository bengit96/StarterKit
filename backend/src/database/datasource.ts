import { join } from 'path';
import { DataSource } from 'typeorm';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { base } from './base-config';

export const config: PostgresConnectionOptions = {
  ...base,
  migrations: [join(__dirname, 'migrations', '*{.js,.ts}')],
};

// For CLI migrations.
// TypeORM Module instantiates its own datasource which should be injected as necessary.
export const appDataSource = new DataSource(config);
