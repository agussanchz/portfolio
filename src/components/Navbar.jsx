import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-5 gap-3'>
        <Link href={'/'} className='text-5xl font-bold'>AS</Link>
        <ul className='flex justify-center gap-3 text-xl'>
            <Link href={'/'}>inicio</Link>
            <Link href={'/sobre-mi'}>sobre mi</Link>
            <Link href={'/proyectos'}>proyectos</Link>
            <Link href={'/contacto'}>contacto</Link>
        </ul>
    </nav>
  )
}
