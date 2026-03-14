const links = {
  Категории: [
    { label: "Волосы", href: "https://goldapple.ru/volosy/do-50-na-produkty-dlja-volos" },
    { label: "Акции", href: "https://goldapple.ru/" },
    { label: "Бонусная программа", href: "https://goldapple.ru/flacon/article/chto-takoe-laymovyy-klub-eto-novaya-programma-loyalnosti-zolotogo-yabloka" },
    { label: "Подарочные карты", href: "https://goldapple.ru/19000439420-gift-card" },
  ],
  Компания: [
    { label: "Наши магазины", href: "https://goldapple.ru/stockists" },
    { label: "Контакты", href: "https://goldapple.ru/dostavka-i-oplata" },
    { label: "Документы сайта", href: "https://goldapple.ru/dostavka-i-oplata" },
    { label: "Политика обработки ПД", href: "https://goldapple.ru/dostavka-i-oplata" },
  ],
  Соцсети: [
    { label: "VK", href: "https://vk.com/goldapple" },
    { label: "Telegram", href: "https://t.me/goldapple" },
    { label: "YouTube", href: "https://www.youtube.com/@goldapple_ru" },
  ],
};

const FooterSection = () => {
  return (
    <footer className="py-16 section-padding bg-[#0A0A0A] text-white border-t border-white/15">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <a href="#hero" aria-label="Gold Apple — к началу" className="inline-flex items-center mb-4">
              <img src="/logo-gold-apple.svg" alt="Gold Apple logo" className="h-8 w-auto" width={32} height={32} />
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Омниканальный beauty-ритейлер: сайт, приложение и сеть магазинов по всей России.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="font-bold text-xs mb-4 uppercase tracking-[0.18em] text-white/55">{title}</p>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} Золотое Яблоко. Все права защищены.</p>
          <a
            href="https://goldapple.ru/dostavka-i-oplata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/45 underline hover:text-primary"
          >
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
