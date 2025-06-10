
import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ children }) => (
  <motion.h2 
    className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.h2>
);
