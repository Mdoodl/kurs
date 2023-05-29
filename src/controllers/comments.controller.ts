import { CommentsService } from "../servicies/comments.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Comment } from "src/entities/comment.entity";
import { CreateCommentDto } from "src/dtos/CommentDTO";


@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

@Get()
  findAll() {
    return this.commentsService.findAll();
  }

@Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }
 

@Post()
  create(@Body() createComment: CreateCommentDto) {
    return this.commentsService.create(createComment);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }



}


