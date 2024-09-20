import React from 'react'
import Link from 'next/link'

export default function Register() {
  return (
    <>
      <div className="container mx-auto blog my-20 lg:flex gap-5">

         <div className=' border rounded-md border-orange-500 p-5 mx-auto'>
            <form action="">
               <h3 className='text-orange-500 font-bold mb-5'>Register</h3>         
               <div className=' block '>
                  <div className='my-1'>
                     <label htmlFor="email">Email</label>
                  </div>
                  <input className='border border-gray-400 p-1 rounded-md w-full' type="email" placeholder='YouEmail@xxx.com' />
               </div>
               <div className=' block '>
                  <div className='my-1'>
                     <label htmlFor="password">Password</label>
                  </div>
                  <input className='border border-gray-400 p-1 rounded-md w-full' type="password" />
               </div>
               <input className='bg-orange-500 text-white w-full rounded-full py-1 mt-5' type="submit" value='Register' />
               <p className='mt-2 text-sm'>You have an account yet? <span className='text-orange-500 hover:cursor-pointer hover:text-orange-400'><Link href='/login'>Login</Link></span></p>
            </form>
         </div>

      </div>
    </>
  )
}
