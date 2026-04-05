/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Responsive: sm / md / lg 3段階対応
 * FAQ: Light blue bg, white accordion cards, blue Q/A labels
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "導入までの期間はどのくらいですか？",
    a: "最短即日で導入可能です。スムーズスタートタイプはオンラインお申し込み後、即日～翌営業日にアカウント発行してご利用開始いただけます。",
  },
  {
    q: "質問項目はカスタマイズできますか？",
    a: "はい、管理画面から自由に設定・変更が可能です。プレミアムプランでは、専任チームによる設計代行も承っております。",
  },
  {
    q: "スマートフォンやタブレットでも使えますか？",
    a: "はい、完全レスポンシブ対応です。PC、スマホ、タブレットなど、あらゆるデバイスで快適にご利用いただけます。",
  },
  {
    q: "SFAやCRMなどの外部システムと連携できますか？",
    a: "CSVエクスポートによる連携は標準対応です。API連携については個別開発にて対応可能ですのでご相談ください。",
  },
  {
    q: "自社サイトへの埋め込みは可能ですか？",
    a: "はい、発行されるタグを貼り付けるだけで、貴社サイト内に簡単にヒアリングフォームを設置できます。",
  },
  {
    q: "最低契約期間はありますか？",
    a: "最低契約期間は3ヶ月で、3ヶ月ごとの更新となります。",
  },
  {
    q: "途中でプランを変更することはできますか？",
    a: "はい、月単位でのプランアップグレードが可能です。利用状況に合わせて柔軟に変更いただけます。",
  },
  {
    q: "導入後のサポート体制はどうなっていますか？",
    a: "メール・チャットでのサポートに加え、定期的なWeb会議での活用支援も行っています（プランにより異なります）。",
  },
  {
    q: "収集したデータの分析はできますか？",
    a: "はい、ダッシュボードでリアルタイムに集計・分析が可能です。顧客ニーズの可視化やマーケティング施策に活用いただけます。",
  },
  {
    q: "業界別のテンプレートはありますか？",
    a: "はい、各業界の成功事例に基づいたテンプレートを多数ご用意しており、すぐに効果的なヒアリングを開始できます。",
  },
];

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`bg-white rounded-xl border transition-all duration-200 ${
        open ? "border-[#1D4ED8] shadow-md shadow-blue-50" : "border-blue-100"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left"
      >
        <div className="flex items-start gap-2.5 sm:gap-3">
          <span
            className="font-black flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-white mt-0.5"
            style={{ background: open ? "#1D4ED8" : "#93C5FD", fontSize: "10px" }}
          >
            Q
          </span>
          <span
            className={`font-semibold text-xs sm:text-sm md:text-base leading-relaxed transition-colors ${
              open ? "text-[#1E3A8A]" : "text-[#374151]"
            }`}
            style={{ fontFamily: "Noto Sans JP, sans-serif" }}
          >
            {faq.q}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`flex-shrink-0 mt-0.5 transition-transform duration-300 ${
            open ? "rotate-180 text-[#1D4ED8]" : "text-[#9CA3AF]"
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="flex items-start gap-2.5 sm:gap-3 px-4 sm:px-5 pb-4 sm:pb-5">
          <span
            className="font-black flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[#1D4ED8] bg-[#DBEAFE] mt-0.5"
            style={{ fontSize: "10px" }}
          >
            A
          </span>
          <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed">{faq.a}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-14 sm:py-16 md:py-20 bg-[#EFF6FF]">
      <div className="container">
        {/* スマホは縦積み、lg以上は3カラム */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="section-heading pb-4 mb-4 sm:mb-6 text-left" style={{ textAlign: "left" }}>
              <span className="watermark" style={{ fontSize: "clamp(2rem, 6vw, 3rem)", left: "0", transform: "none" }}>FAQ</span>
              <span className="subtitle" style={{ textAlign: "left" }}>よくあるご質問</span>
              <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", textAlign: "left" }}>FAQ</h2>
            </div>
            <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              ご不明な点がございましたら、
              お気軽にお問い合わせください。
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-blue text-xs sm:text-sm py-3 px-5 sm:py-3.5 sm:px-6 w-full sm:w-auto"
            >
              お問い合わせする
            </button>
          </motion.div>

          {/* Right: FAQ list */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            {faqs.map((faq, index) => (
              <FaqItem key={faq.q} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
