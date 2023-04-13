import { useEffect, useState } from "react";
import api from "../../utils/apiConfig";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [records, setRecords] = useState([]);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tr = urlParams.get("tr");
  const history = useNavigate();

  useEffect(() => {
    api
      .get("/records", {
        params: {
          tr: tr,
        },
      })
      .then((response) => setRecords(response.data))
      .catch((err) => {
        err.response.status && console.log(err);
      });
  }, [tr, history]);

  return (
    <div className="h-auto m-8 pb-8 overflow-y-auto">
      <h2 data-testid="search-paragraph" className="pb-2">
        Resultados de busca por processos em:{" "}
        <span className="text-primary font-bold">{tr}</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {records.length === 0 ? (
          <h2>Não existe nenhum processo para o tribunal selecionado.</h2>
        ) : (
          records?.map((item) => (
            <div data-testid="search-list"
              key={item.cnj}
              className="max-w-sm p-6 hover:bg-lightGray bg-white border border-lightGray rounded-lg shadow"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark">
                Processo n. {item.cnj}
              </h5>
              <p className="mb-3 font-normal text-blackish">
                Distribuído em: {item.dataInicial}
              </p>
              <a
                href={`/record/?cnj=${item.cnj}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-hoverPrimary"
              >
                VISUALIZAR
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
