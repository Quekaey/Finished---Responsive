import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ArrowRight from "../icons/ArrowRight";
import { useModalContext } from "../../contexts/ModalContext";

const easing = [0.6, -0.05, 0.01, 0.99];

export default function ToolsAndResources() {
  const { setActiveModal } = useModalContext();
  const [activeCategory, setActiveCategory] = useState("calculators");
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
      const categories = ["calculators", "templates", "resources", "tools"];
      const currentIndex = categories.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveCategory(categories[nextIndex]);
      
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
      const categories = ["calculators", "templates", "resources", "tools"];
      const currentIndex = categories.indexOf(activeCategory);
      const prevIndex = (currentIndex - 1 + categories.length) % categories.length;
      setActiveCategory(categories[prevIndex]);
      
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

  const categories = [
    {
      id: "calculators",
      title: "Business Calculators",
      subtitle: "Make informed decisions with data",
      description: "Essential calculators for pricing, ROI, growth projections, and business planning.",
      icon: "🧮",
      items: [
        {
          name: "ROI Calculator",
          description: "Calculate return on investment for marketing campaigns",
          type: "Interactive Tool",
          time: "2 min",
          popular: true
        },
        {
          name: "Pricing Calculator",
          description: "Determine optimal pricing for your services",
          type: "Calculator",
          time: "5 min",
          popular: false
        },
        {
          name: "Growth Projection Tool",
          description: "Forecast business growth and revenue",
          type: "Forecasting",
          time: "10 min",
          popular: true
        },
        {
          name: "Break-Even Analysis",
          description: "Find your business break-even point",
          type: "Financial",
          time: "3 min",
          popular: false
        }
      ]
    },
    {
      id: "templates",
      title: "Free Templates",
      subtitle: "Professional templates to save time",
      description: "Ready-to-use templates for proposals, contracts, marketing plans, and more.",
      icon: "📄",
      items: [
        {
          name: "Client Proposal Template",
          description: "Professional service proposal template",
          type: "Document",
          time: "",
          popular: true
        },
        {
          name: "Service Agreement Contract",
          description: "Legal contract template for agencies",
          type: "Legal",
          time: "",
          popular: true
        },
        {
          name: "Marketing Plan Template",
          description: "Comprehensive marketing strategy template",
          type: "Strategy",
          time: "",
          popular: false
        },
        {
          name: "Social Media Calendar",
          description: "Monthly content planning template",
          type: "Planning",
          time: "",
          popular: false
        }
      ]
    },
    {
      id: "resources",
      title: "Resource Library",
      subtitle: "Guides, checklists, and best practices",
      description: "Comprehensive guides and checklists to help you succeed in digital marketing and business growth.",
      icon: "📚",
      items: [
        {
          name: "Agency Launch Checklist",
          description: "Complete checklist for starting your agency",
          type: "Checklist",
          time: "15 min read",
          popular: true
        },
        {
          name: "SEO Best Practices Guide",
          description: "Comprehensive SEO optimization guide",
          type: "Guide",
          time: "20 min read",
          popular: true
        },
        {
          name: "Client Onboarding Process",
          description: "Step-by-step client onboarding guide",
          type: "Process",
          time: "10 min read",
          popular: false
        },
        {
          name: "Content Marketing Strategy",
          description: "Complete content marketing framework",
          type: "Strategy",
          time: "25 min read",
          popular: false
        }
      ]
    },
    {
      id: "tools",
      title: "Interactive Tools",
      subtitle: "Assessment and audit tools",
      description: "Interactive tools to audit your business, assess performance, and identify improvement areas.",
      icon: "🔧",
      items: [
        {
          name: "Website Audit Tool",
          description: "Comprehensive website performance audit",
          type: "Audit Tool",
          time: "10 min",
          popular: true
        },
        {
          name: "Business Health Assessment",
          description: "Evaluate your business performance",
          type: "Assessment",
          time: "15 min",
          popular: true
        },
        {
          name: "Marketing ROI Tracker",
          description: "Track and analyze marketing performance",
          type: "Analytics",
          time: "5 min",
          popular: false
        },
        {
          name: "Competitor Analysis Tool",
          description: "Analyze your competition effectively",
          type: "Research",
          time: "20 min",
          popular: false
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="tools-resources"
      aria-labelledby="tools-resources-heading"
      style={{ contentVisibility: "auto" }}
      className="bg-primary-1500 overflow-hidden bg-[url('../src/assets/Noise.webp')] bg-repeat scroll-smooth transition-transform duration-150 ease-out"
      data-testid="tools-resources-section"
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
            Tools & Resources
          </p>
          <h2
            id="tools-resources-heading"
            data-testid="tools-resources-heading"
            className="mb-8 text-6xl/18 font-semibold tracking-tighter max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-sm:text-3xl/9 max-sm:tracking-tighter"
          >
            Free <span className="text-primary-500 primary-glow">Tools</span> & Resources
          </h2>
          <p className="text-primary-100 max-w-3xl mx-auto text-xl/loose font-light max-xl:text-lg/8 max-lg:text-base/loose">
            Access powerful tools, calculators, templates, and resources to accelerate your business growth and agency success
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: easing }}
          className="mb-16 max-lg:mb-12"
        >
          <div className="flex justify-center gap-3 max-lg:gap-2 max-md:flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm ${
                  activeCategory === category.id
                    ? "bg-primary-500 text-primary-1300 primary-glow shadow-lg"
                    : "text-primary-100 hover:text-primary-50 hover:bg-primary-1300/20 border border-primary-1300/20"
                } max-md:px-4 max-md:py-2 max-md:text-xs`}
                aria-label={`Show ${category.title} resources`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Category Details */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="max-w-7xl mx-auto"
        >
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: easing }}
            className="text-center mb-16 max-lg:mb-12 max-md:mb-10"
          >
            <div className="text-8xl mb-6 max-md:text-6xl max-sm:text-5xl">{currentCategory.icon}</div>
            <h3 className="text-4xl font-semibold mb-4 text-primary-50 max-lg:text-3xl max-md:text-2xl max-sm:text-xl">
              {currentCategory.title}
            </h3>
            <p className="text-primary-400 font-medium mb-4 text-xl max-lg:text-lg max-sm:text-base">
              {currentCategory.subtitle}
            </p>
            <p className="text-primary-100 max-w-2xl mx-auto text-lg/loose font-light max-lg:text-base/loose max-sm:text-sm/loose">
              {currentCategory.description}
            </p>
          </motion.div>

          {/* Resource Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: easing }}
            className="grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-lg:gap-6 max-md:gap-4"
          >
            {currentCategory.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6, ease: easing }}
                className="group bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5 max-sm:p-4 hover:border-primary-500/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6 max-sm:mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-3 text-primary-50 max-lg:text-lg max-sm:text-base group-hover:text-primary-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-primary-100 text-sm/loose font-light max-lg:text-xs/loose mb-4 max-sm:mb-3 max-sm:text-xs/loose">
                      {item.description}
                    </p>
                  </div>
                  {item.popular && (
                    <span className="bg-primary-500 text-primary-1300 text-xs font-medium px-3 py-1 rounded-full ml-3 max-sm:ml-2 max-sm:px-2.5">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 max-sm:gap-2">
                    <span className="text-primary-400 text-xs font-medium bg-primary-1300/20 px-3 py-1 rounded-full max-sm:px-2.5">
                      {item.type}
                    </span>
                    {item.time && (
                      <span className="text-primary-300 text-xs">
                        {item.time}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-primary-400 group-hover:text-primary-500 transition-colors">
                    <ArrowRight className="w-4 h-4 max-sm:w-3.5 max-sm:h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easing }}
          className="mt-20 text-center max-lg:mt-16"
        >
          <div className="bg-primary-1300/5 backdrop-blur-sm border border-primary-1300/20 rounded-2xl p-8 max-lg:p-6 max-md:p-5">
            <h3 className="text-2xl font-semibold mb-4 text-primary-50 max-lg:text-xl max-md:text-lg">
              Ready to Access These Powerful Tools?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto text-lg/loose font-light max-lg:text-base/loose">
              Join StartGrid to unlock all tools, resources, and templates designed to accelerate your business growth
            </p>
            <div className="flex justify-center gap-4 max-md:flex-col max-md:items-center">
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6, ease: easing }}
                onClick={() => setActiveModal("launch-agency")}
                className="btn-secondary border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-1300 group flex items-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none max-xl:gap-x-2 max-xl:px-6 max-xl:py-3 max-md:px-6 max-md:py-4"
                aria-label="Launch your agency with StartGrid"
                type="button"
              >
                <span className="text-lg/8 max-xl:text-base/loose">
                  Launch Your Agency
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
