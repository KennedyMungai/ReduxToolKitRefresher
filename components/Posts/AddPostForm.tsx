import { useAppDispatch } from '@/Redux/hooks'
import React, { ChangeEvent, useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '@/Redux/features/posts/postsSlice'

const AddPostForm = () => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const dispatch = useAppDispatch()

	const onTitleChanged = (event: ChangeEvent<HTMLInputElement>) =>
		setTitle(event.target.value)

	const onContextChanged = (e: ChangeEvent<HTMLInputElement>) =>
		setContent(e.target.value)

	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded({ id: nanoid(), title, content }))

			setTitle('')
			setContent('')
		}
	}

	return (
		<section>
			<h2>Add a new post</h2>
			<form>
				<label htmlFor='postTitle'>Post Title</label>
				<input
					type='text'
					id='postTitle'
					name='postTitle'
					value={title}
					onChange={onTitleChanged}
				/>
				<label htmlFor='postContent'>Content:</label>
				<input
					type='text'
					id='postContent'
					name='postContent'
					value={content}
					onChange={onContextChanged}
				/>
				<button type='submit'>Save Button</button>
			</form>
		</section>
	)
}

export default AddPostForm
