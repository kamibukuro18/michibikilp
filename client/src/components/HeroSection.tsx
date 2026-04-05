/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm(375px) / md(768px) / lg(1024px) / xl(1280px)
 * Hero: スマホは1カラム（コピー上・フォーム下）、lg以上は2カラム
 * pt: Navbar高さ分(h-14 sm:h-16)を確保
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/xpwzwqkn";

export default function HeroSection() {
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          company: form.company,
          name: form.name,
          phone: form.phone,
          email: form.email,
          _subject: `【ミチビキ AI】お問い合わせ：${form.company} ${form.name}様`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("送信に失敗しました。お手数ですが contact@michibikiai.com までご連絡ください。");
      }
    } catch {
      setError("送信に失敗しました。お手数ですが contact@michibikiai.com までご連絡ください。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="pt-14 sm:pt-16 min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #EFF6FF 0%, #DBEAFE 50%, #EFF6FF 100%)",
      }}
    >
      {/* Background decorations */}
      <div
        className="absolute top-20 right-[-40px] sm:right-[-20px] md:right-0 lg:right-[-40px] w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 opacity-10 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
      <div
        className="absolute bottom-16 left-[-30px] sm:left-[-20px] w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 opacity-8 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />

      <div className="container py-6 sm:py-8 md:py-12 lg:py-16">
        {/* 1col on mobile/tablet, 2col on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-2 md:pt-4"
          >
            <div className="inline-flex items-center gap-2 bg-[#1D4ED8] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3 sm:mb-4 md:mb-5">
              <span>ヒアリング・ご提案・回答業務のデジタル自動化</span>
            </div>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.4rem] xl:text-[2.75rem] font-black text-[#1E3A8A] leading-tight mb-3 sm:mb-4 md:mb-6"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              ヒアリング・ご提案・回答業務を
              <br className="hidden sm:block" />
              <span className="text-[#F97316]">デジタルで自動対応化。</span>
              <br />
              全て行います！
            </h1>

            <p className="text-[#374151] text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 md:mb-8 max-w-lg font-medium">
              ヒアリングからご提案・回答まで、人手にかかる業務をデジタルで自動化。
              顧客対応の品質を均一化しながら、チーム全体の対応工数を大幅に削減します。
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 md:mb-8">
              {[
                { label: "最短即日導入可能", color: "#FEF3C7", border: "#F59E0B", text: "#92400E" },
                { label: "24時間自動対応", color: "#DBEAFE", border: "#3B82F6", text: "#1E3A8A" },
                { label: "オンラインで完結", color: "#F3E8FF", border: "#A855F7", text: "#6B21A8" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border"
                  style={{ background: b.color, borderColor: b.border, color: b.text }}
                >
                  <span>✓</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8 md:mb-10">
              {/* Primary: お試しご利用へ */}
               <button
                 onClick={() => { window.open("https://digital-hearing.vercel.app/admin", "_blank"); }}
                 className="btn-orange flex flex-col items-center py-3 sm:py-3.5 md:py-4 px-5 sm:px-6 w-full sm:w-auto"
               >
                 <span className="text-[10px] sm:text-xs font-bold opacity-90 mb-0.5">今すぐ始める</span>
                 <span className="text-sm sm:text-base md:text-lg font-black flex items-center gap-1">
                   お試しご利用へ <ArrowRight size={16} />
                 </span>
               </button>
              {/* Secondary: お問い合わせ */}
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex flex-col items-center py-3 sm:py-3.5 md:py-4 px-5 sm:px-6 w-full sm:w-auto rounded-full border-2 border-[#1D4ED8] text-[#1D4ED8] font-black hover:bg-[#EFF6FF] transition-colors"
              >
                <span className="text-[10px] sm:text-xs font-bold opacity-80 mb-0.5">まずはご相談から</span>
                <span className="text-sm sm:text-base font-black flex items-center gap-1">
                  無料でお問い合わせ <ArrowRight size={16} />
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-5 sm:gap-6 md:gap-8 pt-4 sm:pt-5 md:pt-6 border-t border-blue-200">
              {[
                { num: "最短即日", label: "導入可能" },
                { num: "24時間", label: "自動対応" },
                { num: "100%", label: "オンライン対応" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-lg sm:text-xl md:text-2xl font-black text-[#1D4ED8]">{s.num}</span>
                  <span className="text-[10px] sm:text-xs text-[#6B7280] font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-blue-100 p-4 sm:p-5 md:p-6 lg:p-8"
          >
            <h2
              className="text-base sm:text-lg md:text-xl font-black text-[#1E3A8A] mb-1 text-center"
              style={{ fontFamily: "Noto Sans JP, sans-serif" }}
            >
              まずはお気軽にお問い合わせ！
            </h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-[#6B7280] text-center mb-4 sm:mb-5 md:mb-6">
              2営業日以内にご連絡いたします
            </p>

            {submitted ? (
              <div className="text-center py-8 sm:py-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl sm:text-3xl text-green-600">✓</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#1E3A8A] mb-2">送信完了しました</h3>
                <p className="text-xs sm:text-sm text-[#6B7280]">担当者より2営業日以内にご連絡いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {[
                  { label: "企業名", key: "company", type: "text", placeholder: "株式会社〇〇" },
                  { label: "お名前", key: "name", type: "text", placeholder: "山田 太郎" },
                  { label: "電話番号", key: "phone", type: "tel", placeholder: "03-XXXX-XXXX" },
                  { label: "メールアドレス", key: "email", type: "email", placeholder: "yamada@company.co.jp" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-[10px] sm:text-xs font-bold text-[#374151] mb-1 sm:mb-1.5">
                      <span className="inline-block bg-red-500 text-white text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded mr-1 sm:mr-1.5">必須</span>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 border-2 border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                {error && (
                  <p className="text-[10px] sm:text-xs text-red-500 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "送信中..." : "送信する"}
                  {!loading && <ChevronRight size={18} />}
                </button>
                <p className="text-[9px] sm:text-[10px] text-[#9CA3AF] text-center">
                  送信することで
                  <a href="#" className="text-[#1D4ED8] underline">プライバシーポリシー</a>
                  に同意したものとみなします
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
