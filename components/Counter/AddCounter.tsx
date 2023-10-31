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
		<div className='flex flex-col items-center gap-5 bg-zinc-100 p-5 rounded-md border-[1px] border-zinc-500'>
			<div className=''>
				<p className='text-orange-500'>
					Increment And Decrement by One
				</p>
			</div>
			<div className=''>
				<Button variant={'outline'} onClick={() => dispatch(increment)}>
					<BsPlus />
				</Button>
				<span className='my-5'>{count}</span>
				<Button variant={'outline'} onClick={() => dispatch(decrement)}>
					<AiOutlineMinus />
				</Button>
			</div>
		</div>
	)
}

export default AddCounter
