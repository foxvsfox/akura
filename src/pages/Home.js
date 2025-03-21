import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css'; // 我们将在下面创建这个CSS文件

const Home = () => {
  // 导航栏状态
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 计数器状态
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  
  // 计数器区域动画控制
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // 监听滚动事件以改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 当计数器区域进入视图时，开始计数动画
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // 计数器动画
      const target1 = 500;
      const target2 = 1000;
      const target3 = 50;
      const duration = 2000; // 2秒
      
      const interval1 = setInterval(() => {
        setCounter1(prev => {
          const newValue = prev + Math.ceil(target1 / (duration / 50));
          return newValue >= target1 ? target1 : newValue;
        });
      }, 50);
      
      const interval2 = setInterval(() => {
        setCounter2(prev => {
          const newValue = prev + Math.ceil(target2 / (duration / 50));
          return newValue >= target2 ? target2 : newValue;
        });
      }, 50);
      
      const interval3 = setInterval(() => {
        setCounter3(prev => {
          const newValue = prev + Math.ceil(target3 / (duration / 50));
          return newValue >= target3 ? target3 : newValue;
        });
      }, 50);
      
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }
  }, [inView, controls]);
  
  // 特性卡片数据
  const features = [
    {
      id: 1,
      title: '响应式设计',
      description: '在所有设备上都能提供出色的用户体验',
      icon: '📱'
    },
    {
      id: 2,
      title: '现代化界面',
      description: '采用最新的设计趋势和交互模式',
      icon: '🎨'
    },
    {
      id: 3,
      title: '高性能',
      description: '优化的代码确保快速加载和流畅体验',
      icon: '⚡'
    },
    {
      id: 4,
      title: '用户友好',
      description: '直观的界面，让用户轻松上手',
      icon: '👍'
    }
  ];
  
  return (
    <div className="home-container">
      {/* 导航栏 */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Akura</div>
          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>首页</a></li>
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>特性</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>关于</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>联系我们</a></li>
          </ul>
        </div>
      </nav>
      
      {/* 英雄区域 */}
      <section id="home" className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>欢迎来到 Akura</h1>
          <p>我们提供创新的解决方案，帮助您实现业务目标</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解更多
          </motion.button>
        </motion.div>
      </section>
      
      {/* 特性区域 */}
      <section id="features" className="features-section">
        <h2>我们的特性</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="feature-card"
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.id * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* 计数器区域 */}
      <motion.section 
        ref={ref}
        id="stats" 
        className="stats-section"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } }
        }}
      >
        <div className="stat-container">
          <div className="stat-item">
            <h2>{counter1}+</h2>
            <p>客户</p>
          </div>
          <div className="stat-item">
            <h2>{counter2}+</h2>
            <p>项目完成</p>
          </div>
          <div className="stat-item">
            <h2>{counter3}+</h2>
            <p>国家/地区</p>
          </div>
        </div>
      </motion.section>
      
      {/* 联系我们区域 */}
      <section id="contact" className="contact-section">
        <h2>联系我们</h2>
        <motion.form 
          className="contact-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input type="text" id="name" placeholder="您的姓名" />
          </div>
          <div className="form-group">
            <label htmlFor="email">邮箱</label>
            <input type="email" id="email" placeholder="您的邮箱" />
          </div>
          <div className="form-group">
            <label htmlFor="message">留言</label>
            <textarea id="message" placeholder="您的留言" rows="5"></textarea>
          </div>
          <motion.button 
            className="submit-button" 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            发送
          </motion.button>
        </motion.form>
      </section>
      
      {/* 页脚 */}
      <footer className="footer">
        <p>&copy; 2023 Akura. 保留所有权利。</p>
      </footer>
    </div>
  );
};

export default Home;
