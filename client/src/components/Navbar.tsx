/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: スマホ / タブレット / PC 3段階対応
 * Navbar: ロゴ左固定・ハンバーガー右（スマホ）・ナビ中央＋2CTAボタン右（PC）
 * ロゴ崩れ防止: flex-shrink-0 + min-w-0 + whitespace-nowrap
 */

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "課題と解決策", href: "#problem" },
  { label: "特長", href: "#features" },
  { label: "仕組み", href: "#how" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/** ロゴコンポーネント（Navbar・フッターで共通利用） */
export function LogoMark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2 flex-shrink-0" style={{ minWidth: 0 }}>
      {/* SVG アイコン */}
      <div className="w-8 h-8 flex-shrink-0">
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="36" height="36" rx="9" fill="url(#logo-grad-shared)" />
          <path
            d="M9 24 Q14 12 18 18 Q22 24 27 12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="27" cy="12" r="2.5" fill="#FED7AA" />
          <defs>
            <linearGradient id="logo-grad-shared" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* ワードマーク */}
      <div className="flex flex-col leading-none gap-[3px] flex-shrink-0" style={{ minWidth: 0 }}>
        <span
          className="font-black whitespace-nowrap"
          style={{
            fontFamily: "Noto Sans JP, sans-serif",
            letterSpacing: "0.10em",
            lineHeight: 1,
            fontSize: "15px",
            color: dark ? "white" : "#1E3A8A",
          }}
        >
          ミチビキ
          <span
            className="font-black text-white rounded"
            style={{
              background: "linear-gradient(135deg, #F97316, #EA580C)",
              letterSpacing: "0.04em",
              fontSize: "12px",
              padding: "1px 5px",
              marginLeft: "4px",
              display: "inline-block",
              lineHeight: 1.4,
            }}
          >
            AI
          </span>
        </span>
        <span
          className="font-bold whitespace-nowrap"
          style={{
            letterSpacing: "0.16em",
            lineHeight: 1,
            fontSize: "8px",
            color: dark ? "rgba(255,255,255,0.5)" : "#9CA3AF",
          }}
        >
          MICHIBIKI AI
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goToApply = () => {
    setMobileOpen(false);
    window.open("https://hearingsaas-6onl9wqm.manus.space/", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14 sm:h-16" style={{ gap: "8px" }}>

          {/* ロゴ: 絶対に縮まない */}
          <a href="/" className="flex-shrink-0 group" style={{ textDecoration: "none" }}>
            <LogoMark />
          </a>

          {/* ナビリンク: xl以上のみ表示 */}
          <nav className="hidden xl:flex items-center justify-center gap-5 flex-1 mx-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-semibold text-[#374151] hover:text-[#1D4ED8] transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* 右側: CTAボタン + ハンバーガー */}
          <div className="flex items-center flex-shrink-0" style={{ gap: "8px" }}>
            {/* お問い合わせ: md以上で表示 */}
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:block text-xs font-bold text-[#1D4ED8] border-2 border-[#1D4ED8] rounded-full hover:bg-[#EFF6FF] transition-colors whitespace-nowrap"
              style={{ padding: "7px 14px" }}
            >
              お問い合わせ
            </button>
            {/* お申し込みページへ: sm以上で表示 */}
            <button
              onClick={goToApply}
              className="hidden sm:block text-xs font-black text-white rounded-full whitespace-nowrap transition-all hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #F97316, #EA580C)",
                boxShadow: "0 3px 12px rgba(249,115,22,0.4)",
                padding: "7px 14px",
              }}
            >
              お申し込みページへ
            </button>
            {/* ハンバーガー: xl未満で表示 */}
            <button
              className="xl:hidden p-1.5 text-[#374151] hover:text-[#1D4ED8] transition-colors flex-shrink-0"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="メニューを開く"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="container py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-3 py-2.5 text-sm text-[#374151] font-semibold hover:bg-[#EFF6FF] hover:text-[#1D4ED8] rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full text-center text-sm font-bold text-[#1D4ED8] border-2 border-[#1D4ED8] rounded-full py-2.5 hover:bg-[#EFF6FF] transition-colors"
                >
                  お問い合わせ
                </button>
                <button
                  onClick={goToApply}
                  className="w-full text-center text-sm font-black text-white rounded-full py-2.5 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #F97316, #EA580C)",
                    boxShadow: "0 3px 12px rgba(249,115,22,0.4)",
                  }}
                >
                  お申し込みページへ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
