import 'dotenv/config';
import { AppDataSource } from '../src/database/data-source';

async function run() {
  try {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
    await AppDataSource.destroy();
    process.exit(0);
  } catch (err) {
    console.error('Migration error', err);
    await AppDataSource.destroy().catch(() => {});
    process.exit(1);
  }
}

run()
  .then(() => {
    console.log('Migrations completed successfully');
  })
  .catch((err) => {
    console.error('Unexpected error during migration', err);
    process.exit(1);
  });
