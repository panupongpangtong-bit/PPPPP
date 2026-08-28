"use client";

import Link from "next/link";

export default function ServicePage() {
  const services = [
    {
      icon: "🎨",
      title: "จำหน่ายภาพวาด",
      description:
        "คัดสรรภาพวาดคุณภาพดีและผลงานสร้างสรรค์หลากหลายสไตล์",
    },
    {
      icon: "🖼️",
      title: "เลือกงานศิลปะที่ใช่",
      description:
        "รวบรวมผลงานหลายแนวให้เหมาะกับทุกพื้นที่และทุกความชอบ",
    },
    {
      icon: "✨",
      title: "แนะนำผลงาน",
      description:
        "ช่วยแนะนำภาพวาดให้เหมาะกับสไตล์ บ้าน และพื้นที่ของคุณ",
    },
    {
      icon: "🌿",
      title: "ศิลปะเพื่อการตกแต่ง",
      description:
        "เติมสีสัน ความอบอุ่น และเอกลักษณ์ให้กับพื้นที่ของคุณ",
    },
    {
      icon: "📦",
      title: "จัดส่งผลงาน",
      description:
        "เตรียมและจัดส่งภาพวาดอย่างเหมาะสมและปลอดภัย",
    },
    {
      icon: "💬",
      title: "ให้คำปรึกษาด้านศิลปะ",
      description:
        "ทีมงานพร้อมช่วยค้นหาผลงานที่เหมาะกับคุณ",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "ค้นหาผลงาน",
      description:
        "เลือกชมภาพวาดและผลงานศิลปะจากคอลเลกชันของเรา",
    },
    {
      number: "02",
      title: "เลือกภาพที่ชอบ",
      description:
        "พิจารณาสไตล์ สี ขนาด และความเหมาะสมกับพื้นที่",
    },
    {
      number: "03",
      title: "สั่งซื้อผลงาน",
      description:
        "เพิ่มผลงานลงตะกร้า ตรวจสอบรายละเอียด และยืนยันคำสั่งซื้อ",
    },
    {
      number: "04",
      title: "รับงานศิลปะ",
      description:
        "รอรับภาพวาดที่คุณเลือกและสร้างบรรยากาศใหม่ให้พื้นที่",
    },
  ];

  const leaves = [
    "🍃",
    "🌿",
    "🍂",
    "🍃",
    "🌱",
    "🍃",
    "🌿",
    "🍂",
    "🍃",
    "🌿",
    "🍃",
    "🌱",
    "🍂",
    "🍃",
    "🌿",
    "🍃",
    "🍂",
    "🌱",
    "🍃",
    "🌿",
    "🍃",
    "🍂",
    "🌿",
    "🍃",
    "🌱",
    "🍃",
    "🌿",
    "🍂",
    "🍃",
    "🌿",
    "🍃",
    "🌱",
    "🌿",
    "🍃",
    "🍂",
    "🌿",
    "🍃",
    "🌱",
    "🍃",
    "🌿",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-green-50 via-green-100 to-emerald-50 px-4 pb-24 pt-32 text-green-950 transition-colors duration-500 dark:from-[#06150e] dark:via-[#0a2117] dark:to-[#071c15] dark:text-white">

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute -left-32 top-20
            h-80 w-80 rounded-full
            border-2 border-green-800/20
            dark:border-green-400/10
          "
        />

        <div
          className="
            absolute -right-40 top-[30%]
            h-[450px] w-[450px]
            rounded-full
            border-2 border-green-800/20
            dark:border-green-400/10
          "
        />

        <div
          className="
            absolute left-[35%] top-[60%]
            h-72 w-72
            rounded-full
            border border-yellow-400/20
          "
        />

        {/* ดาวตกแต่ง */}

        <div className="art-star star-01">✦</div>
        <div className="art-star star-02">✦</div>
        <div className="art-star star-03">✧</div>
        <div className="art-star star-04">✦</div>
        <div className="art-star star-05">✧</div>
        <div className="art-star star-06">✦</div>
        <div className="art-star star-07">✧</div>
        <div className="art-star star-08">✦</div>
        <div className="art-star star-09">✧</div>
        <div className="art-star star-10">✦</div>

        {/* ใบไม้ปลิว */}

        {leaves.map((leaf, index) => (
          <div
            key={index}
            className={`floating-leaf leaf-${String(index + 1).padStart(
              2,
              "0"
            )}`}
          >
            {leaf}
          </div>
        ))}
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================
            HERO
        ========================== */}

        <section className="relative mb-24 text-center">

          <div
            className="
              absolute left-1/2 top-1/2
              h-64 w-[90%]
              -translate-x-1/2 -translate-y-1/2
              rounded-[50%]
              border border-green-800/10
              dark:border-green-300/10
            "
          />

          <div className="relative">

            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                border-2 border-green-800
                bg-green-100
                px-5 py-2
                text-xs font-bold
                tracking-[0.2em]
                text-green-900
                shadow-[3px_3px_0px_rgba(20,83,45,0.25)]
                dark:border-green-400
                dark:bg-green-950
                dark:text-green-200
              "
            >
              <span className="text-yellow-400">✦</span>
              ART & CREATIVITY
              <span className="text-yellow-400">✦</span>
            </span>

            <h1
              className="
                mt-6
                text-4xl font-black
                tracking-tight
                text-green-950
                md:text-6xl
                dark:text-white
              "
            >
              บริการด้านงานศิลปะ
            </h1>

            <div className="mx-auto mt-5 flex items-center justify-center gap-2">
              <div className="h-1 w-10 rounded-full bg-green-800" />
              <div className="h-2 w-2 rotate-45 bg-yellow-400" />
              <div className="h-1 w-20 rounded-full bg-green-800" />
              <div className="h-2 w-2 rotate-45 bg-yellow-400" />
              <div className="h-1 w-10 rounded-full bg-green-800" />
            </div>

            <p
              className="
                mx-auto mt-6
                max-w-3xl
                text-base leading-relaxed
                text-green-800
                md:text-lg
                dark:text-green-100
              "
            >
              เราคัดสรรภาพวาดและผลงานศิลปะที่มีคุณภาพ
              และความคิดสร้างสรรค์ เพื่อให้คุณสามารถค้นพบ
              ผลงานที่เหมาะกับตัวเองและเติมเต็มความสวยงาม
              ให้กับพื้นที่ของคุณ
            </p>

          </div>
        </section>

        {/* =========================
            SERVICES
        ========================== */}

        <section className="mb-28">

          <div className="mb-12 text-center">

            <span
              className="
                text-sm font-bold
                tracking-[0.2em]
                text-green-700
                dark:text-green-300
              "
            >
              WHAT WE OFFER
            </span>

            <h2
              className="
                mt-3
                text-3xl font-black
                text-green-950
                dark:text-white
              "
            >
              บริการของเรา
            </h2>

            <div className="mx-auto mt-4 flex justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-green-800" />
              <span className="h-1 w-14 rounded-full bg-yellow-400" />
              <span className="h-1 w-8 rounded-full bg-green-800" />
            </div>

            <p
              className="
                mx-auto mt-4 max-w-2xl
                text-green-800
                dark:text-green-100
              "
            >
              ทุกบริการถูกออกแบบมาเพื่อให้คุณ
              เข้าถึงงานศิลปะได้ง่ายและสนุกกับการเลือกผลงาน
            </p>
          </div>

          <div
            className="
              grid grid-cols-1 gap-7
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[1.8rem]
                  border-[3px] border-green-800
                  bg-white/90
                  p-7
                  shadow-[7px_7px_0px_rgba(20,83,45,0.35)]
                  backdrop-blur
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

                {/* กรอบซ้อน */}

                <div
                  className="
                    pointer-events-none
                    absolute inset-2
                    rounded-[1.4rem]
                    border border-green-800/20
                    transition-all duration-500
                    group-hover:inset-3
                    group-hover:border-green-800/50
                    dark:border-green-300/10
                    dark:group-hover:border-green-300/30
                  "
                />

                {/* จุดเหลือง */}

                <div
                  className="
                    absolute right-6 top-6
                    h-2.5 w-2.5
                    rounded-full
                    bg-yellow-400
                    shadow-[0_0_14px_rgba(250,204,21,0.8)]
                    transition-transform duration-500
                    group-hover:scale-[1.8]
                  "
                />

                {/* ลายเส้น */}

                <div
                  className="
                    absolute bottom-0 right-0
                    h-20 w-20
                    rounded-tl-full
                    border-l-2 border-t-2
                    border-green-800/10
                    dark:border-green-300/10
                  "
                />

                {/* Icon */}

                <div
                  className="
                    relative z-10
                    flex h-16 w-16
                    items-center justify-center
                    rounded-2xl
                    border-2 border-green-800
                    bg-gradient-to-br
                    from-green-100
                    to-yellow-50
                    text-3xl
                    shadow-[3px_3px_0px_rgba(20,83,45,0.2)]
                    transition-all duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    dark:border-green-500
                    dark:from-green-900/60
                    dark:to-yellow-900/20
                  "
                >
                  {service.icon}
                </div>

                <h3
                  className="
                    relative z-10
                    mt-6 text-xl font-black
                    text-green-950
                    dark:text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    relative z-10
                    mt-3 text-sm
                    leading-relaxed
                    text-green-800
                    dark:text-green-100
                  "
                >
                  {service.description}
                </p>

                <div
                  className="
                    relative z-10
                    mt-6 h-1 w-12
                    rounded-full
                    bg-yellow-400
                    transition-all duration-500
                    group-hover:w-20
                  "
                />

              </div>
            ))}

          </div>
        </section>

        {/* =========================
            HOW IT WORKS
        ========================== */}

        <section className="mb-28">

          <div className="mb-12 text-center">

            <span
              className="
                text-sm font-bold
                tracking-[0.2em]
                text-green-700
                dark:text-green-300
              "
            >
              HOW IT WORKS
            </span>

            <h2
              className="
                mt-3 text-3xl font-black
                text-green-950
                dark:text-white
              "
            >
              ขั้นตอนการเลือกซื้อภาพวาด
            </h2>

            <div className="mx-auto mt-4 flex justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-green-800" />
              <span className="h-1 w-14 rounded-full bg-yellow-400" />
              <span className="h-1 w-8 rounded-full bg-green-800" />
            </div>

            <p
              className="
                mt-4
                text-green-800
                dark:text-green-100
              "
            >
              เลือกงานศิลปะที่คุณชอบได้ง่าย ๆ
              เพียงไม่กี่ขั้นตอน
            </p>
          </div>

          <div
            className="
              grid grid-cols-1 gap-7
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {steps.map((step, index) => (
              <div
                key={index}
                className="
                  group relative overflow-hidden
                  rounded-[1.8rem]
                  border-[3px] border-green-800
                  bg-white/90
                  p-7
                  shadow-[7px_7px_0px_rgba(20,83,45,0.35)]
                  backdrop-blur
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:border-green-950
                  hover:shadow-[11px_11px_0px_rgba(20,83,45,0.45)]
                  dark:border-green-500
                  dark:bg-[#10251b]/95
                  dark:hover:border-green-300
                "
              >

                <div
                  className="
                    pointer-events-none
                    absolute inset-2
                    rounded-[1.4rem]
                    border border-green-800/20
                    transition-all duration-500
                    group-hover:inset-3
                    group-hover:border-green-800/50
                    dark:border-green-300/10
                  "
                />

                <div
                  className="
                    absolute right-5 top-5
                    text-xl text-yellow-400
                    transition-transform duration-500
                    group-hover:rotate-180
                  "
                >
                  ✦
                </div>

                <span
                  className="
                    relative z-10
                    text-6xl font-black
                    text-green-100
                    transition-colors duration-500
                    group-hover:text-green-200
                    dark:text-green-900/70
                    dark:group-hover:text-green-800
                  "
                >
                  {step.number}
                </span>

                <div
                  className="
                    relative z-10
                    mt-3 h-1.5 w-12
                    rounded-full
                    bg-yellow-400
                    transition-all duration-500
                    group-hover:w-20
                  "
                />

                <h3
                  className="
                    relative z-10
                    mt-5 text-lg font-black
                    text-green-950
                    dark:text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    relative z-10
                    mt-3 text-sm
                    leading-relaxed
                    text-green-800
                    dark:text-green-100
                  "
                >
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* =========================
            ART EXPERIENCE
        ========================== */}

        <section
          className="
            relative mb-28
            overflow-hidden
            rounded-[2.5rem]
            border-[3px] border-green-900
            bg-gradient-to-br
            from-green-100
            via-emerald-50
            to-yellow-50
            p-8
            shadow-[10px_10px_0px_rgba(20,83,45,0.35)]
            md:p-12
            dark:border-green-500
            dark:from-[#10291d]
            dark:via-[#0b2419]
            dark:to-[#102331]
          "
        >

          <div
            className="
              pointer-events-none
              absolute inset-3
              rounded-[2rem]
              border border-green-800/20
              dark:border-green-300/10
            "
          />

          <div
            className="
              absolute -right-20 -top-20
              h-72 w-72
              rounded-full
              border-[3px]
              border-green-800/10
              dark:border-green-300/10
            "
          />

          <div
            className="
              absolute -bottom-24 -left-20
              h-72 w-72
              rounded-full
              border-[3px]
              border-yellow-400/20
            "
          />

          <div className="absolute right-16 top-12 text-3xl text-yellow-400 opacity-70">
            ✦
          </div>

          <div className="absolute bottom-14 left-14 text-2xl text-yellow-400 opacity-60">
            ✧
          </div>

          <div
            className="
              relative grid
              grid-cols-1 gap-12
              lg:grid-cols-2
              lg:items-center
            "
          >

            <div>

              <span
                className="
                  text-sm font-bold
                  tracking-[0.2em]
                  text-green-700
                  dark:text-green-300
                "
              >
                ART EXPERIENCE
              </span>

              <h2
                className="
                  mt-3 text-3xl
                  font-black leading-tight
                  text-green-950
                  dark:text-white
                "
              >
                ให้ศิลปะ
                <br />
                เป็นส่วนหนึ่งของชีวิตคุณ
              </h2>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-green-800" />
                <span className="h-2 w-2 rotate-45 bg-yellow-400" />
                <span className="h-1 w-16 rounded-full bg-green-800" />
              </div>

              <p
                className="
                  mt-5 leading-relaxed
                  text-green-800
                  dark:text-green-100
                "
              >
                เราเชื่อว่าภาพวาดที่ดีสามารถสร้างอารมณ์
                เติมสีสัน และเปลี่ยนพื้นที่ธรรมดาให้กลายเป็น
                พื้นที่ที่มีความหมายมากขึ้น
              </p>

              <Link
                href="/contact"
                className="
                  mt-7 inline-flex
                  rounded-full
                  border-2 border-green-950
                  bg-green-700
                  px-7 py-3
                  text-sm font-bold
                  text-white
                  shadow-[5px_5px_0px_#14532d]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-green-800
                  hover:shadow-[7px_7px_0px_#14532d]
                  dark:border-green-300
                "
              >
                ปรึกษาเกี่ยวกับผลงาน →
              </Link>

            </div>

            {/* Art Card */}

            <div
              className="
                relative flex
                min-h-[290px]
                items-center justify-center
                overflow-hidden
                rounded-[2rem]
                border-[3px] border-green-950
                bg-gradient-to-br
                from-green-500
                via-emerald-500
                to-green-800
                shadow-[8px_8px_0px_rgba(20,83,45,0.35)]
              "
            >

              <div
                className="
                  absolute
                  h-48 w-48
                  rounded-full
                  border-2 border-white/30
                  animate-pulse
                "
              />

              <div
                className="
                  absolute
                  h-72 w-72
                  rounded-full
                  border border-white/20
                "
              />

              <div
                className="
                  absolute
                  h-96 w-96
                  rounded-full
                  border border-yellow-300/10
                "
              />

              <div className="relative z-10 text-center text-white">

                <div className="text-7xl drop-shadow-lg">
                  🎨
                </div>

                <h3 className="mt-5 text-2xl font-black">
                  Art for Every Space
                </h3>

                <p className="mt-2 text-sm text-white/90">
                  ศิลปะสำหรับทุกพื้นที่และทุกความรู้สึก
                </p>

              </div>
            </div>

          </div>
        </section>

        {/* =========================
            FAQ
        ========================== */}

        <section className="mb-28">

          <div className="mb-10 text-center">

            <span
              className="
                text-sm font-bold
                tracking-[0.2em]
                text-green-700
                dark:text-green-300
              "
            >
              FAQ
            </span>

            <h2
              className="
                mt-3 text-3xl font-black
                text-green-950
                dark:text-white
              "
            >
              คำถามที่พบบ่อย
            </h2>

            <div className="mx-auto mt-4 flex justify-center gap-2">
              <span className="h-1 w-8 rounded-full bg-green-800" />
              <span className="h-1 w-14 rounded-full bg-yellow-400" />
              <span className="h-1 w-8 rounded-full bg-green-800" />
            </div>

          </div>

          <div className="mx-auto max-w-4xl space-y-5">

            {/* FAQ 1 */}

            <details
              className="
                group relative overflow-hidden
                rounded-2xl
                border-[3px] border-green-800
                bg-white/90
                p-6
                shadow-[6px_6px_0px_rgba(20,83,45,0.3)]
                backdrop-blur
                transition-all duration-500
                hover:-translate-y-1
                hover:border-green-950
                hover:shadow-[9px_9px_0px_rgba(20,83,45,0.4)]
                dark:border-green-500
                dark:bg-[#10251b]/95
                dark:hover:border-green-300
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute inset-2
                  rounded-xl
                  border border-green-800/20
                  dark:border-green-300/10
                "
              />

              <summary
                className="
                  relative z-10
                  cursor-pointer
                  list-none
                  pr-8
                  font-black
                  text-green-950
                  dark:text-white
                "
              >
                มีภาพวาดประเภทใดให้เลือกบ้าง?

                <span
                  className="
                    absolute right-0
                    text-xl text-yellow-500
                    transition-transform
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <p
                className="
                  relative z-10
                  mt-4 text-sm
                  leading-relaxed
                  text-green-800
                  dark:text-green-100
                "
              >
                เรามีผลงานศิลปะหลากหลายแนว
                เช่น ภาพธรรมชาติ ภาพนามธรรม
                ภาพร่วมสมัย และภาพสำหรับตกแต่งพื้นที่
              </p>

            </details>

            {/* FAQ 2 */}

            <details
              className="
                group relative overflow-hidden
                rounded-2xl
                border-[3px] border-green-800
                bg-white/90
                p-6
                shadow-[6px_6px_0px_rgba(20,83,45,0.3)]
                backdrop-blur
                transition-all duration-500
                hover:-translate-y-1
                hover:border-green-950
                hover:shadow-[9px_9px_0px_rgba(20,83,45,0.4)]
                dark:border-green-500
                dark:bg-[#10251b]/95
                dark:hover:border-green-300
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute inset-2
                  rounded-xl
                  border border-green-800/20
                  dark:border-green-300/10
                "
              />

              <summary
                className="
                  relative z-10
                  cursor-pointer
                  list-none
                  pr-8
                  font-black
                  text-green-950
                  dark:text-white
                "
              >
                หากไม่รู้ว่าจะเลือกภาพแบบไหนดี สามารถขอคำแนะนำได้ไหม?

                <span
                  className="
                    absolute right-0
                    text-xl text-yellow-500
                    transition-transform
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <p
                className="
                  relative z-10
                  mt-4 text-sm
                  leading-relaxed
                  text-green-800
                  dark:text-green-100
                "
              >
                ได้ คุณสามารถติดต่อทีมงานเพื่อขอคำแนะนำ
                เกี่ยวกับสไตล์ สี ขนาด และความเหมาะสม
                ของภาพกับพื้นที่ที่ต้องการตกแต่ง
              </p>

            </details>

            {/* FAQ 3 */}

            <details
              className="
                group relative overflow-hidden
                rounded-2xl
                border-[3px] border-green-800
                bg-white/90
                p-6
                shadow-[6px_6px_0px_rgba(20,83,45,0.3)]
                backdrop-blur
                transition-all duration-500
                hover:-translate-y-1
                hover:border-green-950
                hover:shadow-[9px_9px_0px_rgba(20,83,45,0.4)]
                dark:border-green-500
                dark:bg-[#10251b]/95
                dark:hover:border-green-300
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute inset-2
                  rounded-xl
                  border border-green-800/20
                  dark:border-green-300/10
                "
              />

              <summary
                className="
                  relative z-10
                  cursor-pointer
                  list-none
                  pr-8
                  font-black
                  text-green-950
                  dark:text-white
                "
              >
                มีบริการจัดส่งภาพวาดหรือไม่?

                <span
                  className="
                    absolute right-0
                    text-xl text-yellow-500
                    transition-transform
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <p
                className="
                  relative z-10
                  mt-4 text-sm
                  leading-relaxed
                  text-green-800
                  dark:text-green-100
                "
              >
                มี เรามีบริการจัดส่งผลงาน
                โดยจะดูแลการเตรียมและบรรจุผลงาน
                ให้เหมาะสมก่อนจัดส่ง
              </p>

            </details>

          </div>
        </section>

        {/* =========================
            FINAL CTA
        ========================== */}

        <section
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border-[3px] border-green-950
            bg-gradient-to-r
            from-green-700
            via-emerald-600
            to-green-800
            px-6 py-16
            text-center
            shadow-[10px_10px_0px_rgba(20,83,45,0.4)]
            md:px-12
          "
        >

          <div
            className="
              pointer-events-none
              absolute inset-3
              rounded-[2rem]
              border border-white/20
            "
          />

          <div
            className="
              absolute -left-20 -top-20
              h-64 w-64
              rounded-full
              border-2 border-white/10
            "
          />

          <div
            className="
              absolute -bottom-24 -right-20
              h-72 w-72
              rounded-full
              border-2 border-yellow-300/10
            "
          />

          <div className="absolute left-12 top-12 text-4xl text-yellow-300 opacity-70">
            ✦
          </div>

          <div className="absolute right-14 top-16 text-2xl text-yellow-300 opacity-60">
            ✧
          </div>

          <div className="absolute bottom-12 left-20 text-xl text-yellow-300 opacity-60">
            ✦
          </div>

          <div className="absolute bottom-10 right-20 text-4xl text-yellow-300 opacity-70">
            ✧
          </div>

          <div className="relative z-10">

            <div className="mb-5 text-6xl">
              🎨
            </div>

            <h2
              className="
                text-3xl font-black
                text-white
                md:text-4xl
              "
            >
              พร้อมค้นพบงานศิลปะที่ใช่สำหรับคุณหรือยัง?
            </h2>

            <p
              className="
                mx-auto mt-5
                max-w-2xl
                text-sm leading-relaxed
                text-green-50
              "
            >
              เปิดมุมมองใหม่ผ่านงานศิลปะ
              เลือกภาพวาดที่สะท้อนตัวตน
              และเติมความสวยงามให้กับพื้นที่ของคุณ
            </p>

            <div
              className="
                mt-8 flex
                flex-col justify-center
                gap-4
                sm:flex-row
              "
            >

              <Link
                href="/"
                className="
                  rounded-full
                  border-2 border-white
                  bg-white
                  px-8 py-3
                  text-sm font-black
                  text-green-800
                  shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-green-50
                "
              >
                🖼️ ชมภาพวาดทั้งหมด
              </Link>

              <Link
                href="/contact"
                className="
                  rounded-full
                  border-2 border-white/70
                  bg-white/10
                  px-8 py-3
                  text-sm font-black
                  text-white
                  backdrop-blur
                  transition-all duration-300
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

      {/* =========================
          CSS ANIMATION
      ========================== */}

      <style>{`
        .floating-leaf {
          position: absolute;
          z-index: 1;
          pointer-events: none;
          opacity: 0.45;
          user-select: none;
          animation-name: leafFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          filter: drop-shadow(
            0 4px 5px rgba(20, 83, 45, 0.15)
          );
        }

        .leaf-01 {
          left: 2%;
          top: 5%;
          font-size: 25px;
          animation-duration: 13s;
        }

        .leaf-02 {
          left: 8%;
          top: 18%;
          font-size: 31px;
          animation-duration: 17s;
          animation-delay: -4s;
        }

        .leaf-03 {
          left: 15%;
          top: 8%;
          font-size: 21px;
          animation-duration: 11s;
          animation-delay: -7s;
        }

        .leaf-04 {
          left: 22%;
          top: 30%;
          font-size: 28px;
          animation-duration: 19s;
          animation-delay: -2s;
        }

        .leaf-05 {
          left: 30%;
          top: 12%;
          font-size: 22px;
          animation-duration: 14s;
          animation-delay: -9s;
        }

        .leaf-06 {
          left: 38%;
          top: 40%;
          font-size: 30px;
          animation-duration: 16s;
          animation-delay: -5s;
        }

        .leaf-07 {
          left: 47%;
          top: 6%;
          font-size: 25px;
          animation-duration: 12s;
          animation-delay: -3s;
        }

        .leaf-08 {
          left: 55%;
          top: 25%;
          font-size: 21px;
          animation-duration: 18s;
          animation-delay: -8s;
        }

        .leaf-09 {
          left: 64%;
          top: 8%;
          font-size: 30px;
          animation-duration: 15s;
          animation-delay: -6s;
        }

        .leaf-10 {
          left: 73%;
          top: 20%;
          font-size: 24px;
          animation-duration: 20s;
          animation-delay: -10s;
        }

        .leaf-11 {
          left: 83%;
          top: 7%;
          font-size: 29px;
          animation-duration: 14s;
          animation-delay: -1s;
        }

        .leaf-12 {
          left: 94%;
          top: 28%;
          font-size: 20px;
          animation-duration: 17s;
          animation-delay: -6s;
        }

        .leaf-13 {
          left: 5%;
          top: 45%;
          font-size: 27px;
          animation-duration: 16s;
          animation-delay: -11s;
        }

        .leaf-14 {
          left: 13%;
          top: 60%;
          font-size: 22px;
          animation-duration: 12s;
          animation-delay: -5s;
        }

        .leaf-15 {
          left: 21%;
          top: 52%;
          font-size: 31px;
          animation-duration: 19s;
          animation-delay: -8s;
        }

        .leaf-16 {
          left: 29%;
          top: 72%;
          font-size: 23px;
          animation-duration: 15s;
          animation-delay: -2s;
        }

        .leaf-17 {
          left: 37%;
          top: 62%;
          font-size: 28px;
          animation-duration: 18s;
          animation-delay: -9s;
        }

        .leaf-18 {
          left: 46%;
          top: 82%;
          font-size: 20px;
          animation-duration: 13s;
          animation-delay: -4s;
        }

        .leaf-19 {
          left: 55%;
          top: 55%;
          font-size: 30px;
          animation-duration: 17s;
          animation-delay: -7s;
        }

        .leaf-20 {
          left: 64%;
          top: 70%;
          font-size: 24px;
          animation-duration: 14s;
          animation-delay: -12s;
        }

        .leaf-21 {
          left: 73%;
          top: 52%;
          font-size: 27px;
          animation-duration: 20s;
          animation-delay: -3s;
        }

        .leaf-22 {
          left: 82%;
          top: 65%;
          font-size: 21px;
          animation-duration: 16s;
          animation-delay: -9s;
        }

        .leaf-23 {
          left: 93%;
          top: 80%;
          font-size: 29px;
          animation-duration: 18s;
          animation-delay: -6s;
        }

        .leaf-24 {
          left: 2%;
          top: 82%;
          font-size: 23px;
          animation-duration: 15s;
          animation-delay: -10s;
        }

        .leaf-25 {
          left: 18%;
          top: 4%;
          font-size: 19px;
          animation-duration: 11s;
          animation-delay: -4s;
        }

        .leaf-26 {
          left: 34%;
          top: 22%;
          font-size: 26px;
          animation-duration: 17s;
          animation-delay: -13s;
        }

        .leaf-27 {
          left: 50%;
          top: 34%;
          font-size: 22px;
          animation-duration: 13s;
          animation-delay: -7s;
        }

        .leaf-28 {
          left: 67%;
          top: 42%;
          font-size: 30px;
          animation-duration: 19s;
          animation-delay: -11s;
        }

        .leaf-29 {
          left: 87%;
          top: 45%;
          font-size: 25px;
          animation-duration: 16s;
          animation-delay: -5s;
        }

        .leaf-30 {
          left: 12%;
          top: 38%;
          font-size: 21px;
          animation-duration: 12s;
          animation-delay: -8s;
        }

        .leaf-31 {
          left: 44%;
          top: 52%;
          font-size: 27px;
          animation-duration: 18s;
          animation-delay: -6s;
        }

        .leaf-32 {
          left: 77%;
          top: 33%;
          font-size: 22px;
          animation-duration: 15s;
          animation-delay: -3s;
        }

        .leaf-33 {
          left: 26%;
          top: 88%;
          font-size: 25px;
          animation-duration: 17s;
          animation-delay: -9s;
        }

        .leaf-34 {
          left: 59%;
          top: 86%;
          font-size: 20px;
          animation-duration: 13s;
          animation-delay: -5s;
        }

        .leaf-35 {
          left: 88%;
          top: 90%;
          font-size: 28px;
          animation-duration: 19s;
          animation-delay: -12s;
        }

        .leaf-36 {
          left: 72%;
          top: 78%;
          font-size: 23px;
          animation-duration: 14s;
          animation-delay: -2s;
        }

        .leaf-37 {
          left: 4%;
          top: 65%;
          font-size: 26px;
          animation-duration: 16s;
          animation-delay: -7s;
        }

        .leaf-38 {
          left: 42%;
          top: 15%;
          font-size: 20px;
          animation-duration: 12s;
          animation-delay: -10s;
        }

        .leaf-39 {
          left: 68%;
          top: 62%;
          font-size: 29px;
          animation-duration: 18s;
          animation-delay: -4s;
        }

        .leaf-40 {
          left: 97%;
          top: 58%;
          font-size: 22px;
          animation-duration: 15s;
          animation-delay: -8s;
        }

        @keyframes leafFloat {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          20% {
            transform: translate3d(55px, -40px, 0) rotate(60deg);
          }

          40% {
            transform: translate3d(-35px, -80px, 0) rotate(130deg);
          }

          60% {
            transform: translate3d(65px, -35px, 0) rotate(200deg);
          }

          80% {
            transform: translate3d(-55px, 30px, 0) rotate(280deg);
          }

          100% {
            transform: translate3d(0, 0, 0) rotate(360deg);
          }
        }

        .art-star {
          position: absolute;
          z-index: 1;
          color: #facc15;
          font-size: 22px;
          opacity: 0.55;
          animation: starPulse 4s ease-in-out infinite;
        }

        .star-01 {
          left: 7%;
          top: 12%;
        }

        .star-02 {
          left: 19%;
          top: 45%;
          animation-delay: 1s;
        }

        .star-03 {
          left: 31%;
          top: 75%;
          animation-delay: 2s;
        }

        .star-04 {
          left: 48%;
          top: 18%;
          animation-delay: 0.5s;
        }

        .star-05 {
          left: 62%;
          top: 50%;
          animation-delay: 1.5s;
        }

        .star-06 {
          right: 8%;
          top: 15%;
          animation-delay: 2s;
        }

        .star-07 {
          right: 18%;
          top: 42%;
          animation-delay: 0.8s;
        }

        .star-08 {
          right: 8%;
          top: 72%;
          animation-delay: 1.8s;
        }

        .star-09 {
          left: 42%;
          top: 88%;
          animation-delay: 2.5s;
        }

        .star-10 {
          left: 80%;
          top: 85%;
          animation-delay: 1.2s;
        }

        @keyframes starPulse {
          0%,
          100% {
            transform: scale(0.8) rotate(0deg);
            opacity: 0.25;
          }

          50% {
            transform: scale(1.4) rotate(90deg);
            opacity: 0.8;
          }
        }

        @media (max-width: 768px) {
          .floating-leaf {
            opacity: 0.25;
          }

          .art-star {
            opacity: 0.35;
          }

          .leaf-02,
          .leaf-07,
          .leaf-11,
          .leaf-15,
          .leaf-21,
          .leaf-28,
          .leaf-35,
          .leaf-40 {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-leaf,
          .art-star {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}