import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: process.env.PGDATABASE || 'postgres',
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT) || 5432,
  host: process.env.PGHOST,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
