<script setup>
</script>

<template>
  <div class="container">
    <header class="hero section">
      <div class="hero-content">
        <h1 class="title">OpenTiny Vue 组件库</h1>
        <p class="subtitle">
          一套代码同时支持 Vue 2 / Vue 3<br>
          一套代码同时支持 PC 和移动端
        </p>
        <div class="cta-group">
          <a href="https://docs.opentiny.design/tiny-vue/guide/introduce.html" target="_blank" class="btn primary">开始使用</a>
          <a href="https://github.com/opentiny/tiny-vue" target="_blank" class="btn secondary">GitHub</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>↓</span>
      </div>
    </header>

    <!-- Feature 1: Compatibility -->
    <section class="feature-section section bg-tech-1">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">Vue 2 / Vue 3 兼容</h2>
          <p class="feature-desc">
            随着 Vue 3 的普及，OpenTiny 抹平了 Vue 2 和 Vue 3 的差异。<br>
            无论您使用哪个版本，组件使用方式完全一致，极大降低了迁移成本和风险。
          </p>
        </div>
        <div class="feature-visual">
          <img src="./assets/illustration_compatibility.png" alt="兼容性" class="floating-img" />
        </div>
      </div>
    </section>

    <!-- Feature 2: Cross Platform -->
    <section class="feature-section section bg-tech-2 reverse">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">PC & 移动端支持</h2>
          <p class="feature-desc">
            得益于 Renderless 架构，一套代码不仅支持多版本 Vue，还同时支持 PC 和移动端。<br>
            同一个组件在不同终端表现不同，但使用方式完全相同。
          </p>
        </div>
        <div class="feature-visual">
          <img src="./assets/feature_cross_platform.png" alt="跨端支持" class="floating-img delay-1" />
        </div>
      </div>
    </section>

    <!-- Feature 3: Rich Components -->
    <section class="feature-section section bg-tech-1">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">组件丰富，功能强大</h2>
          <p class="feature-desc">
            历经 9 年打磨，服务于 1500+ 业务。<br>
            包含 80+ PC 组件和 30+ 移动端组件。<br>
            Table、Tree 等高频组件内置虚拟滚动，大数据场景下体验丝滑。
          </p>
        </div>
        <div class="feature-visual">
          <img src="./assets/illustration_rich_components.png" alt="组件丰富" class="floating-img delay-2" />
        </div>
      </div>
    </section>

    <!-- Feature 4: Unique Components -->
    <section class="feature-section section bg-tech-2 reverse">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">独有特色组件</h2>
          <p class="feature-desc">
            除了业界通用的组件，我们还提供了一些独有的特色组件：<br>
            Split 面板分隔器、IpAddress IP 地址输入框、Calendar 日历和 Crop 图片裁切等。
          </p>
        </div>
        <div class="feature-visual">
          <img src="./assets/illustration_unique_components.png" alt="特色组件" class="floating-img delay-3" />
        </div>
      </div>
    </section>
    <!-- MCP Section: TinyVue 4.0 -->
    <section class="mcp-section section">
      <div class="mcp-content">
        <div class="mcp-text">
          <h2 class="section-title light">TinyVue 4.0 智能化生成式 UI 组件库</h2>
          <p class="mcp-desc">
            不仅仅是组件库，更是面向未来的智能化 UI 解决方案。
          </p>
          
          <div class="feature-grid">
            <div class="feature-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <h4>属性驱动式组件</h4>
              <p>通过配置属性即可驱动组件渲染，简化开发流程，提升代码可维护性。</p>
            </div>
            <div class="feature-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.51-3.47-3.51-9.11 0-12.58 3.51-3.47 9.14-3.47 12.65 0l5.36-5.36v6.92zM11 8.5h2v5h-2zM11 15.5h2v2h-2z"/>
                </svg>
              </div>
              <h4>AI 可识别智能组件</h4>
              <p>组件结构与物料经过优化，可被大模型轻松识别、提取与总结，赋能 AI 编程。</p>
            </div>
            <div class="feature-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
              <h4>轻量化组件，性能强悍</h4>
              <p>极致的代码体积优化与渲染性能，确保在大数据量场景下依然流畅如丝。</p>
            </div>
            <div class="feature-card">
              <div class="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h4>轻松适配多主题</h4>
              <p>内置强大的主题系统，一键切换风格，轻松满足多样化的品牌与设计需求。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-mini">
        <p>OpenTiny Design of Vue - 面向未来的技术架构</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: var(--bg-color);
}

