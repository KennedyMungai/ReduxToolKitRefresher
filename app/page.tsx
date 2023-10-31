'use client'

import PostsList from '@/components/Posts/PostsList'

export default function Home() {
	return (
		<main className='w-screen h-[90vh] flex flex-col items-center gap-5 p-5'>
			<PostsList />
		</main>
	)
}
