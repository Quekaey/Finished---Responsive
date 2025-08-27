import Logo from "../icons/Logo";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { navigationLinks } from "../../utils/content";
import { useModalContext } from "../../contexts/ModalContext";

export default function Navigation() {
  const { setActiveModal } = useModalContext();

  return (
    <header role="banner" className="sticky top-0 z-40 bg-primary-1300/80 backdrop-blur-md border-b border-primary-1200/20">
      <nav 
        className="text-primary-50 m-auto flex max-w-[90rem] justify-between items-center px-24 py-4 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-xl:py-3 max-lg:px-8 max-lg:py-3 max-md:px-6 max-md:py-3 max-sm:px-4 max-sm:py-2"
        role="navigation"
        aria-label="Main navigation"
        data-testid="main-navigation"
      >
        <a
          className="flex items-center gap-x-3 max-xl:gap-x-3 max-md:gap-x-2 hover-scale transition-transform duration-200 hover:scale-105"
          href="#"
          aria-label="StartGrid - Go to homepage"
          data-testid="logo-link"
        >
          <Logo
            className="stroke-primary-500 h-6 max-xl:h-5 max-md:h-4 max-sm:h-4"
            alt="StartGrid Logo Icon"
            width={5}
            aria-hidden="true"
          />
          <p className="text-xl font-bold tracking-tight max-xl:text-xl max-lg:text-lg max-md:text-base max-sm:text-sm max-sm:tracking-tighter">
            StartGrid
          </p>
        </a>

        {/* Desktop Navigation */}
        <ul 
          className="flex items-center gap-x-8 max-xl:gap-x-6 max-lg:hidden"
          role="menubar"
          aria-label="Main menu"
          data-testid="desktop-menu"
        >
          {navigationLinks.map((link) => (
            <li key={link.id} role="none">
              <a
                href={link.href}
                className="transition-properties relative group text-primary-50 hover:text-primary-500"
                role="menuitem"
                aria-label={`Navigate to ${link.link} section`}
                data-testid={`nav-link-${link.link.toLowerCase()}`}
              >
                {link.link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="flex items-center gap-x-3 max-lg:hidden">
          <button
            className="btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose transition-all duration-200 hover:scale-105 active:scale-95"
            onClick={() => setActiveModal("sign-up")}
            aria-label="Open sign-up modal to get started"
            data-testid="get-started-button"
            type="button"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <MobileMenuIcon />
      </nav>
    </header>
  );
}
