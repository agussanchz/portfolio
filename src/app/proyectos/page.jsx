import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function Proyectos() {
    return (
        <main className='py-20 flex flex-col justify-center items-center gap-28'>
            <header className="flex justify-center items-center">
                <Navbar />
            </header>
            <div className='flex gap-8 w-[70rem] h-[21rem]'>
                <Image
                    src={'/CPS.png'}
                    alt={'Centro privado salud'}
                    width={550}
                    height={1}
                    className='rounded-2xl'
                />

                <div className='flex flex-col justify-center items-center gap-10 p-3'>
                    <h2 className='text-5xl font-bold text-[#727070]'>Centro Privado Salud</h2>
                    <p className='text-xl'>Pagina web para una clinica privada. Creada desde cero con React y Tailwind CSS. Actualmente en uso.</p>
                    <div className='flex items-center text-center gap-6'>
                        <span className='rounded-xl p-2 w-28 bg-[#F7F7F7] text-[#1399C4] '>React</span>
                        <span className='rounded-xl  p-2 w-28 bg-[#003159] text-[#E5EAEE]'>Tailwind CSS</span>
                        <span className='rounded-xl p-2 w-28 bg-[#1F2937]'>Deploy</span>
                    </div>
                </div>
            </div>

            <div className='flex gap-8 w-[70rem] h-[21rem]'>
                <Image
                    src={'/Barberia.png'}
                    alt={'Barberia edgar'}
                    width={550}
                    height={1}
                    className='rounded-2xl'
                />

                <div className='flex flex-col justify-center items-center gap-10 p-3'>
                    <h2 className='text-5xl font-bold text-[#727070]'>Barberia Edgar</h2>
                    <p className='text-xl'>Turnero online para Barberia. Creada desde cero con React y Tailwind CSS. Actualmente en uso.</p>
                    <div className='flex items-center text-center gap-6'>
                        <span className='rounded-xl p-2 w-28 bg-[#F7F7F7] text-[#1399C4] '>React</span>
                        <span className='rounded-xl  p-2 w-28 bg-[#003159] text-[#E5EAEE]'>Tailwind CSS</span>
                        <span className='rounded-xl p-2 w-28 bg-[#1F2937]'>Deploy</span>
                    </div>
                </div>
            </div>

            <div className='flex gap-8 w-[70rem] h-[21rem]'>
                <Image
                    src={'/ecommerce.png'}
                    alt={'Ecommerce'}
                    width={550}
                    height={1}
                    className='rounded-2xl'
                />

                <div className='flex flex-col justify-center items-center gap-10 p-3'>
                    <h2 className='text-5xl font-bold text-[#727070]'>Ecommerce App</h2>
                    <p className='text-xl'>Proyecto de ecommerce basico para practicar Next.js y tailwind css</p>
                    <div className='flex items-center text-center gap-6'>
                        <span className='rounded-xl p-2 w-28 bg-[#000000] text-[#FFFFFF] '>Next.js</span>
                        <span className='rounded-xl  p-2 w-28 bg-[#003159] text-[#E5EAEE]'>Tailwind CSS</span>
                        <span className='rounded-xl p-2 w-28 bg-[#1F2937]'>Deploy</span>
                    </div>
                </div>
            </div>
        </main>
    )
}
