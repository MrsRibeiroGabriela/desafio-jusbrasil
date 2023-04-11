import BackButton from "../BackButton/BackButton";

const Infos = ({ record }) => {
  return (
    <div className="flex-col justify-center gap-3 m-8 mb-18">
      <BackButton />

      <div className="block max-w-l p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Detalhes do Processo n. {record.cnj} do {record.tribunalOrigem}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Distribuído em: </span>
          {record.dataInicial}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Autor: </span>
          {record.autor}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Réu: </span>
          {record.reu}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Tribunal: </span>
          {record.tribunalOrigem}
        </p>
      </div>
    </div>
  );
};

export default Infos;
