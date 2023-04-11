import { useState, useEffect } from "react";
import api from "../../utils/apiConfig";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function SearchBar() {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api
      .get("/courts")
      .then((response) => setOptions(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const validationSchema = Yup.object().shape({
    tribunal: Yup.string(),
    processo: Yup.string().matches(
      /^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/,
      "O número de processo deve ser 9999999-99.9999.9.99.9999"
    ),
    searchButton: Yup.boolean().test(
      "search",
      "Por favor, preencha pelo menos um campo",
      function (value) {
        const { tribunal, processo } = this.parent;
        return Boolean(tribunal) || Boolean(processo);
      }
    ),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (values.tribunal.toString().length > 0) {
      navigate(`/records/?tr=${values.tribunal}`);
    } else if (values.processo.length > 0) {
      navigate(`/record/?cnj=${values.processo}`);
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ tribunal: "", processo: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors }) => (
        <Form
          data-testid="search-bar"
          className="flex-row justify-center items-center gap-4"
        >
          <div className="flex justify-center items-center gap-4">
            <Field
              as="select"
              name="tribunal"
              id="tribunal"
              className="my-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            >
              <option disabled={true} value="">
                Escolha um tribunal
              </option>
              {options?.map((option) => (
                <option
                  key={option}
                  value={option}
                  className="flex items-center gap-2"
                >
                  {option}
                </option>
              ))}
            </Field>
            <Field
              as={InputMask}
              mask="9999999-99.9999.9.99.9999"
              type="text"
              name="processo"
              id="processo"
              className="my-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:purple-blue-500"
              placeholder="Número do processo"
            />

            <Field
              as="button"
              type="submit"
              name="searchButton"
              className="flex items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 disabled:opacity-75"
            >
              BUSCAR
            </Field>
          </div>
          <div>
            {errors.tribunal && (
              <ErrorMessage component="div" name="tribunal" />
            )}
            {errors.processo && (
              <ErrorMessage component="div" name="processo" />
            )}
            {errors.searchButton && <div>{errors.searchButton}</div>}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SearchBar;
