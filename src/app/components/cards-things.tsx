import Image from "next/image";

interface CardsMotivoProps {
  src: string;
  alt: string;
  text: string;
  height?: number;
  width?: number;
}

const CardThings = ({ src, alt, height, width, text }: CardsMotivoProps) => {
  return (
    <div className=" border border-gray rounded-3xl p-4 flex items-center shadow-[4px_6px_25px_14px_rgba(0,_0,_0,_0.1)]">
      <div>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <p className="p-6">{text}</p>
    </div>
  );
};

export default CardThings;
