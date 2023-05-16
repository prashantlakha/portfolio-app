import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Feel free to contact</p>
        <h2 className={styles.sectionHeadText}>Contact</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='flex flex-col items-center justify-center mt-8 text-white text-[20px] max-w-3xl leading-[30px]'
      >
        <p>Email: singhprashant2712@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href='https://www.linkedin.com/in/psinghpb/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://www.linkedin.com/in/psinghpb
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href='https://github.com/prashantlakha'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://github.com/prashantlakha
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
