import { Module } from '@nestjs/common';
import { MembersService } from 'src/servicies/members.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { MembersController } from 'src/controllers/members.controller';
import { Member_Affiliation } from 'src/afflications/member.affiliation.entity';
import { Member } from 'src/entities/member.entity';
import { Comment } from 'src/entities/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Comment, Member_Affiliation, Member]), ]
})
export class MembersModule {}
