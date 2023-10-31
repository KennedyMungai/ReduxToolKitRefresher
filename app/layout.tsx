import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import ThemeProvider from '@/Providers/ThemeProvider'
import ReduxProvider from '@/Providers/ReduxProvider'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Redux Refresher',
	description: 'A simple refresher app for redux toolkit'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={open_sans.className}>
				<ThemeProvider>
					<ReduxProvider>
						<NavBar />
						{children}
					</ReduxProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
