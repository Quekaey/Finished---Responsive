import { reviews } from "../../utils/content";

export default function Reviews() {
  return (
    <section 
      className="m-auto flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4 px-24 max-xl:gap-x-3 max-xl:px-16 max-lg:px-8 max-md:px-6"
      aria-labelledby="reviews-heading"
      data-testid="reviews-section"
    >
      <ul 
        className="flex"
        role="list"
        aria-label="User review avatars"
        data-testid="reviews-avatars"
      >
        {reviews.map((review) => (
          <li key={review.id} className="-mr-4 last:mr-0" role="listitem">
            <img
              className="img-hover border-primary-100 h-12 rounded-full border-2 max-xl:h-10 transition-properties"
              src={review.src}
              alt={`${review.alt} - satisfied customer`}
              data-testid={`review-avatar-${review.id}`}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
      <p 
        id="reviews-heading"
        className="text-primary-100 text-xl/loose font-light max-lg:text-base/loose"
        data-testid="reviews-text"
      >
        Trusted by{" "}
        <span className="text-primary-500 font-bold tracking-tighter">
          5,653+{" "}
        </span>
        productivity enthusiasts
      </p>
    </section>
  );
}
