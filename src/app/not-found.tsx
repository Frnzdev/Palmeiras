import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-800 text-white text-center px-4">
      {/* Logo */}
      <Image
        src="/logo-palmeiras-512.png"
        alt="Logo do Palmeiras"
        width={120}
        height={120}
      />

      {/* Título e Mensagem */}
      <h1 className="text-4xl font-bold mt-4">404 - Página Não Encontrada</h1>
      <p className="mt-2 text-lg opacity-80">
        Opa! Parece que você se perdeu no meio do campo. ⚽💨
      </p>

      {/* Botão para Home */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-white text-green-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        Voltar para a Home
      </Link>
    </div>
  );
};

export default NotFound;
