import { Post } from './post';
import { Author } from './author';

export class Article {
  constructor(
    public uniqueName: string,
    public description: string,
    public post: Post,
    public author: Author
  ) {}
}
