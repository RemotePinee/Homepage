import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "RemotePinee | 个人主页",
  description: "RemotePinee 的个人主页，喜欢写代码，也会做运维，最近在搞 AI。代表作有 AudioVisual 等开源作品。",
  keywords: ["RemotePinee", "个人主页", "开发者", "运维", "AudioVisual", "AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 极致隔离补丁：阻塞式内联脚本，物理消除 SSR 刷新闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', t);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
