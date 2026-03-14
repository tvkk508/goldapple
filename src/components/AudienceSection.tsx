import { motion } from "framer-motion";
import { localImages } from "@/constants/siteConfig";

const cards = [
  {
    title: "Сухие",
    desc: "Тусклость, жесткость и ломкость кончиков из-за нехватки увлажнения.",
    img: localImages.audienceDry,
    alt: "Текстура сухих волос крупным планом",
  },
  {
    title: "Окрашенные",
    desc: "Потеря плотности и яркости цвета после окрашивания или осветления.",
    img: localImages.audienceColored,
    alt: "Окрашенные волосы крупным планом",
  },
  {
    title: "Поврежденные",
    desc: "Нарушенная структура после термовоздействия и частой укладки.",
    img: localImages.audienceDamaged,
    alt: "Поврежденные волосы крупным планом",
  },
  {
    title: "Пушащиеся",
    desc: "Нужны контроль, гладкость и предсказуемая укладка каждый день.",
    img: localImages.audienceFrizzy,
    alt: "Пушащиеся волосы крупным планом",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 1, 0.3, 1] as const } },
};

const AudienceSection = () => {
  return (
    <section className="py-24 md:py-32 section-padding bg-muted">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            По типу задачи
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Выберите свою задачу</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5"
        >
          {cards.map((card) => (
            <motion.article
              key={card.title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group brand-card overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden border-b border-border/70 bg-background">
                <img
                  src={card.img}
                  alt={card.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl font-black tracking-tight mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection;
