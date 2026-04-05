"use client";

import { motion } from "framer-motion";
import {
  SiGithub, SiBilibili, SiWechat, SiQq, SiOpenai
} from "react-icons/si";
import {
  IoMailSharp, IoTerminalSharp, IoCloudSharp, IoSparklesSharp
} from "react-icons/io5";
import {
  Smartphone, Database, Cloud, Mail, MapPin, Github
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [activeQR, setActiveQR] = useState<string | null>(null); // 📱 移动端点击状态

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main
      onClick={() => setActiveQR(null)}
      style={{
        backgroundColor: 'var(--bg-pro)',
        color: 'var(--text-main)',
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
        transition: 'background 0.4s ease, color 0.4s ease'
      }}
    >

      {/* 1. HERO - THE ISOLATED MATRIX */}
      <section
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          scrollSnapAlign: 'start',
          position: 'relative',
          backgroundColor: 'var(--bg-pro)'
        }}
      >
        <div className="container-narrow hero-inner">

          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="hero-text"
            style={{ flex: 1 }}
          >
            <span className="label-pro hero-label">DIGITAL_SPACE / 2026</span>
            <h1 className="pro-h1 hero-title">Hello.</h1>
            <div className="hero-text-content">
              <h2 className="hero-subtitle">
                Welcome to my personal homepage.
              </h2>
              <p className="hero-intro">
                个人项目 Mixstart 3.0 运营负责人。平时喜欢写写开源代码，也帮大家处理一些运维和网络问题。主要还是为了帮大家解决各种技术难题。那个拿了 2.9k Stars 的聚合解析工具是我最开心的作品。
              </p>
            </div>

            {/* 图标矩阵：补全链接与全隔离悬浮逻辑 */}
            <div className="social-matrix" style={{ display: 'flex', gap: '22px', marginTop: '0.8rem', marginBottom: '0.8rem', alignItems: 'center' }}>
              {[
                { id: 'github', Icon: SiGithub, href: "https://github.com/RemotePinee", type: 'link' },
                { id: 'bilibili', Icon: SiBilibili, href: "https://space.bilibili.com/89020225?spm_id_from=333.1007.0.0", type: 'link' },
                { id: 'mail', Icon: IoMailSharp, href: "mailto:614807355@qq.com", type: 'link' },
                { id: 'wechat', Icon: SiWechat, type: 'qr', qr: 'projects/contact_media_wx.png' },
                { id: 'qq', Icon: SiQq, type: 'qr', qr: 'projects/qq.png' }
              ].map((item, idx) => (
                <div key={idx} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  {item.type === 'link' ? (
                    <motion.a
                      href={item.href} target="_blank" rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="social-icon"
                      style={{ color: 'inherit', opacity: 'var(--social-op)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <item.Icon size={22} />
                    </motion.a>
                  ) : (
                    <div
                      style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      onClick={(e) => {
                        e.stopPropagation(); // 阻止冒泡到 main
                        setActiveQR(activeQR === item.id ? null : (item.id || null));
                      }}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onHoverStart={() => item.id && setHoverItem(item.id)}
                        onHoverEnd={() => setHoverItem(null)}
                        style={{ cursor: 'pointer', opacity: (activeQR === item.id || hoverItem === item.id) ? 1 : 'var(--social-op)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <item.Icon size={22} />
                      </motion.div>
                      {(hoverItem === item.id || activeQR === item.id) && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                          className="qr-popover"
                          style={{ left: '50%' }}
                        >
                          <img src={item.qr} alt="Scan" style={{ width: '130px', height: '130px', borderRadius: '10px' }} />
                          <span className="qr-tip">扫码添加 / Scan Me</span>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 标签行：透明度由变量控制，深色模式锁定 0.5 */}
            <div className="tag-row" style={{ display: 'flex', gap: '30px', opacity: 'var(--tag-op)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                <IoTerminalSharp size={16} /> <span>喜欢写代码</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                <IoCloudSharp size={16} /> <span>也会做运维</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700 }}>
                <IoSparklesSharp size={16} /> <span>最近在搞 AI</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.1 }}
            className="hero-image-container"
            style={{ width: '42%', display: 'flex', justifyContent: 'flex-end' }}
          >
            <img
              src="projects/hero_art.png"
              className="theme-img"
              alt="RemotePinee Portfolio"
            />
          </motion.div>
        </div>

        <style jsx>{`
          .social-icon:hover {
            opacity: 1 !important;
            transform: translateY(-2.5px);
          }
        `}</style>
      </section>

      {/* 2. EXPERIENCE - THE MILESTONES (CENTERED) */}
      <section
        id="exp"
        className="section-dark"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div className="container-narrow">
          <div className="exp-section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '80px' }}>
            <h2 className="pro-h2" style={{ fontWeight: 950 }}>个人经历</h2>
            <span style={{ fontSize: '0.6rem', opacity: 0.2, letterSpacing: '0.2em' }}>PINEE_ARCHIVE_2026</span>
          </div>

          <div className="exp-list" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {[
              { n: "Mixstart 3.0", s: "研发与运营负责人", t: "Desktop App / AI Productivity", c: ["持续运营并维护下一代全能桌面效率平台，构建了高粘性的 AI 插件市场与自动化生态。", "负责全平台客户端的核心架构与商业化闭环设计。"] },
              { n: "开源社区贡献", s: "独立开发者 / 技术分享者", t: "Electron / Node.js", c: ["自己研发了 AudioVisual 小工具，累计 2,930 Stars。", "持续沉淀关于网络部署、运维方面的技术经验。"] },
              { n: "字符纬度科技", s: "创始人 / 技术总监", t: "Distributed Systems Architecture", c: ["自己带队开发了全链路校园服务系统。", "通过技术手段优化了高并发场景下的资源调用。"] },
              { n: "企业级网络维护", s: "高级运维工程师", t: "Cloud Ops / Security", c: ["帮多家企业完成了网络物理组网及云环境的安全监测。"] }
            ].map((exp, i) => (
              <div key={i} className="exp-item" style={{ borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '40px' }}>
                <div className="exp-left">
                  <div className="exp-role">{exp.s}</div>
                  <div className="exp-stack">STACK: {exp.t}</div>
                </div>
                <div className="exp-right">
                  <h3 className="exp-name">{exp.n}</h3>
                  {exp.c.map((text, j) => <div key={j} className="exp-desc">{text} /</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 FEATURED PRODUCT - MIXSTART 3.0 */}
      <section
        id="product-featured"
        style={{ 
          scrollSnapAlign: 'start', 
          minHeight: '100vh', 
          padding: '100px 0', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          background: 'var(--card-bg)',
          borderBottom: '1px solid var(--line-stable)'
        }}
      >
        <div className="container-narrow">
          <div className="featured-flex-layout" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '80px', minHeight: '500px' }}>
            <div className="featured-content-area" style={{ flex: '1.2', minWidth: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="label-pro" style={{ marginBottom: '12px' }}>OPERATIONAL_PRODUCT / FLAGSHIP</div>
              <h2 className="pro-h1" style={{ marginBottom: '20px', fontWeight: 950 }}>Mixstart 3.0</h2>
              <div className="hero-subtitle" style={{ color: 'var(--text-main)', opacity: 0.9, marginBottom: '20px' }}>
                重塑桌面交互体验的全能生产力平台
              </div>
              <p className="hero-intro" style={{ marginBottom: '40px', maxWidth: '100%' }}>
                深度集成节点式自动化工作流、多模态 AI 助理与灵动组件。
                作为我目前<strong style={{ color: 'var(--text-main)' }}>投入精力最大、独立闭环运营</strong>的核心商业产品，Mixstart 3.0 旨在将复杂的电脑操作简化到毫秒级响应。
              </p>
              
              <div className="featured-grid-area" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '50px' }}>
                {[
                  { t: '自动化工作流', d: '一键编排复杂生产流' },
                  { t: '多模态 AI', d: '全能系统级能力控制' },
                  { t: '极致全局搜索', d: '秒级定位 TB 级资源' },
                  { t: '灵动桌面组件', d: '个性化私人办公布局' },
                ].map((feat, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--text-main)', paddingLeft: '20px' }}>
                    <div style={{ fontWeight: 900, fontSize: '1rem' }}>{feat.t}</div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.5, marginTop: '4px' }}>{feat.d}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex' }}>
                <a href="https://mix.mnuk.cn/" target="_blank" className="pill-pro pill-pro-black">
                  立即探索官网 <SiOpenai size={16} />
                </a>
              </div>
            </div>
            
            <div className="featured-media-area" style={{ flex: '0.8', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
               <motion.div
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 style={{ position: 'relative' }}
               >
                 <div style={{ 
                   position: 'absolute', 
                   top: '-30px', 
                   right: '-10px', 
                   background: '#FFD700', 
                   color: '#000', 
                   padding: '5px 15px', 
                   borderRadius: '100px', 
                   fontSize: '0.75rem', 
                   fontWeight: 950,
                   boxShadow: '0 10px 20px rgba(255,215,0,0.3)',
                   zIndex: 2
                 }}>LIVE_V3.0</div>
                 <div style={{ 
                   width: '280px', 
                   height: '280px', 
                   borderRadius: '60px', 
                   background: 'linear-gradient(135deg, #111, #222)', 
                   display: 'flex', 
                   alignItems: 'center', 
                   justifyContent: 'center',
                   boxShadow: '0 40px 80px rgba(0,0,0,0.2)',
                   border: '1px solid rgba(255,255,255,0.05)'
                 }}>
                   <IoSparklesSharp size={140} color="#FFD700" style={{ filter: 'drop-shadow(0 0 40px rgba(255,215,0,0.4))' }} />
                 </div>
                 
                 {/* Decorative elements */}
                 <div style={{ position: 'absolute', bottom: '-40px', left: '-20px', opacity: 0.1, pointerEvents: 'none' }}>
                    <SiGithub size={120} />
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WORKS - PORTFOLIO */}
      <section
        id="project"
        style={{ scrollSnapAlign: 'start', minHeight: '100vh', padding: '120px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <div className="container-narrow">
          <h2 className="pro-h2" style={{ marginBottom: '60px', fontWeight: 950 }}>开源作品</h2>
          <div className="project-grid">
            {[
              {
                n: "AudioVisual",
                d: "全平台超强解析。深度适配腾讯视频、爱奇艺、B站等主流媒体流。内置多套自维护解析接口。基于 Electron 开发，完美兼容 Win/Mac/Linux，为您提供极致的无广告播放体验。",
                l: "https://github.com/RemotePinee/AudioVisual",
                s: "2.9k"
              },
              {
                n: "食见 / Shi-Jian AI",
                d: "基于 Neo-Brutalism 新美学主义设计的智能菜谱助手。通过 AI 多模态识别食材，瞬间生成创意食谱。采用 Kotlin 与 Jetpack Compose 开发，不仅通过 AI 解决了“今天吃什么”，更在移动端视觉交互上做到了极致突破。",
                l: "https://github.com/RemotePinee/Shi-Jian",
                i: <Smartphone size={36} strokeWidth={1.5} />
              },
              {
                n: "多源查询系统",
                d: "现代化大数据统一查询与分析平台。支持 SQL、NoSQL 及第三方 API 的海量数据联合查询。内置交互式可视化看板与高性能统计逻辑，专为处理跨平台、跨数据库的复杂多源数据环境设计，实现秒级响应。",
                l: "https://github.com/RemotePinee",
                i: <Database size={36} strokeWidth={1.5} />
              },
              {
                n: "CFnew / Dark Edition",
                d: "基于 cfnew 的深度 UI 重构版本。采用 Premium Dark 极致暗色设计，在提升视觉质感的同时降低用眼疲劳。增强了对 VLESS/Trojan 等全协议的支持，并引入了交互反馈与状态保持机制，操作流程较原版更丝滑。",
                l: "https://github.com/RemotePinee/cfnew",
                i: <Cloud size={36} strokeWidth={1.5} />
              }
            ].map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-icon-wrapper">
                  {p.s ? (
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span className="project-stars">{p.s}</span>
                      <span className="project-stars-badge">STARS</span>
                    </div>
                  ) : p.i}
                </div>
                <div className="project-info">
                  <h3 className="project-name">{p.n}</h3>
                  <div className="project-desc">{p.d}</div>
                </div>
                <div className="project-link-area">
                  <a href={p.l} target="_blank" className="pill-pro pill-pro-outline">
                    VIEW <Github size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION REDESIGN */}
      <section id="contact" className="contact-section-final" style={{ scrollSnapAlign: 'start', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingBottom: '100px' }}>
        <div className="container-narrow">
          <div className="contact-flex-layout">
            <div className="contact-text-area">
              <div className="hero-label fade-in" style={{ marginBottom: '16px', opacity: 0.5 }}>STRATEGIC_NEXT_CHAPTER</div>
              <h2 className="contact-title-pro">
                寻找更多<br />可能 /
              </h2>
              <p className="contact-subtitle-pro">
                我正在寻找更高维度的技术挑战。如果你也追求极致的产品交付，或者正在为一个突破性的项目寻找核心战力，我已经准备好聊聊了。
              </p>
            </div>

            <div className="contact-links-area">
              <a href="mailto:614807355@qq.com" className="contact-item-pro">
                <div className="icon-box"><Mail size={20} /></div>
                <div className="content">
                  <span className="label">EMAIL ADDRESS</span>
                  <span className="value">614807355@qq.com</span>
                </div>
              </a>

              <div className="contact-item-pro">
                <div className="icon-box"><MapPin size={20} /></div>
                <div className="content">
                  <span className="label">CURRENT LOCATION</span>
                  <span className="value">云南，昆明</span>
                </div>
              </div>

              <a href="https://github.com/RemotePinee" target="_blank" className="contact-item-pro github-premium">
                <div className="icon-box"><Github size={20} /></div>
                <div className="content">
                  <span className="label">GITHUB ARCHIVE</span>
                  <span className="value">@RemotePinee</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* BIG WATERMARK */}
        <div className="bg-text-final">PINEE</div>

        <footer style={{ 
          position: 'absolute', 
          bottom: '30px', 
          left: 0, 
          right: 0, 
          textAlign: 'center', 
          fontSize: '0.65rem', 
          opacity: 0.15, 
          letterSpacing: '0.15em', 
          fontWeight: 700, 
          color: 'var(--text-main)' 
        }}>
          STAY CURIOUS / REMOTEPINEE / 2026
        </footer>
      </section>
    </main>
  );
}
