import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const SlideUp = (props) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: props.randomDelay ? Math.random() : 0.2,
        type: "tween",
        ease: "easeInOut",
      },
    });
  } else {
    // animationControl.start({
    //   y: 100,
    //   opacity: 0,
    //   transition: {
    //     delay: 0.5,
    //     type: "tween",
    //     ease: "easeInOut"
    //   }
    // });
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        y: 100,
        opacity: 0,
        border: "none",
        outline: "none",
        border: "2px solid black",
      }}
      className={styles.animated_card}
      animate={animationControl}
      transition={{ duration: 0.1 }}
    >
      {props.children}
    </motion.div>
  );
};
export default SlideUp;
