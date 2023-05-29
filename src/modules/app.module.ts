import { Module } from '@nestjs/common';
import { BandsModule } from './bands.module';
import { DatasourceModule } from '../datasource/datasource.module';
import { MembersModule } from './members.module';
import { CommentsModule } from './comments.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [BandsModule, DatasourceModule, MembersModule, CommentsModule,
  TypeOrmModule.forRoot({
    type: 'postgres', 
    port: 5432, 
    username: 'education', 
    password: 'password', 
    host: 'localhost',
    synchronize: false, 
    logging: 'all', 
	  entities: ['dist/bands/bands.entity{.ts,.js}', 'dist/comments/comments.entity{.ts,.js}', 'dist/members/members.entity{.ts,.js}'], 

  })],
  controllers: [],
  providers: [],
})
export class AppModule {}


