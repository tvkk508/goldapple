import { motion } from "framer-motion";
import { Brush, Droplets, Sparkles, Wind } from "lucide-react";

const audienceItems = [
  {
    icon: Brush,
    title: "Частое окрашивание",
    desc: "Для тех, кто регулярно обновляет цвет и хочет сохранить плотность и блеск длины.",
  },
  {
    icon: Wind,
    title: "Фен и укладки",
    desc: "Для тех, кто часто сушит и укладывает волосы и хочет снизить термоповреждение.",
  },
  {
    icon: Droplets,
    title: "Сухость и ломкость",
    desc: "Для тех, у кого волосы стали сухими, ломкими или тусклыми после стрессов и окрашиваний.",
  },
  {
    icon: Sparkles,
    title: "Уход без сложного выбора",
    desc: "Для тех, кто хочет быстро собрать рабочую систему ухода без перегруза продуктами.",
  },
] as const;

const AudienceFitSection = () => {
  return (
    <section id="audience" className="py-20 md:py-24 section-padding bg-background">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Кому подойдет
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Кому подойдет этот сценарий ухода</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {audienceItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.2, 1, 0.3, 1] }}
              className="brand-card p-6 md:p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceFitSection;
