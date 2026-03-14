export const sectionAnchors = {
  hero: "#hero",
  audience: "#audience",
  howItWorks: "#how-it-works",
  sets: "#sets",
  benefits: "#benefits",
  trust: "#trust",
  faq: "#faq",
  sources: "#sources",
} as const;

export const externalLinks = {
  officialSite: "https://goldapple.ru",
  hairCatalog: "https://goldapple.ru/volosy/do-50-na-produkty-dlja-volos",
  promotions: "https://goldapple.ru/offer/promobolshe",
  bonusProgram: "https://goldapple.ru/dostavka-i-oplata",
  siteDocuments: "https://goldapple.ru/dostavka-i-oplata",
  giftCards: "https://goldapple.ru",
  stores: "https://goldapple.ru",
  contacts: "https://goldapple.ru",
  privacyPolicy: "https://goldapple.ru/dostavka-i-oplata",
  vk: "https://vk.com/goldapple_ru",
  telegram: "https://t.me/goldapple",
  youtube: "https://www.youtube.com/channel/UC5vsg5-xOIT0N-jilqFSz_w",
  araviaHair: "https://goldapple.ru/brands/aravia-professional/volosy/aravia-professional",
  araviaMasks: "https://goldapple.ru/brands/aravia-professional/volosy/aravia-professional/maski",
  hairSpray: "https://goldapple.ru/19000272876-hair-spray/",
} as const;

export const localImages = {
  hero: "/images/hair-care/hero-hair-care.webp",
  audienceDry: "/images/hair-care/audience-dry-hair.webp",
  audienceColored: "/images/hair-care/audience-colored-hair.webp",
  audienceDamaged: "/images/hair-care/audience-damaged-hair.webp",
  audienceFrizzy: "/images/hair-care/audience-frizzy-hair.webp",
  stepCleanse: "/images/hair-care/step-cleanse.webp",
  stepMask: "/images/hair-care/step-mask.webp",
  stepProtect: "/images/hair-care/step-protect.webp",
} as const;

export const imageSources = [
  {
    label: "Hero image",
    href: "https://www.pexels.com/photo/brown-and-gray-lighted-pump-bottle-with-black-background-2189235/",
  },
  {
    label: "Audience cards image 1",
    href: "https://www.pexels.com/photo/close-up-shot-of-woman-with-brown-hair-in-white-background-11766341/",
  },
  {
    label: "Audience cards image 2",
    href: "https://www.pexels.com/photo/beautiful-woman-holding-her-hair-up-against-plain-white-background-24712932/",
  },
  {
    label: "Audience cards image 3",
    href: "https://www.pexels.com/photo/close-up-shot-of-wig-13074451/",
  },
  {
    label: "Audience cards image 4",
    href: "https://www.pexels.com/photo/woman-hand-holding-hair-23349909/",
  },
  {
    label: "Step image 1 (cleanse)",
    href: "https://www.pexels.com/photo/close-up-of-cosmetics-flasks-13186049/",
  },
  {
    label: "Step image 2 (mask)",
    href: "https://www.pexels.com/photo/a-bottle-of-essential-oil-on-a-black-background-18708753/",
  },
  {
    label: "Step image 3 (protect)",
    href: "https://www.pexels.com/photo/brown-and-gray-lighted-pump-bottle-with-black-background-2189235/",
  },
] as const;

export const productSourcePages = [
  externalLinks.hairCatalog,
  externalLinks.araviaHair,
  externalLinks.araviaMasks,
  externalLinks.hairSpray,
] as const;
