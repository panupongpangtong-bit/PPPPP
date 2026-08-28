"use client";
import Link from 'next/link'
import { ArrowRight, Mail, CheckCircle2, Zap, ShieldCheck } from 'lucide-react'

export default function Herosection() {
  // สร้างรายการตำแหน่งและความเร็วแบบสุ่มสำหรับหิ่งห้อยแต่ละดวง
  const fireflies = [
    { top: "15%", left: "10%", size: "w-2.5 h-2.5", duration: "12s", delay: "0s" },
    { top: "25%", left: "80%", size: "w-2 h-2", duration: "16s", delay: "2s" },
    { top: "45%", left: "45%", size: "w-3 h-3", duration: "14s", delay: "4s" },
    { top: "65%", left: "15%", size: "w-2 h-2", duration: "18s", delay: "1s" },
    { top: "75%", left: "70%", size: "w-2.5 h-2.5", duration: "15s", delay: "3s" },
    { top: "35%", left: "30%", size: "w-1.5 h-1.5", duration: "13s", delay: "5s" },
    { top: "85%", left: "40%", size: "w-2 h-2", duration: "17s", delay: "2.5s" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#edf3ee] via-[#f3f7f4] to-[#e4ede6] dark:from-[#0a1811] dark:via-[#0f2319] dark:to-[#06120c] font-sans text-emerald-950 dark:text-emerald-100 transition-colors duration-500">
      
      {/* Dynamic Keyframe Animation สำหรับหิ่งห้อย */}
      <style jsx>{`
        @keyframes floatFirefly {
          0% {
            transform: translate(0, 0) scale(0.8);
            opacity: 0.2;
          }
          30% {
            opacity: 0.9;
          }
          50% {
            transform: translate(30px, -40px) scale(1.2);
            opacity: 0.4;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: translate(-20px, -80px) scale(0.8);
            opacity: 0.2;
          }
        }
        .animate-firefly {
          animation: floatFirefly infinite ease-in-out alternate;
        }
      `}</style>

      {/* ================= FLOATING FIREFLIES (ลูกเล่นหิ่งห้อย) ================= */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {fireflies.map((fly, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-emerald-400 dark:bg-amber-200 blur-[1px] shadow-[0_0_8px_rgba(52,211,153,0.8)] dark:shadow-[0_0_10px_rgba(253,230,138,0.9)] animate-firefly ${fly.size}`}
            style={{
              top: fly.top,
              left: fly.left,
              animationDuration: fly.duration,
              animationDelay: fly.delay,
            }}
          />
        ))}
      </div>

      {/* Background Subtle Line Art */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20">
        <svg
          className="absolute -top-20 right-5 w-[600px] h-[600px] text-emerald-800 dark:text-emerald-300"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.3" strokeDasharray="3 3" />
          <path d="M10,100 Q100,10 190,100 T270,100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Subtle Soft Green Ambient Glows */}
      <div className="absolute -top-30 -left-30 h-96 w-96 rounded-full bg-emerald-200/50 dark:bg-emerald-800/10 blur-3xl"></div>
      <div className="absolute -bottom-30 -right-30 h-96 w-96 rounded-full bg-teal-200/40 dark:bg-teal-900/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-900/5 dark:border-emerald-500/20 dark:bg-emerald-950/40 px-4 py-1.5 text-xs font-light tracking-widest text-emerald-900 dark:text-emerald-200/90 shadow-sm backdrop-blur-md">
              🌿 Welcome to MoMi Art Studio
            </span>

            <h1 className="mt-6 text-3xl font-light tracking-wide text-emerald-950 dark:text-emerald-50 sm:text-4xl md:text-5xl lg:leading-tight">
              ศูนย์รวมภาพวาดและงานศิลปะ
              <span className="block font-normal italic tracking-wider bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600 dark:from-emerald-200 dark:via-teal-200 dark:to-emerald-400 bg-clip-text text-transparent mt-2">
                หาสไตล์ และความเป็นตัวคุณ
              </span>
            </h1>

            <p className="mt-6 text-base font-light leading-relaxed text-emerald-900/70 dark:text-emerald-200/70 max-w-2xl mx-auto lg:mx-0 tracking-wide">
              เลือกผลงานที่คุณชื่นชอบและสร้างแรงบันดาลใจให้กับชีวิตของคุณ ด้วยศิลปะที่คัดสรรมาอย่างดีเพื่อคุณ
            </p>

            {/* Minimalist Soft Green Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-800 dark:bg-emerald-800/80 px-8 py-3.5 text-xs font-light tracking-widest text-emerald-50 border border-emerald-700/30 shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 dark:hover:bg-emerald-700 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              >
                <span>เรียนรู้เพิ่มเติม</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-emerald-800/20 dark:border-emerald-500/20 bg-emerald-900/5 dark:bg-emerald-950/20 px-8 py-3.5 text-xs font-light tracking-widest text-emerald-900 dark:text-emerald-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-800/40 hover:bg-emerald-800/10 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-900/30 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <Mail className="h-4 w-4 text-emerald-700 dark:text-emerald-400/80" />
                <span>ติดต่อเรา</span>
              </Link>
            </div>

            {/* Feature / Stats Cards - Minimal Light Sage Style */}
            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-emerald-900/10 dark:border-emerald-900/40 pt-8 text-left">
              <div className="rounded-2xl border border-emerald-900/10 dark:border-emerald-500/10 bg-emerald-900/5 dark:bg-emerald-950/30 p-4 backdrop-blur-md transition-all duration-300 hover:border-emerald-800/20 dark:hover:border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 mb-1">
                  <CheckCircle2 className="h-4 w-4 stroke-[1.5]" />
                  <span className="text-lg font-light tracking-wider text-emerald-950 dark:text-emerald-100">99%</span>
                </div>
                <p className="text-[11px] font-light text-emerald-800/60 dark:text-emerald-300/60 tracking-wider">ความพึงพอใจลูกค้า</p>
              </div>

              <div className="rounded-2xl border border-emerald-900/10 dark:border-emerald-500/10 bg-emerald-900/5 dark:bg-emerald-950/30 p-4 backdrop-blur-md transition-all duration-300 hover:border-emerald-800/20 dark:hover:border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 mb-1">
                  <Zap className="h-4 w-4 stroke-[1.5]" />
                  <span className="text-lg font-light tracking-wider text-emerald-950 dark:text-emerald-100">100+</span>
                </div>
                <p className="text-[11px] font-light text-emerald-800/60 dark:text-emerald-300/60 tracking-wider">โปรเจกต์สำเร็จ</p>
              </div>

              <div className="rounded-2xl border border-emerald-900/10 dark:border-emerald-500/10 bg-emerald-900/5 dark:bg-emerald-950/30 p-4 backdrop-blur-md transition-all duration-300 hover:border-emerald-800/20 dark:hover:border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 mb-1">
                  <ShieldCheck className="h-4 w-4 stroke-[1.5]" />
                  <span className="text-lg font-light tracking-wider text-emerald-950 dark:text-emerald-100">24/7</span>
                </div>
                <p className="text-[11px] font-light text-emerald-800/60 dark:text-emerald-300/60 tracking-wider">ดูแลและซัพพอร์ต</p>
              </div>
            </div>

          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Minimal Line Art Frame Behind Image */}
              <div className="absolute -inset-4 rounded-3xl border border-emerald-800/15 dark:border-emerald-500/20 bg-emerald-800/5 dark:bg-emerald-900/10 backdrop-blur-sm"></div>

              {/* Ambient Soft Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-400/20 to-teal-300/10 blur-xl"></div>

              <img
                src="https://i.pinimg.com/736x/58/1d/ac/581dacb304433387dd6951970981c6db.jpg"
                alt="Art Gallery"
                className="relative w-full rounded-2xl shadow-xl shadow-emerald-900/5 transition-transform duration-500 hover:scale-[1.01] border border-emerald-800/10 dark:border-emerald-500/20 object-cover aspect-[4/3]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}