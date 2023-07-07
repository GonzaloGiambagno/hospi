/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const ScrollAnimated = ({ children }) => {
const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8,}}
        transition={{ duration: 1.2, ease: [0.17, 0.55, 0.55, 1.2] }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default ScrollAnimated;