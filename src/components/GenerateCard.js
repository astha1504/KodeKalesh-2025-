import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Languages } from 'lucide-react';

const GenerateCard = ({ onGenerate }) => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('English');
  const [isGenerating, setIsGenerating] = useState(false);

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
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '0.75rem',
      color: 'white',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '0.75rem',
      color: 'white',
      fontSize: '1rem',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '1rem',
      borderRadius: '0.75rem',
      fontWeight: 600,
      fontSize: '1.125rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#e5e7eb',
      marginBottom: '0.5rem',
    },
  };

  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'];

  const handleGenerate = async () => {
    if (!title.trim()) return;
    
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    onGenerate({
      title,
      language,
      content: `This is AI-generated content for "${title}" in ${language}. It includes engaging copy and relevant hashtags optimized for social media platforms.`,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    });
    setIsGenerating(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={cardStyles.container}
    >
      <div style={cardStyles.content}>
        <h2 style={cardStyles.heading}>
          <Wand2 size={24} color="#d8b4fe" />
          Generate Content
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Title Input */}
          <div>
            <label style={cardStyles.label}>Content Title</label>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your content topic..."
              style={cardStyles.input}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            />
          </div>

          {/* Language Dropdown */}
          <div>
            <label style={{ ...cardStyles.label, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Languages size={16} />
              Language
            </label>
            <motion.select
              whileFocus={{ scale: 1.02 }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={cardStyles.select}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} style={{ background: '#1f2937', color: 'white' }}>
                  {lang}
                </option>
              ))}
            </motion.select>
          </div>

          {/* Generate Button */}
          <motion.button
            onClick={handleGenerate}
            disabled={!title.trim() || isGenerating}
            whileHover={{ scale: !isGenerating && title.trim() ? 1.05 : 1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              ...cardStyles.button,
              background: !title.trim() || isGenerating 
                ? '#4b5563' 
                : 'linear-gradient(45deg, #8b5cf6, #ec4899)',
              color: 'white',
              cursor: !title.trim() || isGenerating ? 'not-allowed' : 'pointer',
            }}
          >
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                  />
                  Generating...
                </motion.div>
              ) : (
                <motion.div
                  key="generate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Wand2 size={20} />
                  Generate Content
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default GenerateCard;