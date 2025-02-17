import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
	{path: '/about', text: 'About'},
	{path: '/pricing', text: 'Pricing'},
	{path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
	return (
		<nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
			<Link href={'/'} className='flex items-center'>
			<HomeIcon className='mr-2'/>
				<span>Home</span>
			</Link>

			<div className='flex flex-1'></div>

			{
				navItems.map((navItem) => (
					<ActiveLink 
						key={navItem.path} 
						//Envia de forma desestructurada las
						//propiedades path y text
						{...navItem}  
					/>		
				))
			}

		</nav>
	)
}
