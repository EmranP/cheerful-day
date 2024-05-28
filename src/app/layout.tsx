import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.scss'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})
const stolzl = localFont({
	src: [
		{
			path: './font/local/stolzl-book.woff2',
			weight: '300',
			style: 'demi',
		},
		{
			path: './font/local/stolzl-regular.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-stolzl',
})
export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${stolzl.variable}`}>{children}</body>
		</html>
	)
}