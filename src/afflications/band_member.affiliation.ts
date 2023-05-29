import { Band_Member } from "src/entities/band_member";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('affiliations')
export class Band_Member_Affiliation {
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
  @ManyToMany((type) => Band_Member, (band_member) => band_member.affiliations)
  @JoinTable({
    name: 'band_member_affiliations',
    joinColumn: { name: 'affiliations_id' },
    inverseJoinColumn: { name: 'band_member_id' },
  })
  band_members: Band_Member[];
}