import { Comment } from "src/entities/comment.entity";
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  @Entity('affiliations')
export class Comment_Affiliation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    senderID: number;
    @Column()
    forumname: string;
    @Column()
    text: string;
    @ManyToMany((type) => Comment, (comment) => comment.affiliations)
    @JoinTable({
      name: 'comment_affiliation',
      joinColumn: { name: 'affiliation_id' },
      inverseJoinColumn: { name: 'comment_id' },
    })
  comments: Comment[];
}
