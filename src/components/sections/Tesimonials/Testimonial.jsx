import { motion } from "framer-motion";
import Star from "../icons/Star";

export default function Testimonial({ testimonial, index }) {
  return (
    <motion.li
      className="card-hover rounded-2xl border border-primary-1200 bg-primary-1400/50 p-8 max-xl:p-6 max-lg:p-5 max-md:p-4"
      role="listitem"
      data-testid={`testimonial-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Rating */}
      <div
        className="mb-6 flex gap-x-1 max-xl:mb-5 max-lg:mb-4"
        role="img"
        aria-label={`${testimonial.rating} out of 5 stars`}
        data-testid="testimonial-rating"
      >
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="fill-primary-400 stroke-primary-400 h-5 w-5 max-xl:h-4 max-xl:w-4"
            alt="Star rating"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote
        className="mb-6 text-primary-100 text-lg/8 font-light max-xl:mb-5 max-xl:text-base/loose max-lg:mb-4 max-lg:text-base/loose max-md:text-sm/loose"
        data-testid="testimonial-description"
      >
        &ldquo;{testimonial.description}&rdquo;
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-x-3">
        <div>
          <p
            className="text-primary-50 text-base/6 font-semibold max-xl:text-sm/5"
            data-testid="testimonial-name"
          >
            {testimonial.name}
          </p>
          <p
            className="text-primary-200 text-sm/5 font-light max-xl:text-xs/4"
            data-testid="testimonial-title"
          >
            {testimonial.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
