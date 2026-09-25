import Image from "next/image";
import { ArrowUpRight, MapPin, Phone, MessageCircle, Clock3, Star, Utensils, Waves } from "lucide-react";
import { Reveal } from "./Reveal";

const images = [
  { src: "/images/cafe-varsha-1.png", alt: "Food served at Cafe Varsha", className: "md:col-span-7 md:row-span-2 min-h-[460px]" },
  { src: "/images/cafe-varsha-3.png", alt: "Beach sunset seating at Cafe Varsha", className: "md:col-span-5 min-h-[300px]" },
  { src: "/images/cafe-varsha-4.png", alt: "Cafe Varsha sunset by the beach", className: "md:col-span-5 min-h-[300px]" },
  { src: "/images/cafe-varsha-5.png", alt: "Warm illuminated Cafe Varsha ambience", className: "md:col-span-5 min-h-[300px]" },
  { src: "/images/cafe-varsha-6.png", alt: "Cafe Varsha beachside dining area", className: "md:col-span-7 min-h-[350px]" },
];

const reviews = [
  {
    quote: "An absolute gem right on the beach! With breathtaking views, a laid-back vibe giving a aesthetic feel, and fantastic food, this is the perfect spot to watch the sunset in Gokarna.",
    name: "Komal Bhalerao",
  },
  {
    quote: "Had a wonderful experience at Cafe Varsha! The food was absolutely delicious, fresh, and full of flavor. Every dish was prepared with care and tasted amazing.",
    name: "Nagarj Achari",
  },
  {
    quote: "Tasty food, polite staff and amazing atmosphere.",
    name: "Guest review",
  },
  {
    quote: "What really makes this place special is the warm and friendly service.",
    name: "Guest review",
  },
  {
    quote: "Definitely worth stopping by for coffee, snacks, or a peaceful meal.",
    name: "Guest review",
  },
];

