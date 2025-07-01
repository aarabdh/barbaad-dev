import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import showdown from 'showdown'

const postsDirectory = path.join(process.cwd(), 'BlogPosts')
const converter = new showdown.Converter()
converter.setOption('simpleLineBreaks', 'true');
converter.setOption('metadata', 'true');


export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=> {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);

        const fileContents = fs.readFileSync(fullPath, 'utf-8');
        
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            poem: matterResult.data.poem
        };

        return blogPost;

    })

    return allPostsData.sort((a, b) => a.date<b.date?1:-1);
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    const meta = converter.getMetadata()
    const result = converter.makeHtml(fileContents)
    const contentHtml = result;

    const blogPostWithHTML: BlogPost & {contentHtml: string} = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        poem: matterResult.data.poem,
        contentHtml
    }

    return blogPostWithHTML;

}