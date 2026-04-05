/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * How It Works: 2 types of onboarding flows
 */

import { motion } from "framer-motion";
import { ArrowRight, MonitorSmartphone, Users } from "lucide-react";

const managementFeatures = [
  "リアルタイムダッシュボードで回答状況を確認",
  "顧客セグメント別の分析レポートを自動生成",
  "回答データをCSV・API経由でエクスポート",
  "A/Bテストでヒアリングフローを継続改善",
];

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="container">
        <div className="section-heading relative pb-4 mb-10 md:mb-14">
          <span className="watermark">FLOW</span>
          <span className="subtitle">導入から運用まで</span>
          <h2>2つの導入タイプからお選びください</h2>
        </div>

        {/* 1col mobile, 2col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 mb-10 md:mb-16">
          {/* Type 1: スムーズスタートタイプ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-2 border-[#1D4ED8] shadow-lg shadow-blue-50"
          >
            <div
              className="px-5 sm:px-8 py-4 sm:py-5 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <MonitorSmartphone size={18} className="text-white" />
              </div>
              <div>
                <p className="text-blue-200 text-xs font-bold tracking-wider mb-0.5">TYPE 01</p>
                <h3 className="text-base sm:text-lg font-black text-white">スムーズスタートタイプ</h3>
              </div>
            </div>
            <div className="bg-[#EFF6FF] p-5 sm:p-8">
              <p className="text-xs sm:text-sm text-[#6B7280] mb-5 sm:mb-6 leading-relaxed">
                すぐに始めたい方向け。オンラインで完結するシンプルな導入フローです。
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { num: "01", label: "オンラインお申し込み", sub: "ご契約・決済" },
                  { num: "02", label: "アカウント発行・ご利用スタート", sub: "" },
                ].map((step, i, arr) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3.5 sm:p-4 shadow-sm border border-blue-100">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-xs sm:text-sm"
                        style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <p className="font-black text-[#1E3A8A] text-xs sm:text-sm">{step.label}</p>
                        <p className="text-xs text-[#6B7280]">{step.sub}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowRight size={18} className="text-[#1D4ED8] rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Type 2: お打ち合わせタイプ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl overflow-hidden border-2 border-[#F97316] shadow-lg shadow-orange-50"
          >
            <div
              className="px-5 sm:px-8 py-4 sm:py-5 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <p className="text-orange-200 text-xs font-bold tracking-wider mb-0.5">TYPE 02</p>
                <h3 className="text-base sm:text-lg font-black text-white">お打ち合わせタイプ</h3>
              </div>
            </div>
            <div className="bg-[#FFF7ED] p-5 sm:p-8">
              <p className="text-xs sm:text-sm text-[#6B7280] mb-5 sm:mb-6 leading-relaxed">
                要件や課題を丁寧にヒアリングしてから導入したい方向けのサポート付きフローです。
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { num: "01", label: "お打ち合わせ", sub: "オンライン・対面どちらも可" },
                  { num: "02", label: "サポート", sub: "設計・設定のご支援" },
                  { num: "03", label: "オンラインお申し込み", sub: "ご契約・決済" },
                  { num: "04", label: "アカウント発行・ご利用スタート", sub: "" },
                ].map((step, i, arr) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-xl p-3.5 sm:p-4 shadow-sm border border-orange-100">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-xs sm:text-sm"
                        style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <p className="font-black text-[#9A3412] text-xs sm:text-sm">{step.label}</p>
                        <p className="text-xs text-[#6B7280]">{step.sub}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex justify-center my-2">
                        <ArrowRight size={18} className="text-[#F97316] rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Management features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-blue-100"
        >
          <div
            className="px-5 sm:px-8 py-4 sm:py-5"
            style={{ background: "linear-gradient(135deg, #1E3A8A, #1D4ED8)" }}
          >
            <h3 className="text-base sm:text-lg font-black text-white">充実した管理機能</h3>
          </div>
          <div className="bg-[#EFF6FF] p-5 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {managementFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-xl p-3.5 sm:p-4 shadow-sm border border-blue-100"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1D4ED8] font-black text-xs">{i + 1}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#374151]">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
