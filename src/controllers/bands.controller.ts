import { BandsService } from "../servicies/bands.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Band } from "src/entities/band.entity";
import { CreateBandDto } from "src/dtos/BandDTO";


@Controller('bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

@Get()
  findAll() {
    return this.bandsService.findAll();
  }

@Get(':name')
  findOne(@Param('name') fullname: string) {
    return this.bandsService.findOne(+fullname);
  }
 
@Put(':id')
  update(@Param('id') id: string, @Body() updateBand: Band) {
    return this.bandsService.update(+id, updateBand);
  }

@Post()
  create(@Body() createBand: CreateBandDto) {
    return this.bandsService.create(createBand);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bandsService.remove(+id);
  }



}




