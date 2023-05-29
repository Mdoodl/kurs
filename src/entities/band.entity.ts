import { Band_Affiliation } from 'src/afflications/band.affiliation.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('bands')
export declare class Band {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
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
    @ManyToMany((type) => Band_Affiliation, (affiliation) => affiliation.bands)
    @JoinTable({
      name: 'band_affiliation',
      joinColumn: { name: 'band_id' },
      inverseJoinColumn: { name: 'affiliation_id' },
    })
    affiliations: Band_Affiliation[];
  }
