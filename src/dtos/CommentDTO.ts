export class CreateCommentDto {
    id: number;
    senderID: number;
    forumname: string;
    text: string;
    affiliations: number[];
}
