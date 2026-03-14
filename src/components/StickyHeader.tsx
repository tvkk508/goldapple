import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { label: "Кому подойдет", href: "#audience" },
  { label: "Как это работает", href: "#routine" },
  { label: "Подборки", href: "#solutions" },
  { label: "FAQ", href: "#faq" },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left" style={{ scaleX }} />

      <motion.header
        className={`fixed top-[2px] left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled ? "bg-background/96 border-border" : "bg-background/70 border-transparent"
        }`}
      >
        <div className="section-padding h-16 md:h-20 max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <a href="#hero" aria-label="Gold Apple — к началу" className="inline-flex items-center">
            <img
              src="/logo-gold-apple.svg"
              alt="Gold Apple logo"
              className="h-8 md:h-10 w-auto object-contain"
              width={40}
              height={40}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Основная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#solutions" className="brand-button px-5 md:px-7 py-2.5 text-[11px] md:text-xs">
            Подобрать уход
          </a>
        </div>
      </motion.header>
    </>
  );
};

export default StickyHeader;
