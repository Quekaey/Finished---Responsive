import { motion } from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext";

function MobileMenuIcon() {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();

  return (
    <motion.button
      initial="closed"
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="jusitfy-center hidden items-center hover:cursor-pointer max-lg:flex"
      onClick={() => setMobileMenuOpened(true)}
      aria-label="Open mobile menu"
      aria-expanded={mobileMenuOpened}
      aria-controls="mobile-menu"
      data-testid="mobile-menu-button"
      type="button"
    >
      <Menu 
        className="stroke-primary-75 h-7 w-7" 
        width={2} 
        alt="Menu icon"
        aria-hidden="true"
      />
    </motion.button>
  );
}

export default MobileMenuIcon;
