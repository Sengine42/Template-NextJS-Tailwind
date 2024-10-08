import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      

      <footer className=" m-4 border-t-2">
         <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
         </span>
         <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                  <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
            </li>         
            <li>
                  <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
         </ul>
         </div>
      </footer>

    </>
  )
}
