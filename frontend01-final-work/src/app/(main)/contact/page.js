
"use client";

import { useState } from "react";
import Link from "next/link";


export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject ||
      !form.message.trim()
    ) {
      alert("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    alert("ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อ MoMi Art SHOP");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  // ดาวตกแต่งหน้าเว็บ
  const stars = [
    { left: "4%", top: "12%", size: "text-2xl", delay: "0s" },
    { left: "12%", top: "32%", size: "text-lg", delay: "1s" },
    { left: "20%", top: "8%", size: "text-xl", delay: "2s" },
    { left: "28%", top: "46%", size: "text-2xl", delay: "0.5s" },
    { left: "38%", top: "18%", size: "text-lg", delay: "1.5s" },
    { left: "48%", top: "7%", size: "text-2xl", delay: "2.5s" },
    { left: "58%", top: "35%", size: "text-lg", delay: "0.8s" },
    { left: "68%", top: "14%", size: "text-xl", delay: "1.8s" },
    { left: "78%", top: "42%", size: "text-2xl", delay: "0.3s" },
    { left: "88%", top: "10%", size: "text-lg", delay: "2.2s" },
    { left: "94%", top: "55%", size: "text-xl", delay: "1.2s" },
    { left: "7%", top: "70%", size: "text-xl", delay: "2.8s" },
    { left: "18%", top: "88%", size: "text-2xl", delay: "1.1s" },
    { left: "35%", top: "78%", size: "text-lg", delay: "0.7s" },
    { left: "52%", top: "91%", size: "text-xl", delay: "1.7s" },
    { left: "72%", top: "76%", size: "text-2xl", delay: "2.1s" },
    { left: "85%", top: "90%", size: "text-lg", delay: "0.4s" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#dff5c8] px-4 pb-20 pt-32 transition-colors duration-300 dark:bg-[#102719]">

      {/* ================= STARS ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {stars.map((star, index) => (
          <span
            key={index}
            className={`absolute ${star.size} text-yellow-400 drop-shadow-[0_2px_3px_rgba(120,90,0,0.25)] animate-pulse`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          >
            ★
          </span>
        ))}

        {/* ดาวเล็กเพิ่มเติม */}
        <span className="absolute left-[30%] top-[25%] text-sm text-yellow-300 animate-bounce">
          ✦
        </span>
        <span className="absolute left-[62%] top-[20%] text-sm text-yellow-300 animate-pulse">
          ✦
        </span>
        <span className="absolute left-[90%] top-[30%] text-sm text-yellow-300 animate-bounce">
          ✦
        </span>
        <span className="absolute left-[45%] top-[60%] text-sm text-yellow-300 animate-pulse">
          ✦
        </span>
        <span className="absolute left-[10%] top-[55%] text-sm text-yellow-300 animate-bounce">
          ✦
        </span>
      </div>

      {/* ================= DECORATIVE CIRCLES ================= */}
      <div className="pointer-events-none absolute -left-20 top-40 h-56 w-56 rounded-full border-[25px] border-green-800/10" />
      <div className="pointer-events-none absolute -right-24 bottom-40 h-72 w-72 rounded-full border-[30px] border-green-900/10" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HERO ================= */}
        <section className="mb-14 text-center">

          <span className="mb-4 inline-block rounded-full border-2 border-green-900 bg-green-200 px-5 py-2 text-xs font-black tracking-widest text-green-900 shadow-md">
            CONTACT US ✦
          </span>

         
<h1 className="text-4xl font-bold tracking-tight text-green-900 md:text-6xl dark:text-white">
  ติดต่อเรา
</h1>

<div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-yellow-400" />

<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-green-900 md:text-lg dark:text-green-100">
  มีคำถามเกี่ยวกับสินค้า การสั่งซื้อ หรือบริการของเรา?
  <br />
  ทีมงาน <b className="text-green-950 dark:text-white">MoMi Art SHOP</b>{" "}
  พร้อมให้คำแนะนำและช่วยเหลือคุณ
</p>

</section>


        {/* ================= CONTACT INFO ================= */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Phone */}
          <div className="group rounded-[2rem] border-[3px] border-green-900 bg-[#efffdf] p-6 shadow-[8px_8px_0px_#14532d] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#14532d] dark:bg-[#193b25]">

            <div className="mb-4 flex h-14 w-14 rotate-[-5deg] items-center justify-center rounded-2xl border-2 border-green-900 bg-yellow-300 text-2xl shadow-[3px_3px_0px_#14532d] transition-transform group-hover:rotate-6">
              📞
            </div>

            <h3 className="font-black text-green-950 dark:text-green-100">
              โทรหาเรา
            </h3>

            <p className="mt-2 text-sm font-semibold text-green-800 dark:text-green-200">
              02-123-4567
            </p>

            <p className="mt-1 text-xs text-green-700/70 dark:text-green-300/70">
              จันทร์ - ศุกร์ 09:00 - 18:00
            </p>

          </div>

          {/* Email */}
          <div className="group rounded-[2rem] border-[3px] border-green-900 bg-[#efffdf] p-6 shadow-[8px_8px_0px_#14532d] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#14532d] dark:bg-[#193b25]">

            <div className="mb-4 flex h-14 w-14 rotate-[4deg] items-center justify-center rounded-2xl border-2 border-green-900 bg-yellow-300 text-2xl shadow-[3px_3px_0px_#14532d] transition-transform group-hover:rotate-[-6deg]">
              ✉️
            </div>

            <h3 className="font-black text-green-950 dark:text-green-100">
              อีเมล
            </h3>

            <p className="mt-2 text-sm font-semibold text-green-800 dark:text-green-200">
              support@momiartshop.com
            </p>

            <p className="mt-1 text-xs text-green-700/70 dark:text-green-300/70">
              เราจะตอบกลับโดยเร็วที่สุด
            </p>

          </div>

          {/* Address */}
          <div className="group rounded-[2rem] border-[3px] border-green-900 bg-[#efffdf] p-6 shadow-[8px_8px_0px_#14532d] transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_#14532d] dark:bg-[#193b25]">

            <div className="mb-4 flex h-14 w-14 rotate-[-4deg] items-center justify-center rounded-2xl border-2 border-green-900 bg-yellow-300 text-2xl shadow-[3px_3px_0px_#14532d] transition-transform group-hover:rotate-6">
              📍
            </div>

            <h3 className="font-black text-green-950 dark:text-green-100">
              ที่อยู่
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-green-800 dark:text-green-200">
              9 ถ.เวียงแก้ว ต.ศรีภูมิ
              <br />
              อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200
            </p>

          </div>

        </section>

        {/* ================= CONTACT FORM ================= */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* LEFT - MESSAGE */}
          <div className="rounded-[2.5rem] border-[3px] border-green-900 bg-[#f2ffe7] p-7 shadow-[10px_10px_0px_#14532d] md:p-9 dark:bg-[#183923]">

            <span className="text-sm font-black tracking-widest text-green-700 dark:text-green-300">
              GET IN TOUCH ✦
            </span>

            <h2 className="mt-2 text-3xl font-black text-green-950 dark:text-green-100">
              ส่งข้อความหาเรา
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-green-800/75 dark:text-green-200/75">
              หากคุณมีข้อสงสัยเกี่ยวกับสินค้า การสั่งซื้อ
              การจัดส่ง หรือพบปัญหาในการใช้งาน
              สามารถส่งข้อความหาเราได้ทันที
            </p>

            {/* Quote */}
            <div className="relative mt-8 overflow-hidden rounded-3xl border-2 border-green-900 bg-[#d4f3b8] p-6 dark:bg-[#245532]">

              <div className="absolute -right-4 -top-8 text-7xl text-yellow-400/60">
                ★
              </div>

              <p className="relative text-sm font-medium italic leading-relaxed text-green-950 dark:text-green-100">
                “เราเชื่อว่าการบริการที่ดีไม่ได้จบลงหลังจากการซื้อสินค้า
                แต่คือการดูแลลูกค้าในทุกขั้นตอน”
              </p>

              <p className="relative mt-3 text-xs font-black text-green-700 dark:text-green-300">
                — MoMi Art SHOP
              </p>

            </div>

            {/* Suggestion */}
            <div className="mt-7">

              <h3 className="font-black text-green-950 dark:text-green-100">
                สามารถติดต่อเราเรื่องอะไรได้บ้าง?
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-green-800 dark:text-green-200">

                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 font-black text-green-900">
                    ✓
                  </span>
                  สอบถามรายละเอียดสินค้า
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 font-black text-green-900">
                    ✓
                  </span>
                  สอบถามสถานะการสั่งซื้อ
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 font-black text-green-900">
                    ✓
                  </span>
                  แจ้งปัญหาการใช้งาน
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 font-black text-green-900">
                    ✓
                  </span>
                  แจ้งปัญหาการจัดส่ง
                </li>

                <li className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-300 font-black text-green-900">
                    ✓
                  </span>
                  ข้อเสนอแนะเกี่ยวกับเว็บไซต์
                </li>

              </ul>

            </div>

          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-[2.5rem] border-[3px] border-green-900 bg-[#f2ffe7] p-7 shadow-[10px_10px_0px_#14532d] md:p-9 dark:bg-[#183923]">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-black text-green-950 dark:text-green-100">
                  ชื่อ
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="กรอกชื่อของคุณ"
                  className="w-full rounded-2xl border-2 border-green-900 bg-[#e8f9d8] px-4 py-3 text-green-950 outline-none transition focus:-translate-y-0.5 focus:bg-white focus:ring-4 focus:ring-yellow-300/40 dark:bg-[#102c1b] dark:text-white dark:focus:bg-[#193b25]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-black text-green-950 dark:text-green-100">
                  อีเมล
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full rounded-2xl border-2 border-green-900 bg-[#e8f9d8] px-4 py-3 text-green-950 outline-none transition focus:-translate-y-0.5 focus:bg-white focus:ring-4 focus:ring-yellow-300/40 dark:bg-[#102c1b] dark:text-white dark:focus:bg-[#193b25]"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-black text-green-950 dark:text-green-100">
                  หัวข้อ
                </label>

                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border-2 border-green-900 bg-[#e8f9d8] px-4 py-3 text-green-950 outline-none transition focus:-translate-y-0.5 focus:bg-white focus:ring-4 focus:ring-yellow-300/40 dark:bg-[#102c1b] dark:text-white dark:focus:bg-[#193b25]"
                >
                  <option value="">เลือกหัวข้อ</option>
                  <option value="product">สอบถามสินค้า</option>
                  <option value="order">สอบถามการสั่งซื้อ</option>
                  <option value="delivery">สอบถามการจัดส่ง</option>
                  <option value="problem">แจ้งปัญหา</option>
                  <option value="suggestion">ข้อเสนอแนะ</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-black text-green-950 dark:text-green-100">
                  ข้อความ
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="เขียนข้อความของคุณ..."
                  className="w-full resize-none rounded-2xl border-2 border-green-900 bg-[#e8f9d8] px-4 py-3 text-green-950 outline-none transition focus:-translate-y-0.5 focus:bg-white focus:ring-4 focus:ring-yellow-300/40 dark:bg-[#102c1b] dark:text-white dark:focus:bg-[#193b25]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl border-2 border-green-950 bg-green-800 py-4 text-sm font-black text-white shadow-[5px_5px_0px_#facc15] transition-all hover:-translate-y-1 hover:bg-green-900 hover:shadow-[8px_8px_0px_#facc15] active:translate-y-0 active:shadow-[2px_2px_0px_#facc15]"
              >
                <span className="relative z-10">
                  ส่งข้อความ ★
                </span>

                <span className="absolute -right-3 -top-4 text-5xl text-yellow-300/30 transition-transform group-hover:rotate-12">
                  ★
                </span>
              </button>

            </form>

          </div>

        </section>

        {/* ================= BACK HOME ================= */}
        <div className="mt-14 text-center">

          <Link
            href="/"
            className="inline-flex items-center rounded-full border-[3px] border-green-900 bg-yellow-300 px-7 py-3 text-sm font-black text-green-950 shadow-[5px_5px_0px_#14532d] transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[7px_7px_0px_#14532d]"
          >
            ← กลับหน้าหลัก
          </Link>

        </div>

      </div>

      {/* ================= EXTRA ARTISTIC STARS ================= */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl tracking-[1.5rem] text-yellow-400/70">
        ★ ✦ ★
      </div>

    </main>
  );
}
