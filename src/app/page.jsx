import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center bg-[url('/bg-1.jpg')] bg-no-repeat bg-cover bg-opacity-10">
        <div className="flex flex-col justify-center items-center 'border' rounded-t-2xl shadow-2xl shadow-[#b7b2b2]  gap-3 w-[30rem] h-96 text-[#FFFFFF]  bg-[#131414eb]">
          <Image
            src={'/imgAvatar.jpg'}
            alt={'avatar de mi perfil'}
            width={180}
            height={510}
            className="rounded-full"
          />
          <h2 className="font-bold text-2xl">Agustin sanchez - <Link className="text-[#b75591]" href={'https://www.linkedin.com/in/agussanchz/'} target="blank">@agussanchz</Link></h2>
          <p className="text-xl">Frontend Developer</p>
        </div>
        <div className="flex justify-center items-center gap-10 rounded-b-3xl shadow-2xl shadow-[#b7b2b2]  w-[30rem] h-40 text-[#FFFFFF] bg-[#131414eb] ">
          <div className="text-center hover:scale-110 cursor-pointer ">
            <h3 className="text-2xl font-bold ">3k</h3>
            <Link href={'/proyectos'} className="text-xl font-bold ">Proyectos</Link>
          </div>
          <div className="text-center hover:scale-110  cursor-pointer">
            <h3 className="text-2xl font-bold">100k</h3>
            <Link href={'/contacto'} className="text-xl font-bold">Contacto</Link>
          </div>
          <div className="text-center hover:scale-110  cursor-pointer">
            <h3 className="text-2xl font-bold">20k</h3>
            <Link href={'/sobre-mi'} className="text-xl font-bold">Sobre mi</Link>
          </div>
        </div>

    </main>
  );
}
