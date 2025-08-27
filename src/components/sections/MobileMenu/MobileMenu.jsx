import { motion } from "motion/react";
import Close from "../../icons/Close";
import { navigationLinks } from "../../../utils/content";

import { useModalContext } from "../../../contexts/ModalContext";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext";

function MobileMenu() {
  const { setActiveModal } = useModalContext();
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();

  function handleGetStarted() {
    setActiveModal("sign-up");
    setMobileMenuOpened(false);
  }

  function handleNavigationClick() {
    setMobileMenuOpened(false);
  }

  return (
    <motion.div
      animate={mobileMenuOpened ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          visibility: "hidden",
        },
        visible: {
          opacity: 1,
          visibility: "visible",
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-primary-1300/80 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-end px-6 py-6 pl-28 backdrop-blur-md max-md:px-4 max-md:pl-4 max-sm:px-2 max-sm:pl-2"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      data-testid="mobile-menu"
      id="mobile-menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setMobileMenuOpened(false);
        }
      }}
    >
      <motion.div
        animate={mobileMenuOpened ? "visible" : "hidden"}
        variants={{
          hidden: {
            x: "100%",
            opacity: 0,
            scale: 0.95,
          },
          visible: {
            x: "0%",
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-primary-1400 flex basis-80 flex-col justify-between rounded-2xl bg-[url('../src/assets/Noise.webp')] bg-repeat px-6 py-8 shadow-2xl border border-primary-1200/20 max-md:basis-full max-md:rounded-none max-md:px-4 max-md:py-6 max-sm:px-3 max-sm:py-4"
      >
        <div>
          <button
            className="btn-secondary border-primary-75 hover:bg-primary-75 group transition-properties mr-auto w-fit cursor-pointer rounded-2xl border-2 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center max-md:min-h-[48px] max-md:min-w-[48px]"
            onClick={() => setMobileMenuOpened(false)}
            aria-label="Close mobile menu"
            data-testid="mobile-menu-close"
            type="button"
          >
            <Close
              className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties h-4 w-4 max-md:h-5 max-md:w-5"
              width={2}
              alt="Close icon"
              aria-hidden="true"
            />
          </button>
          <nav 
            className="mt-16 max-md:mt-12 max-sm:mt-8"
            role="navigation"
            aria-label="Mobile navigation"
            data-testid="mobile-navigation"
          >
            <ul className="flex flex-col gap-y-6 max-md:gap-y-4" role="menubar">
              {navigationLinks.map((link, index) => {
                return (
                  <motion.li 
                    key={link.id} 
                    role="none"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="text-primary-50 text-lg/8 block py-3 px-2 rounded-lg transition-all duration-200 hover:bg-primary-1200/20 hover:text-primary-500 max-md:text-base max-md:py-2.5 max-sm:text-sm max-sm:py-2"
                      role="menuitem"
                      aria-label={`Navigate to ${link.link} section`}
                      data-testid={`mobile-nav-link-${link.link.toLowerCase()}`}
                      onClick={handleNavigationClick}
                    >
                      {link.link}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-y-3 max-md:gap-y-2">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            onClick={handleGetStarted}
            className="btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover transition-properties cursor-pointer rounded-full border-2 px-6 py-3 text-base/loose font-normal min-h-[48px] max-md:min-h-[52px] max-md:text-lg max-md:py-4 max-sm:min-h-[56px] max-sm:text-base max-sm:py-3.5"
            aria-label="Open sign-up modal to get started"
            data-testid="mobile-get-started-button"
            type="button"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MobileMenu;
