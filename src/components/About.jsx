/* eslint-disable react-refresh/only-export-components */
// import Tilt from "react-tilt";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";
// eslint-disable-next-line react/prop-types

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&nbsp;m a Front-End Developer with pretty good experience in
        JavaScript, and good hands on frameworks like React, Node.js, and
        Three.js (currently learning). I&nbsp;m a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let&nbsp;s work together to
        bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
