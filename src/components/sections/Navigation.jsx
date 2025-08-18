import Logo from "../icons/Logo";
import MobileMenuIcon from "./MobileMenu/MobileMenuIcon";
import { navigationLinks } from "../../utils/content";
import { useModalContext } from "../../contexts/ModalContext";

export default function Navigation() {
  const { setActiveModal } = useModalContext();

  return (
    <header role="banner">
      <nav 
        className="text-primary-50 m-auto flex max-w-[90rem] justify-between px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6"
        role="navigation"
        aria-label="Main navigation"
        data-testid="main-navigation"
      >
        <a
          className="flex items-center gap-x-3 max-xl:gap-x-3 max-md:gap-x-2 hover-scale"
          href="#"
          aria-label="StartGrid - Go to homepage"
          data-testid="logo-link"
        >
          <Logo
            className="stroke-primary-500 h-6 max-md:h-5"
            alt="StartGrid Logo Icon"
            width={5}
            aria-hidden="true"
          />
          <p className="text-xl font-bold tracking-tight max-xl:text-xl max-md:text-lg/8 max-md:tracking-tighter">
            StartGrid
          </p>
        </a>

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
                className="link-hover transition-properties"
                role="menuitem"
                aria-label={`Navigate to ${link.link} section`}
                data-testid={`nav-link-${link.link.toLowerCase()}`}
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-x-3 max-lg:hidden">
          <button
            className="btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose"
            onClick={() => setActiveModal("sign-up")}
            aria-label="Open sign-up modal to get started"
            data-testid="get-started-button"
            type="button"
          >
            Get Started
          </button>
        </div>

        <MobileMenuIcon />
      </nav>
    </header>
  );
}
