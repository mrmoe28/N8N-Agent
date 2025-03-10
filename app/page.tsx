'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    // This will run only on the client side
    const script = document.createElement('script');
    script.innerHTML = `
      // Any JavaScript you want to run on the page
    `;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.navbar}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                  <path d="M12 13v8"></path>
                  <path d="M5 13v2a2 2 0 0 0 2 2h5"></path>
                </svg>
              </span>
              Agent Studio
            </a>
            <div className={styles.navLinks}>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#get-started">Get Started</a>
              <a href="https://github.com/ottomator/ottomator-agents" target="_blank" rel="noopener">GitHub</a>
            </div>
          </nav>
        </div>
      </header>

      <section className={styles.hero}>
        <div className="container">
          <h1>Your Intelligent Workflow Assistant</h1>
          <p>Discover, understand, and implement automation workflows with the help of AI. Simply describe what you're trying to automate, and get personalized recommendations.</p>
          <div>
            <a href="#get-started" className={styles.btn}>Get Started</a>
            <a href="#how-it-works" className={`${styles.btn} ${styles.btnSecondary}`}>Learn More</a>
          </div>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Powerful Features</h2>
            <p>Discover what makes Agent Studio your ultimate automation companion</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 10-4 4-2-2"></path>
                </svg>
              </div>
              <h3>Workflow Analysis</h3>
              <p>Advanced AI models analyze workflows to generate comprehensive summaries of functionality, configuration, and potential improvements.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3>Intelligent Recommendations</h3>
              <p>Get contextually relevant workflow suggestions based on your specific automation needs and requirements.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Legitimacy Validation</h3>
              <p>Automatically detects and filters out test/spam workflows using AI-powered analysis for reliable recommendations.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Interactive Assistance</h3>
              <p>Maintains conversation context through session management and provides detailed explanations of recommended workflows.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <h3>Best Practices</h3>
              <p>Recommends optimal configurations, error handling improvements, and security optimization tips.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Semantic Search</h3>
              <p>Maintains a vector database of workflow descriptions and capabilities for precise matching with user queries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks} id="how-it-works">
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>How It Works</h2>
            <p>Get started with Agent Studio in just a few simple steps</p>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Describe Your Needs</h3>
              <p>Simply tell the agent what you're trying to automate in natural language.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get Recommendations</h3>
              <p>The agent analyzes your request and provides matching workflows from its knowledge base.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Implement Solutions</h3>
              <p>Follow the detailed explanations to implement and customize the recommended workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="get-started">
        <div className="container">
          <h2>Ready to Streamline Your Automation?</h2>
          <p>Start using Agent Studio today and discover the perfect workflows for your automation needs.</p>
          <a href="https://studio.ottomator.ai" className={styles.btn}>Get Started Now</a>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <a href="#">
                <span className={styles.logoIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v8"></path>
                    <path d="M5 13v2a2 2 0 0 0 2 2h5"></path>
                  </svg>
                </span>
                Agent Studio
              </a>
              <p>Your AI-powered assistant for discovering and implementing automation workflows.</p>
            </div>
            <div className={styles.footerLinks}>
              <h3>Resources</h3>
              <ul>
                <li><a href="https://docs.n8n.io/" target="_blank" rel="noopener">Documentation</a></li>
                <li><a href="https://n8n.io/workflows" target="_blank" rel="noopener">Workflow Templates</a></li>
                <li><a href="https://community.n8n.io/" target="_blank" rel="noopener">Community</a></li>
              </ul>
            </div>
            <div className={styles.footerLinks}>
              <h3>Company</h3>
              <ul>
                <li><a href="https://ottomator.ai" target="_blank" rel="noopener">About oTTomator</a></li>
                <li><a href="https://studio.ottomator.ai" target="_blank" rel="noopener">Live Agent Studio</a></li>
                <li><a href="https://thinktank.ottomator.ai" target="_blank" rel="noopener">Think Tank Community</a></li>
              </ul>
            </div>
            <div className={styles.footerLinks}>
              <h3>Connect</h3>
              <ul>
                <li><a href="https://github.com/ottomator/ottomator-agents" target="_blank" rel="noopener">GitHub</a></li>
                <li><a href="https://www.youtube.com/@ColeMedin" target="_blank" rel="noopener">YouTube</a></li>
                <li><a href="https://twitter.com/ottomator_ai" target="_blank" rel="noopener">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2024 Agent Studio. Created by oTTomator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 