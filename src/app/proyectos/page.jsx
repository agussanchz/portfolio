import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

export default function Proyectos() {
    return (
        <>
            <header className="flex justify-center items-center">
                <Navbar />
            </header>
            <main className='py-20 flex flex-col justify-center items-center px-10'>
                <div className='flex flex-col items-center gap-6 p-20'>
                    <h2 className='text-3xl font-bold text-[#727070]'>Centro Privado Salud</h2>
                    <Image
                        src={'/CPS.png'}
                        alt={'Centro privado salud'}
                        width={320}
                        height={1}
                        className='rounded-2xl'
                    />

                    <div className='flex flex-col justify-center items-center gap-6 '>
                        <p className='text-sm w-svw p-3 text-center'>Pagina web para una clinica privada. Creada desde cero con React y Tailwind CSS. Actualmente en uso.</p>
                        <div className='flex items-center text-center gap-1'>
                            <span className='rounded-xl p-1 w-28 bg-[#F7F7F7] text-[#1399C4] '>React</span>
                            <span className='rounded-xl p-1  w-28 bg-[#003159] text-[#E5EAEE]'>Tailwind CSS</span>
                            <span className='rounded-xl p-1 w-28 bg-[#1F2937]'>Deploy</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-6 p-20'>
                    <h2 className='text-3xl font-bold text-[#727070]'>Barberia Edgar</h2>
                    <Image
                        src={'/Barberia.png'}
                        alt={'Barberia edgar'}
                        width={320}
                        height={1}
                        className='rounded-2xl'
                    />

                    <div className='flex flex-col justify-center items-center gap-10 p-3'>          
                        <p className='text-sm w-svw p-3 text-center'>Turnero online para Barberia. Creada desde cero con React y Tailwind CSS. Actualmente en uso.</p>
                        <div className='flex items-center text-center gap-1'>
                            <span className='rounded-xl p-1 w-28 bg-[#F7F7F7] text-[#1399C4] '>React</span>
                            <span className='rounded-xl  p-1 w-28 bg-[#003159] text-[#E5EAEE]'>Tailwind CSS</span>
                            <span className='rounded-xl p-1 w-28 bg-[#1F2937]'>Deploy</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-8 p-20'>
                    <h2 className='text-3xl font-bold text-[#727070]'>Ecommerce App</h2>
                    <Image
                        src={'/ecommerce.png'}
                        alt={'Ecommerce'}
                        width={320}
                        height={1}
                        className='rounded-2xl'
                    />
                    <div className='flex flex-col justify-center items-center gap-10 p-3'>              
                        <p className='text-sm w-svw p-3 text-center'>Proyecto de ecommerce basico para practicar Next.js y tailwind css</p>
                        <div className='flex items-center text-center gap-1'>
                            <span className='rounded-xl p-1 w-28 bg-[#000000] text-[#FFFFFF] '>Next.js</span>
                            <span className='rounded-xl  p-1 w-28 bg-[#003159] text-[#E5EAEE]'>Tailwind CSS</span>
                            <span className='rounded-xl p-1 w-28 bg-[#1F2937]'>Deploy</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
