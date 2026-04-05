"use client";

import { UserCircle, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 初始化主题 (或从 localStorage 读取)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    // 🚀 极致黑科技：View Transitions API (如果浏览器支持)
    if (typeof document !== 'undefined' && (document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });
    } else {
      // 容错处理：普通动画
      setTheme(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };

  return (
    <>
      <nav className="nav-bar-pro">
        {/* NAV CONTAINER */}
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>

          {/* 1. 左上角标识 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: 900, fontFamily: 'monospace' }}>
            <UserCircle size={20} strokeWidth={2.5} />
            <span className="nav-logo-text" style={{ letterSpacing: '0.12em' }}>REMOTEPINEE / HOME</span>
          </div>

          {/* 2. 中间：导航链接 */}
          <div className={`nav-center ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <a href="#exp" className="nav-link" onClick={() => setIsMenuOpen(false)}>个人经历</a>
            <a href="#product-featured" className="nav-link" onClick={() => setIsMenuOpen(false)}>核心项目</a>
            <a href="#project" className="nav-link" onClick={() => setIsMenuOpen(false)}>开源作品</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>联系我</a>
          </div>
          {/* 3. 右侧：主题切换 & 移动端菜单 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 10001 }}>
            <button
              onClick={toggleTheme}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', outline: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '10px', borderRadius: '14px',
                backgroundColor: 'var(--line-stable)',
                color: 'var(--text-main)',
                transition: 'all 0.3s'
              }}
            >
              {theme === 'light' ? <Moon size={18} fill="currentColor" style={{ pointerEvents: 'none' }} /> : <Sun size={18} style={{ pointerEvents: 'none' }} />}
            </button>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', color: 'var(--text-main)'
              }}
            >
              {isMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
            </button>
          </div>

        </div>
      </nav>

      {/* 📱 手机端全屏菜单弹窗 */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="#exp" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>个人经历</a>
          <a href="#product-featured" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>旗下产品</a>
          <a href="#project" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>开源作品</a>
          <a href="#contact" className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>联系我</a>
        </div>
      )}
    </>
  );
}
