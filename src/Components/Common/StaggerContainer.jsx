import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

function StaggerContainer({
  children,
  className = "",
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount,
        once: false,
      }}
    >
      {children}
    </motion.div>
  );
}

export default StaggerContainer;
