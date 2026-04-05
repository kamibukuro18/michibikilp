/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * Onboarding: White bg, blue numbered timeline
 */

import { motion } from "framer-motion";

const steps = [
  {
    title: "ヒアリング・要件定義",
    desc: "現状の業務フローや課題をヒアリング。システムの設計方针と質問項目の骨格を決定します。",
  },
  {
    title: "コンテンツ設計",
    desc: "質問・選択肢・マッチングルールを設計。プレミアムプランでは専任チームが代行します。",
  },
  {
    title: "システム設定・テスト",
    desc: "設計内容をシステムに実装。テスト運用を行い、精度と使いやすさを確認・調整します。",
  },
  {
    title: "本番リリース",
    desc: "社内外への展開を実施。運用開始後も継続的なサポートで安心してご利用いただけます。",
  },
  {
    title: "継続改善・データ活用",
    desc: "蓄積されたデータを分析し、質問精度の向上や新たな経営施策への活用をご支援します。",
  },
];

export default function OnboardingSection() {
  return (
    <section id="onboarding" className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="container">
        {/* Section heading */}
        <div className="section-heading relative pb-4 mb-10 md:mb-14">
          <span className="watermark">STEP</span>
          <span className="subtitle">導入の流れ</span>
          <h2>最短即日で導入完了</h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-[#1D4ED8] to-[#BFDBFE]" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 sm:gap-6 relative"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-8 sm:w-10 flex justify-center">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md relative z-10 border-2 border-white"
                    style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
                  >
                    <span className="text-white text-xs font-black">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 sm:pb-8 last:pb-0">
                  <h3
                    className="text-sm sm:text-base font-black text-[#1E3A8A] mb-1.5 sm:mb-2 mt-1"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 rounded-2xl overflow-hidden border border-blue-100 flex flex-col md:flex-row"
        >
          <div
            className="md:w-2 h-2 md:h-auto flex-shrink-0"
            style={{ background: "linear-gradient(180deg, #1D4ED8, #2563EB)" }}
          />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 p-5 sm:p-8 bg-[#EFF6FF] flex-1">
            <div>
              <span className="text-xs font-black text-[#1D4ED8] tracking-widest mb-2 block">
                PREMIUM PLAN
              </span>
              <h3
                className="text-base sm:text-lg font-black text-[#1E3A8A] mb-1.5 sm:mb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                プレミアムプランなら、専任チームが全て代行
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                質問・選択肢の設計代行、マッチングルールの最適化、定期的な改善提案まで、
                専任チームが伴走サポートします。
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-orange flex-shrink-0 text-xs sm:text-sm py-3 px-5 sm:py-3.5 sm:px-6 w-full md:w-auto"
            >
              プレミアムを詳しく見る
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
