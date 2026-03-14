import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Что выбрать при сухости волос?",
    a: "Начните с увлажняющего шампуня, добавьте питательную маску 1-2 раза в неделю и завершайте уход сывороткой для кончиков.",
  },
  {
    q: "Что нужно после окрашивания?",
    a: "Используйте бессульфатное очищение, маску для сохранения цвета и термозащиту перед укладкой.",
  },
  {
    q: "Можно ли собрать базовый уход из 3 средств?",
    a: "Да. Базовая схема: очищение + интенсивный уход + защита. Такой набор закрывает ежедневные потребности волос.",
  },
  {
    q: "Есть ли готовые наборы?",
    a: "Да, доступны подборки по типу проблемы: сухость, повреждение, окрашивание и пушение.",
  },
  {
    q: "Где смотреть акции и бонусы?",
    a: "Актуальные акции и правила бонусной программы опубликованы на сайте и в мобильном приложении.",
  },
  {
    q: "Как заказать и получить доставку?",
    a: "Заказ можно оформить онлайн: доступна экспресс-доставка, курьер и самовывоз из магазинов сети.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 section-padding bg-background">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.2, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Частые вопросы
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">FAQ</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04, ease: [0.2, 1, 0.3, 1] }}
            >
              <AccordionItem value={`item-${i}`} className="brand-card px-6 border border-border/70">
                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm md:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
