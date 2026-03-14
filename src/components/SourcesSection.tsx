import { useEffect, useState } from "react";
import { imageSources, sectionAnchors } from "@/constants/siteConfig";

const SourcesSection = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === sectionAnchors.sources) {
        setOpen(true);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="sources" className="py-8 section-padding bg-[#070707] text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="text-[11px] uppercase tracking-[0.16em] text-white/45 hover:text-white/75"
        >
          {open ? "Скрыть источники изображений" : "Показать источники изображений"}
        </button>

        {open ? (
          <ul className="mt-4 space-y-2 text-xs text-white/55">
            {imageSources.map((source) => (
              <li key={source.href} className="leading-relaxed">
                <span className="text-white/50">{source.label} — </span>
                <a
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/25 underline-offset-2 hover:text-white/85"
                >
                  {source.href}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default SourcesSection;
