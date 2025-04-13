import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ active, onClick, leftIcon, rightIcon, leftLabel, rightLabel }) => {
  return (
    <div className="inline-flex rounded-full p-1 bg-gray-200 dark:bg-gray-700">
      <motion.button
        className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors duration-200 ${
          active ? 'bg-orange-500 text-white' : 'bg-transparent'
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {leftIcon && <span>{leftIcon}</span>}
        <span>{leftLabel}</span>
      </motion.button>
      <motion.button
        className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 transition-colors duration-200 ${
          !active ? 'bg-orange-500 text-white' : 'bg-transparent'
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {rightIcon && <span>{rightIcon}</span>}
        <span>{rightLabel}</span>
      </motion.button>
    </div>
  );
};

export default ToggleButton;