import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
const isProd = process.env.NODE_ENV === 'production';
const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: (process.env.POSTGRES_HOST as string) || 'postgres',
  port: Number(process.env.POSTGRES_PORT || 5432),
  username: (process.env.POSTGRES_USER as string) || 'postgres',
  password: (process.env.POSTGRES_PASSWORD as string) || 'postgres',
  database: (process.env.POSTGRES_DB as string) || 'mydb',
  entities: [
    isProd ? 'dist/modules/**/*.entity.js' : 'src/modules/**/*.entity.ts',
  ],
  migrations: [isProd ? 'dist/migrations/*.js' : 'src/migrations/*.ts'],
  synchronize: false,
  migrationsTableName: 'migrations_history',
};

const AppDataSource: DataSource = new DataSource(dataSourceConfig);

export { AppDataSource };
