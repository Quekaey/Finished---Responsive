// Page Layout
import Page from "./components/sections/Page";

// Header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";

// Main
import Main from "./components/sections/Main";
import Features from "./components/sections/Features";
import HowItWorks from "./components/sections/HowItWorks";
import IndustriesWeServe from "./components/sections/IndustriesWeServe";
import ToolsAndResources from "./components/sections/ToolsAndResources";
import PartnershipOpportunities from "./components/sections/PartnershipOpportunities";
import FAQs from "./components/sections/FAQs/FAQs";
import Testimonials from "./components/sections/Tesimonials/Testimonials";

// Footer
import Footer from "./components/sections/Footer";

// Modal
import Modal from "./components/sections/Modal/Modal";
import SignUpModal from "./components/sections/Modal/SignUpModal";
import LaunchAgencyModal from "./components/sections/Modal/LaunchAgencyModal";
import GrowBusinessModal from "./components/sections/Modal/GrowBusinessModal";
import PartnershipInquiryModal from "./components/sections/Modal/PartnershipInquiryModal";
import { ModalContextProvider } from "./contexts/ModalContext";

// Mobile Menu
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import { MobileMenuContextProvider } from "./contexts/MobileMenuContext";

// Toast Provider
import { ToastProvider } from "./contexts/ToastContext";

function App() {
  return (
    <ToastProvider>
      <ModalContextProvider>
        <MobileMenuContextProvider>
          <Page>
            <Header>
              <Navigation />
              <Hero />
            </Header>
            <Main>
              <Features />
              <HowItWorks />
              <IndustriesWeServe />
              <ToolsAndResources />
              <PartnershipOpportunities />
              <FAQs />
              <Testimonials />
            </Main>
            <Footer />

            <Modal modal="sign-up">
              <SignUpModal />
            </Modal>

            <Modal modal="launch-agency">
              <LaunchAgencyModal />
            </Modal>

            <Modal modal="grow-business">
              <GrowBusinessModal />
            </Modal>

            <Modal modal="partnership-inquiry">
              <PartnershipInquiryModal />
            </Modal>

            <MobileMenu />
          </Page>
        </MobileMenuContextProvider>
      </ModalContextProvider>
    </ToastProvider>
  );
}

export default App;
