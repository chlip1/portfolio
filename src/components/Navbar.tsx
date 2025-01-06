import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow-lg rounded-full sticky top-4 max-w-[300px] md:max-w-[400px] mx-auto z-50">
      <div className="relative container mx-auto px-4 py-2 flex justify-between items-center gap-2 text-sm md:gap-4 md:text-base">
        <Link href="#experience">
          <span className="font-bold hover:text-cyan-500 transition duration-300">Experience</span>
        </Link>
        <Link href="#projects">
          <span className="font-bold hover:text-cyan-500 transition duration-300">Projects</span>
        </Link>
        <Link href="#education">
          <span className="font-bold hover:text-cyan-500 transition duration-300">Education</span>
        </Link>
        <Link href="#contact">
          <span className="font-bold hover:text-cyan-500 transition duration-300">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
