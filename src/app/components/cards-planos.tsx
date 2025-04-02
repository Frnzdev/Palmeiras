import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CardPlanosProps {
  tipoPlan: string;
  cntOes: string;
  centLes: string;
  sup: string;
  golS: string;
  golN: string;
  prioridade: string;
  src: string;
  alt: string;
  preco: string;
  height?: number;
  width?: number;
}

const CardPlanos = ({
  src,
  alt,
  height,
  width,
  tipoPlan,
  cntOes,
  centLes,
  sup,
  golS,
  golN,
  prioridade,
  preco,
}: CardPlanosProps) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm border border-gray p-9 mt-8 rounded-3xl shadow-[7px_11px_11px_4px_rgba(0,_0,_0,_0.1)] space-y-6 text-white">
      <div>
        <div className="flex items-center justify-center">
          <Image src={src} alt={alt} height={height} width={width} />
        </div>
        <div>
          <h1>{tipoPlan}</h1>
        </div>
        <div>
          <h2 className="font-bold">Descontos:</h2>
          <p>{cntOes}% Central Oeste</p>
          <p>{centLes}% Central Leste</p>
          <p>{sup}% Superior</p>
          <p>{golS}% Gol sul</p>
          <p>{golN}% Gol norte</p>
        </div>
        <div>
          <h2 className="font-bold">Prioridade:</h2>
          <p>{prioridade}ª pré-venda</p>
        </div>
        <div className="flex justify-center p-6">
          <Button className="bg-green-800 p-5">
            R$ {preco}
            <span>/mês</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardPlanos;
