import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq: React.FC = () => {
  const faqData = [
    {
      question: 'What is Bui?',
      answer:
        'Bui is a decentralized competition platform that allows organizations to list hackathons, bounties, and other competitive tasks, while ensuring verified payouts, transparent fund management, and on-chain reputation tracking for participants.',
    },
    {
      question: 'How do I join a competition on Bui?',
      answer:
        'Simply browse through featured competitions, select one that interests you, and click "Join Now." Ensure you meet the entry criteria and submit your work before the deadline.',
    },
    {
      question: 'How does Bui verify competitions and payouts?',
      answer:
        'We use on-chain verification and smart contract-based fund management to ensure that all competitions listed on Bui are legitimate, and that winners receive their payouts securely and transparently. Users can also track all fund disbursements on our Explorer.',
    },
    {
      question: 'What are .bui-sui tags?',
      answer:
        'A .bui-sui tag is a unique on-chain identity that serves as your verification and connection profile on Bui. It helps build credibility by showcasing your verified achievements, competition history, and network. Example Jesus.bui-sui. With a .bui-sui tag, you can: Verify your identity as a participant or organizer. Link your social media accounts (Twitter, Instagram, Discord, etc.). Connect your wallet for seamless transactions. Display your Bui activity – competitions you’ve joined, winnings, and rankings. Enhance discoverability – others can find and connect with you easily.',
    },
    {
      question: 'Can I trust the competitions listed on Bui?',
      answer:
        'Yes! Every competition is reviewed before listing. Additionally, prize funds are managed by Bui’s smart contract system, ensuring that rewards are real and verifiable before competitions begin.',
    },
    {
      question: 'How can organizations list their competitions?',
      answer:
        'Organizations can sign up and apply for verification through our Verified Organizations Database. Once verified, they can list competitions, manage submissions, and automate prize payouts securely.',
    },
    {
      question: 'Where can I see past winners and payouts?',
      answer:
        'We provide a Leaderboard & Explorer where you can view past winners and check on-chain transaction details for transparency.',
    },
    {
      question: 'How does Bui make money?',
      answer:
        'Bui operates on a sustainable revenue model by charging: Listing fees for organizations posting competitions. Verification subscriptions for users acquiring a .bui-sui tag. Premium features like priority competition listings and advanced analytics.',
    },
  ];

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