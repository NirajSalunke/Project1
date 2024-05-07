import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full hover:scale-110 transition-all">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <div className="bg-tertiary rounded-[20px] py-5 min-h-[280px] flex justify-evenly items-center flex-col ">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};
export default ServiceCard;
