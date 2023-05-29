import { Band_Member_Affiliation } from 'src/afflications/band_member.affiliation';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Band } from './band.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('band_members')
export class Band_Member {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname: string;
    @Column()
    biography: string;
    @Column()
    birth_data: string;
    @Column()
    death_data: string;
    @Column()
    family: string;
  @ManyToMany((type) => Band_Member_Affiliation, (affiliation) => affiliation.band_members)
  @JoinTable({
    name: 'member_affiliation',
    joinColumn: { name: 'member_id' },
    inverseJoinColumn: { name: 'affiliation_id' },
  })
  affiliations: Band_Member_Affiliation[];
  @ManyToMany ((type) => Band, (band) => band.band_members)
  @JoinTable({
    name:  'band_band_members',
    joinColumn: {name: 'band_member_id'},
    inverseJoinColumn: {name: 'band_id'},
  })
  bands: Band[];

}