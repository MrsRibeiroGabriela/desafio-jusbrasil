import { transformDate, getUpdatesArray } from "../../utils/dateTransfom";

const Timeline = ({ updates }) => {
  const updatesArray = getUpdatesArray(updates);

  return (
    <div data-testid="timeline-container" className="flex-col justify-center gap-3 m-8 mb-18">
      <div className="block max-w-l p-6 mb-10 bg-white border border-lightGray rounded-lg shadow">
        <h3 className="flex items-center mb-1 text-lg font-semibold text-darkGray">
          Movimentações
        </h3>
        <div className="h-auto overflow-y-auto">
          {!updates?.length || !updates ? (
            <div>
              <p> Não há movimentações para esse processo</p>
            </div>
          ) : (
            <>
              {updatesArray?.map((item, index) => (
                <div className="m-3" key={index}>
                  <ol className="relative border-l border-lightGray">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-white">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <time className="block mb-2 text-sm font-normal leading-none text-darkGray">
                        {transformDate(item.data)
                          .split("-")
                          .reverse()
                          .join("/")}
                      </time>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {item.descricao}
                      </p>
                    </li>
                  </ol>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
