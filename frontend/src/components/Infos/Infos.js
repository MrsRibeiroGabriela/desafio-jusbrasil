const Infos = ({ record }) => {
  return (
    <div data-testid="lawsuit-detailed-container" className="flex-col justify-center gap-3 m-8 mb-18">
      <div className="block max-w-l p-6 bg-white border border-lightGray rounded-lg shadow">
        <h5 data-testid="lawsuit-detailed-title" className="mb-2 text-2xl font-bold tracking-tight text-darkGray">
          Detalhes do Processo n. {record.cnj} do {record.tribunalOrigem}
        </h5>
        <p className="font-normal text-blackish">
          <span className="font-bold">Distribuído em: </span>
          {record.dataInicial}
        </p>
        <p className="font-normal text-blackish">
          <span className="font-bold">Autor: </span>
          {record.autor}
        </p>
        <p className="font-normal text-blackish">
          <span className="font-bold">Réu: </span>
          {record.reu}
        </p>
        <p className="font-normal text-blackish">
          <span className="font-bold">Tribunal: </span>
          {record.tribunalOrigem}
        </p>
      </div>
    </div>
  );
};

export default Infos;
