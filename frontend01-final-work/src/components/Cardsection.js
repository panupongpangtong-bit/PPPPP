"use client";

import Image from "next/image";

export default function Page() {
  // =========================================================
  // หิ่งห้อยจำนวนมาก
  // =========================================================

  const fireflies = [
    { top: "5%", left: "4%", size: "w-2 h-2", duration: "8s", delay: "0s" },
    { top: "12%", left: "12%", size: "w-2.5 h-2.5", duration: "11s", delay: "2s" },
    { top: "8%", left: "25%", size: "w-1.5 h-1.5", duration: "9s", delay: "4s" },
    { top: "18%", left: "38%", size: "w-2 h-2", duration: "13s", delay: "1s" },
    { top: "7%", left: "52%", size: "w-2.5 h-2.5", duration: "10s", delay: "3s" },
    { top: "15%", left: "67%", size: "w-2 h-2", duration: "12s", delay: "5s" },
    { top: "5%", left: "82%", size: "w-1.5 h-1.5", duration: "9s", delay: "2s" },
    { top: "22%", left: "94%", size: "w-2.5 h-2.5", duration: "14s", delay: "4s" },

    { top: "30%", left: "6%", size: "w-2 h-2", duration: "12s", delay: "1s" },
    { top: "38%", left: "16%", size: "w-2.5 h-2.5", duration: "10s", delay: "6s" },
    { top: "32%", left: "29%", size: "w-1.5 h-1.5", duration: "8s", delay: "3s" },
    { top: "45%", left: "41%", size: "w-2 h-2", duration: "13s", delay: "7s" },
    { top: "35%", left: "55%", size: "w-2.5 h-2.5", duration: "11s", delay: "2s" },
    { top: "42%", left: "70%", size: "w-2 h-2", duration: "15s", delay: "5s" },
    { top: "34%", left: "84%", size: "w-1.5 h-1.5", duration: "9s", delay: "1s" },
    { top: "48%", left: "96%", size: "w-2.5 h-2.5", duration: "12s", delay: "4s" },

    { top: "55%", left: "4%", size: "w-2.5 h-2.5", duration: "14s", delay: "3s" },
    { top: "63%", left: "14%", size: "w-2 h-2", duration: "10s", delay: "5s" },
    { top: "58%", left: "27%", size: "w-1.5 h-1.5", duration: "9s", delay: "0s" },
    { top: "70%", left: "39%", size: "w-2.5 h-2.5", duration: "13s", delay: "6s" },
    { top: "61%", left: "53%", size: "w-2 h-2", duration: "11s", delay: "2s" },
    { top: "73%", left: "66%", size: "w-2.5 h-2.5", duration: "15s", delay: "4s" },
    { top: "60%", left: "80%", size: "w-2 h-2", duration: "8s", delay: "7s" },
    { top: "76%", left: "93%", size: "w-1.5 h-1.5", duration: "12s", delay: "1s" },

    { top: "82%", left: "7%", size: "w-2 h-2", duration: "11s", delay: "3s" },
    { top: "90%", left: "19%", size: "w-2.5 h-2.5", duration: "14s", delay: "5s" },
    { top: "84%", left: "32%", size: "w-1.5 h-1.5", duration: "9s", delay: "2s" },
    { top: "94%", left: "46%", size: "w-2 h-2", duration: "13s", delay: "6s" },
    { top: "86%", left: "59%", size: "w-2.5 h-2.5", duration: "10s", delay: "0s" },
    { top: "93%", left: "72%", size: "w-2 h-2", duration: "12s", delay: "4s" },
    { top: "81%", left: "85%", size: "w-1.5 h-1.5", duration: "8s", delay: "7s" },
    { top: "95%", left: "97%", size: "w-2.5 h-2.5", duration: "15s", delay: "2s" },

    { top: "25%", left: "20%", size: "w-1.5 h-1.5", duration: "10s", delay: "8s" },
    { top: "52%", left: "23%", size: "w-2 h-2", duration: "14s", delay: "9s" },
    { top: "20%", left: "74%", size: "w-2.5 h-2.5", duration: "12s", delay: "6s" },
    { top: "50%", left: "88%", size: "w-1.5 h-1.5", duration: "9s", delay: "10s" },
    { top: "68%", left: "48%", size: "w-2 h-2", duration: "13s", delay: "8s" },
    { top: "78%", left: "57%", size: "w-2.5 h-2.5", duration: "11s", delay: "9s" },
    { top: "42%", left: "8%", size: "w-1.5 h-1.5", duration: "8s", delay: "11s" },
    { top: "72%", left: "90%", size: "w-2 h-2", duration: "14s", delay: "7s" },
  ];

  // =========================================================
  // PRODUCTS
  // =========================================================

  const products = [
    {
      image:
        "https://i.pinimg.com/736x/77/be/ed/77beed2f77d4efab9e0b7c8957b57bea.jpg",
      name: "ภาพคลื่นทะเล",
      description:
        "สีน้ำ ขนาด 40x60 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿1,200",
    },
    {
      image:
        "https://i.pinimg.com/1200x/97/cf/55/97cf556fc899b3d7a2abf8acd80cd3b1.jpg",
      name: "ภาพวิวธรรมชาติ",
      description:
        "สีน้ำ ขนาด 40x60 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿1,500",
    },
    {
      image:
        "https://i.pinimg.com/736x/df/c2/cd/dfc2cd03b8ef7c997c5258d856f28419.jpg",
      name: "ภาพป่าลึกลับ",
      description:
        "สีน้ำ ขนาด 40x60 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿1,000",
    },
    {
      image:
        "https://i.pinimg.com/736x/78/c4/ff/78c4ffd8a597f6ed8cd76bd1cd3cdb85.jpg",
      name: "ภาพปลาทอง",
      description:
        "สีน้ำ ขนาด 40x60 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿1,200",
    },
    {
      image:
        "https://i.pinimg.com/736x/95/77/b2/9577b2c294bca1f44b70b9ee6805ff7a.jpg",
      name: "ภาพฝูงเป็ด",
      description:
        "สีน้ำ ขนาด 70x90 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿4,900",
    },
    {
      image:
        "https://i.pinimg.com/1200x/19/fd/e0/19fde013b6d8d7b7179766588a6dcf29.jpg",
      name: "ภาพคนพายเรืออยู่ในแม่น้ำที่มีดอกบัว",
      description:
        "สีน้ำ ขนาด 60x80 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿2,990",
    },
    {
      image:
        "https://i.pinimg.com/1200x/a0/61/28/a0612898601cc250d5ec0d6978dc1e44.jpg",
      name: "ลูกไก่ในทุ่งหญ้า",
      description:
        "สีน้ำ ขนาด 40x60 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿1,500",
    },
    {
      image:
        "https://i.pinimg.com/736x/73/a3/bb/73a3bb9f9c784ded4d13f5ee3572b2ef.jpg",
      name: "ลูกวัวในถัง",
      description:
        "โลเดอร์ ขนาด 50x70 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿2,500",
    },
    {
      image:
        "https://i.pinimg.com/736x/9f/bf/9d/9fbf9d662f6df221b38327b972824f95.jpg",
      name: "ภาพดอกไม้ในแจกัน",
      description:
        "สีน้ำ ขนาด 40x60 เหมาะสำหรับตกแต่งบ้านหรือสำนักงาน เพิ่มความสดใสให้ห้องของคุณ",
      price: "฿1,990",
    },
  ];

  return (
    <main className="min-h-screen">
      <section
        className="
          relative overflow-hidden
          bg-gradient-to-br
          from-[#e4f1e7]
          via-[#f1f8f2]
          to-[#d8eadc]

          py-16

          transition-colors duration-500

          dark:from-[#07150d]
          dark:via-[#0b2115]
          dark:to-[#051109]
        "
      >
        {/* =====================================================
            FIREFLIES
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {fireflies.map((fly, index) => (
            <div
              key={index}
              className={`
                firefly
                absolute
                rounded-full

                bg-emerald-400
                dark:bg-yellow-200

                blur-[1px]

                shadow-[0_0_8px_rgba(52,211,153,0.9)]
                dark:shadow-[0_0_12px_rgba(253,230,138,1)]

                ${fly.size}
              `}
              style={{
                top: fly.top,
                left: fly.left,
                animationDuration: fly.duration,
                animationDelay: fly.delay,
              }}
            />
          ))}
        </div>

        {/* =====================================================
            AMBIENT GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute -left-40 -top-40
            h-[500px] w-[500px]
            rounded-full
            bg-emerald-300/30
            blur-3xl

            dark:bg-emerald-700/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-40 -right-40
            h-[500px] w-[500px]
            rounded-full
            bg-teal-300/30
            blur-3xl

            dark:bg-teal-800/10
          "
        />

        <div
          className="
            pointer-events-none
            absolute left-[40%] top-[35%]
            h-80 w-80
            rounded-full
            bg-yellow-200/10
            blur-3xl
          "
        />

        {/* =====================================================
            DECORATIVE STARS
        ====================================================== */}

        <div className="pointer-events-none absolute left-[7%] top-[12%] z-10 text-2xl text-yellow-400 opacity-70">
          ✦
        </div>

        <div className="pointer-events-none absolute left-[18%] top-[60%] z-10 text-lg text-yellow-400 opacity-60">
          ✧
        </div>

        <div className="pointer-events-none absolute right-[12%] top-[20%] z-10 text-3xl text-yellow-400 opacity-70">
          ✦
        </div>

        <div className="pointer-events-none absolute right-[8%] bottom-[18%] z-10 text-xl text-yellow-400 opacity-60">
          ✧
        </div>

        <div className="pointer-events-none absolute left-[50%] bottom-[8%] z-10 text-2xl text-yellow-400 opacity-50">
          ✦
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="mb-12 text-center">

            <span
              className="
                mb-4 inline-flex
                items-center gap-2

                rounded-full

                border-2 border-green-900
                bg-green-100/80

                px-5 py-2

                text-xs font-semibold
                tracking-[0.2em]

                text-green-950

                shadow-[4px_4px_0px_rgba(20,83,45,0.25)]

                backdrop-blur-md

                dark:border-green-400
                dark:bg-green-950/70
                dark:text-green-100
              "
            >
              <span className="text-yellow-400">✦</span>
              FEATURED PRODUCTS
              <span className="text-yellow-400">✦</span>
            </span>

            <h2
              className="
                text-4xl
                font-black
                tracking-wide

                text-green-950

                md:text-5xl

                dark:text-white
              "
            >
              สินค้าแนะนำ
            </h2>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <span className="h-1 w-10 rounded-full bg-green-900" />
              <span className="h-2 w-2 rotate-45 bg-yellow-400" />
              <span className="h-1 w-20 rounded-full bg-green-900" />
              <span className="h-2 w-2 rotate-45 bg-yellow-400" />
              <span className="h-1 w-10 rounded-full bg-green-900" />
            </div>

            <p
              className="
                mx-auto mt-5
                max-w-xl

                text-sm
                leading-relaxed

                text-green-900/80

                dark:text-green-100/80
              "
            >
              เลือกชมสินค้าที่น่าสนใจของเรา
              และค้นพบผลงานศิลปะที่เหมาะกับพื้นที่ของคุณ
            </p>
          </div>

          {/* =====================================================
              PRODUCT GRID
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-8

              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="
                  product-card
                  group
                  relative
                  overflow-hidden

                  rounded-[1.7rem]

                  border-[3px]
                  border-green-900

                  bg-white/90

                  shadow-[7px_7px_0px_rgba(20,83,45,0.3)]

                  backdrop-blur-sm

                  transition-all duration-500

                  hover:-translate-y-3

                  hover:border-green-950

                  hover:shadow-[11px_11px_0px_rgba(20,83,45,0.45)]

                  dark:border-green-500
                  dark:bg-[#10251b]/95

                  dark:shadow-[7px_7px_0px_rgba(34,197,94,0.15)]

                  dark:hover:border-green-300
                "
              >

                {/* =================================================
                    INNER FRAME
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-2
                    z-20

                    rounded-[1.35rem]

                    border
                    border-green-900/20

                    transition-all duration-500

                    group-hover:inset-3
                    group-hover:border-green-900/50

                    dark:border-green-300/10
                    dark:group-hover:border-green-300/30
                  "
                />

                {/* =================================================
                    DECORATIVE CORNER
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute right-0 top-0
                    z-20

                    h-20 w-20

                    rounded-bl-[4rem]

                    border-b-2
                    border-l-2

                    border-yellow-400/40
                  "
                />

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div
                  className="
                    relative
                    h-60
                    w-full
                    overflow-hidden

                    bg-green-50

                    dark:bg-[#07130d]
                  "
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    className="
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-110
                    "
                  />

                  {/* Image Overlay */}

                  <div
                    className="
                      absolute inset-0

                      bg-gradient-to-t
                      from-green-950/30
                      via-transparent
                      to-transparent

                      opacity-60

                      transition-opacity duration-500

                      group-hover:opacity-80
                    "
                  />

                  {/* Recommended Badge */}

                  <div
                    className="
                      absolute left-4 top-4

                      rounded-full

                      border-2
                      border-green-900

                      bg-green-50/95

                      px-4 py-1.5

                      text-xs
                      font-bold

                      text-green-900

                      shadow-[3px_3px_0px_rgba(20,83,45,0.25)]

                      backdrop-blur-sm

                      dark:border-green-300
                      dark:bg-green-950/90
                      dark:text-green-100
                    "
                  >
                    ✦ แนะนำ
                  </div>
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="relative p-6">

                  {/* Decorative Dot */}

                  <div
                    className="
                      absolute
                      right-6
                      top-6

                      h-2.5
                      w-2.5

                      rounded-full

                      bg-yellow-400

                      shadow-[0_0_12px_rgba(250,204,21,0.8)]

                      transition-transform duration-500

                      group-hover:scale-150
                    "
                  />

                  <h3
                    className="
                      line-clamp-1

                      pr-5

                      text-xl
                      font-black

                      text-green-950

                      dark:text-white
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      min-h-[44px]

                      line-clamp-2

                      text-sm
                      leading-relaxed

                      text-green-900/75

                      dark:text-green-100/75
                    "
                  >
                    {product.description}
                  </p>

                  {/* Divider */}

                  <div
                    className="
                      mt-5
                      h-1
                      w-12

                      rounded-full

                      bg-yellow-400

                      transition-all duration-500

                      group-hover:w-20
                    "
                  />

                  {/* Price + Button */}

                  <div className="mt-5 flex items-end justify-between gap-3">

                    <div>
                      <p
                        className="
                          text-xs
                          font-medium

                          text-green-900/50

                          dark:text-green-300/60
                        "
                      >
                        ราคา
                      </p>

                      <span
                        className="
                          text-2xl
                          font-black

                          text-green-800

                          dark:text-green-300
                        "
                      >
                        {product.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="
                        rounded-full

                        border-2
                        border-green-950

                        bg-green-800

                        px-5 py-2.5

                        text-xs
                        font-bold
                        tracking-wide

                        text-white

                        shadow-[4px_4px_0px_rgba(20,83,45,0.35)]

                        transition-all duration-300

                        hover:-translate-y-1
                        hover:bg-green-950

                        hover:shadow-[6px_6px_0px_rgba(20,83,45,0.4)]

                        dark:border-green-300
                        dark:bg-green-700
                        dark:hover:bg-green-600
                      "
                    >
                      เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =====================================================
              VIEW ALL
          ====================================================== */}

          <div className="mt-14 text-center">

            <button
              type="button"
              className="
                rounded-full

                border-[3px]
                border-green-900

                bg-white/90

                px-9 py-3.5

                text-sm
                font-bold
                tracking-wide

                text-green-950

                shadow-[5px_5px_0px_rgba(20,83,45,0.3)]

                backdrop-blur-sm

                transition-all duration-300

                hover:-translate-y-1

                hover:bg-green-800
                hover:text-white

                hover:shadow-[7px_7px_0px_rgba(20,83,45,0.4)]

                dark:border-green-400
                dark:bg-[#10251b]
                dark:text-green-100

                dark:hover:bg-green-700
              "
            >
              ดูสินค้าทั้งหมด →
            </button>
          </div>

          {/* =====================================================
              VIDEO REVIEW
          ====================================================== */}

          <div className="hidden">

            {/* Video Header */}

            <div className="mb-10 text-center">

              <span
                className="
                  mb-4 inline-flex
                  items-center gap-2

                  rounded-full

                  border-2
                  border-green-900

                  bg-green-100/80

                  px-5 py-2

                  text-xs
                  font-bold
                  tracking-[0.2em]

                  text-green-950

                  shadow-[4px_4px_0px_rgba(20,83,45,0.2)]

                  dark:border-green-400
                  dark:bg-green-950/70
                  dark:text-green-100
                "
              >
                🎥 VIDEO REVIEW
              </span>

              <h2
                className="
                  text-3xl
                  font-black
                  tracking-wide

                  text-green-950

                  md:text-4xl

                  dark:text-white
                "
              >
                รีวิวสินค้าจากเรา
              </h2>

              <div className="mx-auto mt-5 flex justify-center gap-2">
                <span className="h-1 w-8 rounded-full bg-green-900" />
                <span className="h-2 w-2 rotate-45 bg-yellow-400" />
                <span className="h-1 w-14 rounded-full bg-green-900" />
                <span className="h-2 w-2 rotate-45 bg-yellow-400" />
                <span className="h-1 w-8 rounded-full bg-green-900" />
              </div>

              <p
                className="
                  mt-4

                  text-sm

                  text-green-900/75

                  dark:text-green-100/75
                "
              >
                ดูรายละเอียดและการใช้งานสินค้าก่อนตัดสินใจซื้อ
              </p>
            </div>

            {/* =================================================
                VIDEO FRAME
            ================================================== */}

            <div
              className="
                relative

                mx-auto
                max-w-5xl

                overflow-hidden

                rounded-[2rem]

                border-[4px]
                border-green-900

                bg-white/90

                p-3

                shadow-[9px_9px_0px_rgba(20,83,45,0.35)]

                backdrop-blur-sm

                dark:border-green-500
                dark:bg-[#10251b]/95

                dark:shadow-[9px_9px_0px_rgba(34,197,94,0.15)]
              "
            >

              {/* Inner Frame */}

              <div
                className="
                  pointer-events-none
                  absolute inset-2
                  z-20

                  rounded-[1.6rem]

                  border
                  border-green-900/20

                  dark:border-green-300/10
                "
              />

              <div
                className="
                  relative
                  aspect-video

                  overflow-hidden

                  rounded-[1.4rem]

                  border-2
                  border-green-800

                  bg-black

                  dark:border-green-400
                "
              >
                <iframe
                  className="absolute inset-0 h-full w-full"
                  title="รีวิวสินค้า MoMi Art SHOP"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* =================================================
                VIDEO DESCRIPTION
            ================================================== */}

            <div className="mx-auto mt-8 max-w-3xl text-center">

              <h3
                className="
                  text-2xl
                  font-black

                  text-green-950

                  dark:text-white
                "
              >
                รีวิวสินค้าแบบเจาะลึก
              </h3>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-400" />

              <p
                className="
                  mt-4

                  text-sm
                  leading-relaxed

                  text-green-900/75

                  dark:text-green-100/75
                "
              >
                ทดลองใช้งานจริง พร้อมแนะนำจุดเด่นและรายละเอียดต่าง ๆ
                เพื่อช่วยให้คุณเลือกสินค้าที่เหมาะกับการใช้งานมากที่สุด
              </p>
            </div>
          </div>

          {/* =====================================================
              BOTTOM DECORATION
          ====================================================== */}

          <div className="mt-20 flex items-center justify-center gap-3">

            <span className="h-px w-20 bg-green-800/30 dark:bg-green-300/20" />

            <span className="text-xl text-yellow-400">✦</span>

            <span className="h-2 w-2 rounded-full bg-green-800 dark:bg-green-400" />

            <span className="text-xl text-yellow-400">✦</span>

            <span className="h-px w-20 bg-green-800/30 dark:bg-green-300/20" />

          </div>
        </div>

        {/* =====================================================
            ANIMATION
        ====================================================== */}

        <style>{`
          .firefly {
            opacity: 0.25;
            animation-name: fireflyMove;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @keyframes fireflyMove {
            0% {
              transform: translate3d(0, 0, 0) scale(0.7);
              opacity: 0.15;
            }

            20% {
              transform: translate3d(25px, -20px, 0) scale(1);
              opacity: 0.8;
            }

            40% {
              transform: translate3d(-20px, -35px, 0) scale(0.75);
              opacity: 0.3;
            }

            60% {
              transform: translate3d(35px, 15px, 0) scale(1.15);
              opacity: 0.9;
            }

            80% {
              transform: translate3d(-30px, 25px, 0) scale(0.8);
              opacity: 0.4;
            }

            100% {
              transform: translate3d(0, 0, 0) scale(0.7);
              opacity: 0.15;
            }
          }

          .product-card {
            isolation: isolate;
          }

          @media (prefers-reduced-motion: reduce) {
            .firefly {
              animation: none;
            }
          }
        `}</style>
      </section>
    </main>
  );
}