.section {
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Backgrounds */
.hero {
  background-image: url('/src/assets/hero_bg_white.png');
  background-size: cover;
  background-position: center;
  color: var(--text-primary);
  text-align: center;
}

.bg-tech-1 {
  background-image: url('/src/assets/feature_bg_white_1.png');
  background-size: cover;
  background-position: center;
}

.bg-tech-2 {
  background-image: url('/src/assets/feature_bg_white_2.png');
  background-size: cover;
  background-position: center;
}

/* MCP Section */
.mcp-section {
  background-image: url('/src/assets/mcp_bg_white.png');
  background-size: cover;
  background-position: center;
  justify-content: space-between; /* Push footer to bottom */
}

/* Overlays - Lighter for fresh feel */
.hero::before,
.feature-section::before,
.mcp-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3); /* Light overlay */
  backdrop-filter: blur(1px);
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  padding: 20px;
  animation: fadeInUp 1s ease-out;
}

.title {
  font-size: 5.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;
  background: linear-gradient(120deg, #333 30%, #5e7ce2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));
}

.subtitle {
  font-size: 2.2rem;
  margin-bottom: 3.5rem;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
}

.cta-group {
  display: flex;
  gap: 30px;
  justify-content: center;
}

.btn {
  padding: 16px 48px;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.btn.primary {
  background: var(--primary-gradient);
  color: white;
  border: none;
  box-shadow: 0 10px 25px rgba(94, 124, 226, 0.3);
}

.btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(94, 124, 226, 0.5);
}

.btn.secondary {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  color: var(--primary-color);
  border: 1px solid rgba(94, 124, 226, 0.3);
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.btn.secondary:hover {
  background: white;
  transform: translateY(-3px);
  border-color: var(--primary-color);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-secondary);
  font-size: 2.5rem;
  animation: bounce 2s infinite;
  z-index: 2;
  opacity: 0.6;
}

/* Feature Sections */
.feature-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  padding: 0 80px;
  height: 100%;
}

.reverse .feature-content {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
  color: var(--text-primary);
  padding: 0 30px;
}

.section-title.light {
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--text-primary);
  text-shadow: none;
  position: relative;
  white-space: nowrap;
}

.section-title.light::after {
  content: '';
  display: block;
  width: 80px;
  height: 6px;
  background: var(--primary-gradient);
  margin-top: 20px;
  border-radius: 3px;
}

.feature-desc {
  font-size: 1.6rem;
  line-height: 1.8;
  color: var(--text-secondary);
  font-weight: 300;
}

.feature-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-img {
  width: 90%;
  max-width: 600px;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
  animation: float 6s ease-in-out infinite;
  transition: transform 0.5s ease;
}

.floating-img:hover {
  transform: scale(1.05);
}

.delay-1 { animation-delay: 1s; }
.delay-2 { animation-delay: 2s; }
.delay-3 { animation-delay: 3s; }

/* Hide underline for MCP title */
.mcp-section .section-title.light::after {
  display: none;
}

.mcp-content {
  max-width: 1400px;
  width: 100%;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  text-align: center;
  flex: 1; /* Take up available space */
}

.mcp-text {
  width: 100%;
  max-width: 1400px;
}

.mcp-desc {
  font-size: 1.5rem;
  margin-bottom: 60px;
  color: var(--text-secondary);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  width: 100%;
}

.feature-card {
  background: rgba(255, 255, 255, 0.7);
  padding: 35px 25px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
}

.feature-card:hover {
  background: white;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: rgba(94, 124, 226, 0.4);
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(94, 124, 226, 0.1) 0%, rgba(159, 94, 226, 0.1) 100%);
  border-radius: 16px;
  color: var(--primary-color);
}

.card-icon svg {
  width: 32px;
  height: 32px;
  fill: url(#gradient-icon); /* Fallback to color if gradient def not present */
  fill: var(--primary-color);
}

.feature-card h4 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: var(--text-primary);
}

.feature-card p {
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

.mcp-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-mini {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-secondary);
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0,0,0,0.05);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
  40% { transform: translate(-50%, -10px); }
  60% { transform: translate(-50%, -5px); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0px); }
}

@media (max-width: 1024px) {
  .feature-content, .mcp-content {
    flex-direction: column;
    text-align: center;
    padding: 0 30px;
    justify-content: center;
  }
  .reverse .feature-content {
    flex-direction: column;
  }
  .feature-text, .mcp-text {
    padding: 0;
    margin-bottom: 50px;
  }
  .feature-visual, .mcp-visual {
    width: 100%;
  }
  .section-title.light {
    font-size: 3rem;
  }
  .section-title.light::after {
    margin: 20px auto 0;
  }
  .title {
    font-size: 3.5rem;
  }
  .feature-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
  }
}

@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr; /* 1 column on mobile */
  }
}
</style>
