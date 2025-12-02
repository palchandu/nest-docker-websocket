import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoBlogsService } from './video-blogs.service';
import { CreateVideoBlogDto } from './dto/create-video-blog.dto';
import { UpdateVideoBlogDto } from './dto/update-video-blog.dto';

@Controller('video-blogs')
export class VideoBlogsController {
  constructor(private readonly videoBlogsService: VideoBlogsService) {}

  @Post()
  create(@Body() createVideoBlogDto: CreateVideoBlogDto) {
    return this.videoBlogsService.create(createVideoBlogDto);
  }

  @Get()
  findAll() {
    return this.videoBlogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoBlogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoBlogDto: UpdateVideoBlogDto) {
    return this.videoBlogsService.update(+id, updateVideoBlogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoBlogsService.remove(+id);
  }
}
