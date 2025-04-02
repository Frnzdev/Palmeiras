import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const SliderPalmeiras = () => {
  return (
    <div className="w-full">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent className="w-full">
          {[
            "/Avanti_App_2000x600-2048x2048-1.jpeg",
            "/AVANTI2000x600.png",
            "/Banner_Avanti_2000x600_02-2048x2048-1.jpeg",
          ].map((src, index) => (
            <CarouselItem key={index} className="w-full flex justify-center">
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                width={2000}
                height={600}
                className="w-160 h-60 lg:w-full lg:h-auto rounded-lg"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </div>
  );
};

export default SliderPalmeiras;
