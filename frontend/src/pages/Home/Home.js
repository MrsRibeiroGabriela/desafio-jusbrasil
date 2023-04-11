//components
import SearchBar from "../../components/SearchBar/SearchBar";
//images
import MainImg from "../../assets/home-illust.svg";
//motion
import { motion } from "framer-motion";
import { transition1 } from "../../utils/transitions";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto my-8 overflow-y-hidden relative">
        <div className="flex flex-col justify-center">
          {/* first collumn */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="w-full pb-14 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1" data-testid="title">Consulta Processual</h1>
            <p className="mb-12">
              Selecione um tribunal para listar os processos ou buscar pelo número unificado
            </p>
            <SearchBar />
          </motion.div>
          {/* second col */}
          <div className="flex justify-center lg:justify-end lg:max-h-max lg:overflow-hidden">
            <div className="relative max-h-92 overflow-hidden">
              <img src={MainImg} alt="Woman searching documents" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
