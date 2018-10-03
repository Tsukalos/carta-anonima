export class Post {
    id: string;
    date: Date;
    text: string;
    author: string;
    title: string;

    constructor(id: string, date: Date, text: string, author: string, title: string) {
        this.id = id;
        this.date = date;
        this.text = text;
        this.author = author;
        this.title = title;
    }
}

