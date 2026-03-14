import { motion } from "framer-motion";
import { Gift, Package, Smartphone, Truck } from "lucide-react";

const benefits = [
  {
    icon: Package,
    title: "Широкий ассортимент",
    desc: "Более 200 000 товаров от массовых и нишевых брендов в одном каталоге.",
  },
  {
    icon: Smartphone,
    title: "Сайт и приложение",
    desc: "Удобный выбор с рейтингами, отзывами и быстрым оформлением заказа.",
  },
  {
    icon: Gift,
    title: "Бонусы и акции",
    desc: "Кешбэк, специальные предложения и регулярные скидки на популярные позиции.",
  },
  {
    icon: Truck,
    title: "Быстрая доставка",
    desc: "Экспресс-доставка, курьер и самовывоз из магазинов сети.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 section-padding bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
            Почему Золотое Яблоко
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Покупать удобно</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 1, 0.3, 1] }}
              className="rounded-3xl border border-white/20 bg-[#111111] p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">{b.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{b.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
