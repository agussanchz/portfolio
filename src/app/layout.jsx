import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <body className="px-96 py-14 bg-[#FAFAFA] text-black h-screen w-screen">
      <header>
        <Navbar />
      </header>
      <main className="px-36 py-48">{children}</main>
    </body>
  </html>
  );
}
