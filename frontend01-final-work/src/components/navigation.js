"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal";
import DarkModeToggle from "./DarkModeToggle";
import { clearToken, getToken } from "../lib/auth";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const syncToken = () => setToken(getToken());
    syncToken();
    window.addEventListener("storage", syncToken);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", syncToken);
    };
  }, []);

  const menuItems = [
    { name: "หน้าแรก", href: "/" },
    { name: "เกี่ยวกับเรา", href: "/about" },
    { name: "บริการของเรา", href: "/service" },
    { name: "ติดต่อเรา", href: "/contact" },
  ];

  const textColor = isScrolled
    ? "text-emerald-950 dark:text-emerald-50"
    : "text-emerald-900 dark:text-emerald-100";

  const hoverBgColor = isScrolled
    ? "hover:bg-emerald-900/5 hover:text-emerald-700 dark:hover:bg-white/5 dark:hover:text-emerald-300"
    : "hover:bg-emerald-800/10 hover:text-emerald-800 dark:hover:bg-white/10";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 z-50 w-full
          transition-all duration-500 font-sans
          ${
            isScrolled
              ? `
                bg-[#f3f7f4]/90
                dark:bg-[#0f1d16]/90
                backdrop-blur-md
                border-b
                border-emerald-900/10
                dark:border-emerald-500/10
                shadow-sm
              `
              : `
                bg-[#edf3ee]/80
                dark:bg-[#13231a]/80
                backdrop-blur-sm
                border-b border-emerald-900/5
              `
          }
        `}
      >
        {/* BACKGROUND LINE ART SVG (ลายเส้นศิลปะด้านหลัง) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 dark:opacity-15">
          <svg
            className="absolute -top-12 left-1/4 w-96 h-96 text-emerald-800 dark:text-emerald-300"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30,100 Q60,20 100,100 T170,100 T210,40"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
            />
            <circle cx="100" cy="80" r="50" stroke="currentColor" strokeWidth="0.5" />
            <path
              d="M10,140 C50,180 150,180 190,140"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="3 3"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* ================= LOGO ================= */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group relative"
            >
              {/* Minimalist Line Art Icon Container */}
              <div className="relative">
                <div
                  className="
                    relative flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-emerald-800/20 dark:border-emerald-300/30
                    bg-[#e4ede6] dark:bg-[#192f23]
                    text-xs font-light tracking-widest
                    text-emerald-900 dark:text-emerald-100
                    transition-all duration-300
                    group-hover:border-emerald-700 group-hover:bg-[#d8e5db]
                  "
                >
                  {/* ลายเส้นวงกลมซ้อนภายในไอคอน */}
                  <svg
                    className="absolute inset-0 w-full h-full text-emerald-800/30 dark:text-emerald-300/30 p-1"
                    viewBox="0 0 40 40"
                  >
                    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  </svg>
                  <span className="font-normal">MM</span>
                </div>
              </div>

              <div className="flex flex-col">
                <h1
                  className={`
                    text-lg font-light tracking-widest uppercase
                    transition-colors duration-300
                    ${textColor}
                  `}
                >
                  MoMi <span className="font-normal italic text-emerald-700 dark:text-emerald-400">Art</span>
                </h1>

                <p
                  className="
                    text-[9px] font-light tracking-[0.2em] uppercase
                    text-emerald-800/60 dark:text-emerald-300/60
                  "
                >
                  Minimal Studio
                </p>
              </div>
            </Link>

            {/* ================= RIGHT SECTION ================= */}
            <div className="flex items-center gap-2 md:gap-4">

              {/* ================= DESKTOP MENU ================= */}
              <div className="mr-2 hidden items-center gap-1 md:flex">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative rounded-full px-4 py-2
                      text-xs font-light tracking-wider
                      transition-all duration-300
                      ${textColor}
                      ${hoverBgColor}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* ================= DARK MODE TOGGLE ================= */}
              <div className="hidden sm:block">
                <DarkModeToggle />
              </div>

              {/* ================= CART BUTTON ================= */}
              <Link
                href="/cart"
                aria-label="ตะกร้าสินค้า"
                className={`
                  relative rounded-full p-2.5
                  transition-all duration-300 group
                  ${textColor}
                  ${hoverBgColor}
                `}
              >
                {/* Minimal Thin Line Bag Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform group-hover:scale-105"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                  />
                </svg>

                {/* Minimalist Badge */}
                <span
                  className="
                    absolute right-1.5 top-1.5
                    flex h-4 w-4
                    items-center justify-center
                    rounded-full
                    bg-emerald-800 dark:bg-emerald-400
                    text-[9px] font-light
                    text-emerald-50 dark:text-emerald-950
                  "
                >
                  3
                </span>
              </Link>

              {/* ================= AUTH BUTTONS ================= */}
              <div className="hidden md:flex md:items-center md:gap-3">
                {token ? (
                  <button
                    type="button"
                    onClick={() => {
                      clearToken();
                      setToken(null);
                      window.location.href = "/";
                    }}
                    className="
                      rounded-full border border-emerald-900/20 px-5 py-1.5
                      text-xs font-light tracking-wider text-emerald-900
                      transition-all duration-300 hover:bg-emerald-900/5
                      dark:border-emerald-100/20 dark:text-emerald-100 dark:hover:bg-white/5
                    "
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/pagelogin"
                    className="
                      px-3 py-1.5 text-xs font-light tracking-wider
                      text-emerald-900 transition-colors hover:text-emerald-700
                      dark:text-emerald-100 dark:hover:text-emerald-300
                    "
                  >
                    เข้าสู่ระบบ
                  </Link>
                )}

                {/* Minimalist Border Button */}
                <Link
                  href="/register"
                  className="
                    rounded-full border border-emerald-800/40 dark:border-emerald-300/40
                    bg-emerald-800/5 dark:bg-emerald-300/5
                    px-5 py-1.5
                    text-xs font-light tracking-widest text-emerald-900 dark:text-emerald-100
                    transition-all duration-300
                    hover:border-emerald-800 hover:bg-emerald-800 hover:text-emerald-50
                    dark:hover:border-emerald-300 dark:hover:bg-emerald-300 dark:hover:text-emerald-950
                  "
                >
                  สมัครสมาชิก
                </Link>
              </div>

              {/* ================= MOBILE HAMBURGER BUTTON ================= */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="เปิดเมนู"
                className={`
                  rounded-full p-2.5
                  transition-all duration-300
                  md:hidden
                  ${textColor}
                  ${hoverBgColor}
                `}
              >
                <div className="space-y-1.5 w-4">
                  <span
                    className={`
                      block h-[1px] w-full bg-current
                      transition-all duration-300 origin-center
                      ${isOpen ? "translate-y-1.5 rotate-45" : ""}
                    `}
                  />
                  <span
                    className={`
                      block h-[1px] w-full bg-current
                      transition-all duration-300
                      ${isOpen ? "opacity-0" : ""}
                    `}
                  />
                  <span
                    className={`
                      block h-[1px] w-full bg-current
                      transition-all duration-300 origin-center
                      ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}
                    `}
                  />
                </div>
              </button>

            </div>
          </div>

          {/* ================= MOBILE MENU PANEL ================= */}
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out md:hidden
              ${
                isOpen
                  ? "max-h-[500px] opacity-100 mb-6 mt-2"
                  : "max-h-0 opacity-0 mb-0 mt-0"
              }
            `}
          >
            <div
              className="
                relative flex flex-col gap-2 rounded-2xl
                border border-emerald-900/10 bg-[#f3f7f4]/95 p-5 shadow-sm
                backdrop-blur-xl
                dark:border-emerald-500/10 dark:bg-[#0f1d16]/95
              "
            >
              {/* Line Art Background for Mobile Menu */}
              <svg
                className="absolute right-0 bottom-0 w-48 h-48 opacity-10 text-emerald-900 dark:text-emerald-100 pointer-events-none"
                viewBox="0 0 100 100"
              >
                <circle cx="80" cy="80" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
                <path d="M0,50 Q50,0 100,50" stroke="currentColor" strokeWidth="0.5" fill="none" />
              </svg>

              {/* Mobile Dark Mode Toggle */}
              <div className="flex items-center justify-between rounded-xl bg-emerald-900/5 px-4 py-2.5 dark:bg-white/5">
                <span className="text-xs font-light tracking-wider text-emerald-900 dark:text-emerald-100">
                  โหมดมืด
                </span>
                <DarkModeToggle />
              </div>

              <div className="my-1 h-[1px] bg-emerald-900/5 dark:bg-emerald-500/10" />

              {/* Navigation Links */}
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-xl px-4 py-2.5
                    text-xs font-light tracking-wider text-emerald-900
                    transition-all duration-200
                    hover:bg-emerald-900/5 hover:pl-6
                    dark:text-emerald-100 dark:hover:bg-white/5
                  "
                >
                  {item.name}
                </Link>
              ))}

              <div className="my-1 h-[1px] bg-emerald-900/5 dark:bg-emerald-500/10" />

              {/* Mobile Login Button */}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsLoginModalOpen(true);
                }}
                className="
                  w-full rounded-xl border border-emerald-900/20 px-4 py-2.5
                  text-center text-xs font-light tracking-wider text-emerald-900
                  transition-all hover:bg-emerald-900/5
                  dark:border-emerald-100/20 dark:text-emerald-100 dark:hover:bg-white/5
                "
              >
                เข้าสู่ระบบ
              </button>

              {/* Mobile Register Button */}
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="
                  w-full rounded-xl
                  bg-emerald-900 dark:bg-emerald-200
                  px-4 py-2.5 text-center text-xs font-light tracking-widest
                  text-emerald-50 dark:text-emerald-950
                  shadow-sm transition-all active:scale-98
                "
              >
                สมัครสมาชิก
              </Link>
            </div>
          </div>

        </div>
      </nav>

      {/* ================= LOGIN MODAL ================= */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}