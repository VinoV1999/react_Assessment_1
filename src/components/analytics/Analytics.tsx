import React from 'react'
import { motion } from 'framer-motion'

const Analytics = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 10,
      }}
      transition={{
        ease: "easeInOut",
      }} className='h-full w-full flex items-center justify-center'>Analytics</motion.section>
  )
}

export default Analytics