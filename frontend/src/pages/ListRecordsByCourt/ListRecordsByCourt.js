import List from "../../components/List/List";
//motion
import { motion } from "framer-motion";
import { transition1 } from "../../utils/transitions";

const ListRecordsByCourt = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-80%" }}
      transition={transition1}
      className="w-full pb-14 lg:pb-0 lg:w-auto z-10  flex flex-col justify-center items-center lg:items-center"
    >
      <List />
    </motion.div>
  );
};

export default ListRecordsByCourt;
