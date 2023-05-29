import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Member_Affiliation } from "src/afflications/member.affiliation.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "src/entities/comment.entity";
import { Member } from "src/entities/member.entity";
import { CreateMemberDto } from "src/dtos/MemberDTO";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>, 
    @InjectRepository(Member_Affiliation)
    private readonly affiliationRepository: Repository<Member_Affiliation>, 
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>, 
  ) {}

  async create(memberDto: CreateMemberDto): Promise<Member>
 {
    const member = this.memberRepository.create(); 
    member.fullname = memberDto.fullname; 
    member.quote = memberDto.quote;
    member.bir_data = memberDto.bir_data;
    member.city = memberDto.city;
    member.about = memberDto.about;
    member.password = memberDto.password;
    member.email = memberDto.email;  
    const affiliations = await this.affiliationRepository.findBy({
      id: In(memberDto.affiliations),
    });
    member.affiliations = affiliations;
    await this.memberRepository.save(member); 
    return member; 
  }

  findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne({
      where: { id }, 
      relations: { affiliations: true, comments: true }, 
    });
  }


      async findAll(): Promise<Member[]> {
        const members = await this.memberRepository.find({
          relations: {
            affiliations: true,
            comments: true,
          },
        }); 
        return members; 
      }
    
      async update(id: number, updatedMember: Member) {
        const member = await this.memberRepository.findOne({ where: { id } }); 
        member.fullname = updatedMember.fullname; 
        member.quote = updatedMember.quote;
        member.bir_data = updatedMember.bir_data;
        member.city = updatedMember.city;
        member.about = updatedMember.about;
        member.password = updatedMember.password;
        member.email = updatedMember.email; 
        await this.memberRepository.save(member); 
        return member; 
      }
    

      remove(id: number) {
        this.memberRepository.delete({ id }); 
      }
    

    
    
    
    
    
}
