import { motion } from "motion/react";
import HeroSection4 from "../../assets/graphics/HeroSection4.png";
import { useModalContext } from "../../contexts/ModalContext";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function Hero() {
  const { setActiveModal } = useModalContext();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{ contentVisibility: "auto" }}
      className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-20 px-24 py-32 max-xl:grid-cols-2 max-xl:gap-x-16 max-xl:px-16 max-xl:py-28 max-lg:px-8 max-lg:py-24 max-md:grid-cols-1 max-md:grid-rows-[repeat(2,auto)] max-md:gap-y-16 max-md:px-6 max-md:py-20 max-sm:py-16 max-sm:gap-y-12"
      data-testid="hero-section"
    >
      {/* Text Column */}
      <div role="contentinfo" aria-labelledby="hero-heading" className="max-md:text-center">
        <motion.h1
          id="hero-heading"
          data-testid="hero-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-primary-50 mb-8 text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:mb-6 max-lg:tracking-tight max-md:text-3xl/10 max-md:mb-6 max-sm:text-2xl/8 max-sm:mb-4 max-sm:tracking-tight"
        >
          Grow Smarter. Start with{" "}
          <span className="gradient-text text-shadow-md">StartGrid</span>.
        </motion.h1>

        <motion.p
          data-testid="hero-subheading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="text-primary-100 mb-12 text-xl/loose font-light max-xl:mb-10 max-xl:text-lg/8 max-lg:text-base/loose max-lg:mb-8 max-md:text-base/loose max-md:mb-8 max-sm:text-sm/loose max-sm:mb-6"
          role="doc-subtitle"
        >
          Your digital launchpad! empowering founders and businesses with expert
          guidance, AI-driven tools, and smart strategies to accelerate online
          growth.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: easing }}
          className="flex flex-col items-center gap-x-6 gap-y-6 sm:flex-row max-md:gap-y-4"
          role="group"
          aria-label="Call to action buttons"
          data-testid="hero-cta-buttons"
        >
          {/* Launch Agency */}
          <motion.button
            type="button"
            aria-label="Open launch agency modal"
            data-testid="hero-launch-agency-button"
            onClick={() => setActiveModal("launch-agency")}
            className="btn-primary text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 max-md:px-6 max-md:py-3.5 max-sm:px-5 max-sm:py-3 max-sm:text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg/8 max-xl:text-base/loose max-md:text-base max-sm:text-sm">
              Launch Agency
            </span>
            <div className="w-5 max-xl:w-4 max-sm:hidden" aria-hidden="true">
              <ArrowRightLine
                alt="Arrow right line"
                className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
                width={2.5}
              />
              <ArrowRight
                alt="Arrow right icon"
                className="stroke-primary-1300 inline w-5 max-xl:w-4"
                width={2}
              />
            </div>
          </motion.button>

          {/* Grow Business */}
          <motion.button
            type="button"
            aria-label="Open grow business modal"
            data-testid="hero-grow-business-button"
            onClick={() => setActiveModal("grow-business")}
            className="btn-primary text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 max-md:px-6 max-md:py-3.5 max-sm:px-5 max-sm:py-3 max-sm:text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg/8 max-xl:text-base/loose max-md:text-base max-sm:text-sm">
              Grow Business
            </span>
            <div className="w-5 max-xl:w-4 max-sm:hidden" aria-hidden="true">
              <ArrowRightLine
                alt="Arrow right line"
                className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
                width={2}
              />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Image Column */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8, ease: easing }}
        className="relative flex justify-center"
        data-testid="hero-image-container"
      >
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-float"
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-300/30 rounded-full blur-lg animate-float-delayed"
        />
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/4 -right-8 w-4 h-4 bg-primary-400 rounded-full opacity-60 animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-6 w-3 h-3 bg-primary-500 rounded-full opacity-40 animate-float-delayed"
        />
        
        <motion.img
          src={HeroSection4}
          alt="StartGrid platform visualization showing digital tools and growth strategies"
          className="img-hover w-full max-w-lg object-contain relative z-10 hover-lift"
          data-testid="hero-image"
          loading="eager"
          decoding="async"
          whileHover={{ 
            scale: 1.02,
            rotateY: 5
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300 
          }}
        />
      </motion.div>
    </section>
  );
}
