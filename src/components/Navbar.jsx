import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-center items-center text-center gap-3 shadow-2xl fixed shadow-[#524e4e] text-[#FFFFFF] bg-[#131414eb]  w-[30rem] p-3 rounded-full'>
        <ul className='flex justify-center gap-3 text-md '>
            <Link href={'/'}>Inicio</Link>
            <Link href={'/proyectos'}>Proyectos</Link>
            <Link href={'/sobre-mi'}>Sobre Mi</Link>
            <Link href={'/contacto'}>Contacto</Link>
        </ul>
    </nav>
  )
}
