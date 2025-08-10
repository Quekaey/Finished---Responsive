import ArrowSwap from "../components/icons/ArrowSwap";
import CardSlash from "../components/icons/CardSlash";
import Cloud from "../components/icons/Cloud";
import DollarCircle from "../components/icons/DollarCircle";
import Import from "../components/icons/Import";
import Integrate from "../components/icons/Integrate";
import MagicPen from "../components/icons/MagicPen";
import Microphone from "../components/icons/Microphone";
import Note from "../components/icons/Note";
import Organization from "../components/icons/Organization";
import Search from "../components/icons/Search";
import Slack from "../components/icons/Slack";
import SMSNotification from "../components/icons/SMSNotification";
import TwoUsers from "../components/icons/TwoUsers";
import Lock from "../components/icons/Lock";

const navigationLinks = [
  {
    id: 1,
    link: "Home",
    href: "#",
  },
  {
    id: 2,
    link: "About",
    href: "#",
  },
  {
    id: 3,
    link: "FAQ's",
    href: "#",
  },
];

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-11.webp", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah Lee",
  },
  {
    id: 5,
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    alt: "Lucas King",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/Netflix.webp", import.meta.url),
    alt: "Netflix Logo",
  },
  {
    id: 2,
    src: new URL("../assets/logos/ExxonMobile.webp", import.meta.url),
    alt: "Exxon Mobile Logo",
  },
  {
    id: 3,
    src: new URL("../assets/logos/Microsoft.webp", import.meta.url),
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    src: new URL("../assets/logos/Vice.webp", import.meta.url),
    alt: "Vice Logo",
  },
  {
    id: 5,
    src: new URL("../assets/logos/Walmart.webp", import.meta.url),
    alt: "Walmart Logo",
  },
  {
    id: 6,
    src: new URL("../assets/logos/Chase.webp", import.meta.url),
    alt: "Chase Logo",
  },
  {
    id: 7,
    src: new URL("../assets/logos/Visa.webp", import.meta.url),
    alt: "Visa Logo",
  },
  {
    id: 8,
    src: new URL("../assets/logos/Amazon.webp", import.meta.url),
    alt: "Amazon Logo",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Note Icon",
        Icon: Note,
        question: "What is StartGrid?",
        answer:
          "StartGrid is a hybrid digital platform that helps aspiring agency founders launch their own agencies \
          and provides businesses with top-tier digital services like websites, branding, and marketing strategies.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "Who can use StartGrid?",
        answer:
          "StartGrid is perfect for two groups: individuals who want to start their own digital agencies \
          and businesses that want to grow online through expert digital solutions.",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question:
          "Do I need technical skills to start my own agency with StartGrid?",
        answer:
          "No. We provide the tools, templates, and mentorship to help you launch successfully, \
          even if you have little or no tech experience.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "How long does it take to launch my agency with StartGrid?",
        answer:
          "It varies depending on your readiness, but most founders launch within 2–4 weeks.",
      },
    ],
  },
  {
    id: 2,
    category: "Pricing",
    questions: [
      {
        id: 5,
        alt: "Dollar Circle Icon",
        Icon: DollarCircle,
        question:
          "How much does it cost to join the StartGrid Founder Program?",
        answer:
          "We offer flexible packages depending on your needs. \
          Pricing starts from an affordable entry plan for new founders. \
          Contact us for a tailored quote.",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Do you offer payment plans?",
        answer:
          "Yes. We have installment options to make it easier for founders and clients to get started.",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Are there hidden fees?",
        answer:
          "No. All costs are clearly explained upfront.  \
          Any extra services will be discussed and agreed on before we proceed.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Do you charge monthly fees for agency founders?",
        answer:
          "Only if you subscribe to ongoing mentorship, support, or premium tools. \
         Our basic package is a one-time setup cost.",
      },
    ],
  },
  {
    id: 3,
    category: "Features",
    questions: [
      {
        id: 9,
        alt: "Organization Icon",
        Icon: Organization,
        question: "What’s included in the StartGrid Founder Launch Kit?",
        answer:
          "You get agency website templates, business playbooks, proposal templates, branding guides, and one-on-one mentorship.",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "Do you offer website design for businesses?",
        answer:
          "Yes. We design high-conversion websites for businesses in any industry, fully tailored to your brand.",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question: "Is training included for founders?",
        answer:
          "Absolutely. Founders get training on sales, client management, and project delivery.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question: "Can you help me find my first clients?",
        answer:
          "Yes. We provide lead generation strategies and, in some cases, share client referrals within our network.",
      },
    ],
  },
  {
    id: 4,
    category: "Integrations",
    questions: [
      {
        id: 13,
        alt: "Organization Icon",
        Icon: Organization,
        question: "Can my website integrate with payment gateways?",
        answer:
          "Yes. We support popular gateways like Paystack, Flutterwave, Stripe, and PayPal.",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Do you integrate with CRMs?",
        answer:
          "Yes. We can connect your site with HubSpot, Zoho, Salesforce, and others.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question: "Can you set up email marketing tools?",
        answer:
          "Yes. We integrate with Mailchimp, ConvertKit, Sendinblue, and other platforms.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question: "Can you connect to eCommerce platforms?",
        answer:
          "Yes. We integrate with WooCommerce, Shopify, BigCommerce, and custom solutions.",
      },
    ],
  },
];

