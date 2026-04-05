/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * Solution: Deep blue gradient bg, white text, 3 pillars with icons
 */

import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Users } from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "ヒアリングの型化",
    desc: "ベストプラクティスをシステムに実装。誰でも同じ品質でヒアリングができる仕組みを構築します。",
  },
  {
    icon: BarChart3,
    title: "データの自動蓄積",
    desc: "顧客の回答をリアルタイムで構造化データに変換。分析・活用できる状態で自動保存します。",
  },
  {
    icon: Users,
    title: "チーム全体の底上げ",
    desc: "トッププレイヤーのノウハウを組織全体へ。新人でも即戦力として活躍できる環境を実現します。",
  },
];

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-14 sm:py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1E3A8A 0%, #1D4ED8 50%, #2563EB 100%)",
      }}
    >
      {/* Diamond decoration */}
      <div
        className="absolute top-10 right-5 md:right-10 w-24 h-24 md:w-40 md:h-40 opacity-10 pointer-events-none"
        style={{
          background: "white",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
      <div
        className="absolute bottom-10 left-5 md:left-10 w-16 h-16 md:w-28 md:h-28 opacity-10 pointer-events-none"
        style={{
          background: "white",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />

      <div className="container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="text-[#93C5FD] text-xs font-bold tracking-widest uppercase block mb-3">
            Solution
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            ミチビキ AIが
            <br />
            解決する3つの変革
          </h2>
        </motion.div>

        {/* Solution cards: 1col mobile, 3col md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 md:mb-14">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-7 md:p-8 text-center hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 md:mb-5">
                <s.icon size={26} className="text-white" />
              </div>
              <h3
                className="text-base sm:text-lg font-black text-white mb-2 md:mb-3"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-orange py-3.5 sm:py-4 px-8 sm:px-10 text-sm sm:text-base w-full sm:w-auto"
          >
            無料でお問い合わせ
          </button>
        </motion.div>
      </div>
    </section>
  );
}
