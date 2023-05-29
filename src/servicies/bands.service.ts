import { HttpStatus, Injectable } from "@nestjs/common";
import { DatasourceService } from "src/datasource/datasource.service";
import { Band } from "src/entities/band.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Band_Affiliation } from "src/afflications/band.affiliation.entity";
import { CreateBandDto } from "src/dtos/BandDTO";

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Band)
    private readonly bandRepository: Repository<Band>, 
    @InjectRepository(Band_Affiliation)
    private readonly affiliationRepository: Repository<Band_Affiliation>, 
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>, 
  ) {}
  async create(bandDto: CreateBandDto): Promise<Band>
 {
    const band = this.bandRepository.create(); 
    band.fullname = bandDto.fullname;
    band.pic = bandDto.pic;
    band.startyear = bandDto.startyear;
    band.description  = bandDto.description;
    band.members = bandDto.members;
    band.ofsite = bandDto.ofsite;
    band.ganre = bandDto.ganre;
    const affiliations = await this.affiliationRepository.findBy({
      id: In(bandDto.affiliations),
    });
    band.affiliations = affiliations;
    await this.bandRepository.save(band); 
    return band; 
  }

  findOne(id: number): Promise<Band> {
    return this.bandRepository.findOne({
      where: { id }, 
      relations: { affiliations: true }, 
    });
  }

  async findAll(): Promise<Band[]> {
    const bands = await this.bandRepository.find({
      relations: {
        affiliations: true
      },
    }); 
    return bands; 
  }
  
  async update(id: number, updatedBand: Band) {
    const band = await this.bandRepository.findOne({ where: { id } }); 
    band.fullname = updatedBand.fullname;
    band.pic = updatedBand.pic;
    band.startyear = updatedBand.startyear;
    band.description  = updatedBand.description;
    band.members = updatedBand.members;
    band.ofsite = updatedBand.ofsite;
    band.ganre = updatedBand.ganre;
    await this.bandRepository.save(band); 
    return band; 
  }

  remove(id: number) {
    this.bandRepository.delete({ id }); 
  }
    
}
