import Image from "next/image";

interface JogadoresProps {
  nome: string;
  numero?: number;
  comiss?: string;
  funcao: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const CardsPlayers = ({
  nome,
  numero,
  funcao,
  src,
  width,
  height,
  alt,
  comiss,
}: JogadoresProps) => {
  return (
    <div className="relative w-48 border-2 border-yellow-500 rounded-xl bg-white p-2 shadow-md">
      <div className="absolute top-2 right-2 text-green-700 font-bold text-2xl">
        {numero} {comiss}
      </div>
      <Image
        className="w-full rounded-t-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="bg-green-900 text-white text-center py-2 rounded-b-lg">
        <p className="font-bold">{nome}</p>
        <p className="text-sm">{funcao}</p>
      </div>
    </div>
  );
};

export default CardsPlayers;
