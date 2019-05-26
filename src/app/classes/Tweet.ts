export class Tweet {

  id: string;
  text: string;
  authorID: string;
  postTimeStamp: Date;


  constructor(text: string, authorID: string, postTimeStamp: Date) {
    this.text = text;
    this.authorID = authorID;
    this.postTimeStamp = postTimeStamp;
  }
}
