/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * Problem: White bg, large watermark "WORRY", center icon, speech bubbles
 */

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const problems = [
  "ヒアリング内容が担当者によって\nバラバラで品質にムラがある",
  "顧客の声がデータとして\n残らず死蔵されている",
  "新人が一人でヒアリングを\nこなせるようになるまで時間がかかる",
  "ヒアリング後の集計・分析に\n多大な工数がかかっている",
  "「よくある質問」への個別対応で\n本来の業務に集中できない",
  "商談機会の損失が\n続いているが改善策が見えない",
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-14 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="section-heading relative pb-4 mb-10 md:mb-12">
          <span className="watermark">WORRY</span>
          <span className="subtitle">こんなお悩みありませんか？</span>
          <h2>ヒアリング業務の課題</h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Center illustration */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE] flex items-center justify-center shadow-xl border-4 border-white">
                <div className="text-center">
                  <AlertCircle size={40} className="text-[#1D4ED8] mx-auto mb-1 sm:mb-2 sm:w-[52px] sm:h-[52px]" strokeWidth={1.5} />
                  <p className="text-xs font-black text-[#1E3A8A]">担当者の悩み</p>
                </div>
              </div>
              <div className="absolute -top-1 right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#93C5FD] opacity-60" />
              <div className="absolute top-6 -right-3 sm:-right-4 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#93C5FD] opacity-40" />
              <div className="absolute top-2 -left-3 sm:-left-4 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#93C5FD] opacity-50" />
            </div>
          </div>

          {/* Speech bubbles grid: 1col on mobile, 2col on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="speech-bubble relative"
              >
                <div
                  className="absolute -top-3 left-6 w-0 h-0"
                  style={{
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderBottom: "12px solid #BFDBFE",
                  }}
                />
                <p className="text-xs sm:text-sm font-bold text-[#1E3A8A] whitespace-pre-line leading-relaxed">
                  {p}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10 md:mt-14"
        >
          <div
            className="inline-block px-6 sm:px-10 py-4 sm:py-5 text-white font-black text-xl sm:text-2xl rounded-xl shadow-xl"
            style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
          >
            その悩みを<br />解決します！
          </div>
          <div className="mt-3 flex justify-center">
            <div
              className="w-0 h-0"
              style={{
                borderLeft: "32px solid transparent",
                borderRight: "32px solid transparent",
                borderTop: "26px solid #1D4ED8",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
