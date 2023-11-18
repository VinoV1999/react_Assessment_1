import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const AnimTransition = {
    duration: 0.5,
    repeat: Infinity,
    ease: "easeInOut"
  };

  const AnimVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  };

  const ContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren:0.08,
      }
    }
  };
  return (
    <div className="flex items-center justify-center m-2 h-10 w-10">
      <motion.div 
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
        className="flex items-center justify-center m-2 h-10 w-10 gap-1">
        <motion.div
          variants={AnimVariants}
          transition={AnimTransition}
          className="bg-btnbg w-2 h-2 rounded-full"
        ></motion.div>
        <motion.div
          variants={AnimVariants}
          transition={AnimTransition}
          className="bg-btnbg w-2 h-2 rounded-full"></motion.div>
        <motion.div 
          variants={AnimVariants}
          transition={AnimTransition}
          className="bg-btnbg w-2 h-2 rounded-full"></motion.div>
      </motion.div>
    </div>
  );
};

export default Loading;
