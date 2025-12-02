import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { BlogsModule } from './modules/blogs/blogs.module';
import { CommentsModule } from './modules/comments/comments.module';
import { VideoBlogsModule } from './modules/video-blogs/video-blogs.module';
import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.dbName'),
        entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: false,
        logging: true,
        poolSize: 10,
        extra: {
          max: 10,
          connectionTimeoutMillis: 2000,
        },
      }),
    }),
    UsersModule,
    BlogsModule,
    CommentsModule,
    VideoBlogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
