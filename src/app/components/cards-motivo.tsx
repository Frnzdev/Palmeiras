import CardThings from "./cards-things";

const CardsMotivo = () => {
  return (
    <div>
      <div className="space-y-8">
        <CardThings
          src="/icon-tickets.png"
          alt="teste"
          width={100}
          height={100}
          text="Ingressos com prioridade e facilidade"
        />
        <CardThings
          src="/icon-competitive.png"
          alt="teste"
          width={100}
          height={100}
          text="Vantagens e experiências únicas"
        />
        <CardThings
          src="/icon-tag.png"
          alt="teste"
          width={100}
          height={100}
          text="Descontos em serviços e produtos"
        />
      </div>
    </div>
  );
};

export default CardsMotivo;
