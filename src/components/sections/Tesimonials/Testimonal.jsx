import { motion } from "motion/react";
import Star from "../../icons/Star";

export default function Testimonal({ test }) {
  return (
    <motion.li
      className="card-hover bg-primary-1300 rounded-2xl px-8 py-10 max-xl:px-6 max-md:py-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "100%" }}
      transition={{
        opacity: { duration: 0.75, ease: "easeInOut" },
      }}
      role="listitem"
      data-testid={`testimonial-${test.id}`}
    >
      <div 
        className="flex gap-x-1 pb-8 max-md:pb-6"
        role="img"
        aria-label={`${test.rating} out of 5 stars`}
        data-testid="testimonial-rating"
      >
        {Array.from({ length: test.rating }).map((_, i) => (
          <Star 
            alt="Filled star" 
            className="fill-primary-100" 
            key={i}
            aria-hidden="true"
          />
        ))}
        {Array.from({ length: 5 - test.rating }).map((_, i) => (
          <Star 
            alt="Empty star" 
            key={i}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote 
        className="text-primary-50 pb-16 text-lg/loose font-light max-xl:text-base/loose max-md:pb-12"
        data-testid="testimonial-description"
      >
        {test.description}
      </blockquote>
      <div className="flex items-center">
        <div>
          <p 
            className="text-primary-500 text-xl/7 font-bold tracking-tight max-xl:text-lg/8"
            data-testid="testimonial-name"
          >
            {test.name}
          </p>
          <p 
            className="text-primary-75 text-base/loose tracking-tight max-xl:text-sm"
            data-testid="testimonial-title"
          >
            {test.title}
          </p>
        </div>
      </div>
    </motion.li>
  );
}
