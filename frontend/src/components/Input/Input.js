import InputMask from "react-input-mask";

const Input = (props) => {
  return (
    <InputMask
      data-testid={props.testid}
      mask="9999999-99.9999.9.99.9999"
      type="text"
      name={props.name}
      onChange={props.onChange}
      className="my-1 bg-white border border-darkish text-darkGray text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5"
      placeholder="Digite o número do processo"
    />
  );
};

export default Input;
