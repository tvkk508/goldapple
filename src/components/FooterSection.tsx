import { externalLinks, sectionAnchors } from "@/constants/siteConfig";

const footerLinkGroups = [
  {
    title: "Категории",
    items: [
      { label: "Волосы", href: externalLinks.hairCatalog },
      { label: "Акции", href: externalLinks.promotions },
      { label: "Бонусная программа", href: externalLinks.bonusProgram },
      { label: "Подарочные карты", href: externalLinks.giftCards },
    ],
  },
  {
    title: "Компания",
    items: [
      { label: "Наши магазины", href: externalLinks.stores },
      { label: "Контакты", href: externalLinks.contacts },
      { label: "Документы сайта", href: externalLinks.siteDocuments },
      { label: "Политика обработки ПД", href: externalLinks.privacyPolicy },
    ],
  },
  {
    title: "Соцсети",
    items: [
      { label: "VK", href: externalLinks.vk },
      { label: "Telegram", href: externalLinks.telegram },
      { label: "YouTube", href: externalLinks.youtube },
    ],
  },
] as const;

const FooterSection = () => {
  return (
    <footer className="py-16 section-padding bg-[#0A0A0A] text-white border-t border-white/15">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <a href={sectionAnchors.hero} aria-label="Gold Apple — к началу" className="inline-flex items-center mb-4">
              <img src="/logo-gold-apple.svg" alt="Gold Apple logo" className="h-8 w-auto" width={32} height={32} />
            </a>
            <p className="text-white/60 text-sm leading-relaxed">
              Омниканальный beauty-ритейлер: сайт, приложение и сеть магазинов по всей России.
            </p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <p className="font-bold text-xs mb-4 uppercase tracking-[0.18em] text-white/55">{group.title}</p>
              <ul className="space-y-2">
                {group.items.map((link) => (
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
          <div className="flex items-center gap-5">
            <a
              href={externalLinks.privacyPolicy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/45 underline hover:text-primary"
            >
              Политика обработки персональных данных
            </a>
            <a href={sectionAnchors.sources} className="text-xs text-white/40 hover:text-white/70">
              Источники изображений
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
