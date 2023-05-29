import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Comment } from "src/entities/comment.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCommentDto } from "src/dtos/CommentDTO";

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>, 
  ) {}
  async create(commentDto: CreateCommentDto): Promise<Comment>
 {
    const comment = this.commentRepository.create(); 
    comment.senderID = commentDto.senderID; 
    comment.forumname = commentDto.forumname;
    comment.text = commentDto.text; 
    await this.commentRepository.save(comment); 
    return comment; 
  }
  findOne(id: number): Promise<Comment> {
    return this.commentRepository.findOne({
      where: { id }, 
    });
  }

  async findAll(): Promise<Comment[]> {
    const comments = await this.commentRepository.find({
    }); 
    return comments; 
  }

  remove(id: number) {
    this.commentRepository.delete({ id }); 
  }
    
    
    
    
}
