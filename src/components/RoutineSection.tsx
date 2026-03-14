import { motion } from "framer-motion";
import stepCleanse from "@/assets/step-cleanse.png";
import stepTreat from "@/assets/step-treat.png";
import stepProtect from "@/assets/step-protect.png";

const steps = [
  {
    num: "01",
    title: "Очищение",
    desc: "Мягкий шампунь бережно очищает кожу головы и готовит волосы к основному уходу.",
    img: stepCleanse,
  },
  {
    num: "02",
    title: "Интенсивный уход",
    desc: "Маска или кондиционер восстанавливают длину и помогают снизить ломкость.",
    img: stepTreat,
  },
  {
    num: "03",
    title: "Защита",
    desc: "Несмываемый продукт сохраняет результат и защищает волосы от температуры и UV.",
    img: stepProtect,
  },
];

const RoutineSection = () => {
  return (
    <section id="routine" className="py-24 md:py-32 section-padding bg-[#111111] text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/65 mb-4">
            Как это работает
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">3 шага к заметному результату</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/20 bg-black p-6"
            >
              <p className="inline-flex bg-primary text-primary-foreground rounded-full px-3 py-1 text-[11px] font-bold tracking-[0.18em] uppercase mb-5">
                Шаг {step.num}
              </p>

              <div className="bg-white rounded-2xl p-5 mb-5 flex items-center justify-center aspect-square overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  src={step.img}
                  alt={step.title}
                  className="w-3/4 max-h-[80%] object-contain"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-black tracking-tight mb-2">{step.title}</h3>
              <p className="text-white/72 leading-relaxed text-sm md:text-base">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;
