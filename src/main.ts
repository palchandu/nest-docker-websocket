import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Get the DataSource instance and log connection status
  const dataSource = app.get(DataSource);
  if (dataSource.isInitialized) {
    console.log('✅ PostgreSQL Database connected successfully!');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const options = dataSource.options as any;
    console.log('Database connection details:', options);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const dbName = String(options.database || 'N/A');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const host = String(options.host || 'N/A');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const port = String(options.port || 'N/A');
    console.log(`📊 Database: ${dbName}`);
    console.log(`🔌 Host: ${host}:${port}`);
  }

  const appPort = process.env.PORT ?? 3000;
  await app.listen(appPort);
  console.log(
    `🚀 Application is running on: http://localhost:${String(appPort)}`,
  );
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
