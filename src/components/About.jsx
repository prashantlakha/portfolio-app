import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an Experienced Web Developer with expertise in React and NodeJS,
        proficient in developing end-to-end web applications. Skilled in HTML,
        CSS, and Bootstrap, and experienced in integrating APIs. A team player
        with strong problem-solving skills, and a passion for building
        accessible and responsive user interfaces
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* <div className='flex flex-col items-end justify-end'>
        <p className='text-white text-[20px] font-[#Cascadia]'>
          // It's up to you...
        </p>
        <div className='flex flex-row text-[20px]'>
          <p className='text-[#23e619] text-[20px]'>if </p>
          <p className='text-white text-[20px]'>{`(youWant() === `}</p>
          <p className='text-[#23e619] text-[20px]'>true</p>
          <p className='text-white text-[20px]'>{`) {`}</p>
        </div>
        <div className='text-white text-[20px]'>youCan();</div>
        <div>
          <p className='text-white text-[20px]'>{`} `}</p>
          <p className='text-[#23e619] '>else</p>
          <p className='text-white text-[20px]'>{`{ youCant(); }`}</p>
        </div>
      </div> */}
      {/* <div className='flex flex-col items-end'>
        <div className='items-start'>
          <p className='text-white text-lg font-semibold'>// It's up to you</p>
          <div className='flex flex-row text-lg'>
            <p className='text-green-500 font-bold'>if </p>
            <p className='text-white'>{` (youWant() === `}</p>
            <p className='text-green-500 font-bold'>true</p>
            <p className='text-white'>{`) {`}</p>
          </div>
          <div className='text-white'> youCan();</div>
          <div className='flex flex-row text-lg'>
            <p className='text-green-500 font-bold'>{` } `}</p>
            <p className='text-white'>else</p>
            <p className='text-green-500 font-bold'>{`{youCant(); }`}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

// export default SectionWrapper(About, "about");
// export default SectionWrapper(About, "about");
export default SectionWrapper(About, "about");
