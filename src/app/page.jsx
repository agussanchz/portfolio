import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <section className=" flex flex-col justify-center items-center p-20 rounded-2xl shadow-2xl shadow-[#524e4e]  gap-10 w-[50rem] h-auto text-[#FFFFFF]  bg-[#131414eb]">
        <div className="flex flex-col gap-2 justify-center items-center">
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
        <div className="flex justify-center items-center gap-10 rounded-3xl shadow-2xl shadow-[#524e4e]  w-[30rem] h-20 text-[#FFFFFF] bg-[#131414eb] ">
          <div className="text-center hover:scale-110 cursor-pointer ">
            <Link href={'/proyectos'} className="text-xl font-bold ">Proyectos</Link>
          </div>
          <div className="text-center hover:scale-110  cursor-pointer">
            <Link href={'/contacto'} className="text-xl font-bold">Contacto</Link>
          </div>
          <div className="text-center hover:scale-110  cursor-pointer">
            <Link href={'/sobre-mi'} className="text-xl font-bold">Sobre mi</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
