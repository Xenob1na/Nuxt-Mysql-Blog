import { sql } from '../db';

export type BlogModel = {
    id: number;
    title: string;
    content: string;
    created_date: string
}

export const read = async () => {
    const result = await sql({
        query: 'SELECT id, title, content, created_date FROM blog',
    });
    
    return result as BlogModel[];
};

export const create = async (data: Pick<BlogModel, 'title' | 'content'>) => {

}