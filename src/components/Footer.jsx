import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = ({ 
  selectedSkip, 
  onBack, 
  onContinue, 
  visible = true,
  className = ''
}) => {
  if (!selectedSkip || !visible) return null;

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      className={`fixed bottom-0 left-0 right-0 bg-white/20 border-t border-gray-200/30 shadow-lg p-4 z-50 ${className}`}

      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer - only shown on desktop */}
        <p className="hidden md:block mb-3 text-sm leading-relaxed text-gray-600 text-center px-4 font-sans">
            Imagery shown may vary from actual product. Specifications and colors may differ.
        </p>


        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Skip Info */}
          <div className="flex-1">
            <div className="flex items-center justify-between md:justify-start md:gap-10">
              <h2 id="footer-heading" className="text-lg font-semibold text-gray-900">
                {selectedSkip.size} Yard Skip
              </h2>
              
              <div className="flex items-center gap-4">
                <div className="text-right md:text-left">
                <p className="text-2xl md:text-4xl font-bold text-blue-600">
                    £{selectedSkip.price_before_vat}
                  </p>
                  <p className="text-xs text-gray-500">
                    {selectedSkip.hire_period_days} day hire • excl. VAT
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile disclaimer */}
            <p className="mt-2 md:hidden text-xs text-gray-500">
              Imagery shown may vary from actual product.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 md:w-auto">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all active:scale-[0.98]"
              aria-label="Go back to previous step"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onContinue}
              className="flex-1 md:flex-none px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow-sm flex items-center justify-center gap-2"
              aria-label="Continue to next step"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;