const testimonials = [
  {
    id: 1,
    rating: 4,
    description:
      "From day one, they treated my business like their own. \
    I’ve never felt more supported by a partner.",
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    name: "Tunde Bakare",
    title: "Clothing Brand Owner",
  },
  {
    id: 2,
    rating: 5,
    description:
      "StartGrid’s systems work. \
    I now spend more time with clients and less time figuring out operations.",
    src: new URL("../assets/headshots/img-3.webp", import.meta.url),
    name: "Abdulrahman Bello",
    title: "Agency Founder",
  },
  {
    id: 3,
    rating: 5,
    description:
      "The results speak for themselves \
    traffic is up, conversions are higher, and my team is thrilled.",
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    name: "Patricia Collins",
    title: "SaaS Product Manager",
  },
  {
    id: 4,
    rating: 4,
    description:
      "I joined the launch program and landed \
    my first international client within weeks.",
    src: new URL("../assets/headshots/img-4.webp", import.meta.url),
    name: "Jonathan Moore",
    title: "Software Engineer",
  },
  {
    id: 5,
    rating: 4,
    description:
      "They didn’t just build a website \
    they built a brand experience my customers love.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),

    name: "Rachel Foster",
    title: "Project Manager",
  },
  {
    id: 6,
    rating: 5,
    description:
      "Being part of StartGrid’s founder program \
    gave me the confidence and network to grow quickly.",
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    name: "Emeka Eze",
    title: "Digital Consultant",
  },
  {
    id: 7,
    rating: 4,
    description:
      "We wanted a modern, mobile-friendly site. \
    StartGrid delivered exactly what we needed on time and on budget.",
    src: new URL("../assets/headshots/img-1.webp", import.meta.url),
    name: "Jessica Lee",
    title: "Nonprofit Director",
  },
  {
    id: 8,
    rating: 5,
    description:
      "Their coaching style is friendly yet firm \
    they push you to achieve your business goals.",
    src: new URL("../assets/headshots/img-6.webp", import.meta.url),
    name: "Chidera Umeh",
    title: " Agency Co-Founder",
  },
  {
    id: 9,
    rating: 4,
    description:
      "They handled our eCommerce setup flawlessly. \
    Sales jumped by 30% in the first month after launch.",
    src: new URL("../assets/headshots/img-8.webp", import.meta.url),
    name: "David Miller",
    title: "Online Store Owner",
  },
  {
    id: 10,
    rating: 5,
    description:
      "I started with no clear plan, \
    but the framework they provided helped me build a professional agency from scratch.",
    src: new URL("../assets/headshots/img-13.webp", import.meta.url),
    name: "Bola Adeyemi",
    title: "Tech Entrepreneur",
  },
  {
    id: 11,
    rating: 4,
    description:
      "The community and resources here are unmatched. \
    You’re never building alone with StartGrid.",
    src: new URL("../assets/headshots/img-10.webp", import.meta.url),
    name: "Sarah Thompson",
    title: "Startup Founder",
  },
  {
    id: 12,
    rating: 4,
    description:
      "From branding to launch, StartGrid delivered beyond expectations. \
    We now get compliments from clients daily.",
    src: new URL("../assets/headshots/img-14.webp", import.meta.url),
    name: "Oluwaseun Adebayo",
    title: "Marketing Consultant",
  },
  {
    id: 13,
    rating: 5,
    description:
      "Our website redesign increased our inbound leads by 45%. \
    The StartGrid team really understands business goals.",
    src: new URL("../assets/headshots/img-12.webp", import.meta.url),
    name: "Ifeanyi Nwosu",
    title: "Real Estate CEO",
  },
  {
    id: 14,
    rating: 4,
    description:
      "Their mentorship and playbooks saved me months of trial and error. \
    I now run a profitable web design business.",
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    name: "Amanda Brooks",
    title: "Web Agency Owner",
  },
  {
    id: 15,
    rating: 5,
    description:
      "StartGrid gave me the structure I needed to finally launch my own agency. \
    Within two months, I signed my first three clients.",
    src: new URL("../assets/headshots/img-2.webp", import.meta.url),
    name: "Chinonso Okeke",
    title: "Digital Agency Founder",
  },
];

const footerCols = [
  {
    id: 1,
    category: "Home",
    links: ["FAQ", "Features", "Companies", "Testimonials"],
  },
  {
    id: 2,
    category: "Pricing",
    links: ["Plans", "Billing", "Free Trial", "Refunds"],
  },
  {
    id: 3,
    category: "About",
    links: ["Careers", "Our Story", "Contact", "Policy"],
  },
  {
    id: 4,
    category: "Community",
    links: ["Forum", "Stories", "Blog", "Support"],
  },
];

const features = {
  SmartOrganization: {
    alt: "Smart Organization graphic",
    heading: "Smart Organization",
    description:
      "Automatically categorize and tag your notes using AI-driven analysis. \
      NoteFlow intelligently identifies key topics and organizes your content, \
      making it easy to find and retrieve your notes when you need them most.",
  },
  ContextualReminders: {
    alt: "Contextual Reminders graphic",
    heading: "Contextual Reminders",
    description:
      "Stay on top of important tasks with AI-powered reminders that adapt to the \
      context of your notes. NoteFlow recognizes deadlines, follow-ups, and key actions \
      from your notes and sends timely alerts to ensure nothing slips through the cracks.",
  },
};

export {
  navigationLinks,
  reviews,
  logos,
  frequentlyAskedQuestions,
  testimonials,
  footerCols,
  features,
};
