"use client";

import Link from "next/link";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function AboutPage() {
  return (
    <main
      className="
        relative min-h-screen overflow-hidden
        bg-gradient-to-br from-green-50 via-white to-sky-50
        px-4 pb-20 pt-32
        transition-colors duration-300
        dark:from-[#071a12]
        dark:via-[#0b2419]
        dark:to-[#071827]
      "
    >

      {/* ================================================= */}
      {/* FLOATING LEAVES */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="leaf leaf-1">🍃</div>
        <div className="leaf leaf-2">🌿</div>
        <div className="leaf leaf-3">🍃</div>
        <div className="leaf leaf-4">🌱</div>
        <div className="leaf leaf-5">🍃</div>
        <div className="leaf leaf-6">🌿</div>

      </div>


      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="mb-20 text-center">

          <span
            className="
              mb-4 inline-block rounded-full
              border border-green-200
              bg-green-100/80
              px-5 py-2
              text-xs font-semibold
              tracking-wider text-green-700
              shadow-sm
              dark:border-green-800
              dark:bg-green-900/30
              dark:text-green-300
            "
          >
            ABOUT MoMi ART SHOP
          </span>

          <h1
            className="
              text-4xl font-bold tracking-tight
              text-green-950
              dark:text-white
              md:text-5xl
            "
          >
            เกี่ยวกับเรา
          </h1>

          <p
            className="
              mx-auto mt-5 max-w-3xl
              text-base leading-relaxed
              text-gray-600
              dark:text-gray-300
              md:text-lg
            "
          >
            MoMi ART SHOP คือร้านค้าออนไลน์สำหรับคนรักงานศิลปะ
            ที่รวบรวมภาพวาดคุณภาพดีและผลงานสร้างสรรค์
            หลากหลายสไตล์ เพื่อให้คุณสามารถเลือกภาพที่ชื่นชอบ
            และนำไปตกแต่งบ้าน ห้องทำงาน หรือพื้นที่พิเศษของคุณ
            ให้มีความสวยงามและมีเอกลักษณ์มากยิ่งขึ้น
          </p>

        </section>


        {/* ================================================= */}
        {/* INTRO / OUR STORY */}
        {/* ================================================= */}

        <section
          className="
            mb-20 grid grid-cols-1
            items-center gap-10
            lg:grid-cols-2
          "
        >

          {/* LEFT */}

          <div>

            <span
              className="
                text-sm font-semibold
                tracking-wider
                text-green-600
                dark:text-green-400
              "
            >
              OUR STORY
            </span>

            <h2
              className="
                mt-3 text-3xl font-bold
                leading-tight
                text-green-950
                dark:text-white
              "
            >
              เพราะภาพวาดหนึ่งภาพ
              <br />
              สามารถเปลี่ยนบรรยากาศของพื้นที่ได้
            </h2>

            <p
              className="
                mt-5 leading-relaxed
                text-gray-600
                dark:text-gray-300
              "
            >
              เราเชื่อว่างานศิลปะไม่ได้เป็นเพียงสิ่งที่ใช้ตกแต่ง
              แต่ยังสามารถสะท้อนตัวตน ความรู้สึก และรสนิยม
              ของผู้ที่เลือกผลงานนั้นได้
            </p>

            <p
              className="
                mt-4 leading-relaxed
                text-gray-600
                dark:text-gray-300
              "
            >
              MoMi ART SHOP จึงตั้งใจคัดสรรภาพวาดที่มีคุณภาพ
              มีความสร้างสรรค์ และมีเอกลักษณ์หลากหลายแนว
              เพื่อให้ทุกคนสามารถค้นหาผลงานที่เข้ากับพื้นที่
              และความชอบของตัวเองได้ง่ายยิ่งขึ้น
            </p>

          </div>


          {/* RIGHT ART CARD */}

          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              bg-gradient-to-br
              from-green-300
              via-emerald-400
              to-sky-400
              p-8
              shadow-2xl
              shadow-green-500/20
            "
          >

            {/* Decorative circles */}

            <div
              className="
                absolute -right-20 -top-20
                h-60 w-60 rounded-full
                border-[2px] border-white/30
              "
            />

            <div
              className="
                absolute -bottom-24 -left-20
                h-64 w-64 rounded-full
                border-[2px] border-white/20
              "
            />

            {/* Art line */}

            <svg
              className="
                absolute inset-0
                h-full w-full
                opacity-30
              "
              viewBox="0 0 500 400"
              fill="none"
            >
              <path
                d="
                  M-20 300
                  C100 150 140 360 260 210
                  C350 100 390 250 520 100
                "
                stroke="white"
                strokeWidth="3"
              />

              <path
                d="
                  M-20 330
                  C100 190 160 390 280 240
                  C370 130 410 280 520 130
                "
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>


            <div className="relative">

              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-white/20
                  text-2xl
                  backdrop-blur
                "
              >
                🎨
              </div>

              <h3
                className="
                  mt-8 text-3xl font-bold
                  text-white
                "
              >
                MoMi ART SHOP
              </h3>

              <p
                className="
                  mt-4 leading-relaxed
                  text-white/90
                "
              >
                Art that brings your space to life.
                <br />
                เติมสีสันและเรื่องราวให้กับพื้นที่ของคุณ
              </p>

            </div>

          </div>

        </section>


        {/* ================================================= */}
        {/* VALUES */}
        {/* ================================================= */}

        <section className="mb-20">

          <div className="mb-10 text-center">

            <span
              className="
                text-sm font-semibold
                tracking-wider
                text-green-600
                dark:text-green-400
              "
            >
              OUR VALUES
            </span>

            <h2
              className="
                mt-2 text-3xl font-bold
                text-green-950
                dark:text-white
              "
            >
              สิ่งที่เราให้ความสำคัญ
            </h2>

            <p
              className="
                mt-3 text-gray-600
                dark:text-gray-300
              "
            >
              เราตั้งใจนำเสนอศิลปะที่มีคุณภาพและสร้างแรงบันดาลใจ
            </p>

          </div>


          <div
            className="
              grid grid-cols-1
              gap-6
              md:grid-cols-3
            "
          >

            {/* CARD 1 */}

            <div
              className="
                group rounded-3xl
                border border-green-100
                bg-white/80
                p-7
                shadow-sm
                backdrop-blur
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-green-500/10
                dark:border-green-900
                dark:bg-[#10251b]/80
              "
            >

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-green-100
                  text-2xl
                  transition
                  group-hover:scale-110
                  dark:bg-green-900/40
                "
              >
                🎨
              </div>

              <h3
                className="
                  mt-5 text-lg font-semibold
                  text-green-950
                  dark:text-white
                "
              >
                คุณภาพของผลงาน
              </h3>

              <p
                className="
                  mt-3 text-sm leading-relaxed
                  text-gray-500
                  dark:text-gray-300
                "
              >
                คัดสรรภาพวาดที่มีคุณภาพ
                พร้อมใส่ใจรายละเอียดของผลงาน
                เพื่อให้เหมาะสำหรับการนำไปตกแต่ง
              </p>

            </div>


            {/* CARD 2 */}

            <div
              className="
                group rounded-3xl
                border border-sky-100
                bg-white/80
                p-7
                shadow-sm
                backdrop-blur
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-sky-500/10
                dark:border-sky-900
                dark:bg-[#10221f]/80
              "
            >

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-sky-100
                  text-2xl
                  transition
                  group-hover:scale-110
                  dark:bg-sky-900/30
                "
              >
                ✨
              </div>

              <h3
                className="
                  mt-5 text-lg font-semibold
                  text-green-950
                  dark:text-white
                "
              >
                ความสร้างสรรค์
              </h3>

              <p
                className="
                  mt-3 text-sm leading-relaxed
                  text-gray-500
                  dark:text-gray-300
                "
              >
                รวบรวมผลงานที่มีความโดดเด่น
                มีเอกลักษณ์ และสามารถสร้างแรงบันดาลใจ
                ให้กับผู้ชมได้
              </p>

            </div>


            {/* CARD 3 */}

            <div
              className="
                group rounded-3xl
                border border-green-100
                bg-white/80
                p-7
                shadow-sm
                backdrop-blur
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:shadow-green-500/10
                dark:border-green-900
                dark:bg-[#10251b]/80
              "
            >

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-green-100
                  text-2xl
                  transition
                  group-hover:scale-110
                  dark:bg-green-900/40
                "
              >
                🌿
              </div>

              <h3
                className="
                  mt-5 text-lg font-semibold
                  text-green-950
                  dark:text-white
                "
              >
                เติมชีวิตให้พื้นที่
              </h3>

              <p
                className="
                  mt-3 text-sm leading-relaxed
                  text-gray-500
                  dark:text-gray-300
                "
              >
                ช่วยให้บ้าน ห้องทำงาน หรือพื้นที่ต่าง ๆ
                มีสีสัน มีบรรยากาศ และสะท้อนตัวตน
                ผ่านงานศิลปะที่คุณเลือก
              </p>

            </div>

          </div>

        </section>


        {/* ================================================= */}
        {/* VISION */}
        {/* ================================================= */}

        <section
          className="
            relative mb-20
            overflow-hidden
            rounded-[2rem]
            border border-green-200
            bg-gradient-to-br
            from-green-100
            via-emerald-50
            to-sky-100
            p-8
            md:p-12
            dark:border-green-900
            dark:from-[#10291d]
            dark:via-[#0b2419]
            dark:to-[#102331]
          "
        >

          {/* Floating leaf */}

          <div className="absolute right-8 top-8 rotate-12 text-4xl opacity-30">
            🍃
          </div>

          <div className="absolute bottom-5 left-8 -rotate-12 text-3xl opacity-20">
            🌿
          </div>


          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                text-sm font-semibold
                tracking-wider
                text-green-600
                dark:text-green-400
              "
            >
              OUR VISION
            </span>

            <h2
              className="
                mt-4 text-3xl font-bold
                text-green-950
                dark:text-white
              "
            >
              “ศิลปะที่ดี เติมความหมายให้กับพื้นที่”
            </h2>

            <p
              className="
                mt-5 leading-relaxed
                text-gray-600
                dark:text-gray-300
              "
            >
              เราต้องการให้ PP ART SHOP
              เป็นพื้นที่สำหรับคนรักศิลปะ
              ที่สามารถค้นพบภาพวาดที่สวยงาม
              มีคุณภาพ และตรงกับความชอบของตัวเอง
              พร้อมเปลี่ยนพื้นที่ธรรมดาให้กลายเป็นพื้นที่
              ที่มีเรื่องราวและเอกลักษณ์
            </p>

          </div>

        </section>


        {/* ================================================= */}
        {/* WHY US */}
        {/* ================================================= */}

        <section className="mb-20">

          <div className="mb-8">

            <span
              className="
                text-sm font-semibold
                tracking-wider
                text-green-600
                dark:text-green-400
              "
            >
              WHY PP ART SHOP
            </span>

            <h2
              className="
                mt-2 text-3xl font-bold
                text-green-950
                dark:text-white
              "
            >
              ทำไมต้องเลือก PP ART SHOP?
            </h2>

          </div>


          <div
            className="
              grid grid-cols-1
              gap-4
              md:grid-cols-2
            "
          >

            {[
              "คัดสรรภาพวาดคุณภาพดีและมีเอกลักษณ์",
              "มีภาพวาดหลากหลายสไตล์ให้เลือก",
              "เหมาะสำหรับตกแต่งบ้าน ห้องทำงาน และพื้นที่ต่าง ๆ",
              "เน้นผลงานที่มีความสร้างสรรค์และน่าสนใจ",
              "ช่วยให้คุณค้นหาภาพที่เข้ากับสไตล์ของตัวเอง",
              "ตั้งใจสร้างประสบการณ์ที่ดีในการเลือกซื้อผลงานศิลปะ",
            ].map((item, index) => (

              <div
                key={index}
                className="
                  group flex items-center gap-4
                  rounded-2xl
                  border border-green-100
                  bg-white/80
                  p-5
                  shadow-sm
                  backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-green-200
                  hover:shadow-md
                  dark:border-green-900
                  dark:bg-[#10251b]/70
                "
              >

                <div
                  className="
                    flex h-10 w-10
                    shrink-0 items-center justify-center
                    rounded-full
                    bg-green-100
                    text-sm font-bold
                    text-green-600
                    transition
                    group-hover:scale-110
                    dark:bg-green-900/40
                    dark:text-green-300
                  "
                >
                  ✓
                </div>

                <p
                  className="
                    text-sm font-medium
                    text-gray-700
                    dark:text-gray-200
                  "
                >
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section
          className="
            relative overflow-hidden
            rounded-[2rem]
            bg-gradient-to-r
            from-green-500
            via-emerald-500
            to-sky-500
            px-6 py-14
            text-center
            shadow-xl
            shadow-green-500/20
            md:px-12
          "
        >

          {/* Art lines */}

          <svg
            className="
              absolute inset-0
              h-full w-full
              opacity-20
            "
            viewBox="0 0 1000 300"
            fill="none"
          >
            <path
              d="
                M-50 220
                C150 60 200 300 400 140
                C600 -10 700 250 1050 50
              "
              stroke="white"
              strokeWidth="3"
            />

            <path
              d="
                M-50 250
                C150 90 220 330 420 170
                C620 20 720 280 1050 80
              "
              stroke="white"
              strokeWidth="1"
            />
          </svg>


          {/* Leaves */}

          <div className="absolute left-8 top-8 rotate-[-20deg] text-4xl opacity-40">
            🍃
          </div>

          <div className="absolute bottom-8 right-8 rotate-20 text-4xl opacity-40">
            🌿
          </div>


          <div className="relative">

            <h2 className="text-3xl font-bold text-white">
              พร้อมค้นหาภาพวาดที่ใช่สำหรับคุณหรือยัง?
            </h2>

            <p
              className="
                mx-auto mt-3 max-w-2xl
                text-sm leading-relaxed
                text-white/85
              "
            >
              เลือกชมภาพวาดคุณภาพดี
              และค้นพบผลงานสร้างสรรค์ที่สามารถ
              เติมสีสันและความสวยงามให้กับพื้นที่ของคุณ
            </p>


            <div
              className="
                mt-7 flex flex-col
                justify-center gap-3
                sm:flex-row
              "
            >

              <Link
                href="/"
                className="
                  rounded-full
                  bg-white
                  px-7 py-3
                  text-sm font-semibold
                  text-green-700
                  shadow-lg
                  transition
                  hover:-translate-y-1
                  hover:bg-green-50
                "
              >
                🎨 ชมภาพวาดทั้งหมด
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-full
                  border border-white/50
                  bg-white/10
                  px-7 py-3
                  text-sm font-semibold
                  text-white
                  backdrop-blur
                  transition
                  hover:-translate-y-1
                  hover:bg-white/20
                "
              >
                ติดต่อเรา
              </Link>

            </div>

          </div>

        </section>

      </div>


      {/* ================================================= */}
      {/* LEAF ANIMATION */}
      {/* ================================================= */}

      <style>{` 
        .leaf {
          position: absolute;
          font-size: 28px;
          opacity: 0.35;
          animation: floatLeaf 12s linear infinite;
        }

        .leaf-1 {
          left: 8%;
          top: 15%;
          animation-delay: 0s;
        }

        .leaf-2 {
          left: 25%;
          top: 65%;
          font-size: 22px;
          animation-delay: 3s;
        }

        .leaf-3 {
          right: 15%;
          top: 20%;
          font-size: 25px;
          animation-delay: 5s;
        }

        .leaf-4 {
          right: 8%;
          top: 55%;
          font-size: 20px;
          animation-delay: 2s;
        }

        .leaf-5 {
          left: 45%;
          top: 35%;
          font-size: 18px;
          animation-delay: 7s;
        }

        .leaf-6 {
          right: 35%;
          top: 75%;
          font-size: 24px;
          animation-delay: 4s;
        }

        @keyframes floatLeaf {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          25% {
            transform: translate3d(35px, -25px, 0) rotate(45deg);
          }

          50% {
            transform: translate3d(-20px, -60px, 0) rotate(100deg);
          }

          75% {
            transform: translate3d(40px, -30px, 0) rotate(160deg);
          }

          100% {
            transform: translate3d(0, 0, 0) rotate(220deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .leaf {
            animation: none;
          }
        }
      `}</style>

    </main>
  );
}