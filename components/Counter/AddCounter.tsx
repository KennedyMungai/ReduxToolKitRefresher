'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import {
	decrement,
	increment,
	selectCount
} from '@/Redux/features/counter/counterSlice'
import { BsPlus } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'

type Props = {}

const AddCounter = (props: Props) => {
	const dispatch = useAppDispatch()
	const count = useAppSelector((state) => state.counter.count)

	return (
		<div className=''>
			<Button variant={'outline'} onClick={() => dispatch(increment)}>
				<BsPlus />
			</Button>
			<span className='my-5'>{count}</span>
			<Button variant={'outline'} onClick={() => dispatch(decrement)}>
				<AiOutlineMinus />
			</Button>
		</div>
	)
}

export default AddCounter
