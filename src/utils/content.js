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
    link: "Pricing",
    href: "#",
  },
  {
    id: 3,
    link: "About",
    href: "#",
  },
  {
    id: 4,
    link: "Community",
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
        question: "What is NoteFlow?",
        answer:
          "NoteFlow is an AI-powered note-taking application designed to \
          help individuals and teams organize, manage, and retrieve notes effortlessly.",
      },
      {
        id: 2,
        alt: "Magic Pen Icon",
        Icon: MagicPen,
        question: "How does NoteFlow use AI to enhance note-taking?",
        answer:
          "NoteFlow uses AI to automatically categorize, summarize, and tag your notes, \
          making it easier to find exactly what you need. Its intelligent search functionality \
          helps you locate information by context, keywords, or themes, ensuring that your notes \
          are always organized and accessible.",
      },
      {
        id: 3,
        alt: "Two Users Icon",
        Icon: TwoUsers,
        question: "Can NoteFlow be used for team collaboration?",
        answer:
          "Absolutely! NoteFlow is designed to support both individual users and team collaboration. \
          You can share notes, collaborate in real time, assign tasks, and track progress within the platform. \
          This makes it a perfect solution for both personal and professional use.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: Cloud,
        question: "Can I access NoteFlow on multiple devices?",
        answer:
          "Yes, you can access NoteFlow from any device, including your computer, tablet, \
          and smartphone. Our app syncs seamlessly across platforms, so your notes are always \
          up-to-date and available whenever you need them.",
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
        question: "What pricing plans does NoteFlow offer?",
        answer:
          "NoteFlow offers several pricing tiers to meet the needs of both individuals and teams. \
          We have a free plan with basic features, as well as premium plans that provide advanced features \
          like unlimited storage, team collaboration tools, and more. You can find detailed information about \
          each plan on our Pricing page.",
      },
      {
        id: 6,
        alt: "Card Slash Icon",
        Icon: CardSlash,
        question: "Is there a free trial available for NoteFlow?",
        answer:
          "NoteFlow offers several pricing tiers to meet the needs of both individuals and teams. \
          We have a free plan with basic features, as well as premium plans that provide advanced features \
          like unlimited storage, team collaboration tools, and more. You can find detailed information about \
          each plan on our Pricing page.",
      },
      {
        id: 7,
        alt: "Arrow Swap Icon",
        Icon: ArrowSwap,
        question: "Can I change or cancel my subscription anytime?",
        answer:
          "Absolutely! You can upgrade, downgrade, or cancel your subscription at any time through your account \
          settings. If you decide to cancel, you will still have access to your plan’s features until the end of \
          your current billing cycle.",
      },
      {
        id: 8,
        alt: "Lock Icon",
        Icon: Lock,
        question: "Is my payment information secure with NoteFlow?",
        answer:
          "Yes, we take your security very seriously. All payment transactions are processed through secure, encrypted \
          channels. NoteFlow uses industry-standard security protocols to ensure your payment information is always protected. \
          For additional peace of mind, we are also compliant with GDPR and other relevant data protection regulations.",
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
        question: "How does The Smart Organization feature work?",
        answer:
          "NoteFlow's Smart Organization feature uses advanced AI to automatically categorize and tag your notes \
          based on key topics and themes. The AI-driven analysis ensures that your notes are organized in a way that \
           makes them easy to search and retrieve, saving you time when you need to find specific information.",
      },
      {
        id: 10,
        alt: "SMS Notification Icon",
        Icon: SMSNotification,
        question: "How do Contextual Reminders help me stay on top of tasks?",
        answer:
          "Contextual Reminders use AI to analyze your notes and automatically recognize important tasks, deadlines, \
              and follow-up actions. Based on this analysis, NoteFlow will send you timely reminders to ensure you never \
              miss a critical deadline or action point.",
      },
      {
        id: 11,
        alt: "Microphone Icon",
        Icon: Microphone,
        question:
          "Can I dictate notes using the Voice-to-Text Transcription feature?",
        answer:
          "Yes! NoteFlow’s Voice-to-Text Transcription feature lets you dictate notes in real time. Whether you’re in a \
           meeting, on the go, or brainstorming ideas, simply speak, and NoteFlow will automatically convert your speech \
           into organized text. This feature makes capturing ideas effortless and hands-free.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: Search,
        question:
          "Can I search for specific information using the AI-powered features?",
        answer:
          "Yes! With NoteFlow’s intelligent search functionality, you can search for specific keywords, topics, or \
          even context-based information. The AI not only looks for exact matches but also understands the context \
          of your notes, helping you find relevant information quickly and efficiently.",
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
        question: "What integrations does NoteFlow support?",
        answer:
          "NoteFlow integrates with a wide range of tools, including popular apps like Google Drive, Microsoft \
          OneDrive, Slack, Trello, and more. These integrations allow you to sync your notes with your existing \
          workflow and collaborate seamlessly across platforms.",
      },
      {
        id: 14,
        alt: "Integrate Icon",
        Icon: Integrate,
        question: "Will NoteFlow integrate with other apps in the future?",
        answer:
          "We are always working to expand our integration offerings to meet the needs of our users. We frequently \
        update NoteFlow to support new and popular tools, so be sure to check back for new integrations that may \
        enhance your experience.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: Import,
        question:
          "Can I import existing notes from other platforms into NoteFlow?",
        answer:
          "Yes, you can easily import your existing notes from platforms like Evernote, Google Keep, and Microsoft \
        OneNote into NoteFlow. This ensures a smooth transition without losing any of your important information.",
      },
      {
        id: 16,
        alt: "Slack Icon",
        Icon: Slack,
        question:
          "Does NoteFlow integrate with team collaboration tools like Slack?",
        answer:
          "Absolutely! NoteFlow integrates with Slack, allowing you to share notes and collaborate in real time \
        with your team. You can even create reminders or action items directly from your notes and have them \
        sent to your Slack channels.",
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
