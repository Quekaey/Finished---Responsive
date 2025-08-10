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
    >
      {/* Text Column */}
      <div>
        <motion.h1
          id="hero-heading"
          data-testid="hero-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
          className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter max-xl:mb-4 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
        >
          Grow Smarter. Start with StartGrid.
        </motion.h1>

        <motion.p
          data-testid="hero-subheading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="text-primary-100 mb-10 text-xl/loose font-light max-xl:mb-8 max-xl:text-lg/8 max-lg:text-base/loose"
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
        >
          {/* Launch Agency */}
          <button
            type="button"
            aria-label="Open sign-up modal to launch agency"
            data-testid="hero-launch-agency-button"
            onClick={() => setActiveModal("sign-up")}
            className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
          >
            <span className="text-lg/8 max-xl:text-base/loose">
              Launch Agency
            </span>
            <div className="w-5 max-xl:w-4 max-sm:hidden">
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
          </button>

          {/* Grow Business */}
          <button
            type="button"
            aria-label="Open sign-up modal to grow business"
            data-testid="hero-grow-business-button"
            onClick={() => setActiveModal("sign-up")}
            className="text-primary-1300 bg-primary-500 border-primary-500 hover:border-primary-50 hover:bg-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
          >
            <span className="text-lg/8 max-xl:text-base/loose">
              Grow Business
            </span>
            <div className="w-5 max-xl:w-4 max-sm:hidden">
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
          </button>
        </motion.div>
      </div>

      {/* Graphic Column */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: easing }}
        className="relative"
      >
        <div
          className="bg-primary-1300 absolute inset-0 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
        />

        <img
          src={HeroSection4}
          alt="Hero graphic of an iPhone showing NoteFlows note summarizer"
          loading="lazy"
          data-testid="hero-graphic"
          className="max-md:max-h-auto relative max-h-[30rem] justify-self-end max-md:max-w-[90%] max-md:justify-self-center max-sm:max-w-full"
        />
      </motion.div>
    </section>
  );
}
