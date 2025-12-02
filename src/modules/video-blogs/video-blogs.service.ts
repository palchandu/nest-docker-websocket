import { Injectable } from '@nestjs/common';
import { CreateVideoBlogDto } from './dto/create-video-blog.dto';
import { UpdateVideoBlogDto } from './dto/update-video-blog.dto';

@Injectable()
export class VideoBlogsService {
  create(createVideoBlogDto: CreateVideoBlogDto) {
    return 'This action adds a new videoBlog';
  }

  findAll() {
    return `This action returns all videoBlogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videoBlog`;
  }

  update(id: number, updateVideoBlogDto: UpdateVideoBlogDto) {
    return `This action updates a #${id} videoBlog`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoBlog`;
  }
}
