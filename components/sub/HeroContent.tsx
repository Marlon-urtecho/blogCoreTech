"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="hero-content-inner"
    >
      <div className="content-wrapper">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box"
        >
          
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="title-section"
        >
          <h1 className="main-title">
            <span>
              Software
              <span className="gradient-text">
                {" "}Development{" "}
              </span>
              Company
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="description-text"
        >
        Experimente el crecimiento con nuestros servicios de soporte y desarrollo de software personalizados.
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="cta-button-wrapper"
        >
          <button className="button-primary">
            Consulte a expertos
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;