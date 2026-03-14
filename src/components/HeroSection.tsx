import { motion } from "framer-motion";
import { localImages, sectionAnchors } from "@/constants/siteConfig";

const ease = [0.2, 1, 0.3, 1] as const;

const highlights = [
  "Готовые подборки по проблемам",
  "3 шага в системе ухода",
  "Бонусы и быстрый онлайн-заказ",
];

const stats = [
  { value: "200 000+", label: "товаров в каталоге" },
  { value: "300+", label: "магазинов в России" },
  { value: "2 часа", label: "экспресс-доставка" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-28 pb-20 section-padding bg-background">
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="inline-flex items-center text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-7"
          >
            GOLD APPLE HAIR CARE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6"
          >
            Восстановление волос
            <span className="block text-muted-foreground">без сложного выбора</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8"
          >
            Подберите персональный сценарий ухода для сухих, окрашенных, поврежденных и пушащихся волос с
            понятной структурой по шагам.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="flex flex-wrap gap-2.5 mb-9"
          >
            {highlights.map((item) => (
              <span key={item} className="brand-chip bg-muted">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a href={sectionAnchors.sets} className="brand-button">
              Подобрать уход
            </a>
            <a href={sectionAnchors.howItWorks} className="brand-button-secondary">
              Как это работает
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease }}
          className="space-y-4"
        >
          <div className="rounded-[2rem] border border-border bg-[#111111] p-7 md:p-8 relative overflow-hidden card-shadow">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <img
              src={localImages.hero}
              alt="Набор средств для восстановления волос на темном фоне"
              width={960}
              height={1200}
              className="w-full rounded-[1.3rem] aspect-[4/5] object-cover"
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="brand-card p-4">
                <p className="text-lg md:text-xl font-black tracking-tight mb-1">{item.value}</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.08em]">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
