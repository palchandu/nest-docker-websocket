import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoBlogDto } from './create-video-blog.dto';

export class UpdateVideoBlogDto extends PartialType(CreateVideoBlogDto) {}
