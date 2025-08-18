import { logos } from "../../utils/content";

export default function Logos() {
  return (
    <section 
      className="bg-gradient-to-top"
      aria-labelledby="logos-heading"
      data-testid="logos-section"
    >
      <div className="m-auto max-w-[90rem] px-24 py-28 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <p 
          id="logos-heading"
          className="text-primary-50 last m-auto mb-20 text-center text-xl max-xl:text-lg/8 max-sm:mb-16"
          data-testid="logos-heading"
        >
          Organizations powered by{" "}
          <span className="font-bold tracking-tight">StartGrid</span>
        </p>
        <div 
          className="flex flex-col gap-y-16 max-md:flex-row max-md:items-center max-md:justify-around max-sm:gap-x-14"
          role="region"
          aria-label="Partner company logos"
          data-testid="logos-grid"
        >
          <ul 
            className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16"
            role="list"
            aria-label="First row of partner logos"
            data-testid="logos-row-1"
          >
            {logos.slice(0, 4).map((logo) => {
              return (
                <li key={logo.id} role="listitem">
                  <img
                    className="img-hover h-10 max-xl:h-8 max-lg:h-7 transition-properties"
                    src={logo.src}
                    alt={logo.alt}
                    data-testid={`logo-${logo.id}`}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              );
            })}
          </ul>
          <ul 
            className="flex flex-wrap justify-between max-md:flex-col max-md:gap-y-16"
            role="list"
            aria-label="Second row of partner logos"
            data-testid="logos-row-2"
          >
            {logos.slice(4).map((logo) => {
              return (
                <li key={logo.id} role="listitem">
                  <img
                    className="img-hover h-10 max-xl:h-8 max-lg:h-7 transition-properties"
                    src={logo.src}
                    alt={logo.alt}
                    data-testid={`logo-${logo.id}`}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
