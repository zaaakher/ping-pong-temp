import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const AnimatedCard = (props) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const [hovered, setHovered] = useState(false);
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
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
      // whileHover={{
      //   color: "#ffffff",
      //   backgroundColor: "#000000",
      // }}
      className={styles.animated_card}
      animate={animationControl}
      transition={{ duration: 0.1 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        style={{
          position: "absolute",
          zIndex: 500,
          top: 0,
          width: "100%",
          height: "100%",
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
        }}
        //   whileHover={{
        //     backgroundColor: "#000000",
        //     opacity: 1,
        //     outline: "1px solid #ffffff",
        //   }}
        whileTap={{
          backgroundColor: "#000000",
          opacity: 1,
          outline: "1px solid #ffffff",
        }}
        whileDrag={{
          backgroundColor: "#000000",
          opacity: 1,
          outline: "1px solid #ffffff",
        }}
        transition={{ duration: 0.2 }}
      >
        {props.title}
      </motion.div>

      {/* <img
        height={400}
        className={styles.work_card_image}
        src={`https://xakher-images.s3.ap-southeast-1.amazonaws.com/${props.path}/${props.thumbnail}`}
      ></img> */}
    </motion.div>
  );
};
export default AnimatedCard;
