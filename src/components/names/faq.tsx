import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../utils/index.ts';

const Faq: React.FC = () => {

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <motion.div
          key={index}
          style={{
            borderBottom: '1px solid #e0e0e0',
            padding: '15px 0',
            cursor: 'pointer',
          }}
          onClick={() => toggleQuestion(index)}
          layout
        >
          <motion.h3 style={{ marginBottom: '10px' }}>
            {item.question}
            <span style={{ float: 'right' }}>
              {openQuestion === index ? '▲' : '▼'}
            </span>
          </motion.h3>
          <AnimatePresence>
            {openQuestion === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <motion.p>{item.answer}</motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Faq;