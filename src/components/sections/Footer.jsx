import { footerCols } from "../../utils/content";
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
        <div>
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
        </div>
        <nav 
          className="grid grid-cols-[repeat(4,max-content)] gap-x-24 max-xl:gap-x-18 max-lg:gap-x-24 max-md:grid-cols-2 max-md:gap-y-14"
          role="navigation"
          aria-label="Footer navigation"
          data-testid="footer-navigation"
        >
          <div key="features" data-testid="footer-column-features">
            <h3 className="text-primary-50 mb-8 text-xl/loose font-semibold max-md:text-lg/8 max-md:tracking-tight">
              Services
            </h3>
            <ul
              className="flex flex-col gap-y-4"
              role="list"
              aria-label="Services links"
            >
              <li className="cursor-pointer" role="listitem">
                <a
                  className="link-hover text-primary-50 text-lg/8 font-light max-xl:text-base/loose"
                  href="#features"
                  aria-label="Navigate to Features section"
                  data-testid="footer-link-features"
                >
                  Features
                </a>
              </li>
              <li className="cursor-pointer" role="listitem">
                <a
                  className="link-hover text-primary-50 text-lg/8 font-light max-xl:text-base/loose"
                  href="#testimonials"
                  aria-label="Navigate to Testimonials section"
                  data-testid="footer-link-testimonials"
                >
                  Testimonials
                </a>
              </li>
              <li className="cursor-pointer" role="listitem">
                <a
                  className="link-hover text-primary-50 text-lg/8 font-light max-xl:text-base/loose"
                  href="#faqs"
                  aria-label="Navigate to FAQ section"
                  data-testid="footer-link-faqs"
                >
                                     FAQ&apos;s
                </a>
              </li>
            </ul>
          </div>
          {footerCols.slice(0, 3).map((col) => (
            <div key={col.id} data-testid={`footer-column-${col.id}`}>
              <ul 
                className="flex flex-col gap-y-4"
                role="list"
                aria-label={`${col.category} links`}
              >
                {col.links.map((link, i) => (
                  <li key={i} className="cursor-pointer" role="listitem">
                    <a
                      className="link-hover text-primary-50 text-lg/8 font-light max-xl:text-base/loose"
                      href="#"
                      aria-label={`Navigate to ${link} section`}
                      data-testid={`footer-link-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
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
