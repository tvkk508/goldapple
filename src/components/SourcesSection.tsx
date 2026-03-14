import { imageSources, productSourcePages } from "@/constants/siteConfig";

const SourcesSection = () => {
  return (
    <section id="sources" className="py-8 section-padding bg-[#070707] text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 mb-3">Источники изображений</p>

        <ul className="space-y-2 text-xs text-white/55">
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

          <li className="leading-relaxed">
            <span className="text-white/50">Product/source pages — </span>
            {productSourcePages.map((page, index) => (
              <span key={page}>
                <a
                  href={page}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/25 underline-offset-2 hover:text-white/85"
                >
                  {page}
                </a>
                {index < productSourcePages.length - 1 ? <span className="text-white/35">, </span> : null}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SourcesSection;
