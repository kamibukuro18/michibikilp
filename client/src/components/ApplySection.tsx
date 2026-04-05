/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Section: サービスお申し込み（スムーズスタートタイプ）
 * Responsive: sm / md / lg 3段階対応
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2 } from "lucide-react";

const plans = [
  { id: "standard", label: "スタンダードプラン", price: "¥29,800 / 月" },
  { id: "premium", label: "プレミアムプラン", price: "¥59,800 / 月" },
  { id: "undecided", label: "まだ決まっていない", price: "" },
];

export default function ApplySection() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    plan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="py-12 sm:py-16 md:py-20"
      style={{ background: "linear-gradient(160deg, #1E3A8A 0%, #1D4ED8 60%, #2563EB 100%)" }}
    >
      <div className="container">
        <div className="section-heading mb-8 sm:mb-10">
          <span className="subtitle" style={{ color: "#93C5FD" }}>APPLY</span>
          <h2 style={{ color: "white" }}>サービスお申し込み</h2>
          <p className="text-[#BFDBFE] text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            オンラインで完結。最短即日でご利用を開始できます。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-green-500 w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#1E3A8A] mb-2">
                お申し込みを受け付けました
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                ご登録のメールアドレスに確認メールをお送りします。<br />
                2営業日以内に担当者よりご連絡いたします。
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl p-5 sm:p-7 md:p-10"
            >
              <h3
                className="text-base sm:text-lg font-black text-[#1E3A8A] mb-1 text-center"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                お申し込みフォーム
              </h3>
              <p className="text-[10px] sm:text-xs text-[#6B7280] text-center mb-5 sm:mb-6">
                ご入力後、2営業日以内にアカウント発行のご案内をお送りします
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Plan selection */}
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold text-[#374151] mb-1.5">
                    <span className="inline-block bg-red-500 text-white text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded mr-1 sm:mr-1.5">必須</span>
                    ご希望のプラン
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {plans.map((p) => (
                      <label
                        key={p.id}
                        className={`flex flex-col items-center justify-center border-2 rounded-xl p-2.5 sm:p-3 cursor-pointer transition-all ${
                          form.plan === p.id
                            ? "border-[#1D4ED8] bg-[#EFF6FF]"
                            : "border-gray-200 hover:border-[#93C5FD]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="plan"
                          value={p.id}
                          className="sr-only"
                          required
                          onChange={(e) => setForm({ ...form, plan: e.target.value })}
                        />
                        <span className={`text-xs sm:text-sm font-bold ${form.plan === p.id ? "text-[#1D4ED8]" : "text-[#374151]"}`}>
                          {p.label}
                        </span>
                        {p.price && (
                          <span className={`text-[10px] sm:text-xs mt-0.5 ${form.plan === p.id ? "text-[#1D4ED8]" : "text-[#6B7280]"}`}>
                            {p.price}
                          </span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Text fields */}
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

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  お申し込みを確定する
                  <ChevronRight size={18} />
                </button>
                <p className="text-[9px] sm:text-[10px] text-[#9CA3AF] text-center">
                  送信することで
                  <a href="#" className="text-[#1D4ED8] underline">プライバシーポリシー</a>
                  に同意したものとみなします
                </p>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
