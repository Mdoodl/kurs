import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Member } from "./member.entity";
import { Comment_Affiliation } from 'src/afflications/comment.affliction.entity';

@Entity('comments')
export declare class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    senderID: number;
    @Column()
    forumname: string;
    @Column()
    text: string;
    @ManyToMany((type) => Member, (member) => member.comments)
    @JoinTable({
      name: 'comment_affiliation',
      joinColumn: { name: 'comment_id' },
      inverseJoinColumn: { name: 'affiliation_id' },
    })
    members: Member[];
    @ManyToMany((type) => Comment_Affiliation, (affiliation) => affiliation.comments)
    @JoinTable({
      name: 'comment_affiliation',
      joinColumn: { name: 'comment_id' },
      inverseJoinColumn: { name: 'affiliation_id' },
    })
    affiliations: Comment_Affiliation[];
  }
