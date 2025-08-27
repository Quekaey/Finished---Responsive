import { useState } from "react";
import Close from "../../icons/Close";
import Loading from "../../ui/Loading";
import Progress from "../../ui/Progress";
import { useModalContext } from "../../../contexts/ModalContext";
import { useToast } from "../../../contexts/ToastContext";

const initialState = { 
  email: "", 
  industry: "",
  experience: ""
};

export default function LaunchAgencyModal() {
  const { setActiveModal } = useModalContext();
  const { success, error } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inputs, setInputs] = useState(initialState);

  function handleInputs(e) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!inputs.email) {
      error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    setProgress(0);

    // Simulate form submission with progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setProgress(100);
      
      // Show success message
      success("Perfect! We'll help you launch your agency. Check your email for next steps.");
      
      // Reset form
      setInputs(initialState);
      
      // Close modal after delay
      setTimeout(() => {
        setActiveModal("");
      }, 1500);
      
    } catch {
      error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setProgress(0);
    }
  }

  return (
    <section 
      className="grid max-w-4xl grid-cols-2 max-sm:w-96 max-sm:grid-cols-1"
      aria-labelledby="launch-agency-heading"
      data-testid="launch-agency-modal-content"
    >
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center max-md:px-6 max-md:py-8 max-sm:hidden">
        <h4 
          id="launch-agency-heading"
          className="text-primary-50 text-4xl/12 font-bold tracking-tight"
          data-testid="launch-agency-heading"
        >
          Launch Your Agency
        </h4>
        <p className="text-primary-100 text-lg/8">
          Join 500+ successful agencies and get expert guidance, tools, and strategies to accelerate your growth.
        </p>
      </div>
      <div className="bg-primary-1400 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 max-md:px-6 max-md:py-8 max-sm:gap-y-16">
        <button
          className="btn-secondary border-primary-75 hover:bg-primary-75 group transition-properties mr-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
          onClick={() => setActiveModal("")}
          aria-label="Close launch agency modal"
          data-testid="launch-agency-modal-close"
          type="button"
          disabled={isSubmitting}
        >
          <Close
            className="stroke-primary-75 group-hover:stroke-primary-1300 transition-properties max-md:h-4 max-md:w-4"
            width={2}
            alt="Close icon"
            aria-hidden="true"
          />
        </button>
        
        <form 
          onSubmit={handleSubmit}
          className="text-primary-50 flex flex-col gap-y-6 text-lg/8 font-semibold tracking-tight max-md:font-normal"
          data-testid="launch-agency-form"
        >
          {/* Progress Indicator */}
          {isSubmitting && (
            <div className="mb-4">
              <Progress 
                value={progress} 
                max={100} 
                type="bar" 
                size="sm"
                showLabel={false}
                className="mb-2"
              />
              <p className="text-sm text-primary-100 text-center">
                {progress < 50 ? "Preparing your agency launch..." : 
                 progress < 90 ? "Processing..." : "Almost done!"}
              </p>
            </div>
          )}



          <div>
            <label 
              htmlFor="email-input"
              className="block mb-2"
            >
              Email *
            </label>
            <input
              id="email-input"
              name="email"
              type="email"
              required
              disabled={isSubmitting}
              className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-1400 disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="janedoe@gmail.com"
              onChange={handleInputs}
              value={inputs.email}
              aria-describedby="email-help"
              data-testid="email-input"
            />
            <div 
              id="email-help" 
              className="sr-only"
            >
              Enter your email address
            </div>
          </div>

          <div>
            <label 
              htmlFor="industry-input"
              className="block mb-2"
            >
              Industry
            </label>
            <select
              id="industry-input"
              name="industry"
              disabled={isSubmitting}
              className="bg-primary-75 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal max-md:px-6 max-md:py-3 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-1400 disabled:opacity-50 disabled:cursor-not-allowed"
              onChange={handleInputs}
              value={inputs.industry}
              data-testid="industry-input"
            >
              <option value="">Select Industry</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="web-development">Web Development</option>
              <option value="design">Design & Creative</option>
              <option value="consulting">Consulting</option>
              <option value="ecommerce">E-commerce</option>
              <option value="saas">SaaS</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label 
              htmlFor="experience-input"
              className="block mb-2"
            >
              Experience Level
            </label>
            <select
              id="experience-input"
              name="experience"
              disabled={isSubmitting}
              className="bg-primary-75 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal max-md:px-6 max-md:py-3 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-1400 disabled:opacity-50 disabled:cursor-not-allowed"
              onChange={handleInputs}
              value={inputs.experience}
              data-testid="experience-input"
            >
              <option value="">Select Experience</option>
              <option value="beginner">Just Starting Out</option>
              <option value="intermediate">Some Experience</option>
              <option value="advanced">Experienced Professional</option>
              <option value="expert">Industry Expert</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary bg-primary-500 border-primary-500 text-primary-1300 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8 max-md:px-6 max-md:py-3 max-md:text-base/loose disabled:opacity-50 disabled:cursor-not-allowed relative"
            aria-label="Submit launch agency form"
            data-testid="launch-agency-submit-button"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-x-2">
                <Loading type="dots" size="sm" />
                <span>Launching Agency...</span>
              </div>
            ) : (
              "Launch My Agency"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
