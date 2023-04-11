import { useEffect, useState } from "react";
import api from "../../utils/apiConfig";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Infos/Infos";
import Timeline from "../../components/Timeline/Timeline";

//motion
import { motion } from "framer-motion";
import { transition1 } from "../../utils/transitions";

const Info = () => {
  const [recordByCNJ, setrecordByCNJ] = useState({});
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const cnj = urlParams.get("cnj");
  const history = useNavigate();

  useEffect(() => {
    api
      .get("/record", {
        params: {
          cnj: cnj,
        },
      })
      .then((response) => setrecordByCNJ(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, [cnj, history]);


  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <motion.div
        initial={{ opacity: 0, y: "-80%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-80%" }}
        transition={transition1}
        className="w-full pb-14 lg:pb-0 lg:w-auto z-10  flex flex-col justify-center items-center lg:items-center"
      >
        <Form record={recordByCNJ} />
        <Timeline updates={recordByCNJ?.movimentacoes} />
      </motion.div>
    </motion.section>
  );
};

export default Info;
