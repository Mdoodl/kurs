import { Injectable } from '@nestjs/common';
import { Band } from 'src/entities/band.entity';
import { Comment } from 'src/entities/comment.entity';
import { Member } from 'src/entities/member.entity';
import { Band_Member } from 'src/entities/band_member';

@Injectable()
export class DatasourceService {
  private bands: Band[] = [];

  getBands(): Band[] {
    return this.bands;
  }

    private comments: Comment[] = [];

  getComments(): Comment[] {
    return this.comments;
  }

  private members: Member[] = [];

  getMembers(): Member[] {
    return this.members;
  }

  private band_members: Band_Member[] = [];

  getBand_Members(): Band_Member[] {
    return this.band_members;
  }


}



