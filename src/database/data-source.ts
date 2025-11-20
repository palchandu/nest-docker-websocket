import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';

const dataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: (process.env.POSTGRES_HOST as string) || 'postgres',
  port: Number(process.env.POSTGRES_PORT || 5432),
  username: (process.env.POSTGRES_USER as string) || 'postgres',
  password: (process.env.POSTGRES_PASSWORD as string) || 'postgres',
  database: (process.env.POSTGRES_DB as string) || 'mydb',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const dataSource: DataSource = new DataSource(dataSourceConfig);

export default dataSource;
