import { useState } from "react";
import { motion } from "framer-motion";
import ArrowRight from "../../icons/ArrowRight";

export default function PartnershipInquiryModal() {
  const [email, setEmail] = useState("");
  const [partnershipType, setPartnershipType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const partnershipTypes = [
    {
      id: "affiliate",
      title: "Affiliate Program",
      description: "Earn 20% commission by promoting StartGrid",
      icon: "💰"
    },
    {
      id: "referral",
      title: "Referral Partnership",
      description: "Earn $50-$100 per referral",
      icon: "🤝"
    },
    {
      id: "white-label",
      title: "White-Label Solutions",
      description: "Resell StartGrid under your brand",
      icon: "🏷️"
    },
    {
      id: "strategic",
      title: "Strategic Partnerships",
      description: "Deep integration opportunities",
      icon: "🚀"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !partnershipType) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-primary-1400 rounded-2xl p-8 max-w-md mx-auto text-center max-md:max-w-sm max-sm:max-w-[95%] max-md:p-6 max-sm:p-4"
      >
        <div className="text-6xl mb-6 max-md:text-5xl max-sm:text-4xl">🎉</div>
        <h3 className="text-2xl font-semibold mb-4 text-primary-50 max-md:text-xl max-sm:text-lg">
          Thank You!
        </h3>
        <p className="text-primary-100 mb-6 max-md:text-base max-sm:text-sm">
          We&apos;ve received your partnership inquiry. Our team will review your information and get back to you within 24-48 hours.
        </p>
        <div className="bg-primary-1300/10 rounded-xl p-4 border border-primary-1300/20 max-sm:p-3">
          <p className="text-primary-400 text-sm font-medium mb-2 max-sm:text-xs">What happens next?</p>
          <ul className="text-primary-100 text-sm space-y-1 text-left max-sm:text-xs">
            <li>• We&apos;ll review your partnership request</li>
            <li>• Schedule a brief consultation call</li>
            <li>• Discuss partnership terms and next steps</li>
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-primary-1400 rounded-2xl p-8 max-w-2xl mx-auto max-md:max-w-sm max-sm:max-w-[95%] max-md:p-6 max-sm:p-4"
    >
      <div className="text-center mb-8 max-md:mb-6 max-sm:mb-4">
        <h3 className="text-3xl font-semibold mb-4 text-primary-50 max-md:text-2xl max-sm:text-xl">
          Let&apos;s Partner Together
        </h3>
        <p className="text-primary-100 text-lg max-md:text-base max-sm:text-sm">
          Tell us about your partnership interests and we&apos;ll get back to you within 24-48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-md:space-y-4 max-sm:space-y-3">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-primary-50 font-medium mb-2 max-sm:mb-1 max-sm:text-sm">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-primary-1300/10 border border-primary-1300/20 rounded-xl text-primary-50 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all max-md:px-3 max-md:py-2.5 max-sm:px-3 max-sm:py-2 max-sm:text-sm"
            placeholder="Enter your email address"
          />
        </div>

        {/* Partnership Type Selection */}
        <div>
          <label className="block text-primary-50 font-medium mb-4 max-sm:mb-3 max-sm:text-sm">
            Partnership Type *
          </label>
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1 max-sm:gap-2">
            {partnershipTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setPartnershipType(type.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left max-md:p-3 max-sm:p-2.5 ${
                  partnershipType === type.id
                    ? "border-primary-500 bg-primary-500/10"
                    : "border-primary-1300/20 bg-primary-1300/10 hover:border-primary-500/50 hover:bg-primary-500/5"
                }`}
              >
                <div className="flex items-start gap-3 max-sm:gap-2">
                  <div className="text-2xl max-md:text-xl max-sm:text-lg">{type.icon}</div>
                  <div>
                    <h4 className="font-semibold text-primary-50 mb-1 max-md:text-sm max-sm:text-xs">
                      {type.title}
                    </h4>
                    <p className="text-sm text-primary-100 max-sm:text-xs">
                      {type.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!email || !partnershipType || isSubmitting}
          className="w-full btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover active:scale-95 transition-transform group flex items-center justify-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 max-md:px-6 max-md:py-3 max-sm:px-4 max-sm:py-2.5"
        >
          {isSubmitting ? (
            <span className="text-lg/8 max-md:text-base max-sm:text-sm">Sending...</span>
          ) : (
            <>
              <span className="text-lg/8 max-md:text-base max-sm:text-sm">Submit Partnership Inquiry</span>
              <div className="w-5 max-md:w-4 max-sm:w-4" aria-hidden="true">
                <ArrowRight
                  alt="Arrow right icon"
                  className="stroke-primary-1300"
                  width={2}
                />
              </div>
            </>
          )}
        </button>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-primary-400 text-sm max-sm:text-xs">
            By submitting this form, you agree to receive communications from StartGrid about partnership opportunities.
          </p>
        </div>
      </form>
    </motion.div>
  );
}
