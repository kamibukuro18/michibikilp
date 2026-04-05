/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * CTA: White bg, blue form card, orange submit button
 * Footer: Dark navy background
 * Email: contact@michibikiai.com
 * Copyright: 2026 株式会社ブリスブランド
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { LogoMark } from "./Navbar";

const FORMSPREE_URL = "https://formspree.io/f/xpwzwqkn";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
          message: form.message,
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
    <>
      {/* CTA Section */}
      <section id="contact" className="py-14 sm:py-16 md:py-20 bg-white">
        <div className="container">
          {/* 1col mobile, 2col lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-heading pb-4 mb-6 sm:mb-8 text-left" style={{ textAlign: "left" }}>
                <span className="watermark" style={{ fontSize: "clamp(2rem, 6vw, 3rem)", left: "0", transform: "none" }}>CONTACT</span>
                <span className="subtitle" style={{ textAlign: "left" }}>お問い合わせ</span>
                <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", textAlign: "left" }}>まずは無料でご相談ください</h2>
              </div>

              <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                「自社に合うか分からない」「まず試してみたい」など、
                どんな段階のご相談でも大歓迎です。
                専任担当者が丁寧にご対応いたします。
              </p>

              {/* Benefits */}
              <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
                {[
                  "導入事例・テンプレートをご紹介",
                  "オンラインデモも対応可能",
                  "現状の課題に合わせた改善案を提案",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2.5 sm:gap-3">
                    <CheckCircle2 size={15} className="text-[#1D4ED8] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#374151]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact info: email only */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-[#1D4ED8]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF] font-bold tracking-wider">EMAIL</p>
                    <p className="text-xs sm:text-sm text-[#374151] font-semibold break-all">contact@michibikiai.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border-2 border-[#1D4ED8] p-5 sm:p-6 md:p-8 shadow-lg shadow-blue-50"
            >
              {submitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={26} className="text-[#1D4ED8]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#1E3A8A] mb-2">
                    送信完了しました
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280]">
                    2営業日以内にご連絡いたします。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <h3 className="text-base sm:text-lg font-black text-[#1E3A8A] mb-1">
                    無料でお問い合わせ
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5">
                        会社名 <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 rounded-xl border border-blue-200 bg-[#F8FAFF] text-[#374151] text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder="株式会社〇〇"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#374151] mb-1.5">
                        お名前 <span className="text-[#F97316]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 rounded-xl border border-blue-200 bg-[#F8FAFF] text-[#374151] text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      メールアドレス <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 rounded-xl border border-blue-200 bg-[#F8FAFF] text-[#374151] text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                      placeholder="yamada@company.co.jp"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 rounded-xl border border-blue-200 bg-[#F8FAFF] text-[#374151] text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                      placeholder="03-XXXX-XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      お問い合わせ内容
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 rounded-xl border border-blue-200 bg-[#F8FAFF] text-[#374151] text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors resize-none"
                      placeholder="ご質問・ご要望をご記入ください"
                    />
                  </div>

                  {error && (
                    <p className="text-xs text-red-500 text-center">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-orange w-full flex items-center justify-center gap-2 group text-sm sm:text-base py-3.5 sm:py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "送信中..." : "お問い合わせする"}
                    {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    送信後、2営業日以内にご連絡いたします
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)" }} className="py-10 sm:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
            {/* Logo */}
            <LogoMark dark={true} />

            {/* Links: wrap on mobile */}
            <nav className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { label: "課題と解決策", href: "#problem", isPage: false },
                { label: "特長", href: "#features", isPage: false },
                { label: "仕組み", href: "#how", isPage: false },
                { label: "料金", href: "#pricing", isPage: false },
                { label: "FAQ", href: "#faq", isPage: false },
                { label: "お試しご利用へ", href: "https://digital-hearing.vercel.app/admin", isPage: true },
                { label: "お問い合わせ", href: "#contact", isPage: false },
              ].map(({ label, href, isPage }) => (
                <button
                  key={label}
                  onClick={() => {
                    if (isPage) {
                      window.open(href, "_blank");
                    } else {
                      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-xs sm:text-sm text-blue-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs text-blue-400">
              © 2026 株式会社ブリスブランド. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {["プライバシーポリシー", "利用規約", "特定商取引法"].map((label) => (
                <span
                  key={label}
                  className="text-xs text-blue-400 hover:text-white transition-colors cursor-pointer"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
