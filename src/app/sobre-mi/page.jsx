
import Navbar from '@/components/Navbar'
import React from 'react'

export default function SobreMi() {
  return (
    <main className='py-20 flex flex-col gap-28'>
      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <h1 className='text-7xl'>Que te puedo contar ?</h1>
    </main>
  )
}
