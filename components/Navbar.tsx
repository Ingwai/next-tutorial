import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<nav className='max-w-3xl mx-auto py-4 flex gap-x-10 justify-center border-b-2 bg-yellow-100'>
			<Link href='/'>Home</Link>
			<Link href='/counter'>Counter</Link>
			<Link href='/tours'>Tours</Link>
			<Link href='/actions'>Actions</Link>
		</nav>
	);
};

export default Navbar;
