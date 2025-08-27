import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer 
      className="bg-gradient-to-bottom"
      role="contentinfo"
      aria-label="Site footer"
      data-testid="site-footer"
    >
      <div className="m-auto flex max-w-[90rem] justify-between px-24 py-32 max-xl:px-16 max-xl:py-24 max-lg:grid max-lg:gap-y-18 max-lg:px-8 max-md:px-6 max-sm:pb-16">
        {/* Logo and Company Info */}
        <div className="max-lg:order-1">
          <a 
            className="flex items-center gap-x-3 max-md:gap-x-2 hover-scale" 
            href="#"
            aria-label="StartGrid - Go to homepage"
            data-testid="footer-logo-link"
          >
            <Logo
              className="stroke-primary-500 h-6"
              alt="StartGrid Logo Icon"
              width={5}
              aria-hidden="true"
            />
            <p className="text-primary-50 text-xl font-bold tracking-tight max-md:text-lg/8 max-md:tracking-tighter">
              StartGrid
            </p>
          </a>
          <p className="text-primary-100 mt-4 max-w-xs max-lg:mt-6">
            Transforming businesses and entrepreneurs with AI-powered digital solutions for sustainable growth and lasting success.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 max-xl:gap-x-12 max-lg:order-2 max-lg:gap-x-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-primary-50 font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="text-primary-100 hover:text-primary-50 transition-colors duration-200"
                  aria-label="Go to Features section"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-primary-100 hover:text-primary-50 transition-colors duration-200"
                  aria-label="Go to How It Works section"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#industries" 
                  className="text-primary-100 hover:text-primary-50 transition-colors duration-200"
                  aria-label="Go to Industries section"
                >
                  Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-primary-50 font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#tools-resources" 
                  className="text-primary-100 hover:text-primary-50 transition-colors duration-200"
                  aria-label="Go to Tools & Resources section"
                >
                  Tools & Resources
                </a>
              </li>
              <li>
                <a 
                  href="#partnerships" 
                  className="text-primary-100 hover:text-primary-50 transition-colors duration-200"
                  aria-label="Go to Partnerships section"
                >
                  Partnerships
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  className="text-primary-100 hover:text-primary-50 transition-colors duration-200"
                  aria-label="Go to FAQ's section"
                >
                  FAQ&apos;s
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright - Centralized */}
      <div className="border-t border-primary-1200 m-auto max-w-[90rem] px-24 py-8 max-xl:px-16 max-lg:px-8 max-md:px-6">
        <div className="text-center">
          <p className="text-primary-100 text-sm">
            © {new Date().getFullYear()} StartGrid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
