import { HttpClient } from './HTTPClient';
import { Blog } from './types';

export class StrapiAPI extends HttpClient {

    public constructor() {
        super('https://strapi-public-api.herokuapp.com');
    }

    public getBlogs = () => this.instance.get<Blog[]>('/blogs');

    public getBlog = (id: string) => this.instance.get<Blog>(`/blogs/${id}`);
}