import InputMask from "react-input-mask";

const Input = (props) => {
  return (
    <InputMask
                  mask="9999999-99.9999.9.99.9999"
                  type="text"
                  name={props.name}
                  onChange={props.onChange}
                  className="my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  placeholder="Digite o número do processo"
                />
  )
}

export default Input