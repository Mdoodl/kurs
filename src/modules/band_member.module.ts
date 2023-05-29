import { Module } from '@nestjs/common';
import { Band_MembersService } from 'src/servicies/band_member.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { Band_MembersController } from 'src/controllers/band_member.controller';
import { Band_Member_Affiliation } from 'src/afflications/band_member.affiliation';
import { Band_Member } from 'src/entities/band_member';
import { Band } from 'src/entities/band.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [Band_MembersController],
  providers: [Band_MembersService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Band, Band_Member_Affiliation, Band_Member]), ]
})
export class MembersModule {}