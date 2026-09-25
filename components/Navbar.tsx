 "use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["About", "#about"],
  ["Menu", "#menu"],
  ["Gallery", "#gallery"],
  ["Reviews", "#reviews"],
  ["Visit", "#visit"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#" className="text-white">
          <div className="display-font text-2xl leading-none">Cafe Varsha</div>
          <div className="eyebrow mt-1 text-[10px] text-white/65">Gokarna</div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="underline-link text-sm text-white/85 hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/916362422938?text=Hi%20Cafe%20Varsha%20Gokarna!%20I%27d%20like%20to%20know%20more%20about%20the%20menu%20and%20availability."
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-sand md:block"
        >
          WhatsApp
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-white/25 p-2 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 overflow-hidden rounded-3xl border border-white/15 bg-black/75 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-5">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 text-white"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://wa.me/916362422938"
                target="_blank"
                rel="noreferrer"
                className="mt-4 rounded-full bg-white px-5 py-3 text-center font-semibold text-ink"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
