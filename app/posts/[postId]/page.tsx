import { getPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import {notFound} from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

export function generateStaticParams() {
    const posts = getSortedPostsData();

    return posts.map((post)=> ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params : { postId:string } } ) {

    const posts = getSortedPostsData();
    const {postId} = params;

    const post: BlogPost | undefined = posts.find(post=>post.id === postId);

    if(!post) {
        return {
            title: "Post not found hahahahaha"
        }
    }

    return {
        title: post?.title,
    }
}

export default async function Post({ params }: { params : { postId:string } } ) {

    const posts = getSortedPostsData(); //deduped
    const {postId} = params;

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml, poem} = await getPostData(postId);

    const formattedDate = getFormattedDate(date);

    return (
        <div className='px-6 prose prose-xl psore-slate dark:prose-invert mx-auto'>
            <div className='border border-gray-300 rounded-lg p-4 mt-3'>
                <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
                <br />
                <p className='mt-0 text-s'>{formattedDate}</p>
            </div>
            <article className={`ml-4`}>
                <section className={`${poem ? 'text-center' : ''}`} dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/posts">Back to posts</Link>
                </p>
            </article>
        </div>
    );
}
