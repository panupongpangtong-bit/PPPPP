"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const REGISTER_URL = "https://api.itdev.cmtc.ac.th/users";

export default function FormRegister() {
  const router = useRouter();

  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_email: "",
    txt_phone: "",
    txt_username: "",
    txt_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ==========================================
    // ตรวจข้อมูล
    // ==========================================
    if (
      !form.txt_firstname.trim() ||
      !form.txt_lastname.trim() ||
      !form.txt_email.trim() ||
      !form.txt_phone.trim() ||
      !form.txt_username.trim() ||
      !form.txt_password.trim()
    ) {
      await Swal.fire({
        icon: "warning",
        title: "กรุณากรอกข้อมูลให้ครบ",
        text: "กรุณากรอกข้อมูลทุกช่องก่อนสมัครสมาชิก",
        confirmButtonText: "ตกลง",
      });

      return;
    }

    // ตรวจ Email เบื้องต้น
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.txt_email.trim())) {
      await Swal.fire({
        icon: "warning",
        title: "Email ไม่ถูกต้อง",
        text: "กรุณากรอก Email ให้ถูกต้อง",
        confirmButtonText: "ตกลง",
      });

      return;
    }

    // ตรวจ Password
    if (form.txt_password.length < 6) {
      await Swal.fire({
        icon: "warning",
        title: "Password สั้นเกินไป",
        text: "กรุณาตั้งรหัสผ่านอย่างน้อย 6 ตัวอักษร",
        confirmButtonText: "ตกลง",
      });

      return;
    }

    try {
      setLoading(true);

      console.log("REGISTER API:", REGISTER_URL);

      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstname: form.txt_firstname.trim(),
          lastname: form.txt_lastname.trim(),
          email: form.txt_email.trim(),
          phone: form.txt_phone.trim(),
          username: form.txt_username.trim(),
          password: form.txt_password,
        }),
      });

      const contentType =
        response.headers.get("content-type") || "";

      let data = {};

      if (contentType.includes("application/json")) {
        data = await response.json().catch(() => ({}));
      } else {
        const text = await response.text().catch(() => "");

        data = {
          message: text,
        };
      }

      console.log("REGISTER STATUS:", response.status);
      console.log("REGISTER RESPONSE:", data);

      // ==========================================
      // สมัครสำเร็จ
      // ==========================================
      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ",
          text: "กำลังนำคุณไปหน้าเข้าสู่ระบบ",
          timer: 1500,
          showConfirmButton: false,
        });

        // ล้างข้อมูลเดิม
        setForm({
          txt_firstname: "",
          txt_lastname: "",
          txt_email: "",
          txt_phone: "",
          txt_username: "",
          txt_password: "",
        });

        // ไป Login
        router.push("/pagelogin");

        return;
      }

      // ==========================================
      // 400
      // ==========================================
      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: "ข้อมูลไม่ถูกต้อง",
          text:
            data.message ||
            data.error ||
            "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // 409
      // ==========================================
      if (response.status === 409) {
        await Swal.fire({
          icon: "warning",
          title: "ข้อมูลซ้ำ",
          text:
            data.message ||
            data.error ||
            "Username หรือ Email นี้อาจมีอยู่ในระบบแล้ว",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // 404
      // ==========================================
      if (response.status === 404) {
        await Swal.fire({
          icon: "error",
          title: "ไม่พบ Register API",
          text: "ไม่พบ Endpoint สำหรับสมัครสมาชิก",
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
          text: "API ไม่อนุญาตให้ใช้ POST",
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
          title: "Server Error",
          text:
            data.message ||
            data.error ||
            "เซิร์ฟเวอร์เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
        });

        return;
      }

      // ==========================================
      // Error อื่น
      // ==========================================
      await Swal.fire({
        icon: "error",
        title: `สมัครสมาชิกไม่สำเร็จ (${response.status})`,
        text:
          data.message ||
          data.error ||
          "เกิดข้อผิดพลาด",
        confirmButtonText: "ตกลง",
      });
    } catch (error) {
      console.error("REGISTER ERROR:", error);

      await Swal.fire({
        icon: "error",
        title: "ไม่สามารถเชื่อมต่อ API",
        text:
          "ไม่สามารถส่งข้อมูลไปยังเซิร์ฟเวอร์ได้",
        confirmButtonText: "ตกลง",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eef3e9] px-4 py-10 text-emerald-950 sm:py-16">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-emerald-900/10" />

        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border-[18px] border-amber-300/20" />

        <div className="absolute left-[8%] top-[18%] text-5xl text-amber-400/60">✦</div>
        <div className="absolute right-[12%] top-[28%] text-2xl text-emerald-700/40">✧</div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.75),transparent_32%)]" />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* Header */}
        <div className="mb-8 text-center lg:hidden">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-950 text-lg font-black text-amber-300 shadow-lg">
            MM
          </div>

          <div className="mb-3 inline-flex rounded-full border border-emerald-900/15 bg-white/60 px-4 py-1.5 text-xs font-bold tracking-[0.18em] text-emerald-700 shadow-sm">
            MoMi Art MEMBERS
          </div>

          <h1 className="text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl">
            สร้างบัญชีใหม่
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-emerald-900/55">
            สมัครสมาชิกกับ MoMi Art MEMBERS
            <br />
            เพื่อเริ่มต้นประสบการณ์การช้อปปิ้ง
          </p>

        </div>

        {/* Card */}
        <div className="grid overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white/75 shadow-[14px_14px_0px_rgba(6,78,59,0.12)] backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr]">

          <section className="relative hidden overflow-hidden bg-emerald-950 p-10 text-emerald-50 lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-amber-300/20" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/40 bg-amber-300 text-xl font-black text-emerald-950">MM</div>
              <p className="mt-8 text-xs font-bold tracking-[0.3em] text-amber-300">MOMI ART SHOP</p>
              <h2 className="mt-5 max-w-sm text-4xl font-light leading-tight">เริ่มต้นคอลเลกชันที่เป็นตัวคุณ</h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-emerald-100/70">สร้างบัญชีเพื่อบันทึกผลงานที่ชอบ และค้นพบศิลปะที่เข้ากับพื้นที่ของคุณ</p>
            </div>
            <div className="relative z-10 flex items-end justify-between">
              <span className="text-7xl text-amber-300/90">◒</span>
              <span className="text-right text-xs leading-relaxed text-emerald-100/50">MAKE ROOM<br />FOR ART</span>
            </div>
          </section>

          <div>

          <div className="h-1.5 w-full bg-gradient-to-r from-emerald-950 via-emerald-700 to-amber-300" />

          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 lg:p-12"
          >

            {/* Personal */}
            <div className="mb-6">

              <h2 className="font-black text-emerald-950">
                👤 ข้อมูลส่วนตัว
              </h2>

              <p className="mt-1 text-xs text-emerald-900/50">
                กรุณากรอกข้อมูลของคุณ
              </p>

            </div>

            {/* First / Last */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-bold text-emerald-900/75">
                  ชื่อ
                </label>

                <input
                  type="text"
                  name="txt_firstname"
                  value={form.txt_firstname}
                  onChange={handleChange}
                  placeholder="ชื่อ"
                  disabled={loading}
                  className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-bold text-emerald-900/75">
                  นามสกุล
                </label>

                <input
                  type="text"
                  name="txt_lastname"
                  value={form.txt_lastname}
                  onChange={handleChange}
                  placeholder="นามสกุล"
                  disabled={loading}
                  className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60"
                />

              </div>

            </div>

            {/* Email */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-bold text-emerald-900/75">
                อีเมล
              </label>

              <input
                type="email"
                name="txt_email"
                value={form.txt_email}
                onChange={handleChange}
                placeholder="example@email.com"
                disabled={loading}
                className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60"
              />

            </div>

            {/* Phone */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-bold text-emerald-900/75">
                เบอร์โทรศัพท์
              </label>

              <input
                type="tel"
                name="txt_phone"
                value={form.txt_phone}
                onChange={handleChange}
                placeholder="08x-xxx-xxxx"
                disabled={loading}
                className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60"
              />

            </div>

            {/* Account */}
            <div className="my-8">

              <div className="h-px bg-gradient-to-r from-transparent via-emerald-900/20 to-transparent" />

            </div>

            <div className="mb-6">

              <h2 className="font-black text-emerald-950">
                🔐 ข้อมูลบัญชี
              </h2>

              <p className="mt-1 text-xs text-emerald-900/50">
                ใช้ข้อมูลนี้สำหรับเข้าสู่ระบบ
              </p>

            </div>

            {/* Username */}
            <div>

              <label className="mb-2 block text-sm font-bold text-emerald-900/75">
                Username
              </label>

              <input
                type="text"
                name="txt_username"
                value={form.txt_username}
                onChange={handleChange}
                placeholder="username"
                disabled={loading}
                className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60"
              />

            </div>

            {/* Password */}
            <div className="mt-5">

              <label className="mb-2 block text-sm font-bold text-emerald-900/75">
                Password
              </label>

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="txt_password"
                  value={form.txt_password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  disabled={loading}
                  className="w-full rounded-xl border border-emerald-900/15 bg-emerald-50/50 px-4 py-3.5 pr-16 text-emerald-950 outline-none transition placeholder:text-emerald-900/30 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10 disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2.5 py-1.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  {showPassword
                    ? "ซ่อน"
                    : "แสดง"}
                </button>

              </div>

            </div>

            {/* Terms */}
            <div className="mt-7 rounded-xl border border-emerald-900/10 bg-emerald-50/70 p-4">

              <label className="flex cursor-pointer items-start gap-3">

                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-emerald-900/20 text-emerald-800 focus:ring-emerald-600"
                />

                <p className="text-xs leading-relaxed text-emerald-900/55">

                  ฉันยอมรับ{" "}

                  <span className="font-bold text-emerald-800">
                    เงื่อนไขการใช้งาน
                  </span>

                  {" "}และ{" "}

                  <span className="font-bold text-emerald-800">
                    นโยบายความเป็นส่วนตัว
                  </span>

                </p>

              </label>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-emerald-950 px-5 py-4 font-bold text-amber-300 shadow-[5px_5px_0px_#fcd34d] transition hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-[7px_7px_0px_#fcd34d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "กำลังสมัครสมาชิก..."
                : "สร้างบัญชี →"}
            </button>

          </form>

          {/* Footer */}
          <div className="border-t border-emerald-900/10 bg-emerald-50/40 px-6 py-6 text-center">

            <p className="text-sm text-emerald-900/60">

              มีบัญชีอยู่แล้ว?

              <button
                type="button"
                onClick={() =>
                  router.push("/pagelogin")
                }
                className="ml-1 font-bold text-emerald-800 underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-emerald-950"
              >
                เข้าสู่ระบบ →
              </button>

            </p>

          </div>

        </div>

        </div>

        <div className="mt-7 text-center">

          <p className="text-xs text-emerald-900/40">
            © {new Date().getFullYear()} MoMi Art Shop
          </p>

        </div>

      </div>
    </main>
  );
}