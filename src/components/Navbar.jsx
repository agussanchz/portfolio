import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-5 gap-3'>
        <h1 className='text-5xl font-bold'>AS</h1>
        <ul className='flex justify-center gap-3 text-xl'>
            <li>inicio</li>
            <li>sobre mi</li>
            <li>proyectos</li>
            <li>contacto</li>
        </ul>
    </nav>
  )
}
