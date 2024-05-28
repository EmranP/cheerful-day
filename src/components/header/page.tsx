'use client'

import Image from 'next/image'
import { Navbar } from './navbar'
import { NavbarBurger } from './navbarBurger'

export default function Header() {
	return (
		<header>
			<div className='__container'>
				<div className='flex justify-between items-center py-14'>
					<div className='font-stolzl font-normal text-colorBlackBD text-2xl space-y-[-10px]'>
						<h1 className='flex'>
							б<Image src='/logo.svg' width={20} height={20} alt='Image logo' />
							дрый
						</h1>
						<h2 className='text-start'>день</h2>
					</div>
					<NavbarBurger />
					<Navbar />
				</div>
			</div>
		</header>
	)
}
