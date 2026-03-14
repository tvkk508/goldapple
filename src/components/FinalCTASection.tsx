import { motion } from "framer-motion";
import { externalLinks } from "@/constants/siteConfig";

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-24 md:py-32 section-padding bg-[#111111] text-white">
      <div className="max-w-[980px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/20 bg-black px-6 py-10 md:px-10 md:py-14"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Соберите уход под свой запрос
          </h2>

          <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Перейдите в каталог, выберите подходящие средства и соберите рабочую систему ухода в пару кликов.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href={externalLinks.hairCatalog}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="brand-button"
            >
              Подобрать уход
            </motion.a>

            <a
              href={externalLinks.promotions}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-button-secondary border-white/35 text-white hover:bg-white hover:text-black"
            >
              Смотреть акции
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
