import { Band_MembersService } from "src/servicies/band_member.service";
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Band_Member } from "src/entities/band_member";
import { CreateBand_MemberDto } from "src/dtos/Band_MemberDTO";

@Controller('members_dto')
export class Members_DtoController {
  constructor(private readonly band_membersService: Band_MembersService) {}

@Get()
  findAll() {
    return this.band_membersService.findAll();
  }

@Get(':id')
  findOne(@Param('id') id: string) {
    return this.band_membersService.findOne(+id);
  }
 
@Put(':id')
  update(@Param('id') id: string, @Body() updateMember: Band_Member) {
    return this.band_membersService.update(+id, updateMember);
  }

@Post()
  create(@Body() createMember: CreateBand_MemberDto) {
    return this.band_membersService.create(createMember);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.band_membersService.remove(+id);
  }



}