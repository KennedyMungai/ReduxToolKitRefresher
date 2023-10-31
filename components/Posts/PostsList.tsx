import { selectAllPosts } from '@/Redux/features/posts/postsSlice'
import { useAppSelector } from '@/Redux/hooks'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {}

const PostsList = (props: Props) => {
	const posts = useAppSelector(selectAllPosts)

	const renderedPosts = posts.map((post) => (
		<article
			key={post.id}
			className='bg-zinc-50 m-2 p-2 rounded-md border-[1px] border-zinc-400 dark:bg-zinc-900'
		>
			<h3 className='uppercase font-semibold text-center'>
				{post.title}
			</h3>
			<p className='text-zinc-400'>{post.content.substring(0, 100)}</p>
		</article>
	))

	return (
		<section className='flex flex-col items-center gap-2'>
			<h2 className='text-center uppercase text-zinc-500 font-bold text-3xl underline'>
				Posts
			</h2>
			<Link href='/addPost'>
				<Button variant={'outline'}>Add a post</Button>
			</Link>

			{renderedPosts}
		</section>
	)
}

export default PostsList
