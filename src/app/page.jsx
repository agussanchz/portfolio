import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={'/imgAvatar.jpg'}
            alt={'avatar de mi perfil'}
            width={100}
            height={510}
            className="rounded-full"
          />
        </div>
        <h1 className=" text-9xl font-bold">Hola! Soy</h1>
        <span className=" text-9xl font-bold">Agustin</span>
        <p className="text-4xl">Frontend developer de Argentina</p>
        <span className="text-center border border-green-400 rounded-xl w-60 p-1 text-sm font-bold">Disponible para trabajar</span>
        <div className="flex gap-3">
          <button className="border border-black p-2 w-32 rounded-md">Contacto</button>
          <button className="border border-black  p-2 w-32 rounded-md">Linkedin</button>
        </div>
      </div>
    </main>
  );
}
