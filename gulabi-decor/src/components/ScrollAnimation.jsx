// src/components/ScrollAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = () => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#3498db',
        margin: '50px 0',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 5 }}
      viewport={{ once: true }}
    >
    </motion.div>
  );
};

export default ScrollAnimation;
