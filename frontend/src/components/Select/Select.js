import { useState, useEffect } from "react";
import api from "../../utils/apiConfig";

const Select = (props) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    api
      .get("/courts")
      .then((response) => setOptions(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <select
      defaultValue="default"
      name={props.name} onChange={props.onChange} 
      className="my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
    >
      <option disabled={true} value="default">
        Escolha um tribunal
      </option>
      {options?.map((option) => (
        <option key={option} value={option} className="flex items-center gap-2">
          {option}
        </option>
      ))}
    </select>
    
  );
};

export default Select;
