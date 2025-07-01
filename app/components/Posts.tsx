import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import BlogItem from './BlogItem';

export default function Posts() {
    const posts = getSortedPostsData();
  return (
    <section className='mt-6 mx-auto max-w-2xl'>
        <h2 className='text-4xl font-bold dark:text-white/90'>Blog Posts</h2>
        <ul className='w-full'>
            {posts.map(post => (
                <BlogItem key={post.id} post={post} />
            ))}
        </ul>
    </section>
  )
}
