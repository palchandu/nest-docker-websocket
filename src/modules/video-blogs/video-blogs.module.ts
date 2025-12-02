import { Module } from '@nestjs/common';
import { VideoBlogsService } from './video-blogs.service';
import { VideoBlogsController } from './video-blogs.controller';

@Module({
  controllers: [VideoBlogsController],
  providers: [VideoBlogsService],
})
export class VideoBlogsModule {}
