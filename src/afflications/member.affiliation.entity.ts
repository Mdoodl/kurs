import { Member } from "src/entities/member.entity";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('affiliations')
export class Member_Affiliation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fullname: string;
    @Column()
    quote: string;
    @Column()
    red_data: string;
    @Column()
    bir_data: string;
    @Column()
    role: string;
    @Column()
    city: string;
    @Column()
    about: string;
    @Column()
    password: string;
    @Column()
    email: string;
  @ManyToMany((type) => Member, (member) => member.affiliations)
  @JoinTable({
    name: 'member_affiliations',
    joinColumn: { name: 'affiliations_id' },
    inverseJoinColumn: { name: 'member_id' },
  })
  members: Member[];
}