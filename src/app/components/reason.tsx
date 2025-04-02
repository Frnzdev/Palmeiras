import CardsMotivo from "./cards-motivo";

const SerAvanti = () => {
  return (
    <div className=" flex flex-col justify-center items-center font-bold text-3xl text-green-800 p-6 space-y-6">
      <h1>Por quê ser avanti?</h1>
      <CardsMotivo />
      <h1 className="mt-8">Oque é ser Avanti?</h1>
      <p className="space-y-6 text-black font-normal p-6">
        Ser Avanti é fazer parte de um Palmeiras protagonista em campo e
        equilibrado fora dele, já que 100% da renda do programa vai para o
        futebol do clube. O amor pelo Verdão é o que nos une e o engajamento da
        nossa torcida é fundamental para que o Alviverde seja cada vez mais
        imponente!
      </p>
    </div>
  );
};

export default SerAvanti;
