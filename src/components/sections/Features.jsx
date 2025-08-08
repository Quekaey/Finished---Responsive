import { motion } from "framer-motion";
import SmartOrganization from "../../assets/graphics/SmartOrganization.webp";
import ContextualReminders from "../../assets/graphics/ContextualReminders.webp";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";
import { useModalContext } from "../../contexts/ModalContext";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function Features() {
  const { setActiveModal } = useModalContext();

  return (
    <section
      aria-labelledby="features-heading"
      style={{ contentVisibility: "auto" }}
      className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat"
    >
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        {/* Blurred background */}
        <div
          className="absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem]"
          style={{ willChange: "transform" }}
        />

        {/* Section Heading */}
        <motion.h2
          id="features-heading"
          data-testid="features-heading"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-28 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-18 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
        >
          StartGrid is a hybrid digital <br />
          <span className="text-primary-500 primary-glow">Empowerment </span>
          platform.
        </motion.h2>

        {/* Agency Founders */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="mb-20 grid grid-cols-2 items-center gap-x-16 max-xl:mb-12 max-md:mb-16 max-md:grid-cols-1 max-md:gap-y-10"
        >
          <figure className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center">
            <img
              src={SmartOrganization}
              alt="Smart Organization graphic"
              loading="lazy"
              className="h-auto w-full"
              data-testid="features-smart-org-graphic"
            />
          </figure>

          <div className="z-1 max-w-lg justify-self-end max-md:row-start-1 max-md:max-w-max">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: easing }}
              className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight"
              data-testid="features-agency-title"
            >
              For Agency Founders
            </motion.p>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easing }}
              className="text-primary-100 mb-6 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
              data-testid="features-agency-desc"
            >
              Start Your Own Digital Agency without starting from scratch. No
              more guesswork. We give you everything you need to launch:
            </motion.p>

            <motion.ul
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: easing }}
              className="text-primary-100 mb-6 list-inside list-disc space-y-2 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
              data-testid="features-agency-list"
            >
              <li>Proven agency playbooks</li>
              <li>Reusable project templates</li>
              <li>Ongoing mentorship and support</li>
              <li>A trusted brand ecosystem</li>
            </motion.ul>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6, ease: easing }}
              className="text-primary-100 mb-8 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
            >
              You stay in control. You own the agency. We help you launch smart
              and grow fast.
            </motion.p>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6, ease: easing }}
            >
              <button
                type="button"
                aria-label="Join StartGrid Launch Program"
                data-testid="features-agency-cta"
                onClick={() => setActiveModal("sign-up")}
                className="group bg-primary-500 text-primary-1300 border-primary-500 hover:bg-primary-50 hover:border-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
              >
                <span className="text-lg/8 max-xl:text-base/loose">
                  Join StartGrid Launch Program
                </span>
                <div className="w-5 max-xl:w-4 max-sm:hidden">
                  <ArrowRightLine
                    alt="Arrow right line"
                    className="transition-properties stroke-primary-1300 -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
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
        </motion.div>

        {/* Business Clients */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easing }}
          className="grid grid-cols-2 items-center gap-x-16 max-md:grid-cols-1 max-md:gap-y-10"
        >
          <div className="max-w-lg justify-self-start max-md:max-w-max">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6, ease: easing }}
              className="mb-8 text-5xl/16 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-4xl/10 max-lg:mb-4 max-lg:text-3xl/12 max-lg:tracking-tighter max-sm:text-2xl/8 max-sm:tracking-tight"
              data-testid="features-client-title"
            >
              For Business Clients
            </motion.p>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6, ease: easing }}
              className="text-primary-100 mb-6 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
              data-testid="features-client-desc"
            >
              Need a Website, Branding, or Online Strategy? We’ve Got You. Our
              in-house agency helps businesses like yours grow online with:
            </motion.p>

            <motion.ul
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6, ease: easing }}
              className="text-primary-100 mb-6 list-inside list-disc space-y-2 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
              data-testid="features-client-list"
            >
              <li>Conversion-focused websites</li>
              <li>Brand identity design</li>
              <li>eCommerce and marketing integrations</li>
              <li>Ongoing web support and optimization</li>
            </motion.ul>

            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: easing }}
              className="text-primary-100 mb-8 text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose"
            >
              We deliver clarity, creativity, and code fast.
            </motion.p>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6, ease: easing }}
            >
              <button
                type="button"
                aria-label="Request a Free Consultation"
                data-testid="features-client-cta"
                onClick={() => setActiveModal("sign-up")}
                className="group bg-primary-500 text-primary-1300 border-primary-500 hover:bg-primary-50 hover:border-primary-50 focus:ring-primary-200 transition-properties primary-glow-hover primary-glow flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3"
              >
                <span className="text-lg/8 max-xl:text-base/loose">
                  Request a Free Consultation
                </span>
                <div className="w-5 max-xl:w-4 max-sm:hidden">
                  <ArrowRightLine
                    alt="Arrow right line"
                    className="transition-properties stroke-primary-1300 -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
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

          <figure className="z-1">
            <img
              src={ContextualReminders}
              alt="Contextual Reminders graphic"
              loading="lazy"
              className="max-h-[45rem] max-md:max-w-[90%] max-md:justify-self-center"
              data-testid="features-reminders-graphic"
            />
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
