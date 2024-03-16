import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4 px-48 py-48">
        <h1 className=" text-7xl font-bold">Hola! Soy</h1>
        <span className=" text-7xl font-bold"> Agustin</span>
        <p className="text-4xl">Frontend developer de Argentina</p>
        <div className="flex gap-3">
          <button className="border p-2 w-32">Contacto</button>
          <button className="border p-2 w-32">Linkedin</button>
        </div>
      </div>
    </main>
  );
}
