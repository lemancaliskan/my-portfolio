import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#613DC1] via-[#4E148C] to-[#858AE3]"
        />
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg font-medium bg-gradient-to-r from-[#613DC1] to-[#858AE3] bg-clip-text text-transparent"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
}
