import { Geist, Geist_Mono } from "next/font/google";
import { Prompt } from "next/font/google";
import { CartProvider } from "../../../../context/cartcontext";


const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MoMi ",
  description: "เลือกผลงานที่เป็นตัวคุณ",
};

export default function RegisterLayout({ children }) {
  return (
    <div className="register-container">
      {children}
    </div>
  );
}