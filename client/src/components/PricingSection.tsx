/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * Pricing: Light blue bg, white cards, blue recommended badge
 */

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "スタンダード",
    initial: "10",
    monthly: "20",
    desc: "中小企業・スタートアップ向け",
    features: [
      { label: "ヒアリングシステム基本機能", included: true },
      { label: "質問・選択肢管理", included: true },
      { label: "ダッシュボード機能", included: true },
      { label: "情報インプット入力サポート", included: false },
      { label: "専任チームによる設計・設定代行", included: false },
    ],
    recommended: false,
  },
  {
    name: "プレミアム",
    initial: "15",
    monthly: "30",
    desc: "中堅〜大企業・積極活用向け",
    features: [
      { label: "ヒアリングシステム基本機能", included: true },
      { label: "質問・選択肢管理", included: true },
      { label: "ダッシュボード機能", included: true },
      { label: "情報インプット入力サポート", included: true },
      { label: "専任チームによる設計・設定代行", included: true },
    ],
    recommended: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-14 sm:py-16 md:py-20 bg-[#EFF6FF]">
      <div className="container">
        {/* Section heading */}
        <div className="section-heading relative pb-4 mb-10 md:mb-14">
          <span className="watermark">PRICE</span>
          <span className="subtitle">ご利用料金</span>
          <h2>サポートの有無で選べる2つのプラン</h2>
        </div>

        {/* 1col mobile, 2col sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 ${
                plan.recommended
                  ? "border-2 border-[#1D4ED8] shadow-lg shadow-blue-100"
                  : "border border-blue-100 shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-[#1D4ED8] text-white text-xs font-black px-4 sm:px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    おすすめ
                  </div>
                </div>
              )}

              <div className="mb-4 sm:mb-5">
                <h3
                  className="text-lg sm:text-xl font-black mb-1"
                  style={{
                    color: plan.recommended ? "#1E3A8A" : "#374151",
                    fontFamily: "Noto Sans JP, sans-serif",
                  }}
                >
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B7280]">{plan.desc}</p>
              </div>

              <div className="mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-100 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm text-[#9CA3AF]">初期費用</span>
                  <span className="text-xl sm:text-2xl font-black text-[#374151]">
                    {plan.initial}
                    <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] ml-1">万円</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm text-[#9CA3AF]">月額費用</span>
                  <span
                    className="text-2xl sm:text-3xl font-black"
                    style={{ color: plan.recommended ? "#1D4ED8" : "#374151" }}
                  >
                    {plan.monthly}
                    <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] ml-1">万円 / 月</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 sm:gap-2.5">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: f.included
                          ? plan.recommended ? "#DBEAFE" : "#F3F4F6"
                          : "#FEE2E2",
                      }}
                    >
                      {f.included ? (
                        <Check size={11} style={{ color: plan.recommended ? "#1D4ED8" : "#6B7280" }} />
                      ) : (
                        <X size={11} className="text-red-400" />
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm ${f.included ? "text-[#374151]" : "text-[#9CA3AF]"}`}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => { window.open("https://digital-hearing.vercel.app/admin", "_blank"); }}
                   className="w-full py-3 sm:py-3.5 rounded-full font-black text-xs sm:text-sm transition-all duration-200 btn-orange"
                 >
                   お試しご利用へ
                </button>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 bg-white border-2 border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#EFF6FF]"
                >
                  まずはお問い合わせ
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm text-[#6B7280] mt-6 sm:mt-8"
        >
          ※ 最低契約期間は3ヶ月で、3ヶ月ごとの更新となります。
        </motion.p>
      </div>
    </section>
  );
}
