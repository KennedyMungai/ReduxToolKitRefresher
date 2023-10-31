import { useAppSelector } from '@/Redux/hooks'
import React from 'react'

type Props = {}

const PostsList = (props: Props) => {
	const posts = useAppSelector((state) => state.posts)

	const renderedPosts = posts.map((post) => (
		<article key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content.substring(0, 100)}</p>
		</article>
	))

	return (
		<section>
			<h2>Posts</h2>
			{renderedPosts}
		</section>
	)
}

export default PostsList
