/*
 * Design: SEEC-Inspired Bold Japanese SaaS LP
 * Page: サービスお申し込みページ (/apply)
 * Responsive: sm / md / lg 3段階対応
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LogoMark } from "@/components/Navbar";

const plans = [
  { id: "standard", label: "スタンダードプラン", price: "¥29,800 / 月" },
  { id: "premium", label: "プレミアムプラン", price: "¥59,800 / 月" },
  { id: "undecided", label: "まだ決まっていない", price: "" },
];

export default function Apply() {
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
    <div className="min-h-screen" style={{ background: "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 100%)" }}>
      {/* シンプルヘッダー */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <a href="/" style={{ textDecoration: "none" }}>
              <LogoMark />
            </a>
            <Link href="/">
              <button className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6B7280] hover:text-[#1D4ED8] transition-colors">
                <ArrowLeft size={15} />
                <span>トップページへ戻る</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-10 sm:py-14 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* ページタイトル */}
            <div className="text-center mb-8 sm:mb-10">
              <span
                className="inline-block text-[10px] sm:text-xs font-bold text-[#1D4ED8] tracking-widest uppercase mb-3"
              >
                APPLY
              </span>
              <h1
                className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1E3A8A] mb-2"
                style={{ fontFamily: "Noto Sans JP, sans-serif", lineHeight: 1.3 }}
              >
                サービスお申し込み
              </h1>
              <p className="text-xs sm:text-sm text-[#6B7280]">
                オンラインで完結。最短即日でご利用を開始できます。
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="text-green-500 w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-lg sm:text-xl font-black text-[#1E3A8A] mb-3">
                  お申し込みを受け付けました
                </h2>
                <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                  ご登録のメールアドレスに確認メールをお送りします。<br />
                  2営業日以内に担当者よりご連絡いたします。
                </p>
                <Link href="/">
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] border-2 border-[#1D4ED8] rounded-full px-6 py-2.5 hover:bg-[#EFF6FF] transition-colors">
                    <ArrowLeft size={15} />
                    トップページへ戻る
                  </button>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-5 sm:p-7 md:p-10"
              >
                <h2
                  className="text-base sm:text-lg font-black text-[#1E3A8A] mb-1 text-center"
                  style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                >
                  お申し込みフォーム
                </h2>
                <p className="text-[10px] sm:text-xs text-[#6B7280] text-center mb-6 sm:mb-8">
                  ご入力後、2営業日以内にアカウント発行のご案内をお送りします
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* プラン選択 */}
                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-[#374151] mb-2">
                      <span className="inline-block bg-red-500 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded mr-1.5">必須</span>
                      ご希望のプラン
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      {plans.map((p) => (
                        <label
                          key={p.id}
                          className={`flex flex-col items-center justify-center border-2 rounded-xl p-3 sm:p-4 cursor-pointer transition-all ${
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
                          <span className={`text-xs sm:text-sm font-bold text-center ${form.plan === p.id ? "text-[#1D4ED8]" : "text-[#374151]"}`}>
                            {p.label}
                          </span>
                          {p.price && (
                            <span className={`text-[10px] sm:text-xs mt-1 ${form.plan === p.id ? "text-[#1D4ED8]" : "text-[#6B7280]"}`}>
                              {p.price}
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* テキストフィールド */}
                  {[
                    { label: "企業名", key: "company", type: "text", placeholder: "株式会社〇〇" },
                    { label: "お名前", key: "name", type: "text", placeholder: "山田 太郎" },
                    { label: "電話番号", key: "phone", type: "tel", placeholder: "03-XXXX-XXXX" },
                    { label: "メールアドレス", key: "email", type: "email", placeholder: "yamada@company.co.jp" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-[10px] sm:text-xs font-bold text-[#374151] mb-1.5">
                        <span className="inline-block bg-red-500 text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded mr-1.5">必須</span>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-full text-white font-black text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #F97316, #EA580C)" }}
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
      </main>

      {/* シンプルフッター */}
      <footer className="py-6 text-center">
        <p className="text-[10px] sm:text-xs text-[#9CA3AF]">
          © 2026 株式会社ブリスブランド
        </p>
      </footer>
    </div>
  );
}
