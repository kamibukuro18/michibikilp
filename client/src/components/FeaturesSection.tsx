/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * Features: Light blue bg, white cards grid, blue icons, large stat numbers
 */

import { motion } from "framer-motion";
import { CheckCircle2, Clock, TrendingUp, Zap, Database } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "ヒアリング品質の均一化",
    desc: "トップセールスのノウハウをシステムに実装。誰でも同じ品質でヒアリングを実施できます。",
  },
  {
    icon: Clock,
    title: "対応工数を大幅削減",
    desc: "よくある質問への自動回答で、担当者の対応時間を大幅削減。本来の業務に集中できます。",
  },
  {
    icon: TrendingUp,
    title: "データ活用で経営改善",
    desc: "顧客の声をリアルタイムで可視化。商品開発・マーケティング施策の確かな根拠になります。",
  },
  {
    icon: Zap,
    title: "最短即日で導入可能",
    desc: "スムーズスタートタイプはオンラインお申し込み後、即日～翌営業日にアカウント発行。迅速にご利用開始いただけます。",
  },
  {
    icon: Database,
    title: "既存システムと連携",
    desc: "CRM・SFAなど既存ツールとのAPI連携に対応。現在の業務フローを変えずに導入できます。",
  },
];

const stats = [
  { num: "最短即日", unit: "", label: "導入可能" },
  { num: "24", unit: "時間", label: "自動対応" },
  { num: "100", unit: "%", label: "オンライン対応" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-14 sm:py-16 md:py-20 bg-[#EFF6FF]">
      <div className="container">
        {/* Section heading */}
        <div className="section-heading relative pb-4 mb-10 md:mb-14">
          <span className="watermark">FEATURE</span>
          <span className="subtitle">ミチビキ AIでできること</span>
          <h2>選ばれる5つの理由</h2>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div className="text-center mb-5 md:mb-6">
            <div className="diagonal-accent justify-center text-xl sm:text-2xl md:text-3xl">
              ミチビキ AIの主な特徴
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 sm:p-6 text-center shadow-sm border border-blue-100"
              >
                <div className="flex items-end justify-center gap-1 mb-1">
                  <span
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D4ED8]"
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="text-lg sm:text-xl font-black text-[#F97316] mb-1">{s.unit}</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#6B7280]">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature cards: 1col mobile, 2col sm, 3col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="feature-card"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#DBEAFE] flex items-center justify-center mx-auto mb-4 sm:mb-5">
                <f.icon size={22} className="text-[#1D4ED8]" />
              </div>
              <h3
                className="text-sm sm:text-base font-black text-[#1E3A8A] mb-2 sm:mb-3"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-blue-100"
        >
          <h3
            className="text-base sm:text-xl font-black text-[#1E3A8A] mb-5 md:mb-6 text-center"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            一般的なチャットボットとの違い
          </h3>
          <div className="overflow-x-auto -mx-2 px-2">
            <table className="w-full text-xs sm:text-sm min-w-[480px]">
              <thead>
                <tr>
                  <th className="text-left py-3 px-3 sm:px-4 text-[#6B7280] font-bold w-1/3">比較項目</th>
                  <th className="py-3 px-3 sm:px-4 text-[#1D4ED8] font-black bg-[#EFF6FF] rounded-t-lg w-1/3">
                    ミチビキ AI
                  </th>
                  <th className="py-3 px-3 sm:px-4 text-[#9CA3AF] font-bold w-1/3">一般チャットボット</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ヒアリング品質", "均一・高品質", "担当者依存"],
                  ["データ活用", "自動構造化・即活用", "手動集計が必要"],
                  ["導入期間", "最短即日", "数ヶ月〜"],
                  ["カスタマイズ", "業種・業態に最適化", "汎用的"],
                  ["サポート", "専任チームが伴走", "マニュアルのみ"],
                ].map(([item, ours, theirs], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#F8FAFC]" : ""}>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-[#374151]">{item}</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-center font-bold text-[#1D4ED8] bg-[#EFF6FF]/50">
                      ✓ {ours}
                    </td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-center text-[#9CA3AF]">{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
