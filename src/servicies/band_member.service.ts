import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Band_Member_Affiliation } from "src/afflications/band_member.affiliation";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Band_Member } from "src/entities/band_member";
import { CreateBand_MemberDto } from "src/dtos/Band_MemberDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";

@Injectable()
export class Band_MembersService {
  constructor(
    @InjectRepository(Band_Member)
    private readonly band_memberRepository: Repository<Band_Member>, 
    @InjectRepository(Band_Member_Affiliation)
    private readonly affiliationRepository: Repository<Band_Member_Affiliation>, 
  ) {}

  async create(band_memberDto: CreateBand_MemberDto): Promise<Band_Member>
 {
    const band_member = this.band_memberRepository.create(); 
    band_member.fullname = band_memberDto.fullname; 
    band_member.biography = band_memberDto.biography;
    band_member.birth_data = band_memberDto.birth_data;
    band_member.death_data = band_memberDto.death_data;
    band_member.family = band_memberDto.family;
    const affiliations = await this.affiliationRepository.findBy({
      id: In(band_memberDto.affiliations),
    });
    band_member.affiliations = affiliations;
    await this.band_memberRepository.save(band_member); 
    return band_member; 
  }

  findOne(id: number): Promise<Band_Member> {
    return this.band_memberRepository.findOne({
      where: { id }, 
      relations: { affiliations: true }, 
    });
  }


      async findAll(): Promise<Band_Member[]> {
        const band_members = await this.band_memberRepository.find({
          relations: {
            affiliations: true
          },
        }); 
        return band_members; 
      }
    
      async update(id: number, updatedBand_Member: Band_Member) {
        const band_member = await this.band_memberRepository.findOne({ where: { id } }); 
        band_member.fullname = updatedBand_Member.fullname; 
        band_member.biography = updatedBand_Member.biography;
        band_member.birth_data = updatedBand_Member.birth_data;
        band_member.death_data = updatedBand_Member.death_data;
        band_member.family = updatedBand_Member.family;
        await this.band_memberRepository.save(band_member); 
        return band_member; 
      }
    

      remove(id: number) {
        this.band_memberRepository.delete({ id }); 
      }
    

    
    
    
    
    
}