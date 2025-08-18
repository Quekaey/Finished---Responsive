import { motion } from "framer-motion";
import HeroSection4 from "../../assets/graphics/HeroSection4.png";
import { useModalContext } from "../../contexts/ModalContext";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function Hero() {
  const { setActiveModal } = useModalContext();

  return (
    <section
      aria-labelledby="hero-heading"
      style={{ contentVisibility: "auto" }}
      className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-24 py-42 max-xl:grid-cols-2 max-xl:gap-x-12 max-xl:px-16 max-xl:py-38 max-lg:px-8 max-lg:py-32 max-md:grid-cols-1 max-md:grid-rows-[repeat(2,auto)] max-md:gap-y-12 max-md:px-6 max-md:py-24"
      data-testid="hero-section"
    >
      {/* Text Column */}
      <div role="contentinfo" aria-labelledby="hero-heading">
        <motion.h1
          id="hero-heading"
          data-testid="hero-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter max-xl:mb-4 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
        >
          Grow Smarter. Start with{" "}
          <span className="gradient-text text-shadow-md">StartGrid</span>.
        </motion.h1>

        <motion.p
          data-testid="hero-subheading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="text-primary-100 mb-10 text-xl/loose font-light max-xl:mb-8 max-xl:text-lg/8 max-lg:text-base/loose"
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
          className="flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row"
          role="group"
          aria-label="Call to action buttons"
          data-testid="hero-cta-buttons"
        >
          {/* Launch Agency */}
          <motion.button
            type="button"
            aria-label="Open sign-up modal to launch agency"
            data-testid="hero-launch-agency-button"
            onClick={() => setActiveModal("sign-up")}
            className="btn-primary text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg/8 max-xl:text-base/loose">
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
            aria-label="Open sign-up modal to grow business"
            data-testid="hero-grow-business-button"
            onClick={() => setActiveModal("sign-up")}
            className="btn-primary text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg/8 max-xl:text-base/loose">
              Grow Business
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
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easing }}
          className="mt-12 flex gap-x-8 max-md:gap-x-6 max-sm:flex-col max-sm:gap-y-4"
          data-testid="hero-stats"
        >
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-3xl font-bold text-primary-500 mb-1">500+</div>
            <div className="text-sm text-primary-100">Agencies Launched</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <div className="text-3xl font-bold text-primary-500 mb-1">95%</div>
            <div className="text-sm text-primary-100">Success Rate</div>
          </motion.div>
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-primary-500 mb-1">24/7</div>
            <div className="text-sm text-primary-100">Support</div>
          </motion.div>
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
          className="absolute -top-4 -left-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-300/30 rounded-full blur-lg"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.img
          src={HeroSection4}
          alt="StartGrid platform visualization showing digital tools and growth strategies"
          className="img-hover w-full max-w-lg object-contain relative z-10"
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
