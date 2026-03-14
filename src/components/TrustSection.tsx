import { motion } from "framer-motion";

const stats = [
  { value: "200 000+", label: "товаров в каталоге" },
  { value: "4.9", label: "рейтинг приложения" },
  { value: "300+", label: "магазинов в России" },
  { value: "2 часа", label: "доставка в крупных городах" },
];

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
      </div>
    </section>
  );
};

export default TrustSection;
