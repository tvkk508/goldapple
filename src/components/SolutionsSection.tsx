import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const catalogUrl = "https://goldapple.ru/volosy/do-50-na-produkty-dlja-volos";

const solutions = [
  {
    title: "Для сухих волос",
    desc: "Увлажняющая схема, которая возвращает мягкость и эластичность по длине.",
    tags: ["Увлажняющий шампунь", "Питательная маска", "Масло для кончиков"],
  },
  {
    title: "Для окрашенных волос",
    desc: "Деликатный уход для сохранения цвета и защиты от повторного повреждения.",
    tags: ["Бессульфатный шампунь", "Маска для цвета", "Термозащита"],
  },
  {
    title: "Для поврежденных волос",
    desc: "Восстановление структуры и снижение ломкости без эффекта перегруженности.",
    tags: ["Реконструктор", "Кератиновая маска", "Несмываемый уход"],
  },
  {
    title: "Для пушащихся волос",
    desc: "Гладкость и управляемость для аккуратной укладки на каждый день.",
    tags: ["Разглаживающий шампунь", "Крем для гладкости", "Сыворотка"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Готовые подборки
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Сценарии ухода</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {solutions.map((sol, i) => (
            <motion.a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={sol.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group brand-card p-7 md:p-8 min-h-[265px] flex flex-col justify-between card-shadow"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3">{sol.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{sol.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {sol.tags.map((tag) => (
                    <span key={tag} className="brand-chip bg-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-7">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.13em] text-foreground">
                  Смотреть подборку
                </span>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground group-hover:bg-[#B7E600]">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
