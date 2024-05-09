import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <section className="h-screen lg:w-1/2 lg:px-10 lg:fixed left-0 top-0 flex justify-center items-center  text-white">
        <article className="flex flex-col justify-center items-center p-20 rounded-2xl shadow-2xl shadow-[#524e4e]  gap-10 h-full w-full lg:h-[50rem] lg:w-11/12 xl:w-3/4 text-[#FFFFFF]  bg-[#131414eb]">
          <div className="flex flex-col gap-2 justify-center items-center text-wrap text-center">
            <Image
              src={'/imgAvatar.jpg'}
              alt={'avatar de mi perfil'}
              width={180}
              height={510}
              className="rounded-full"
            />
            <h2 className="font-bold text-7xl">Hola! Soy</h2>
            <h2 className="font-bold text-7xl">Agustin Sanchez</h2>
            <p className="text-xl">Frontend Developer -  <Link className="text-[#b75591]" href={'https://www.linkedin.com/in/agussanchz/'} target="blank">@agussanchz</Link></p>
          </div>
        </article>
      </section>

      <section className=" lg:w-1/2 lg:py-24 lg:px-5 lg:absolute right-0 top-0 flex flex-col items-center  gap-20 ">
        <div className="bg-[#292727ca] w-11/12 lg:w-3/4 flex flex-col p-10 gap-2 ">
          <h2 className="text-xl text-[#fffefe] font-medium">Sobre mi</h2>
          <p className='flex justify-center text-[#727070]'>
            Me llama mucho la atencion la capacidad de nuestra mente cuando se pone a jugar con el diseño, los colores, estetica y funcionalidad de una plataforma digital. Es por esto, que me involucre en el mundo de la programacion, para poder plasmar mis ideas e intentar crear algo que realmente sea atractivo/funcional para el ojo humano.
            Actualmente utilizo React.js y tailwind CSS para realizar mis proyectos y trabajos.
          </p>
          <Link href={'/sobre-mi'} className="text-md font-bold ">Ver mas sobre mi experiencia</Link>
        </div>
        <div className="bg-[#292727ca] w-11/12 lg:w-3/4  flex flex-col p-10 gap-4">
          <h2 className="text-xl text-[#fffefe] font-medium">Proyectos</h2>
          <article className="bg-[#423f3fca]  flex flex-col p-4 hover:border hover:border-gray-400">
            <h3 className="font-bold text-[#b75591]">Centro Privado Salud</h3>
            <p className="text-[#727070]">Pagina web para una clinica privada.</p>
            <Link href={'/'} className="text-md font-bold ">Ver mas</Link>
          </article>
          <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
            <h3 className="font-bold text-[#b75591]">Barberia Edgar</h3>
            <p className="text-[#727070]">Turnero online para barberia.</p>
            <Link href={'/'} className="text-md font-bold ">Ver mas</Link>
          </article>
          <article className="bg-[#423f3fca] flex flex-col p-4 hover:border hover:border-gray-400">
            <h3 className="font-bold text-[#b75591]">Ecommerce</h3>
            <p className="text-[#727070]">Proyecto ecommerce.</p>
            <Link href={'/'} className="text-md font-bold ">Ver mas</Link>
          </article>
          <Link href={'/proyectos'} className="text-xl font-bold ">Ver todos los proyectos</Link>
        </div>
        <div className="bg-[#292727ca] w-11/12 lg:w-3/4   flex flex-col p-10 gap-2">
          <p className='text-7xl'>Me gustaria realizar un proyecto juntos, <span className='text-[#b75591]'>contactame.</span></p>
          <Link href={'/contacto'} className="text-xl font-bold ">Ir a contacto</Link>
        </div>
      </section>
    </main>
  );
}
