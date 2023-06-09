import { useNavigate } from "react-router-dom";

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <div className="mb-6">
      <button
        data-testid="back-btn"
        onClick={() => navigate(-1)}
        type="button"
        className="absolute left-24 top-0 text-darkGray rounded-md border border-none py-2 hover:text-hoverPrimary"
      >
        <div className="flex flex-row align-middle">
          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="ml-2">Voltar</p>
        </div>
      </button>
    </div>
  )
}

export default BackButton