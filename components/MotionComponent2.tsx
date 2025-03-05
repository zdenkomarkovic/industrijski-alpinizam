"use client";

import React from "react";
import { motion } from "framer-motion";

const MotionComponent2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" rounded-3xl overflow-hidden  md:w-1/3"
    >
      {children}
    </motion.div>
  );
};

export default MotionComponent2;
