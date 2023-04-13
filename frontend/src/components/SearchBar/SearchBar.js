import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Select from "../Select/Select";
import Input from "../Input/Input";

function SearchBar() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    tribunal: Yup.string(),
    processo: Yup.string().matches(
      /^\d{7}-\d{2}\.\d{4}\.\d{1}\.\d{2}\.\d{4}$/,
      "O número de processo deve ser 9999999-99.9999.9.99.9999"
    ),
    searchButton: Yup.string().test(
      "form-filled",
      "Preencha pelo menos um campo antes de enviar o formulário",
      function () {
        const { tribunal, processo } = this.parent;
        return !!tribunal || !!processo;
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

  const FormContext = () => {
    const formik = useFormikContext();
    useEffect(() => {
      if (formik.values.picked === "tr") {
        formik.setFieldValue("processo", "");
      } else {
        formik.setFieldValue("tribunal", "");
      }
    }, [formik.values.picked, formik.setFieldValue]);
  };

  return (
    <Formik
      initialValues={{ tribunal: "", processo: "", picked: "tr" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, values, touched, isSubmitting, setFieldValue }) => (
        <Form
          data-testid="search-bar"
          className="flex-row justify-center items-center gap-4"
        >
          <FormContext />
          <div className="grid grid-cols-6 gap-x-0">
            <div
              className="col-start-1 col-end-7"
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label className="mr-3 ">
                <Field data-testid="pick-tr" className="mr-3" type="radio" name="picked" value="tr" />
                Consultar por tribunal
              </label>
              <label className="mr-3">
                <Field
                  data-testid="pick-cnj"
                  className="mr-3"
                  type="radio"
                  name="picked"
                  value="cnj"
                />
                Consultar por número do processo
              </label>
              {values.picked === "tr" ? (
                <Field name="tribunal">
                  {({ field }) => (
                    <Select
                      testid={field.name}
                      name={field.name}
                      onChange={field.onChange}
                      value={field.value}
                    />
                  )}
                </Field>
              ) : (
                <Field name="processo">
                  {({ field }) => (
                    <Input
                      testid={field.name}
                      name={field.name}
                      onChange={field.onChange}
                      value={field.value}
                    />
                  )}
                </Field>
              )}
            </div>
            <div className="col-start-1 col-end-7 text-primary mb-3">
              {errors.tribunal && (
                <ErrorMessage component="div" name="tribunal" />
              )}
              {errors.processo && (
                <ErrorMessage component="div" name="processo" />
              )}
            </div>
            <Field
              as="button"
              type="submit"
              name="searchButton"
              disabled={isSubmitting}
              className="btn col-start-1 col-end-3 focus:outline-none text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5"
            >
              BUSCAR
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SearchBar;
