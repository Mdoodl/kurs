import { Member_Affiliation } from 'src/afflications/member.affiliation.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('members')
export class Member {
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    id: number;
    @Column()
    @ApiProperty({ example: 'Главный_админ', description: 'Ник пользователя' })
    fullname: string;
    @Column()
    @ApiProperty({ example: 'If this is heaven then baby I dont want to know hell', description: 'Строчка, указывающаяся под именем' })
    quote: string;
    @Column()
    @ApiProperty({ example: '16-07-23', description: 'Дата регистрации' })
    red_data: string;
    @Column()
    @ApiProperty({ example: '10-01-00', description: 'Дата рождения' })
    bir_data: string;
    @Column()
    @ApiProperty({ example: 'Администратор', description: 'Роль пользователя на сайте' })
    role: string;
    @Column()
    @ApiProperty({ example: 'Москва', description: 'Город' })
    city: string;
    @Column()
    @ApiProperty({ example: '-', description: 'Описание участника' })
    about: string;
    @Column()
    @ApiProperty({ example: '12345', description: 'Пароль' })
    password: string;
    @Column()
    email: string;
  @ManyToMany((type) => Member_Affiliation, (affiliation) => affiliation.members)
  @JoinTable({
    name: 'member_affiliation',
    joinColumn: { name: 'member_id' },
    inverseJoinColumn: { name: 'affiliation_id' },
  })
  affiliations: Member_Affiliation[];
  @ManyToMany ((type) => Comment, (comment) => comment.members)
  @JoinTable({
    name:  'member_comment',
    joinColumn: {name: 'member_id'},
    inverseJoinColumn: {name: 'comment_id'},
  })
  comments: Comment[];

}
