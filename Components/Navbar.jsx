import React from 'react'
import themes from '../../public/themes.png'
const Navbar = () => {
  return (
    <div className='flex justify-around items-center w-full h-auto bg-white-400 shadow-2xl  p-4 sticky top-0 left-0 z-20 bg-white'>
     <div>
         <h1 className='text-2xl font-extrabold bg-linear-to-r bg-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Riya Tiwari</h1>
     </div>
     
        <ul className='flex justify-evenly items-center gap-10'>
            <li className='hover:text-blue-500'><a href="">Home</a></li>
            <li className='hover:text-blue-500'><a href="">About</a></li>
            <li className='hover:text-blue-500'><a href="">Skills</a></li>
            <li className='hover:text-blue-500'><a href="">Projects</a></li>
            <li className='hover:text-blue-500'><a href="">Contact</a></li>
            <li className='hover:text-blue-500'><a href=""><img src={themes} alt="themes-error" className='w-10 h-10'  /></a></li>
        </ul>
     
    </div>
  )
}

export default Navbar
