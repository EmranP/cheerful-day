import Image from 'next/image'

export const Navbar = () => {
	return (
		<nav className='flex items-center justify-center space-x-8'>
			<ul className='flex items-center space-x-10 menu__list font-stolzl  z-20'>
				<li>меню</li>
				<li>
					адреса кофеен
					<ul></ul>
				</li>
				<li>маркеты</li>
				<li>франшиза</li>
				<li>вакансии</li>
				<li>контакты</li>
			</ul>
			<div className='flex space-x-4'>
				<Image
					src='/tg.svg'
					width={20}
					height={20}
					alt='telegram'
					className='cursor-pointer'
				/>
				<Image
					src='/wa.svg'
					width={20}
					height={20}
					alt='whatsapp'
					className='cursor-pointer'
				/>
			</div>
		</nav>
	)
}
