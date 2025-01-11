import React, { useEffect } from 'react'
import FooterContentCard from './FooterContentCard';

const Footer = () => {
  useEffect(() => {
    
  
  }, [third])
  
  return (
    <div className='bg-white p-10'>
      <div>
        <div className='font-semibold text-2xl mb-2'>You May Also Like</div>
        <div className='flex'>

        <FooterContentCard heading={"You May Also Like"} coin={coin} />
        </div>
      </div>
    </div>
  )
}

export default Footer