"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

// ==========================================
// Login API ตามตัวอย่าง 4.7.1 ของครู
// ==========================================
const LOGIN_URL = "https://api.itdev.cmtc.ac.th/auth/login";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    txt_username: "",
    txt_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ==========================================
  // เปลี่ยนค่าช่องกรอก
  // ==========================================
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ==========================================
  // Login
  // ==========================================
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.txt_username.trim()) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอก Username",
        text: "กรุณากรอก Username ก่อนเข้าสู่ระบบ",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    if (!form.txt_password.trim()) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอก Password",
        text: "กรุณากรอกรหัสผ่านก่อนเข้าสู่ระบบ",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    try {
      setIsLoading(true);

      console.log("LOGIN TRY:", LOGIN_URL);

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.txt_username,
          password: form.txt_password,
        }),
      });

      const result = await response
        .json()
        .catch(() => ({}));

      console.log("LOGIN STATUS:", response.status);
      console.log("LOGIN RESPONSE:", result);

      // ==========================================
      // Login สำเร็จ
      // ==========================================
      if (response.ok) {
        // ตามตัวอย่างครู 4.7.1
        if (result.token) {
          localStorage.setItem(
            "token",
            result.token
          );
        }

        // ตามตัวอย่างครู 4.7.1
        if (result.user) {
          localStorage.setItem(
            "user",
            JSON.stringify(result.user)
          );
        }

        // ป้องกันกรณี API ตอบ 200 แต่ไม่มี token
        if (!result.token) {
          await Swal.fire({
            icon: "error",
            title: "ไม่พบ Token",
            text: "Login สำเร็จแต่ API ไม่ส่ง Token กลับมา",
            confirmButtonText: "ตกลง",
          });

          return;
        }

        await Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          timer: 1200,
          showConfirmButton: false,
        });

        // ==========================================
        // ไปหน้า User
        // ==========================================
        router.push("/User");

        return;
      }

      // ==========================================
      // 401
      // ==========================================
      if (response.status === 401) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text:
            result.message ||
            "Username หรือรหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // 400
      // ==========================================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text:
            result.message ||
            "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fecc00",
        });

        return;
      }

      // ==========================================
      // 404
      // ==========================================
      if (response.status === 404) {
        await Swal.fire({
          icon: "error",
          title: "ไม่พบ Login API",
          text:
            "https://api.itdev.cmtc.ac.th/auth/login ตอบกลับ 404",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // 405
      // ==========================================
      if (response.status === 405) {
        await Swal.fire({
          icon: "error",
          title: "Method ไม่ถูกต้อง",
          text:
            "API ไม่อนุญาตให้ส่งคำขอด้วย POST",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // 500+
      // ==========================================
      if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `Server Error (${response.status})`,
          text:
            result.message ||
            "กรุณาลองใหม่ภายหลัง",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // Error อื่น ๆ
      // ==========================================
      await Swal.fire({
        icon: "error",
        title: `เข้าสู่ระบบไม่สำเร็จ (${response.status})`,
        text:
          result.message ||
          "เกิดข้อผิดพลาด",
        confirmButtonText: "ตกลง",
      });
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text:
          "ไม่สามารถส่ง Request ไปยัง API ได้",
        confirmButtonText: "ตกลง",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // ==========================================
  // UI
  // ==========================================
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef3e9] text-emerald-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-emerald-900/10" />
        <div className="absolute -bottom-40 -right-20 h-[30rem] w-[30rem] rounded-full border-[18px] border-amber-300/20" />
        <div className="absolute left-[8%] top-[18%] text-5xl text-amber-400/60">✦</div>
        <div className="absolute right-[12%] top-[22%] text-2xl text-emerald-700/40">✧</div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.75),transparent_32%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center p-5 sm:p-8">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white/70 shadow-[14px_14px_0px_rgba(6,78,59,0.12)] backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
          <section className="relative hidden overflow-hidden bg-emerald-950 p-10 text-emerald-50 lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-amber-300/20" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/40 bg-amber-300 text-xl font-black text-emerald-950 shadow-lg">
                MM
              </div>
              <p className="mt-8 text-xs font-bold tracking-[0.3em] text-amber-300">MOMI ART SHOP</p>
              <h2 className="mt-5 max-w-sm text-4xl font-light leading-tight">
                พื้นที่เล็ก ๆ สำหรับคนรักงานศิลปะ
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-emerald-100/70">
                เข้าสู่ระบบเพื่อเก็บผลงานที่ชอบไว้ และค้นพบชิ้นงานที่เข้ากับพื้นที่ของคุณ
              </p>
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <span className="text-7xl text-amber-300/90">◒</span>
              <span className="text-right text-xs leading-relaxed text-emerald-100/50">COLLECT<br />YOUR MOMENT</span>
            </div>
          </section>

          <section className="p-7 sm:p-12 lg:p-14">
            <div className="mb-9 lg:hidden">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-sm font-black text-amber-300">MM</div>
              <p className="text-xs font-bold tracking-[0.25em] text-emerald-700">MOMI ART SHOP</p>
            </div>

            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.25em] text-emerald-700">WELCOME BACK</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">เข้าสู่ระบบ</h1>
              <p className="mt-2 text-sm leading-relaxed text-emerald-900/55">กลับมาสร้างพื้นที่ที่เป็นตัวคุณอีกครั้ง</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="txt_username" className="mb-2 block text-xs font-bold tracking-[0.16em] text-emerald-900/70">USERNAME</label>
                <input id="txt_username" type="text" name="txt_username" value={form.txt_username} onChange={handleChange} autoComplete="username" disabled={isLoading} className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 text-sm text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60" placeholder="กรอก Username" />
              </div>

              <div>
                <label htmlFor="txt_password" className="mb-2 block text-xs font-bold tracking-[0.16em] text-emerald-900/70">PASSWORD</label>
                <div className="relative">
                  <input id="txt_password" type={showPassword ? "text" : "password"} name="txt_password" value={form.txt_password} onChange={handleChange} autoComplete="current-password" disabled={isLoading} className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 pr-16 text-sm text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60" placeholder="กรอกรหัสผ่าน" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100" aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}>
                    {showPassword ? "ซ่อน" : "แสดง"}
                  </button>
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="group flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-950 px-5 py-3.5 text-sm font-bold text-amber-300 shadow-[5px_5px_0px_#fcd34d] transition hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-[7px_7px_0px_#fcd34d] disabled:cursor-not-allowed disabled:opacity-60">
                {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                {!isLoading && <span className="transition-transform group-hover:translate-x-1">→</span>}
              </button>
            </form>

            <div className="my-8 flex items-center gap-3 text-xs text-emerald-900/35"><span className="h-px flex-1 bg-emerald-900/10" /> หรือ <span className="h-px flex-1 bg-emerald-900/10" /></div>
            <p className="text-center text-sm text-emerald-900/60">ยังไม่มีบัญชี? <button type="button" onClick={() => router.push("/register")} className="font-bold text-emerald-800 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-emerald-950">สมัครสมาชิก</button></p>
          </section>
        </div>
      </div>
    </main>
  );
}