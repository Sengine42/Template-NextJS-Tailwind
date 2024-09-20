import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto">
         <div className=' items-center flex justify-between py-5 border-b-2'>
            <h3 className='font-bold text-orange-500 '><Link href='/'>Logo Page</Link></h3>            
            <ul className=' items-center flex gap-5'>
               <li><Link href='/about'>About</Link></li>
               <li><Link href='/contact'>Contact</Link></li>
               <li className='bg-orange-500 px-5 py-2 rounded-full hover:bg-orange-400'>
                  <Link href='/login'>Login</Link>
               </li>
            </ul>
         </div>
      </div>
    </>
  )
}
