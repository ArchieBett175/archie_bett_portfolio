import React from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
        {/* blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            onClick={onClose}
          />

          <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20}} 
          animate={{ opacity: 1, scale: 1, y: 0}}
          exit={{ opacity: 0, scale: 0.9, y: 20}}
          transition={{duration: 0.3, type: "spring", stiffness: 300, damping: 30}}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-zinc-800/80 rounded-lg shadow-2xl md:max-w-4xl w-full max-h-[90vh] overflow-auto">
                {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
