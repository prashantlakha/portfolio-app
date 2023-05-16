import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-4'>
        {technologies.map((technology) => (
          <div
            className='flex flex-col items-center justify-center'
            key={technology.name}
          >
            <div className='w-28 h-28 ' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            <h4>{technology.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
