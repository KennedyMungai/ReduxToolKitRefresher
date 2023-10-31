import { selectAllPosts } from '@/Redux/features/posts/postsSlice'
import { useAppSelector } from '@/Redux/hooks'
import React from 'react'

type Props = {}

const PostsList = (props: Props) => {
	const posts = useAppSelector(selectAllPosts)

	const renderedPosts = posts.map((post) => (
		<article
			key={post.id}
			className='bg-zinc-50 m-2 p-2 rounded-md border-[1px] border-zinc-400'
		>
			<h3 className='uppercase font-semibold text-center'>
				{post.title}
			</h3>
			<p className='text-zinc-400'>{post.content.substring(0, 100)}</p>
		</article>
	))

	return (
		<section>
			<h2 className='text-center uppercase text-zinc-800 font-bold text-3xl underline'>
				Posts
			</h2>
			{renderedPosts}
		</section>
	)
}

export default PostsList
