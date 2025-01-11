import React from 'react'

const Header = () => {
  return (
		<div className='flex items-center relative drop-shadow-lgshadow-2xl shadow-black justify-between px-5 p-4'>
			<div>
				<img src="" alt="Logo" />
			</div>
			<div className='flex gap-4 items-center'>
				<div>Crypto Taxes</div>
				<div>Free Tools</div>
				<div>Resource Center</div>
				<div className='rounded text-white bg-blue-700 p-2 '>Get Started</div>
			</div>
		</div>
	);
}

export default Header