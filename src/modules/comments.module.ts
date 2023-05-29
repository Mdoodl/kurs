import { Module } from '@nestjs/common';
import { CommentsService } from 'src/servicies/comments.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { CommentsController } from 'src/controllers/comments.controller';
import { Comment_Affiliation } from 'src/afflications/comment.affliction.entity';
import { Member } from 'src/entities/member.entity';
import { Comment } from 'src/entities/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Comment, Comment_Affiliation, Member]), ]
})
export class CommentsModule {}
