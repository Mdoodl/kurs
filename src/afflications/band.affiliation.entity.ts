import { Band } from "src/entities/band.entity";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('affiliations')
export class Band_Affiliation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  fullname: string;
  @Column()
  pic: string;
  @Column()
  startyear: number;
  @Column()
  description: string;
  @Column()
  members: string;
  @Column()
  ofsite: string;
  @Column()
  ganre: string;
  @ManyToMany((type) => Band, (band) => band.affiliations)
  @JoinTable({
    name: 'band_affiliation',
    joinColumn: { name: 'affiliation_id' },
    inverseJoinColumn: { name: 'band_id' },
  })
  bands: Band[];
}
