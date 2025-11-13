import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../App';
import { Brain, Zap, Shield, Globe, FileText, Image, Video, Music } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [isGenerating, setIsGenerating] = useState(false);
  const { colors } = useTheme();

  const dashboardStyles = {
    container: {
      minHeight: '100vh',
      padding: '120px 2rem 2rem 2rem',
    },
    content: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: '1rem',
    },
    subheading: {
      fontSize: '1.25rem',
      color: colors.textSecondary,
      maxWidth: '600px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
    },
    card: {
      background: colors.surface,
      borderRadius: '20px',
      border: `1px solid ${colors.border}`,
      overflow: 'hidden',
    },
    cardHeader: {
      padding: '2rem 2rem 1rem 2rem',
      borderBottom: `1px solid ${colors.border}`,
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: colors.text,
      marginBottom: '0.5rem',
    },
    cardSubtitle: {
      color: colors.textSecondary,
      fontSize: '1rem',
    },
    cardContent: {
      padding: '2rem',
    },
    tabs: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
    },
    tab: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 1.5rem',
      background: 'transparent',
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      fontWeight: '500',
    },
    activeTab: {
      background: colors.gradient,
      color: 'white',
      borderColor: 'transparent',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    input: {
      padding: '1rem 1.5rem',
      background: 'transparent',
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
    textarea: {
      padding: '1rem 1.5rem',
      background: 'transparent',
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
      minHeight: '120px',
      resize: 'vertical',
      transition: 'all 0.3s ease',
    },
    select: {
      padding: '1rem 1.5rem',
      background: 'transparent',
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      color: colors.text,
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '1.25rem 2rem',
      background: colors.gradient,
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '3rem',
    },
    featureCard: {
      background: colors.surface,
      padding: '2rem',
      borderRadius: '16px',
      border: `1px solid ${colors.border}`,
      textAlign: 'center',
      transition: 'all 0.3s ease',
    },
  };

  const contentTypes = [
    { id: 'text', label: 'Text Content', icon: FileText, description: 'Articles, social posts, emails' },
    { id: 'image', label: 'Visual Assets', icon: Image, description: 'Graphics, infographics, designs' },
    { id: 'video', label: 'Video Scripts', icon: Video, description: 'Storyboards, scripts, captions' },
    { id: 'audio', label: 'Audio Content', icon: Music, description: 'Podcasts, voiceovers, scripts' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate content in seconds, not hours'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and verification'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: '50+ languages and cultural contexts'
    },
    {
      icon: Brain,
      title: 'Smart Optimization',
      description: 'AI-powered performance insights'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={dashboardStyles.container}
    >
      <div style={dashboardStyles.content}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={dashboardStyles.header}
        >
          <h1 style={dashboardStyles.heading}>
            AI Content <span style={{ background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Workflow</span>
          </h1>
          <p style={dashboardStyles.subheading}>
            Streamline your content production with intelligent automation and verification
          </p>
        </motion.div>

        <div style={dashboardStyles.grid}>
          {/* Content Creation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={dashboardStyles.card}
          >
            <div style={dashboardStyles.cardHeader}>
              <h2 style={dashboardStyles.cardTitle}>
                <Brain style={{ marginRight: '0.5rem' }} size={24} />
                Content Generation Hub
              </h2>
              <p style={dashboardStyles.cardSubtitle}>
                Create high-quality content across multiple formats and languages
              </p>
            </div>

            <div style={dashboardStyles.cardContent}>
              {/* Content Type Tabs */}
              <div style={dashboardStyles.tabs}>
                {contentTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(type.id)}
                    style={{
                      ...dashboardStyles.tab,
                      ...(activeTab === type.id && dashboardStyles.activeTab),
                    }}
                  >
                    <type.icon size={20} />
                    {type.label}
                  </motion.button>
                ))}
              </div>

              {/* Input Form */}
              <div style={dashboardStyles.inputGroup}>
                <input
                  type="text"
                  placeholder="Enter content topic or brief..."
                  style={dashboardStyles.input}
                />
                
                <textarea
                  placeholder="Add specific requirements, tone, or style guidelines..."
                  style={dashboardStyles.textarea}
                />

                <select style={dashboardStyles.select}>
                  <option>Select target audience</option>
                  <option>General Public</option>
                  <option>Enterprise B2B</option>
                  <option>Education Sector</option>
                  <option>Media & Press</option>
                </select>

                <select style={dashboardStyles.select}>
                  <option>English (Global)</option>
                  <option>Spanish (Latin America)</option>
                  <option>French (International)</option>
                  <option>Hindi (India)</option>
                  <option>Arabic (Middle East)</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={dashboardStyles.button}
                onClick={() => setIsGenerating(true)}
              >
                {isGenerating ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      style={{ width: '20px', height: '20px', border: '2px solid white', borderTop: '2px solid transparent', borderRadius: '50%' }}
                    />
                    Generating Content...
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    Generate Intelligent Content
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={dashboardStyles.featuresGrid}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                style={dashboardStyles.featureCard}
              >
                <feature.icon 
                  size={48} 
                  style={{ 
                    color: colors.primary,
                    margin: '0 auto 1rem'
                  }} 
                />
                <h3 style={{ color: colors.text, marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '600' }}>
                  {feature.title}
                </h3>
                <p style={{ color: colors.textSecondary, lineHeight: 1.5 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;