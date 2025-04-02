import CardPlanos from "./cards-planos";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem,
} from "@/components/ui/carousel";

const SectionPlanos = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/187833-800-auto.png')" }}
    >
      <Carousel className="w-full bg-opacity-80 grid grid-cols-1">
        <CarouselContent>
          {[
            {
              src: "/firstPlan.png",
              alt: "plano ruim",
              tipoPlan: "Plano Palmeiras",
              cntOes: "0",
              centLes: "0",
              sup: "0",
              golS: "0",
              golN: "0",
              prioridade: "6",
              preco: "18,35",
            },
            {
              src: "/secPlan.png",
              alt: "plano Bronze",
              tipoPlan: "Bronze",
              cntOes: "0",
              centLes: "0",
              sup: "20",
              golS: "0",
              golN: "0",
              prioridade: "6",
              preco: "18,85",
            },
            {
              src: "/avanti-plano-Prata-319x319-1.png",
              alt: "plano Prata",
              tipoPlan: "Prata",
              cntOes: "0",
              centLes: "25",
              sup: "50",
              golS: "50",
              golN: "50",
              prioridade: "5",
              preco: "43,99",
            },
            {
              src: "/avanti-plano-Prata-Sup-319x319-1.png",
              alt: "plano Prata Superior",
              tipoPlan: "Prata Superior",
              cntOes: "0",
              centLes: "25",
              sup: "75",
              golS: "50",
              golN: "50",
              prioridade: "4",
              preco: "81,70",
            },
            {
              src: "/avanti-plano-Ouro-319x319-1.png",
              alt: "plano Ouro",
              tipoPlan: "Ouro",
              cntOes: "25",
              centLes: "50",
              sup: "75",
              golS: "75",
              golN: "100",
              prioridade: "3",
              preco: "151,89",
            },
            {
              src: "/avanti-plano-Platina-319x319-1.png",
              alt: "plano Platina",
              tipoPlan: "Platina",
              cntOes: "50",
              centLes: "75",
              sup: "100",
              golS: "100",
              golN: "100",
              prioridade: "2",
              preco: "272,37",
            },
            {
              src: "/avanti-plano-Diamante-319x319-1.png",
              alt: "plano Diamante",
              tipoPlan: "Diamante",
              cntOes: "100",
              centLes: "100",
              sup: "100",
              golS: "100",
              golN: "100",
              prioridade: "1",
              preco: "817,12",
            },
            {
              src: "/avanti-plano-especial-319x319-1.png",
              alt: "plano Especial",
              tipoPlan: "Especial",
              cntOes: "0",
              centLes: "25",
              sup: "50",
              golS: "50",
              golN: "50",
              prioridade: "1",
              preco: "79,90",
            },
            {
              src: "/avanti-plano-Interior-319x319-1.png",
              alt: "plano Especial Interior",
              tipoPlan: "Especial Interior",
              cntOes: "0",
              centLes: "25",
              sup: "50",
              golS: "50",
              golN: "50",
              prioridade: "2",
              preco: "21,99",
            },
            // Adicione os outros planos aqui...
          ].map((plan, index) => (
            <CarouselItem key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex justify-center">
                <CardPlanos {...plan} width={100} height={100} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 lg:left-96" />
        <CarouselNext className="absolute right-4 lg:right-92" />
      </Carousel>
    </div>
  );
};

export default SectionPlanos;
