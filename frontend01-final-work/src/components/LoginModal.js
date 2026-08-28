"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LOGIN_ENDPOINTS, apiMessage, extractToken, extractUser, saveToken, saveUser } from "../lib/auth";
import Swal from "sweetalert2";

export default function LoginModal({ isOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // ควบคุม Popup สำเร็จ
  const [showSuccess, setShowSuccess] = useState(false);

  // Loading
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setUsername("");
      setPassword("");
      setShowSuccess(false);
      setLoading(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอกข้อมูลให้ครบ",
        confirmButtonColor: "#065f46",
      });
      return;
    }

    setLoading(true);

    try {
      for (const url of LOGIN_ENDPOINTS) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ username: username.trim(), password }),
        });

        const contentType = response.headers.get("content-type") || "";
        const data = contentType.includes("application/json")
          ? await response.json().catch(() => ({}))
          : { message: await response.text().catch(() => "") };

        console.log("LOGIN MODAL:", url, response.status, data);

        if (response.ok) {
          const token = extractToken(data);
          if (!token) {
            throw new Error("ไม่พบ Token จากเซิร์ฟเวอร์");
          }
          saveToken(token);
          saveUser(extractUser(data, username.trim()));
          setShowSuccess(true);

          setTimeout(() => {
            setShowSuccess(false);
            onClose();
            window.location.href = "/User";
          }, 1000);
          return;
        }

        if (response.status === 404 || response.status === 405) {
          continue;
        }

        throw new Error(apiMessage(data, `HTTP ${response.status}`));
      }

      throw new Error("ไม่พบ Login API ที่ใช้งานได้");
    } catch (error) {
      console.error("LOGIN MODAL ERROR:", error);
      await Swal.fire({
        icon: "error",
        title: "เข้าสู่ระบบไม่สำเร็จ",
        text: error?.message || "ไม่สามารถเข้าสู่ระบบได้",
        confirmButtonColor: "#065f46",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================================================= */}
      {/* LOGIN MODAL */}
      {/* ================================================= */}

      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051109]/70 p-4 backdrop-blur-md">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/95 shadow-2xl backdrop-blur-md dark:border-emerald-500/15 dark:bg-[#0d1f16]/95">
          
          {/* ปุ่มปิด */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50/80 text-emerald-800 transition hover:bg-emerald-100 hover:text-emerald-950 dark:bg-[#142e21] dark:text-emerald-300 dark:hover:bg-[#1b3e2c]"
          >
            ✕
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* ================================================= */}
            {/* LEFT SIDE PANEL */}
            {/* ================================================= */}

            <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 p-10 text-emerald-50 md:flex md:flex-col md:justify-center">
              
              {/* Soft Ambient Glow in Left Card */}
              <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none"></div>

              <div className="relative z-10 mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-700/40 text-lg font-light tracking-widest shadow-lg backdrop-blur">
                  KATE
                </div>

                <h2 className="mt-7 text-3xl font-light tracking-wide">
                  ยินดีต้อนรับกลับมา 👋
                </h2>

                <p className="mt-3 text-sm font-light leading-relaxed text-emerald-200/80">
                  เข้าสู่ระบบเพื่อใช้งาน PP SHOP
                  และสัมผัสประสบการณ์การช้อปปิ้งที่ง่ายขึ้น
                </p>
              </div>

              {/* Features List */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-700/20 p-4 backdrop-blur">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <p className="text-sm font-medium">ปลอดภัย</p>
                    <p className="text-xs font-light text-emerald-200/70">
                      ข้อมูลของคุณได้รับการดูแลอย่างดี
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-700/20 p-4 backdrop-blur">
                  <div className="text-2xl">🛍️</div>
                  <div>
                    <p className="text-sm font-medium">ช้อปง่าย</p>
                    <p className="text-xs font-light text-emerald-200/70">
                      ค้นหาและเลือกซื้อสินค้าได้สะดวกสบาย
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/10 bg-emerald-700/20 p-4 backdrop-blur">
                  <div className="text-2xl">💬</div>
                  <div>
                    <p className="text-sm font-medium">บริการด้วยใจ</p>
                    <p className="text-xs font-light text-emerald-200/70">
                      พร้อมช่วยเหลือและให้คำแนะนำตลอดเวลา
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT FORM PANEL */}
            {/* ================================================= */}

            <div className="p-7 sm:p-10">
              
              {/* Logo Mobile */}
              <div className="mb-7 md:hidden">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-700 text-sm font-light text-white shadow-lg">
                  KATE
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-light tracking-wide text-emerald-950 dark:text-emerald-50">
                  เข้าสู่ระบบ
                </h2>

                <p className="mt-2 text-sm font-light text-emerald-900/60 dark:text-emerald-200/60">
                  กรุณากรอกข้อมูลของคุณเพื่อเข้าสู่ระบบ
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Username Input */}
                <div>
                  <label className="mb-2 block text-xs font-light tracking-wider text-emerald-900/80 dark:text-emerald-200/80">
                    USERNAME
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700/60 dark:text-emerald-300/60">
                      👤
                    </span>

                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="กรอก Username"
                      className="w-full rounded-xl border border-emerald-900/10 bg-emerald-50/40 py-3.5 pl-11 pr-4 text-emerald-950 text-sm font-light outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-emerald-500/20 dark:bg-[#07130d] dark:text-emerald-50 dark:focus:border-emerald-400 dark:focus:bg-[#0a1811]"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-xs font-light tracking-wider text-emerald-900/80 dark:text-emerald-200/80">
                      PASSWORD
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-light text-emerald-700 hover:underline dark:text-emerald-400"
                    >
                      ลืมรหัสผ่าน?
                    </Link>
                  </div>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-700/60 dark:text-emerald-300/60">
                      🔒
                    </span>

                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-emerald-900/10 bg-emerald-50/40 py-3.5 pl-11 pr-4 text-emerald-950 text-sm font-light outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-emerald-500/20 dark:bg-[#07130d] dark:text-emerald-50 dark:focus:border-emerald-400 dark:focus:bg-[#0a1811]"
                    />
                  </div>
                </div>

                {/* Remember Checkbox */}
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-emerald-900/20 text-emerald-800 focus:ring-emerald-600 dark:border-emerald-500/30 dark:bg-[#07130d]"
                  />

                  <span className="text-sm font-light text-emerald-900/70 dark:text-emerald-200/70">
                    จดจำการเข้าสู่ระบบ
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3.5 text-xs font-light tracking-widest text-emerald-50 shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:bg-emerald-900 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-200/40 border-t-emerald-50" />
                      กำลังเข้าสู่ระบบ...
                    </>
                  ) : (
                    <>
                      เข้าสู่ระบบ
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-emerald-900/10 dark:bg-emerald-500/20" />
                <span className="text-xs font-light text-emerald-900/40 dark:text-emerald-200/40">
                  หรือ
                </span>
                <div className="h-px flex-1 bg-emerald-900/10 dark:bg-emerald-500/20" />
              </div>

              {/* Register Action */}
              <p className="text-center text-sm font-light text-emerald-900/70 dark:text-emerald-200/70">
                ยังไม่มีบัญชี?
                <Link
                  href="/register"
                  onClick={onClose}
                  className="ml-1 font-normal text-emerald-800 underline hover:text-emerald-950 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  สมัครสมาชิก
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* SUCCESS POPUP */}
      {/* ================================================= */}

      {showSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#051109]/60 p-4 backdrop-blur-md">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/95 p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300 dark:border-emerald-500/20 dark:bg-[#0d1f16]/95">
            
            {/* Success Icon */}
            <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-3xl text-emerald-50 shadow-lg shadow-emerald-700/30">
                  ✓
                </div>
              </div>
            </div>

            <h2 className="mt-7 text-2xl font-light tracking-wide text-emerald-950 dark:text-emerald-50">
              ยินดีต้อนรับกลับมา!
            </h2>

            <p className="mt-2 text-sm font-light text-emerald-900/70 dark:text-emerald-200/70">
              เข้าสู่ระบบสำเร็จ
            </p>

            <p className="mt-1 text-xs font-light text-emerald-800/50 dark:text-emerald-300/50">
              กำลังนำคุณไปยังหน้าหลัก...
            </p>

            {/* Progress */}
            <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950">
              <div className="h-full w-full origin-left animate-[shrink_2s_linear] rounded-full bg-gradient-to-r from-emerald-600 to-teal-500" />
            </div>

            <p className="mt-3 text-xs font-light text-emerald-800/40 dark:text-emerald-300/40">
              2 วินาที
            </p>
          </div>
        </div>
      )}

      {/* Custom Keyframe Animation */}
      <style jsx>{`
        @keyframes shrink {
          from {
            transform: scaleX(1);
          }
          to {
            transform: scaleX(0);
          }
        }
      `}</style>
    </>
  );
}