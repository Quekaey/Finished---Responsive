import { useState } from "react";
import { testimonials as test } from "../../../utils/content";
import CaretUp from "../../icons/CaretUp";
import TestimonialList from "./TestimonialList";

export default function Testimonials() {
  const [expanded, setExpanded] = useState(true);

  return (
    <section 
      className="bg-gradient-to-top"
      aria-labelledby="testimonials-heading"
      data-testid="testimonials-section"
    >
      <div className="m-auto flex max-w-[90rem] flex-col items-center px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <div className="mb-20 flex max-w-[51.625rem] flex-col items-center gap-y-6 max-lg:mb-18 max-lg:gap-y-0">
          <p className="text-primary-1300 bg-primary-500 primary-glow w-min rounded-full px-4 py-2 text-base/8 max-lg:mb-8">
            Testimonials
          </p>
          <h2 
            id="testimonials-heading"
            className="text-primary-50 text-center text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:mb-4 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
            data-testid="testimonials-heading"
          >
            What People Are Saying <br />
            About StartGrid
          </h2>
          <p className="text-primary-100 px-28 text-center text-xl/loose font-light max-lg:text-lg/8 max-md:px-4">
            Real stories from founders and businesses we&apos;ve empowered
          </p>
        </div>
        <div 
          className="mb-20 grid grid-cols-3 gap-x-6 max-xl:gap-x-4 max-lg:mb-18 max-lg:grid-cols-2 max-sm:grid-cols-1"
          role="region"
          aria-label="Customer testimonials grid"
          data-testid="testimonials-grid"
        >
          <TestimonialList testimonials={test.slice(0, expanded ? 5 : 2)} />
          <TestimonialList testimonials={test.slice(5, expanded ? 10 : 7)} />
          <TestimonialList testimonials={test.slice(10, expanded ? 15 : 12)} />
        </div>
        <button
          className="btn-secondary text-primary-50 border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
          onClick={() => setExpanded((curr) => !curr)}
          aria-expanded={expanded}
          aria-controls="testimonials-grid"
          aria-label={expanded ? "Show fewer testimonials" : "Show more testimonials"}
          data-testid="testimonials-toggle-button"
          type="button"
        >
          {expanded ? "Show less" : "Show more"}
          <CaretUp
            className={`stroke-primary-50 group-hover:stroke-primary-1300 rotate-180 transition-all duration-300 ${expanded && "rotate-360"}`}
            alt={expanded ? "Show less icon" : "Show more icon"}
            width={2}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
