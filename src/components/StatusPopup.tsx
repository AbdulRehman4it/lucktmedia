import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface StatusPopupProps {
  status: 'success' | 'error' | null;
  message: string;
  onClose: () => void;
}

const StatusPopup: React.FC<StatusPopupProps> = ({ status, message, onClose }) => {
  return (
    <AnimatePresence>
      {status && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="pointer-events-auto bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 max-w-sm mx-4 flex flex-col items-center text-center relative"
          >
            <div className={`mb-4 p-3 rounded-full border-2 border-black ${status === 'success' ? 'bg-[#00ff99]' : 'bg-red-200'}`}>
              {status === 'success' ? (
                <CheckCircle size={32} className="text-black" />
              ) : (
                <XCircle size={32} className="text-black" />
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-2">
              {status === 'success' ? 'Success!' : 'Error!'}
            </h3>
            
            <p className="text-gray-600 mb-6 font-medium">
              {message}
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-[#00ff99] hover:text-black transition-colors border-2 border-black"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StatusPopup;
