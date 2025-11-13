import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Shield, Download } from 'lucide-react';

const OutputCard = ({ content }) => {
  const [copiedHash, setCopiedHash] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  const cardStyles = {
    container: {
      background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
      padding: '1px',
      borderRadius: '1rem',
    },
    content: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    heading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    contentPreview: {
      background: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '1.5rem',
    },
    hashContainer: {
      background: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '0.75rem',
      padding: '1rem',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      marginBottom: '1.5rem',
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    button: {
      flex: 1,
      padding: '0.75rem',
      borderRadius: '0.75rem',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
  };

  const generateHash = (text) => {
    return '0x' + Array.from(text)
      .reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0)
      .toString(16)
      .slice(0, 64);
  };

  const hash = generateHash(content?.content || '');

  const copyHash = async () => {
    await navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const signWithMetaMask = async () => {
    setIsSigning(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSigning(false);
  };

  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      style={cardStyles.container}
    >
      <div style={cardStyles.content}>
        <h2 style={cardStyles.heading}>
          <Shield size={24} color="#86efac" />
          Generated Content
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Content Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={cardStyles.contentPreview}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>
              {content.title}
            </h3>
            <p style={{ color: '#d1d5db', whiteSpace: 'pre-wrap' }}>{content.content}</p>
            
            {/* Mock Image */}
            {content.image && (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                src={content.image}
                alt="Generated content"
                style={{ marginTop: '1rem', borderRadius: '0.5rem', width: '100%', maxWidth: '400px', margin: '1rem auto 0' }}
              />
            )}
          </motion.div>

          {/* Hash Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={cardStyles.hashContainer}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#d1d5db' }}>SHA256 Hash:</span>
              <motion.button
                onClick={copyHash}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  background: '#8b5cf6',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '0.875rem',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {copiedHash ? <Check size={16} /> : <Copy size={16} />}
                {copiedHash ? 'Copied!' : 'Copy Hash'}
              </motion.button>
            </div>
            <code style={{ fontSize: '0.75rem', color: '#86efac', wordBreak: 'break-all', fontFamily: 'monospace' }}>
              {hash}
            </code>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={cardStyles.buttonGroup}
          >
            <motion.button
              onClick={signWithMetaMask}
              disabled={isSigning}
              whileHover={{ scale: isSigning ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...cardStyles.button,
                background: isSigning ? '#ea580c' : '#f97316',
                color: 'white',
                cursor: isSigning ? 'not-allowed' : 'pointer',
              }}
            >
              <AnimatePresence mode="wait">
                {isSigning ? (
                  <motion.div
                    key="signing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      style={{ width: '16px', height: '16px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                    />
                    Signing...
                  </motion.div>
                ) : (
                  <motion.div
                    key="sign"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Shield size={18} />
                    Sign with MetaMask
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...cardStyles.button,
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <Download size={18} />
              Download Content
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OutputCard;