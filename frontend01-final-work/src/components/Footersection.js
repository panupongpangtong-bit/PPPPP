"use client";

import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Footersection() {
  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-green-200
        bg-gradient-to-br from-green-50 via-emerald-50 to-green-100
        py-14
        text-green-900
        transition-all duration-500
        dark:border-green-900
        dark:bg-gradient-to-br dark:from-[#071a12] dark:via-[#0b2418] dark:to-[#05130d]
        dark:text-green-100
      "
    >

      {/* ================= ART LINE BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* วงกลมศิลปะ */}
        <div
          className="
            absolute -right-24 -top-24
            h-72 w-72 rounded-full
            border-[2px] border-green-300/40
            dark:border-green-500/10
          "
        />

        <div
          className="
            absolute -right-10 -top-10
            h-44 w-44 rounded-full
            border border-green-400/30
            dark:border-green-400/10
          "
        />

        <div
          className="
            absolute -bottom-32 -left-20
            h-80 w-80 rounded-full
            border-[2px] border-emerald-300/30
            dark:border-emerald-500/10
          "
        />

        {/* Art Line */}
        <svg
          className="
            absolute left-0 top-0
            h-full w-full
            opacity-40
            dark:opacity-20
          "
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M-50 350
              C120 200, 180 430, 350 280
              C500 150, 560 380, 720 220
              C850 90, 950 250, 1250 80
            "
            stroke="currentColor"
            strokeWidth="2"
          />

          <path
            d="
              M-50 390
              C150 260, 210 470, 390 320
              C540 190, 620 410, 780 260
              C930 120, 1030 300, 1250 120
            "
            stroke="currentColor"
            strokeWidth="1"
          />

          <circle cx="180" cy="100" r="4" fill="currentColor" />
          <circle cx="840" cy="90" r="5" fill="currentColor" />
          <circle cx="1030" cy="390" r="4" fill="currentColor" />
        </svg>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* ================= SHOP ================= */}

          <div>

            {/* Logo */}
            <div className="mb-5 flex items-center gap-3">

              <div
                className="
                  relative flex h-12 w-12
                  items-center justify-center
                  overflow-hidden rounded-2xl
                  bg-gradient-to-br
                  from-green-400
                  via-emerald-500
                  to-green-700
                  text-sm font-black
                  text-white
                  shadow-lg
                  shadow-green-700/20
                "
              >
                {/* เส้นศิลปะใน Logo */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-30"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <path
                    d="M5 35C15 15 25 45 45 15"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                <span className="relative">PP</span>
              </div>

              <div>

                <h2
                  className="
                    text-xl font-black
                    text-green-950
                    dark:text-white
                  "
                >
                  MoMi Art SHOP
                </h2>

                <p
                  className="
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-green-600
                    dark:text-green-400
                  "
                >
                  E-Commerce & Art Gallery
                </p>

              </div>
            </div>


            <p
              className="
                max-w-md
                text-sm
                leading-relaxed
                text-green-800/70
                dark:text-green-200/60
              "
            >
              แหล่งรวมภาพวาดต่างๆ ตามสไตล์ที่คุณชื่นชอบ
              สำหรับคนรักในศิลปะและชอบตกแต่งห้องอย่างมีสไตล์
            </p>


            {/* Highlight */}

            <div
              className="
                relative mt-6 overflow-hidden
                rounded-2xl
                border border-green-200
                bg-white/60
                px-5 py-4
                shadow-sm
                backdrop-blur-sm
                dark:border-green-800
                dark:bg-green-900/20
              "
            >

              {/* Art Line */}
              <div
                className="
                  absolute right-0 top-0
                  h-full w-24
                  opacity-20
                "
              >
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                  fill="none"
                >
                  <path
                    d="M0 80C30 30 50 90 100 20"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-green-600"
                  />
                </svg>
              </div>

              <p
                className="
                  relative
                  text-sm font-semibold
                  text-green-700
                  dark:text-green-400
                "
              >
                ✦ สินค้าคุณภาพ ราคาดี ส่งไว
              </p>

            </div>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3
              className="
                mb-5
                text-lg font-bold
                text-green-950
                dark:text-white
              "
            >
              เมนูลัด
            </h3>

            <ul className="space-y-3 text-sm">

              {[
                ["/", "หน้าแรก"],
                ["/products", "สินค้าทั้งหมด"],
                ["/promotion", "โปรโมชั่น"],
                ["/review", "บทความ / รีวิว"],
                ["/about", "เกี่ยวกับเรา"],
                ["/contact", "ติดต่อเรา"],
              ].map(([href, label]) => (

                <li key={href}>

                  <Link
                    href={href}
                    className="
                      group flex items-center gap-2
                      text-green-800/70
                      transition-all duration-300
                      hover:translate-x-2
                      hover:text-green-600
                      dark:text-green-200/60
                      dark:hover:text-green-400
                    "
                  >

                    <span
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-green-400
                        transition-all
                        group-hover:w-4
                      "
                    />

                    {label}

                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3
              className="
                mb-5
                text-lg font-bold
                text-green-950
                dark:text-white
              "
            >
              ติดต่อเรา
            </h3>


            <ul className="space-y-4 text-sm">

              <li className="flex items-start gap-3">

                <span
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-green-100
                    text-green-700
                    shadow-sm
                    dark:bg-green-900/30
                    dark:text-green-400
                  "
                >
                  📍
                </span>

                <span
                  className="
                    leading-relaxed
                    text-green-800/70
                    dark:text-green-200/60
                  "
                >
                  9 ถ.เวียงแก้ว ต.ศรีภูมิ
                  <br />
                  อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200
                </span>

              </li>


              <li className="flex items-center gap-3">

                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-xl
                    bg-green-100
                    text-green-700
                    shadow-sm
                    dark:bg-green-900/30
                    dark:text-green-400
                  "
                >
                  📞
                </span>

                <span className="text-green-800/70 dark:text-green-200/60">
                  02-123-4567
                </span>

              </li>


              <li className="flex items-center gap-3">

                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-xl
                    bg-green-100
                    text-green-700
                    shadow-sm
                    dark:bg-green-900/30
                    dark:text-green-400
                  "
                >
                  ✉️
                </span>

                <span className="text-green-800/70 dark:text-green-200/60">
                  support@nextshop.com
                </span>

              </li>


              <li
                className="
                  text-xs
                  text-green-600/70
                  dark:text-green-300/50
                "
              >
                จันทร์ - ศุกร์ 09:00 - 18:00 น.
              </li>

            </ul>


            {/* ================= SOCIAL ================= */}

            <div className="mt-6">

              <p
                className="
                  mb-3
                  text-sm font-semibold
                  text-green-950
                  dark:text-white
                "
              >
                ติดตามเรา
              </p>


              <div className="flex gap-3">

                {[
                  ["FB", "Facebook"],
                  ["TW", "Twitter"],
                  ["IG", "Instagram"],
                ].map(([short, name]) => (

                  <a
                    key={name}
                    href="#"
                    aria-label={name}
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-green-200
                      bg-white/70
                      text-xs font-bold
                      text-green-700
                      shadow-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:scale-105
                      hover:bg-green-600
                      hover:text-white
                      hover:shadow-lg
                      hover:shadow-green-600/20
                      dark:border-green-800
                      dark:bg-green-900/20
                      dark:text-green-300
                      dark:hover:bg-green-500
                      dark:hover:text-white
                    "
                  >
                    {short}
                  </a>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* ================= DARK MODE ================= */}

        <div
          className="
            relative mt-10
            flex items-center justify-center gap-3
            rounded-2xl
            border border-green-200
            bg-white/50
            px-5 py-3
            shadow-sm
            backdrop-blur-sm
            dark:border-green-800
            dark:bg-green-900/20
          "
        >

          <span
            className="
              text-sm font-medium
              text-green-800
              dark:text-green-200
            "
          >
            🌙 โหมดการแสดงผล
          </span>

          <DarkModeToggle />

        </div>


        {/* ================= DIVIDER ================= */}

        <div
          className="
            mt-10
            border-t
            border-green-200
            pt-7
            dark:border-green-900
          "
        >

          <div
            className="
              flex flex-col
              items-center
              justify-between
              gap-4
              md:flex-row
            "
          >

            <p
              className="
                text-sm
                text-green-600/60
                dark:text-green-300/40
              "
            >
              © {new Date().getFullYear()} PP SHOP. All rights reserved.
            </p>


            <div className="flex gap-5 text-sm">

              <Link
                href="/privacy"
                className="
                  text-green-600/60
                  transition-colors
                  hover:text-green-600
                  dark:text-green-300/40
                  dark:hover:text-green-400
                "
              >
                นโยบายความเป็นส่วนตัว
              </Link>

              <Link
                href="/terms"
                className="
                  text-green-600/60
                  transition-colors
                  hover:text-green-600
                  dark:text-green-300/40
                  dark:hover:text-green-400
                "
              >
                เงื่อนไขการใช้งาน
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}