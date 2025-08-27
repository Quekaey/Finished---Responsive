import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";
import { useModalContext } from "../../contexts/ModalContext";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function HowItWorks() {
  const { setActiveModal } = useModalContext();
  const [activeTab, setActiveTab] = useState("agency");
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
      // Swipe left - switch to next tab
      setActiveTab(activeTab === "agency" ? "business" : "agency");
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
      // Swipe right - switch to previous tab
      setActiveTab(activeTab === "agency" ? "business" : "agency");
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

  const agencySteps = [
    {
      id: 1,
      title: "Assessment & Planning",
      description: "We evaluate your goals, experience, and market opportunities to create a personalized launch strategy.",
      duration: "Week 1",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Toolkit Setup",
      description: "Get access to our proven agency playbooks, templates, and AI-powered organization tools.",
      duration: "Week 1-2",
      icon: "🛠️"
    },
    {
      id: 3,
      title: "Brand & Identity",
      description: "Establish your agency brand with professional logos, websites, and marketing materials.",
      duration: "Week 2-3",
      icon: "🎨"
    },
    {
      id: 4,
      title: "Launch & Support",
      description: "Go live with ongoing mentorship, client acquisition strategies, and operational support.",
      duration: "Week 3-4",
      icon: "🚀"
    }
  ];

  const businessSteps = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We analyze your business needs and create a customized digital growth strategy.",
      duration: "Days 1-3",
      icon: "🔍"
    },
    {
      id: 2,
      title: "Design & Development",
      description: "Our team builds your high-conversion website and brand identity with modern design principles.",
      duration: "Days 4-14",
      icon: "💻"
    },
    {
      id: 3,
      title: "Launch & Optimization",
      description: "Go live with ongoing support, performance monitoring, and continuous optimization.",
      duration: "Days 15+",
      icon: "📈"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      style={{ contentVisibility: "auto" }}
      className="bg-primary-1400 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat scroll-smooth transition-transform duration-150 ease-out"
      data-testid="how-it-works-section"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="text-primary-50 relative m-auto max-w-[90rem] px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        {/* Blurred background */}
        <div
          className="absolute top-[50%] right-[100%] h-[62.5rem] w-[62.5rem] -translate-[50%] rounded-full opacity-100 blur-[40rem] max-xl:h-[35rem] max-xl:w-[35rem] max-xl:blur-[10rem] max-lg:right-[90%] max-lg:h-[20rem] max-lg:w-[20rem]"
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
            Process
          </p>
          <h2
            id="how-it-works-heading"
            data-testid="how-it-works-heading"
            className="mb-8 text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
          >
            How StartGrid <span className="text-primary-500 primary-glow">Works</span>
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
            Simple, proven processes that get you from idea to execution in weeks, not months
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="mb-16 flex justify-center max-lg:mb-12"
        >
          <div className="bg-primary-1300/10 backdrop-blur-sm rounded-full p-2 border border-primary-1300/20">
            <button
              onClick={() => setActiveTab("agency")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "agency"
                  ? "bg-primary-500 text-primary-1300 primary-glow shadow-lg"
                  : "text-primary-100 hover:text-primary-50 hover:bg-primary-1300/20"
              } max-md:px-6 max-md:py-2.5`}
              aria-label="Show agency founder process"
            >
              Agency Founders
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "business"
                  ? "bg-primary-500 text-primary-1300 primary-glow shadow-lg"
                  : "text-primary-100 hover:text-primary-50 hover:bg-primary-1300/20"
              } max-md:px-6 max-md:py-2.5`}
              aria-label="Show business growth process"
            >
              Business Growth
            </button>
          </div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="max-w-6xl mx-auto"
        >
          {/* Progress Indicator */}
          <div className="mb-16 text-center max-lg:mb-12 max-md:mb-10">
            <div className="inline-flex items-center gap-3 bg-primary-1300/10 backdrop-blur-sm rounded-full px-6 py-3 border border-primary-1300/20">
              <span className="text-primary-400 text-sm font-medium">
                {activeTab === "agency" ? "4-Step Process" : "3-Step Process"}
              </span>
              <span className="text-primary-500">•</span>
              <span className="text-primary-100 text-sm">
                {activeTab === "agency" ? "Launch in 4 weeks" : "Results in 2 weeks"}
              </span>
            </div>
          </div>
          {activeTab === "agency" ? (
            <div className="grid grid-cols-2 gap-x-20 gap-y-16 max-xl:gap-x-16 max-lg:grid-cols-1 max-lg:gap-y-12">
              {agencySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: easing }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-primary-1300 font-bold text-2xl primary-glow shadow-lg max-md:w-12 max-md:h-12 max-md:text-lg max-md:-top-4 max-md:-left-4">
                    {step.id}
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 pt-12 pb-10 max-lg:p-6 max-lg:pt-10 max-lg:pb-8 max-md:p-5 max-md:pt-8 max-md:pb-6">
                    <div className="text-4xl mb-6 max-md:mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary-50 max-lg:text-xl max-md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-primary-100 mb-6 text-lg/loose font-light max-lg:text-base/loose">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm">
                      <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                      {step.duration}
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < agencySteps.length - 1 && (
                    <div className="absolute top-1/2 -right-10 w-20 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 max-xl:hidden"></div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-x-16 gap-y-16 max-xl:gap-x-12 max-lg:grid-cols-1 max-lg:gap-y-12">
              {businessSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: easing }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-primary-1300 font-bold text-2xl primary-glow shadow-lg max-md:w-12 max-md:h-12 max-md:text-lg max-md:-top-4 max-md:-left-4">
                    {step.id}
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 pt-12 pb-10 max-lg:p-6 max-lg:pt-10 max-lg:pb-8 max-md:p-5 max-md:pt-8 max-md:pb-6 text-center">
                    <div className="text-4xl mb-6 max-md:mb-4">{step.icon}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary-50 max-lg:text-xl max-md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-primary-100 mb-6 text-lg/loose font-light max-lg:text-base/loose">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary-400 font-medium text-sm">
                      <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                      {step.duration}
                    </div>
                  </div>

                  {/* Connection Line */}
                  {index < businessSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 max-xl:hidden"></div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easing }}
          className="mt-20 text-center max-lg:mt-16"
        >
          <h3 className="text-3xl font-semibold mb-6 text-primary-50 max-lg:text-2xl max-md:text-xl">
            Ready to {activeTab === "agency" ? "Launch Your Agency" : "Grow Your Business"}?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg/loose font-light max-lg:text-base/loose">
            {activeTab === "agency" 
              ? "Join hundreds of successful founders who've launched their agencies with StartGrid"
              : "Get professional digital services that actually drive results and grow your business"
            }
          </p>
          <div className="flex justify-center gap-4 max-md:flex-col max-md:items-center">
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6, ease: easing }}
              onClick={() => setActiveModal(activeTab === "agency" ? "launch-agency" : "grow-business")}
              className="btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover active:scale-95 transition-transform group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 max-md:px-6 max-md:py-4"
              aria-label={`Open ${activeTab === "agency" ? "launch agency" : "grow business"} modal`}
              type="button"
            >
              <span className="text-lg/8 max-xl:text-base/loose">
                {activeTab === "agency" ? "Start Your Agency" : "Grow Your Business"}
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
        </motion.div>
      </div>
    </section>
  );
}
