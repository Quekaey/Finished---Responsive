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
          {footerCols.map((col) => (
            <div key={col.id} data-testid={`footer-column-${col.id}`}>
              <h3 className="text-primary-50 mb-8 text-xl/loose font-semibold max-md:text-lg/8 max-md:tracking-tight">
                {col.category}
              </h3>
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
      
      {/* Copyright and additional info */}
      <div className="border-t border-primary-1200 m-auto max-w-[90rem] px-24 py-8 max-xl:px-16 max-lg:px-8 max-md:px-6">
        <div className="flex justify-between items-center max-md:flex-col max-md:gap-y-4 max-md:text-center">
          <p className="text-primary-100 text-sm">
            © {new Date().getFullYear()} StartGrid. All rights reserved.
          </p>
          <div className="flex gap-x-6 max-md:gap-x-4">
            <a 
              href="#" 
              className="link-hover text-primary-100 text-sm"
              aria-label="Privacy Policy"
              data-testid="footer-privacy-link"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="link-hover text-primary-100 text-sm"
              aria-label="Terms of Service"
              data-testid="footer-terms-link"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
