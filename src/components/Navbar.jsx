import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-around items-center text-center gap-3 bg-[#33363B] p-2 text-white rounded-full'>
        <Link href={'/'} className='text-4xl'>AS</Link>
        <ul className='flex justify-center gap-3 text-2xl'>
            <Link href={'/'}>inicio</Link>
            <Link href={'/sobre-mi'}>sobre mi</Link>
            <Link href={'/proyectos'}>proyectos</Link>
            <Link href={'/contacto'}>contacto</Link>
        </ul>
    </nav>
  )
}
