import Link from 'next/link'
import React from 'react'

export default function Proyectos() {
  return (
    <main className='flex flex-col gap-10'>
        <section className='h-[70vh] flex flex-col gap-40'>
            <h2 className='text-7xl'>Esta es una crónica detallada de las historias, análisis y resultados detrás de proyectos que he liderado y en los que he contribuido.</h2>
            <Link href={'#proyectos'} className='flex justify-center text-7xl'>↓</Link>
        </section>
        <section className='h-[70vh] flex gap-8' id='proyectos'>
            <div className='flex justify-center items-center w-1/2 h-96 rounded-xl'>
                Imagen
            </div>
            <div className='flex flex-col justify-start gap-10 w-1/2'>
                <h2 className='text-5xl'>Titulo del proyecto</h2>
                <div className='flex text-center gap-6'>
                    <span className='border p-1 w-28'>React</span> 
                    <span className='border p-1 w-28'>Talwind</span>
                </div>
                <p>Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur ipsa sint dolores facilis? Soluta veniam officiis libero temporibus atque, nam eos, quos assumenda in omnis maxime, quas quia provident?</p>
                <div className='flex text-center gap-6'>
                    <span className='border p-1 w-28'>Github</span> 
                    <span className='border p-1 w-28'>Deploy</span>
                </div>
            </div>
        </section>
    
    </main>
  )
}
