<script setup>
</script>

<template>
  <div class="container">
    <header class="hero section">
      <div class="hero-content">
        <h1 class="title">OpenTiny NEXT-SDKs</h1>
        <p class="subtitle">
          让你的前端应用变成智能应用<br>
          只需四步，即可接入 AI 能力
        </p>
        <div class="cta-group">
          <a href="https://docs.opentiny.design/next-sdk/guide/" target="_blank" class="btn primary">快速开始</a>
          <a href="https://docs.opentiny.design/next-sdk/guide/api-client.html" target="_blank" class="btn secondary">API 文档</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>↓</span>
      </div>
    </header>

    <!-- Feature 1: 四步接入 -->
    <section class="feature-section section bg-tech-1">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">四步让应用智能化</h2>
          <p class="feature-desc">
            <strong>第一步：</strong>安装 NEXT-SDKs<br>
            <strong>第二步：</strong>创建 WebMcpServer 并注册工具<br>
            <strong>第三步：</strong>创建 WebMcpClient 连接 WebAgent<br>
            <strong>第四步：</strong>引入 TinyRemoter 遥控器组件
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/nextsdk_four_steps.png" alt="四步接入" class="floating-img" />
        </div>
      </div>
    </section>

    <!-- Feature 2: MCP 协议 -->
    <section class="feature-section section bg-tech-2 reverse">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">基于 MCP 协议</h2>
          <p class="feature-desc">
            支持 WebMcpServer 和 WebMcpClient 双向通信。<br>
            可被各类 MCP Host 操控，实现 AI 与应用的深度集成。<br>
            支持工具注册、资源管理和提示词模板。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/nextsdk_mcp_protocol.png" alt="MCP 协议" class="floating-img delay-1" />
        </div>
      </div>
    </section>

    <!-- Feature 3: TinyRemoter 遥控器 -->
    <section class="feature-section section bg-tech-1">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">TinyRemoter 遥控器</h2>
          <p class="feature-desc">
            提供网页版 AI 对话框，支持 PC 和移动端。<br>
            通过对话方式让 AI 代替你操作前端应用。<br>
            手机扫码即可远程控制，提升任务完成效率。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/nextsdk_remoter.png" alt="TinyRemoter 遥控器" class="floating-img delay-2" />
        </div>
      </div>
    </section>

    <!-- Feature 4: 多场景支持 -->
    <section class="feature-section section bg-tech-2 reverse">
      <div class="feature-content">
        <div class="feature-text">
          <h2 class="section-title light">多场景支持</h2>
          <p class="feature-desc">
            支持接入三方 AI 应用（Claude Desktop、Cline 等）。<br>
            支持 Electron 应用和 uni-app 应用接入。<br>
            支持本地连接和 WebAgent 私有化部署。
          </p>
        </div>
        <div class="feature-visual">
          <img src="/src/assets/nextsdk_multi_scenario.png" alt="多场景支持" class="floating-img delay-3" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="footer-section section">
       <div class="footer-content">
         <h2>准备好让应用智能化了吗？</h2>
         <p>立即开始使用 OpenTiny NEXT-SDKs</p>
         <div class="cta-group">
           <a href="https://docs.opentiny.design/next-sdk/guide/" target="_blank" class="btn primary">查看文档</a>
           <a href="https://github.com/opentiny/tiny-engine" target="_blank" class="btn secondary">GitHub</a>
         </div>
         <div class="footer-mini">
            <p>OpenTiny NEXT-SDKs - 让前端应用智能化</p>
         </div>
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
  padding-top: 0;
  animation: fadeInUp 1s ease-out;
}

.title {
  font-size: 5.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  margin-top: -120px;
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

.visual-placeholder {
  width: 400px;
  height: 300px;
  background: rgba(255,255,255,0.5);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.8);
}

.visual-icon {
  width: 100px;
  height: 100px;
  color: var(--primary-color);
  opacity: 0.8;
}

.floating-img {
  width: 90%;
  max-width: 600px;
  filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
  animation: float 6s ease-in-out infinite;
  transition: transform 0.5s ease;
  border-radius: 24px; /* Add rounded corners */
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
@media (max-width: 768px) {
  .title {
    font-size: 3rem;
    margin-top: -60px;
  }

  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .hero-content {
    padding: 20px;
  }

  .feature-content {
    flex-direction: column;
    padding: 0 20px;
    text-align: center;
    justify-content: center;
  }

  .reverse .feature-content {
    flex-direction: column;
  }

  .feature-text {
    padding: 0;
    margin-bottom: 40px;
  }

  .section-title.light {
    font-size: 2.5rem;
  }

  .section-title.light::after {
    margin: 20px auto 0;
  }

  .feature-desc {
    font-size: 1.2rem;
  }

  .feature-visual {
    width: 100%;
  }

  .cta-group {
    flex-direction: column;
    gap: 15px;
    width: 100%; /* Ensure full width for stacking */
    max-width: 300px; /* Limit width for better look */
    margin: 0 auto; /* Center align */
  }

  .footer-content .cta-group {
     margin-bottom: 40px; /* Add space below buttons */
  }

  .btn {
    width: 100%;
    padding: 12px 0;
  }
  
  .footer-content h2 {
    font-size: 2rem;
  }
  
  .footer-content p {
    font-size: 1.2rem;
  }
}
</style>
