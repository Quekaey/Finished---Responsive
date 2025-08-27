import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";
import { useModalContext } from "../../contexts/ModalContext";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function PartnershipOpportunities() {
  const { setActiveModal } = useModalContext();
  const [activePartnership, setActivePartnership] = useState("affiliate");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sectionRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - cycle through partnerships
      const partnerships = ["affiliate", "referral", "white-label", "strategic"];
      const currentIndex = partnerships.indexOf(activePartnership);
      const nextIndex = (currentIndex + 1) % partnerships.length;
      setActivePartnership(partnerships[nextIndex]);
      
      if (sectionRef.current) {
        sectionRef.current.style.transform = 'translateX(-5px)';
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.style.transform = 'translateX(0)';
          }
        }, 150);
      }
    }
    
    if (isRightSwipe) {
      // Swipe right - cycle through partnerships
      const partnerships = ["affiliate", "referral", "white-label", "strategic"];
      const currentIndex = partnerships.indexOf(activePartnership);
      const prevIndex = (currentIndex - 1 + partnerships.length) % partnerships.length;
      setActivePartnership(partnerships[prevIndex]);
      
      if (sectionRef.current) {
        sectionRef.current.style.transform = 'translateX(5px)';
        setTimeout(() => {
          if (sectionRef.current) {
            sectionRef.current.style.transform = 'translateX(0)';
          }
        }, 150);
      }
    }
  };

  const partnerships = [
    {
      id: "affiliate",
      title: "Affiliate Program",
      subtitle: "Earn commissions by promoting StartGrid",
      description: "Join our affiliate network and earn 20% commission on every successful referral. Perfect for marketers, influencers, and industry experts.",
      icon: "💰",
             benefits: [
         "20% commission per sale",
         "Marketing materials provided",
         "Recurring commission structure",
         "Dedicated affiliate support"
       ],
             requirements: [
         "Active online presence",
         "Relevant audience",
         "Professional reputation"
       ]
    },
    {
      id: "referral",
      title: "Referral Partnership",
      subtitle: "Simple referral rewards program",
      description: "Earn rewards for every business or founder you refer to StartGrid. No complex requirements, just simple referral bonuses.",
      icon: "🤝",
             benefits: [
         "$50-$100 per referral",
         "Instant payout options",
         "No minimum requirements",
         "Bonus for multiple referrals"
       ],
             requirements: [
         "Valid business contacts",
         "Basic referral information",
         "Professional relationship"
       ]
    },
    {
      id: "white-label",
      title: "White-Label Solutions",
      subtitle: "Resell StartGrid under your brand",
      description: "Offer StartGrid services under your own brand. Perfect for agencies, consultants, and service providers looking to expand their offerings.",
      icon: "🏷️",
      benefits: [
        "100% white-label solution",
        "Custom branding options",
        "Dedicated account manager",
        "Training and support",
        "Revenue sharing model"
      ],
             requirements: [
         "Established business",
         "Client base",
         "Service delivery capacity"
       ]
    },
    {
      id: "strategic",
      title: "Strategic Partnerships",
      subtitle: "Deep integration opportunities",
      description: "Form strategic partnerships for mutual growth. Ideal for complementary businesses, technology providers, and industry leaders.",
      icon: "🚀",
      benefits: [
        "Custom partnership terms",
        "Joint marketing opportunities",
        "Technology integration",
        "Revenue sharing",
        "Long-term growth focus"
      ],
             requirements: [
         "Strategic alignment",
         "Established market presence",
         "Innovation focus"
       ]
    }
  ];

  const currentPartnership = partnerships.find(p => p.id === activePartnership);

  return (
    <section
      ref={sectionRef}
      id="partnerships"
      aria-labelledby="partnerships-heading"
      style={{ contentVisibility: "auto" }}
      className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat scroll-smooth transition-transform duration-150 ease-out"
      data-testid="partnerships-section"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        {/* Blurred background */}
        <div
          className="absolute top-[50%] left-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:left-[90%] max-lg:h-[20rem] max-lg:w-[20rem]"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        />

        {/* Section Heading */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
          className="mb-20 text-center max-xl:mb-18 max-lg:mb-16"
        >
          <p className="text-primary-1300 bg-primary-500 primary-glow w-min mx-auto rounded-full px-4 py-2 text-base/8 max-lg:mb-6">
            Partnerships
          </p>
          <h2
            id="partnerships-heading"
            data-testid="partnerships-heading"
            className="mb-8 text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
          >
            Grow <span className="text-primary-500 primary-glow">Together</span>
          </h2>
          <p className="text-primary-100 max-w-3xl mx-auto text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
            Join our network of partners and unlock new revenue streams while helping businesses and founders succeed
          </p>
        </motion.div>

        {/* Partnership Type Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="mb-16 max-lg:mb-12"
        >
          <div className="flex justify-center gap-2 max-lg:gap-1 max-md:flex-wrap">
            {partnerships.map((partnership) => (
              <button
                key={partnership.id}
                onClick={() => setActivePartnership(partnership.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  activePartnership === partnership.id
                    ? "bg-primary-500 text-primary-1300 primary-glow shadow-lg"
                    : "text-primary-100 hover:text-primary-50 hover:bg-primary-1300/20 border border-primary-1300/20"
                } max-md:px-4 max-md:py-2.5 max-md:text-xs`}
                aria-label={`Show ${partnership.title} details`}
              >
                {partnership.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Partnership Details */}
        <motion.div
          key={activePartnership}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 gap-x-20 gap-y-16 max-xl:gap-x-16 max-lg:grid-cols-1 max-lg:gap-y-12 max-md:gap-y-8">
            {/* Left Column - Partnership Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: easing }}
            >
              <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5 max-sm:p-4">
                <div className="text-6xl mb-8 max-md:text-5xl max-sm:text-4xl">{currentPartnership.icon}</div>
                <h3 className="text-3xl font-semibold mb-6 text-primary-50 max-lg:text-2xl max-md:text-xl max-sm:text-lg">
                  {currentPartnership.title}
                </h3>
                <p className="text-primary-400 font-medium mb-6 text-lg max-lg:text-base max-sm:text-sm">
                  {currentPartnership.subtitle}
                </p>
                <p className="text-primary-100 mb-10 text-lg/loose font-light max-lg:text-base/loose max-sm:text-sm/loose">
                  {currentPartnership.description}
                </p>
                
                {/* Requirements */}
                <div className="mb-10 max-sm:mb-8">
                  <h4 className="text-primary-50 font-semibold mb-4 text-lg max-lg:text-base max-sm:text-sm">Requirements:</h4>
                  <ul className="space-y-3 max-sm:space-y-2">
                    {currentPartnership.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-3 text-primary-100 max-sm:gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        <span className="max-sm:text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easing }}
            >
              <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5 max-sm:p-4">
                <h4 className="text-2xl font-semibold mb-8 text-primary-50 max-lg:text-xl max-md:text-lg max-sm:text-base">
                  What You Get
                </h4>
                <div className="space-y-4 max-sm:space-y-3">
                  {currentPartnership.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: easing }}
                      className="flex items-start gap-4 p-4 bg-primary-1300/10 rounded-xl border border-primary-1300/20 max-sm:gap-3 max-sm:p-3"
                    >
                      <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 max-sm:w-5 max-sm:h-5">
                        <span className="text-primary-1300 text-sm font-bold max-sm:text-xs">✓</span>
                      </div>
                      <p className="text-primary-100 font-medium max-lg:text-sm max-sm:text-xs">
                        {benefit}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easing }}
          className="mt-20 text-center max-lg:mt-16"
        >
          <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5">
            <h3 className="text-2xl font-semibold mb-4 text-primary-50 max-lg:text-xl max-md:text-lg">
              Ready to Partner with StartGrid?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-lg/loose font-light max-lg:text-base/loose">
              Join hundreds of successful partners who are already growing their businesses with StartGrid
            </p>
            <div className="flex justify-center">
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.6, ease: easing }}
                onClick={() => setActiveModal("partnership-inquiry")}
                className="btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover active:scale-95 transition-transform group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 max-md:px-6 max-md:py-4"
                aria-label="Inquire about partnership opportunities"
                type="button"
              >
                <span className="text-lg/8 max-xl:text-base/loose">
                  Discuss Partnership
                </span>
                <div className="w-5 max-xl:w-4 max-sm:w-4" aria-hidden="true">
                  <ArrowRightLine
                    alt="Arrow right line"
                    className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
                    width={2.5}
                  />
                  <ArrowRight
                    alt="Arrow right icon"
                    className="stroke-primary-1300 inline w-5 max-xl:w-4 max-sm:w-4"
                    width={2}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
