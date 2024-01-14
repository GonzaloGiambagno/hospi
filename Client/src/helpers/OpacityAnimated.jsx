/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion } from "framer-motion";

const OpacityAnimated = ({ children }) => {
const ref = useRef(null);

return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.17, 0.55, 0.55, 1.2] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default OpacityAnimated;