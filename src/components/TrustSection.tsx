import { motion } from "framer-motion";

const stats = [
  { value: "200 000+", label: "товаров в каталоге" },
  { value: "4.9", label: "рейтинг приложения" },
  { value: "300+", label: "магазинов в России" },
  { value: "2 часа", label: "доставка в крупных городах" },
];

const whyItWorks = [
  {
    title: "Заметный результат при регулярном применении",
    desc: "При последовательном уходе волосы становятся более гладкими, мягкими и управляемыми.",
  },
  {
    title: "Три шага работают как единая система",
    desc: "Очищение, интенсивный уход и защита дополняют друг друга и дают предсказуемый эффект.",
  },
  {
    title: "Первые изменения обычно через 2–4 недели",
    desc: "Регулярность важнее объема средств: стабильная схема показывает результат быстрее.",
  },
] as const;

const TrustSection = () => {
  return (
    <section id="trust" className="py-24 md:py-32 section-padding bg-muted">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Доверие
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Золотое Яблоко в цифрах</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.article
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 1, 0.3, 1] }}
              className="brand-card p-5 md:p-7"
            >
              <p className="text-3xl md:text-4xl font-black tracking-tight mb-2">{s.value}</p>
              <p className="text-xs md:text-sm uppercase tracking-[0.08em] text-muted-foreground">{s.label}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mt-8 brand-card p-6 md:p-8"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Почему это работает
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {whyItWorks.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/60 bg-muted/40 p-4 md:p-5">
                <h3 className="text-base font-black tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
