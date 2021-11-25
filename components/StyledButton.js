import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Home.module.css";
const StyledButton = (props) => {
  return (
    <motion.div
      className={styles.styled_button}
      //   animate={{ opacity: 1, y: 0 }}
      whileHover={{
        backgroundColor: props.buttonColor,
      }}
      transition={{ duration: 0.3 }}
    >
      {props.label}
    </motion.div>
  );
};
export default StyledButton;
