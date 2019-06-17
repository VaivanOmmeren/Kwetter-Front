export class Tweet {

  id: string;
  text: string;
  authorID: string;
  postTimeStamp: Date;
  authorname: string;


  constructor(text: string, authorID: string, authorname: string) {
    this.text = text;
    this.authorID = authorID;
    this.authorname = authorname;
  }
}
