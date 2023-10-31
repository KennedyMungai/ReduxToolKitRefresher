import React from 'react'
import ThemeToggle from './ThemeToggle'
import Link from 'next/link'

type Props = {}

const NavBar = (props: Props) => {
	return (
		<nav className='h-[10vh] w-screen shadow-md dark:shadow-zinc-700 flex flex-row justify-between px-10'>
			<div className='flex items-center'>
				<Link href='/'>
					<h1 className='uppercase font-bold text-2xl text-zinc-600 dark:text-zinc-200'>
						Redux Toolkit Refresher
					</h1>
				</Link>
			</div>
			<div className=''></div>
			<div className='flex items-center'>
				<ThemeToggle />
			</div>
		</nav>
	)
}

export default NavBar
