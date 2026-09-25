 "use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink text-white">
      <Image
        src="/images/cafe-varsha-2.png"
        alt="Cafe Varsha Gokarna beach sunset"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="noise absolute inset-0" />

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="eyebrow mb-5 text-white/70">Near Kariyappa Katte · Gokarna</div>
          <h1 className="display-font max-w-4xl text-6xl leading-[.9] sm:text-7xl lg:text-[8rem]">
            Good food.
            <br />
            Golden hours.
            <br />
            <span className="text-[#f3c878]">Gokarna.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Cafe Varsha is a relaxed café and restaurant in Gokarna, with food,
            coffee, snacks and a beachside atmosphere guests return to.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-1">
              View Menu
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://wa.me/916362422938?text=Hi%20Cafe%20Varsha%20Gokarna!%20I%27d%20like%20to%20know%20more%20about%20the%20menu%20and%20availability." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
              Order on WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex items-end justify-between border-t border-white/15 pt-5">
          <div className="flex gap-7 text-xs text-white/65">
            <span><strong className="text-white">4.9</strong> ★ · 34 reviews</span>
            <span className="hidden sm:inline">₹1–200 per person</span>
            <span className="hidden sm:inline">Dine-in</span>
          </div>
          <a href="#about" className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-white/70">
            Scroll <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
