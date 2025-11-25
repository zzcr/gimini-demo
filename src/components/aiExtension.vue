<script setup>
</script>

<template>
  <div class="container">
    <header class="hero section">
      <div class="hero-content">
        <h1 class="title">AI Extension</h1>
        <p class="subtitle">
          基于 WXT 的浏览器扩展插件<br>
          让 AI 助手与网页智能交互
        </p>
        <div class="cta-group">
          <a href="https://ai.opentiny.design/extension.zip" class="btn primary">下载扩展</a>
          <a href="/src/ai-extension-install.md" target="_blank" class="btn secondary">安装指南</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>↓</span>
      </div>
    </header>

    <!-- Feature 1: MCP 工具集成 -->
    <section class="feature-section section bg-tech-1">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">MCP 工具集成</h2>
          <p class="feature-desc">
            基于 Model Context Protocol 实现工具调用。<br>
            为特定网站注册自定义 MCP 工具。<br>
            AI 助手可通过扩展与网页深度交互。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/aiext_mcp_tools.png" alt="MCP 工具" class="floating-img" />
        </div>
      </div>
    </section>

    <!-- Feature 2: User Scripts API -->
    <section class="feature-section section bg-tech-2 reverse">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">User Scripts API</h2>
          <p class="feature-desc">
            支持 Chrome 120+ 的 User Scripts API。<br>
            在页面主世界（Main World）中执行脚本。<br>
            访问页面完整的 JavaScript 环境和全局变量。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/aiext_userscripts.png" alt="User Scripts" class="floating-img delay-1" />
        </div>
      </div>
    </section>

    <!-- Feature 3: 简单易用 -->
    <section class="feature-section section bg-tech-1">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">简单易用</h2>
          <p class="feature-desc">
            下载 ZIP 文件即可本地安装。<br>
            无需通过浏览器插件市场。<br>
            开发者模式加载,快速上手使用。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/aiext_install.png" alt="简单安装" class="floating-img delay-2" />
        </div>
      </div>
    </section>

    <!-- Feature 4: 工具开发 -->
    <section class="feature-section section bg-tech-2 reverse">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">灵活的工具开发</h2>
          <p class="feature-desc">
            支持 pageMcpServer 和 contentScriptMcpServer 两种类型。<br>
            使用 Zod 定义参数验证规则。<br>
            完善的 meta.ts 配置和工具注册机制。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/aiext_development.png" alt="工具开发" class="floating-img delay-3" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="footer-section section">
       <div class="footer-content">
         <h2>准备好让浏览器更智能了吗？</h2>
         <p>立即下载并安装 AI Extension</p>
         <div class="cta-group">
           <a href="https://ai.opentiny.design/extension.zip" class="btn primary">下载扩展</a>
           <a href="/src/ai-extension-next-wxt.md" target="_blank" class="btn secondary">开发文档</a>
         </div>
         <div class="footer-mini">
            <p>AI Extension - 让 AI 与网页无缝交互</p>
         </div>
       </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
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

/* Backgrounds - Reusing App.vue assets */
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

.footer-section {
  background-image: url('/src/assets/mcp_bg_white.png');
  background-size: cover;
  background-position: center;
}

/* Overlays */
.hero::before,
.feature-section::before,
.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
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

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0px); }
}

/* Footer */
.footer-content {
  position: relative;
  z-index: 2;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-content h2 {
  font-size: 3rem;
  margin-bottom: 20px;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-content p {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 60px;
}

.footer-mini {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-secondary);
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0,0,0,0.05);
}

.footer-mini p {
  font-size: 0.9rem;
  margin: 0;
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

@media (max-width: 1024px) {
  .feature-content {
    flex-direction: column;
    text-align: center;
    padding: 0 30px;
    justify-content: center;
  }
  .reverse .feature-content {
    flex-direction: column;
  }
  .feature-text {
    padding: 0;
    margin-bottom: 50px;
  }
  .feature-visual {
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
}
</style>
