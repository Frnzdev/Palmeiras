import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react"; // Ícones das redes sociais

const Footer = () => {
  return (
    <footer className="w-full bg-green-900 text-white py-6 px-4 flex flex-col items-center">
      {/* Logo e Nome */}
      <div className="flex items-center space-x-3 mb-4">
        <Image
          src="/logo-palmeiras-512.png"
          alt="Logo do Palmeiras"
          width={50}
          height={50}
        />
        <span className="text-xl font-semibold">Frnz</span>
      </div>

      {/* Redes Sociais */}
      <div className="flex space-x-6">
        <Link
          href="https://www.instagram.com/eufrnz"
          target="_blank"
          className="hover:text-green-300 transition"
        >
          <Instagram size={28} />
        </Link>
      </div>

      {/* Copyright */}
      <p className="mt-4 text-sm opacity-80">
        &copy; 2025 Frnz. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
