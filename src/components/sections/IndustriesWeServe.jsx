import { motion } from "framer-motion";
import { useState, useRef } from "react";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function IndustriesWeServe() {
  const [activeIndustry, setActiveIndustry] = useState("ecommerce");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sectionRef = useRef(null);

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
      const industries = ["ecommerce", "saas", "healthcare", "real-estate", "education", "consulting"];
      const currentIndex = industries.indexOf(activeIndustry);
      const nextIndex = (currentIndex + 1) % industries.length;
      setActiveIndustry(industries[nextIndex]);
      
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
      const industries = ["ecommerce", "saas", "healthcare", "real-estate", "education", "consulting"];
      const currentIndex = industries.indexOf(activeIndustry);
      const prevIndex = (currentIndex - 1 + industries.length) % industries.length;
      setActiveIndustry(industries[prevIndex]);
      
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

  const industries = [
    {
      id: "ecommerce",
      title: "E-commerce & Retail",
      subtitle: "Drive online sales and customer engagement",
      description: "Transform your retail business with high-converting online stores, seamless customer experiences, and data-driven marketing strategies.",
      icon: "🛒",
      challenges: [
        "Low conversion rates",
        "Poor mobile experience",
        "Limited customer insights",
        "Ineffective marketing campaigns"
      ],
      solutions: [
        "High-conversion website design",
        "Mobile-first optimization",
        "Customer analytics & insights",
        "Targeted marketing strategies"
      ],
      results: [
        "Increase conversion rates by 40%+",
        "Improve mobile user experience",
        "Better customer understanding",
        "Higher ROI on marketing spend"
      ]
    },
    {
      id: "saas",
      title: "SaaS & Technology",
      subtitle: "Scale your software business",
      description: "Accelerate growth with professional branding, effective marketing, and optimized user acquisition strategies.",
      icon: "💻",
      challenges: [
        "Complex product messaging",
        "Low user acquisition",
        "Poor brand positioning",
        "Ineffective onboarding"
      ],
      solutions: [
        "Clear value proposition design",
        "User acquisition strategies",
        "Professional brand identity",
        "Optimized user experience"
      ],
      results: [
        "Clearer product positioning",
        "Higher user acquisition rates",
        "Stronger brand recognition",
        "Improved user retention"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare & Wellness",
      subtitle: "Build trust in healthcare services",
      description: "Establish credibility and trust with professional websites, patient education content, and HIPAA-compliant digital solutions.",
      icon: "🏥",
      challenges: [
        "Building patient trust online",
        "Complex service explanations",
        "HIPAA compliance concerns",
        "Limited online presence"
      ],
      solutions: [
        "Trust-building website design",
        "Patient education content",
        "HIPAA-compliant solutions",
        "Professional online presence"
      ],
      results: [
        "Increased patient confidence",
        "Better service understanding",
        "Compliance assurance",
        "Enhanced online credibility"
      ]
    },
    {
      id: "real-estate",
      title: "Real Estate & Property",
      subtitle: "Showcase properties effectively",
      description: "Present your properties professionally with stunning visuals, virtual tours, and lead generation systems.",
      icon: "🏠",
      challenges: [
        "Poor property presentation",
        "Limited lead generation",
        "Outdated marketing methods",
        "Weak online presence"
      ],
      solutions: [
        "Professional property websites",
        "Lead generation systems",
        "Modern marketing strategies",
        "Virtual tour integration"
      ],
      results: [
        "Better property presentation",
        "More qualified leads",
        "Modern marketing approach",
        "Stronger online presence"
      ]
    },
    {
      id: "education",
      title: "Education & Training",
      subtitle: "Expand your educational reach",
      description: "Reach more students with professional online platforms, engaging content, and effective enrollment systems.",
      icon: "🎓",
      challenges: [
        "Limited student reach",
        "Poor online learning experience",
        "Ineffective enrollment process",
        "Weak brand presence"
      ],
      solutions: [
        "Professional learning platforms",
        "Engaging content design",
        "Streamlined enrollment",
        "Strong brand development"
      ],
      results: [
        "Wider student reach",
        "Better learning experience",
        "Higher enrollment rates",
        "Stronger brand recognition"
      ]
    },
    {
      id: "consulting",
      title: "Consulting & Services",
      subtitle: "Establish thought leadership",
      description: "Position yourself as an industry expert with professional branding, content marketing, and lead generation systems.",
      icon: "💼",
      challenges: [
        "Weak online credibility",
        "Limited lead generation",
        "Poor brand positioning",
        "Ineffective marketing"
      ],
      solutions: [
        "Professional brand identity",
        "Content marketing strategies",
        "Lead generation systems",
        "Thought leadership positioning"
      ],
      results: [
        "Enhanced online credibility",
        "More qualified leads",
        "Stronger brand positioning",
        "Industry recognition"
      ]
    }
  ];

  const currentIndustry = industries.find(i => i.id === activeIndustry);

  return (
    <section
      ref={sectionRef}
      id="industries"
      aria-labelledby="industries-heading"
      style={{ contentVisibility: "auto" }}
      className="bg-primary-1400 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat scroll-smooth transition-transform duration-150 ease-out"
      data-testid="industries-section"
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
            Industries
          </p>
          <h2
            id="industries-heading"
            data-testid="industries-heading"
            className="mb-8 text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
          >
            Industries We <span className="text-primary-500 primary-glow">Serve</span>
          </h2>
          <p className="text-primary-100 max-w-3xl mx-auto text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
            From e-commerce to healthcare, we understand the unique challenges of your industry and deliver tailored digital solutions
          </p>
        </motion.div>

        {/* Industry Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="mb-16 max-lg:mb-12 max-md:mb-10"
        >
          <div className="flex justify-center gap-2 max-lg:gap-1 max-md:flex-wrap max-md:gap-2 max-sm:gap-1.5">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeIndustry === industry.id
                    ? "bg-primary-500 text-primary-1300 primary-glow shadow-lg"
                    : "text-primary-100 hover:text-primary-50 hover:bg-primary-1300/20 border border-primary-1300/20"
                } max-md:px-3 max-md:py-2 max-md:text-xs max-sm:px-2.5 max-sm:py-1.5 max-sm:text-xs`}
                aria-label={`Show ${industry.title} details`}
              >
                {industry.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Industry Details */}
        <motion.div
          key={activeIndustry}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-x-12 gap-y-12 max-xl:gap-x-8 max-lg:grid-cols-1 max-lg:gap-y-10 max-md:gap-y-8">
            {/* Left Column - Industry Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: easing }}
              className="col-span-1"
            >
              <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5 max-sm:p-4">
                <div className="text-6xl mb-8 max-md:mb-6 max-sm:mb-4">{currentIndustry.icon}</div>
                <h3 className="text-3xl font-semibold mb-6 text-primary-50 max-lg:text-2xl max-md:text-xl max-sm:text-lg">
                  {currentIndustry.title}
                </h3>
                <p className="text-primary-400 font-medium mb-6 text-lg max-lg:text-base max-sm:text-sm">
                  {currentIndustry.subtitle}
                </p>
                <p className="text-primary-100 mb-8 text-lg/loose font-light max-lg:text-base/loose max-sm:text-sm/loose">
                  {currentIndustry.description}
                </p>
              </div>
            </motion.div>

            {/* Middle Column - Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easing }}
              className="col-span-1"
            >
              <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5 max-sm:p-4">
                <h4 className="text-2xl font-semibold mb-8 text-primary-50 max-lg:text-xl max-md:text-lg max-sm:text-base flex items-center gap-3 max-sm:gap-2">
                  <span className="text-red-400">⚠️</span>
                  Common Challenges
                </h4>
                <div className="space-y-4 max-sm:space-y-3">
                  {currentIndustry.challenges.map((challenge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: easing }}
                      className="flex items-start gap-3 p-4 bg-red-500/5 rounded-xl border border-red-500/20 max-sm:p-3 max-sm:gap-2"
                    >
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-primary-100 font-medium max-lg:text-sm max-sm:text-xs">
                        {challenge}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Solutions & Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: easing }}
              className="col-span-1"
            >
              <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5 max-sm:p-4">
                <h4 className="text-2xl font-semibold mb-8 text-primary-50 max-lg:text-xl max-md:text-lg max-sm:text-base flex items-center gap-3 max-sm:gap-2">
                  <span className="text-green-400">✅</span>
                  Our Solutions
                </h4>
                <div className="space-y-4 mb-10 max-sm:space-y-3 max-sm:mb-8">
                  {currentIndustry.solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6, ease: easing }}
                      className="flex items-start gap-3 p-4 bg-green-500/5 rounded-xl border border-green-500/20 max-sm:p-3 max-sm:gap-2"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-primary-100 font-medium max-lg:text-sm max-sm:text-xs">
                        {solution}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <h5 className="text-xl font-semibold mb-6 text-primary-50 max-lg:text-lg max-md:text-base max-sm:text-sm flex items-center gap-3 max-sm:gap-2">
                  <span className="text-blue-400">📈</span>
                  Expected Results
                </h5>
                <div className="space-y-4 max-sm:space-y-3">
                  {currentIndustry.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.6, ease: easing }}
                      className="flex items-start gap-3 p-4 bg-blue-500/5 rounded-xl border border-blue-500/20 max-sm:p-3 max-sm:gap-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-primary-100 font-medium max-lg:text-sm max-sm:text-xs">
                        {result}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}