"use client";

import Link from "next/link";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <motion.img
        src="/logo.png"
        alt="AxonERP Logo"
        className="h-[70px] w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
whileHover={{
           scale: 1.1,
           filter: "drop-shadow(0 0 12px rgba(186, 203, 0, 0.6))",
         }}
      />
    </Link>
  );
}
