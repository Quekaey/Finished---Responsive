import { useState } from "react";
import { motion } from "framer-motion";
import ArrowRight from "../../icons/ArrowRight";
import ArrowRightLine from "../../icons/ArrowRightLine";

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
        className="bg-primary-1400 rounded-2xl p-8 max-w-md mx-auto text-center"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-2xl font-semibold mb-4 text-primary-50">
          Thank You!
        </h3>
        <p className="text-primary-100 mb-6">
          We've received your partnership inquiry. Our team will review your information and get back to you within 24-48 hours.
        </p>
        <div className="bg-primary-1300/10 rounded-xl p-4 border border-primary-1300/20">
          <p className="text-primary-400 text-sm font-medium mb-2">What happens next?</p>
          <ul className="text-primary-100 text-sm space-y-1 text-left">
            <li>• We'll review your partnership request</li>
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
      className="bg-primary-1400 rounded-2xl p-8 max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-semibold mb-4 text-primary-50">
          Let's Partner Together
        </h3>
        <p className="text-primary-100 text-lg">
          Tell us about your partnership interests and we'll get back to you within 24-48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-primary-50 font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-primary-1300/10 border border-primary-1300/20 rounded-xl text-primary-50 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Enter your email address"
          />
        </div>

        {/* Partnership Type Selection */}
        <div>
          <label className="block text-primary-50 font-medium mb-4">
            Partnership Type *
          </label>
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {partnershipTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setPartnershipType(type.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left ${
                  partnershipType === type.id
                    ? "border-primary-500 bg-primary-500/10"
                    : "border-primary-1300/20 bg-primary-1300/10 hover:border-primary-500/50 hover:bg-primary-500/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{type.icon}</div>
                  <div>
                    <h4 className="font-semibold text-primary-50 mb-1">
                      {type.title}
                    </h4>
                    <p className="text-sm text-primary-100">
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
          className="w-full btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow hover:border-primary-50 hover:bg-primary-50 primary-glow-hover active:scale-95 transition-transform group flex items-center justify-center gap-x-3 rounded-full border-2 px-8 py-3.5 focus:ring-4 focus:ring-offset-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <span className="text-lg/8">Sending...</span>
          ) : (
            <>
              <span className="text-lg/8">Submit Partnership Inquiry</span>
              <div className="w-5" aria-hidden="true">
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
          <p className="text-primary-400 text-sm">
            By submitting this form, you agree to receive communications from StartGrid about partnership opportunities.
          </p>
        </div>
      </form>
    </motion.div>
  );
}
