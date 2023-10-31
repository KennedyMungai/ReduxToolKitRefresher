'use client'
import { useAppDispatch } from '@/Redux/hooks'
import React, { ChangeEvent, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '@/Redux/features/posts/postsSlice'
import { Button } from '../ui/button'

const AddPostForm = () => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const dispatch = useAppDispatch()

	const onTitleChanged = (event: ChangeEvent<HTMLInputElement>) =>
		setTitle(event.target.value)

	const onContextChanged = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => setContent(e.target.value)

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded({ id: nanoid(), title, content }))

			setTitle('')
			setContent('')
		}
	}

	return (
		<section className='w-screen h-[90vh] bg-zinc-100 dark:bg-zinc-800 p-5 rounded-md flex flex-col justify-center items-center gap-2'>
			<h2>Add a new post</h2>
			<form className='flex flex-col gap-2'>
				<div className=''>
					<label htmlFor='postTitle'>Post Title: </label>
					<input
						type='text'
						id='postTitle'
						name='postTitle'
						value={title}
						onChange={onTitleChanged}
					/>
				</div>
				<div className=''>
					<label htmlFor='postContent'>Content: </label>
					<textarea
						id='postContent'
						name='postContent'
						value={content}
						onChange={onContextChanged}
					/>
				</div>
			</form>
			<Button type='submit' onClick={onSavePostClicked}>
				Save Button
			</Button>
		</section>
	)
}

export default AddPostForm
