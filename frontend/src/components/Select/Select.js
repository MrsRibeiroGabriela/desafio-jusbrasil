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
      data-testid={props.testid}
      defaultValue="default"
      name={props.name} onChange={props.onChange} 
      className="my-1 bg-white border border-dark text-darkGray text-sm rounded-lg hover:border-darkHover focus:ring-secondary focus:border-secondary block w-full p-2.5"
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
