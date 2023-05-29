import { Module } from '@nestjs/common';
import { BandsService } from 'src/servicies/bands.service';
import { DatasourceModule } from '../datasource/datasource.module';
import { BandsController } from 'src/controllers/bands.controller';
import { Band } from 'src/entities/band.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band_Affiliation } from 'src/afflications/band.affiliation.entity';

@Module({
  controllers: [BandsController],
  providers: [BandsService],
  imports: [DatasourceModule,
  TypeOrmModule.forFeature([Band, Band_Affiliation]), ]

})
export class BandsModule {}
