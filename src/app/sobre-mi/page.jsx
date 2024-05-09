
import Navbar from '@/components/Navbar'
import React from 'react'

export default function SobreMi() {
  return (
    <main className='py-20 flex flex-col justify-center items-center gap-28'>
      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <div className="bg-[#292727ca]  w-[45rem] flex flex-col p-10 gap-4">
        <h2 className="text-xl text-[#fffefe] font-medium">Mi experiencia</h2>
        <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
          <h3 className="font-bold text-[#b75591]">Empleado de comercio</h3>
          <p className="text-[#727070]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis, tempora, nemo magnam quis nobis optio aliquid rerum suscipit culpa animi consequuntur non quae aut tenetur ea officia error molestiae?</p>
        </article>
        <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
          <h3 className="font-bold text-[#b75591]">Desallorador Frontend freelance</h3>
          <p className="text-[#727070]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias incidunt in recusandae, odio id nostrum quas labore explicabo. Corporis alias odio sint debitis excepturi dolore at? Beatae, velit? Non!</p>
        </article>
        <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
          <h3 className="font-bold text-[#b75591]">Desarrolador Frontend softsolutions</h3>
          <p className="text-[#727070]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus reiciendis beatae nam aspernatur repellat adipisci sapiente! Quas aliquid, veritatis voluptatibus non ipsum quisquam impedit, natus quaerat asperiores, ipsam consequatur.</p>
        </article>
      </div>
      <div className="bg-[#292727ca]  w-[45rem] flex flex-col p-10 gap-4">
        <h2 className="text-xl text-[#fffefe] font-medium">Mis estudios</h2>
        <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
          <h3 className="font-bold text-[#b75591]">Desarrolador web - CoderHouse</h3>
          <p className="text-[#727070]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis, tempora, nemo magnam quis nobis optio aliquid rerum suscipit culpa animi consequuntur non quae aut tenetur ea officia error molestiae?</p>
        </article>
        <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
          <h3 className="font-bold text-[#b75591]">UTN (sin terminar)</h3>
          <p className="text-[#727070]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias incidunt in recusandae, odio id nostrum quas labore explicabo. Corporis alias odio sint debitis excepturi dolore at? Beatae, velit? Non!</p>
        </article>
        <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
          <h3 className="font-bold text-[#b75591]">Curso Udemy</h3>
          <p className="text-[#727070]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus reiciendis beatae nam aspernatur repellat adipisci sapiente! Quas aliquid, veritatis voluptatibus non ipsum quisquam impedit, natus quaerat asperiores, ipsam consequatur.</p>
        </article>
      </div>
    </main>
  )
}
