import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-between text-[#FFFFFF]">
      <section className="flex flex-col gap-4">
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
        <span className="text-center border border-green-400 rounded-xl w-60 p-1 text-sm font-bold text-green-400">Disponible para trabajar</span>
        <div className="flex gap-3">
          <button className="p-2 w-32 rounded-md bg-[#33363B] ">Contacto</button>
          <button className="p-2 w-32 rounded-md bg-gray-500">Linkedin</button>
        </div>
      </section>
    </main>
  );
}
