import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export const NavbarBurger = () => {
	const [isOpen, setOpen] = useState(false)
	return (
		<div className='md:block hidden'>
			<Hamburger toggled={isOpen} toggle={setOpen} />
		</div>
	)
}
