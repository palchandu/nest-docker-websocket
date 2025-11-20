export default function configuration() {
  return {
    port: Number.parseInt(process.env.PORT ?? '3000', 10) || 3000,
    jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
    database: {
      host: process.env.POSTGRES_HOST || 'postgres',
      port: Number.parseInt(process.env.POSTGRES_PORT ?? '5432', 10) || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      dbName: process.env.POSTGRES_DB || 'mydb',
    },
  };
}
