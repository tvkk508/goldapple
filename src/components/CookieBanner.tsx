import { useEffect, useState } from "react";
import { externalLinks } from "@/constants/siteConfig";

const COOKIE_KEY = "ga-hair-care-cookie-consent";
const SESSION_HIDE_KEY = "ga-hair-care-cookie-banner-hidden";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY) === "accepted";
    const hiddenForSession = sessionStorage.getItem(SESSION_HIDE_KEY) === "1";

    if (!accepted && !hiddenForSession) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const closeForSession = () => {
    sessionStorage.setItem(SESSION_HIDE_KEY, "1");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] md:w-auto md:max-w-[860px] z-[90]">
      <div className="rounded-2xl border border-border bg-background/95 backdrop-blur px-4 py-4 md:px-6 md:py-5 card-shadow">
        <p className="text-sm text-foreground leading-relaxed">
          Мы используем cookie, IP-адрес и технические метаданные для аналитики, улучшения сервиса и персонализации
          опыта на сайте.
          <a
            href={externalLinks.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline decoration-border underline-offset-2 hover:text-primary"
          >
            Политика обработки ПД
          </a>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={acceptCookies} className="brand-button px-5 py-2.5 text-[11px] md:text-xs">
            Принять
          </button>
          <button
            type="button"
            onClick={closeForSession}
            className="brand-button-secondary px-5 py-2.5 text-[11px] md:text-xs"
          >
            Позже
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