export function About() {
  return (
    <section id="about" className="bg-cream px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <Reveal>
          <div className="eyebrow text-amber">01 · About</div>
          <h2 className="display-font mt-5 text-5xl leading-[.95] sm:text-6xl">
            Your Gokarna pause,
            <br />
            <span className="text-amber">by the sea.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-8 text-ink/65">
            Cafe Varsha Gokarna is a café and restaurant near Kariyappa Katte.
            Guest reviews highlight its food, welcoming service, relaxing
            atmosphere and beach views — the kind of setting made for a slower
            Gokarna evening.
          </p>
          <div className="mt-8 grid grid-cols-3 border-y border-[var(--line)]">
            <div className="py-5">
              <div className="display-font text-3xl">4.9</div>
              <div className="mt-1 text-xs text-ink/50">Google rating</div>
            </div>
            <div className="border-x border-[var(--line)] px-4 py-5">
              <div className="display-font text-3xl">34</div>
              <div className="mt-1 text-xs text-ink/50">Reviews</div>
            </div>
            <div className="px-4 py-5">
              <div className="display-font text-3xl">₹1–200</div>
              <div className="mt-1 text-xs text-ink/50">Per person</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Menu() {
  return (
    <section id="menu" className="bg-[#1c160f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow text-[#e2b66d]">02 · Menu</div>
          <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <h2 className="display-font max-w-3xl text-5xl leading-[.95] sm:text-6xl">
              See what&apos;s
              <br />
              <span className="text-[#e2b66d]">on the menu.</span>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-white/55">
              Menu pricing is shown only where verified. For the latest menu,
              availability or a specific dish, contact Cafe Varsha directly.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem]">
              <Image src="/images/cafe-varsha-1.png" alt="Food at Cafe Varsha Gokarna" fill className="object-cover transition duration-700 hover:scale-105" sizes="(max-width: 1024px) 100vw, 65vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-7 pt-28">
                <div className="eyebrow text-white/55">Verified price range</div>
                <div className="display-font mt-2 text-4xl">₹1–200</div>
                <div className="mt-1 text-sm text-white/60">per person</div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[.045] p-7">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e2b66d]/15 text-[#e2b66d]">
                  <Utensils size={21} />
                </div>
                <h3 className="display-font mt-8 text-4xl">Explore the menu</h3>
                <p className="mt-4 leading-7 text-white/55">
                  The supplied menu information does not contain enough
                  readable dish names and prices to safely reproduce a full
                  digital menu here. No dishes or prices have been invented.
                </p>
              </div>
              <a
                href="https://wa.me/916362422938?text=Hi%20Cafe%20Varsha%20Gokarna!%20Could%20you%20please%20share%20your%20latest%20menu%3F"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-[#e2b66d] px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-1"
              >
                Ask for Menu on WhatsApp <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Highlights() {
  const items = [
    { icon: Waves, title: "Beach views", text: "A setting guests specifically mention in their reviews." },
    { icon: Star, title: "4.9 rating", text: "34 Google reviews are currently shown in the supplied listing." },
    { icon: Utensils, title: "Food & coffee", text: "Guests mention food, coffee, snacks and seafood among their experiences." },
  ];
  return (
    <section className="bg-sand px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow text-amber">03 · The experience</div>
          <h2 className="display-font mt-5 max-w-3xl text-5xl leading-[.95] sm:text-6xl">
            Come for the food.
            <br />
            <span className="text-amber">Stay for the sunset.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full bg-sand p-8 md:p-10">
                  <Icon size={24} strokeWidth={1.5} />
                  <h3 className="display-font mt-10 text-3xl">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ink/55">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow text-amber">04 · Gallery</div>
          <h2 className="display-font mt-5 text-5xl leading-[.95] sm:text-6xl">
            Warm lights.
            <br />
            <span className="text-amber">Open skies.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[240px] gap-4 md:grid-cols-12 md:auto-rows-[260px]">
          {images.map((image, i) => (
            <Reveal key={image.src} delay={i * 0.04} className={image.className}>
              <div className="group relative h-full overflow-hidden rounded-[1.6rem]">
                <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-[#1c160f] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow text-[#e2b66d]">05 · Guest notes</div>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="display-font text-5xl leading-[.95] sm:text-6xl">
              4.9 stars.
              <br />
              <span className="text-[#e2b66d]">Real words.</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="text-5xl">4.9</div>
              <div>
                <div className="flex gap-1 text-[#e2b66d]">
                  {[1,2,3,4,5].map((n) => <Star key={n} size={15} fill="currentColor" />)}
                </div>
                <div className="mt-1 text-xs text-white/45">34 reviews</div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.quote} delay={i * 0.05}>
              <article className="h-full rounded-[1.7rem] border border-white/10 bg-white/[.045] p-7">
                <div className="flex gap-1 text-[#e2b66d]">
                  {[1,2,3,4,5].map((n) => <Star key={n} size={13} fill="currentColor" />)}
                </div>
                <p className="mt-7 text-lg leading-8 text-white/78">“{review.quote}”</p>
                <div className="mt-8 text-xs uppercase tracking-[.16em] text-white/40">{review.name}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  return (
    <section id="visit" className="bg-cream px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <div className="eyebrow text-amber">06 · Visit</div>
          <h2 className="display-font mt-5 text-5xl leading-[.95] sm:text-6xl">
            Find your way
            <br />
            <span className="text-amber">to Varsha.</span>
          </h2>
          <div className="mt-10 space-y-7">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0" size={21} />
              <div>
                <div className="font-semibold">Location</div>
                <div className="mt-1 leading-7 text-ink/55">
                  Near Kariyappa Katte,<br />
                  Gokarna, Karnataka 581326
                  <br />
                  <span className="text-sm">H845+WJ Gokarna, Karnataka</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0" size={21} />
              <div>
                <div className="font-semibold">Call Cafe Varsha</div>
                <a href="tel:+916362422938" className="mt-1 block text-amber underline underline-offset-4">063624 22938</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-1 shrink-0" size={21} />
              <div>
                <div className="font-semibold">Opening information</div>
                <div className="mt-1 text-ink/55">Supplied listing: Opens 9:00 AM Saturday.</div>
                <div className="mt-1 text-xs text-ink/40">Please check Google Maps for the latest hours.</div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cafe%20Varsha%20Gokarna%20Near%20Kariyappa%20Katte%20Gokarna%20Karnataka%20581326"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-1"
            >
              Get Directions <ArrowUpRight size={17} />
            </a>
            <a
              href="https://wa.me/916362422938?text=Hi%20Cafe%20Varsha%20Gokarna!%20I%27d%20like%20to%20reserve%20a%20table.%20Could%20you%20please%20let%20me%20know%20the%20availability%3F"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-1 hover:bg-white"
            >
              Reserve a Table <MessageCircle size={17} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem]">
            <Image src="/images/cafe-varsha-6.png" alt="Cafe Varsha beachside dining at sunset" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/35 p-5 text-white backdrop-blur-xl">
              <div className="eyebrow text-white/55">Plan your visit</div>
              <div className="display-font mt-2 text-3xl">See you by the sea.</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <Image src="/images/cafe-varsha-4.png" alt="" fill className="object-cover opacity-45" sizes="100vw" />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <div className="eyebrow text-white/60">Cafe Varsha Gokarna</div>
          <h2 className="display-font mt-5 text-5xl leading-[.95] sm:text-7xl">
            Make your Gokarna evening
            <br />
            <span className="text-[#f3c878]">a little slower.</span>
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#menu" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:-translate-y-1">View Menu</a>
            <a href="https://wa.me/916362422938" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:-translate-y-1">Order on WhatsApp</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Cafe%20Varsha%20Gokarna%20Near%20Kariyappa%20Katte%20Gokarna%20Karnataka%20581326" target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-1">Get Directions</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#110d09] px-5 pb-28 pt-14 text-white sm:px-8 lg:px-10 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        <div>
          <div className="display-font text-4xl">Cafe Varsha</div>
          <div className="mt-1 text-sm text-white/40">Gokarna</div>
        </div>
        <div className="text-sm leading-7 text-white/50">
          Near Kariyappa Katte, Gokarna, Karnataka 581326
          <br />
          063624 22938
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65 md:justify-end">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#menu" className="hover:text-white">Menu</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#reviews" className="hover:text-white">Reviews</a>
          <a href="#visit" className="hover:text-white">Visit</a>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
        <span>© {new Date().getFullYear()} Cafe Varsha Gokarna</span>
        <span>4.9 ★ · 34 reviews · ₹1–200 per person · Dine-in</span>
      </div>
    </footer>
  );
}
