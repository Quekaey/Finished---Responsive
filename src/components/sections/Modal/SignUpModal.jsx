import Close from "../../icons/Close";
import { useState } from "react";
import { useModalContext } from "../../../contexts/ModalContext";

const initialState = { email: "", password: "" };

export default function SignUpModal() {
  const { setActiveModal } = useModalContext();

  const [checked, setChecked] = useState(false);
  const [inputs, setInputs] = useState(initialState);

  function handleInputs(e) {
    setInputs((prevInputs) => {
      return {
        ...prevInputs,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checked) {
      console.log(inputs);
      setInputs(initialState);
      setActiveModal("");
    }
  }

  return (
    <section 
      className="grid max-w-3xl grid-cols-2 max-sm:w-96 max-sm:grid-cols-1"
      aria-labelledby="signup-heading"
      data-testid="signup-modal-content"
    >
      <div className="bg-primary-1300 flex flex-col justify-center gap-y-4 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 text-center max-md:px-6 max-md:py-8 max-sm:hidden">
        <h4 
          id="signup-heading"
          className="text-primary-50 text-4xl/12 font-bold tracking-tight"
          data-testid="signup-heading"
        >
          Let&apos;s Get You Started
        </h4>
        <p className="text-primary-100 text-lg/8 max-md:text-base/loose">
          No charges, no fees. Get a free Consultation!
        </p>
      </div>
      <div className="bg-primary-1400 flex flex-col justify-between gap-y-24 bg-[url('../src/assets/Noise.webp')] bg-repeat p-10 max-md:px-6 max-md:py-8 max-sm:gap-y-16">
        <button
          className="btn-secondary border-primary-75 hover:bg-primary-75 group transition-properties ml-auto w-fit cursor-pointer rounded-2xl border-2 p-3"
          onClick={() => setActiveModal("")}
          aria-label="Close sign-up modal"
          data-testid="signup-modal-close"
          type="button"
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
          data-testid="signup-form"
        >
          <div>
            <label 
              htmlFor="email-input"
              className="block mb-2"
            >
              Email
            </label>
            <input
              id="email-input"
              name="email"
              type="email"
              required
              className="bg-primary-75 placeholder-primary-1500 text-primary-1300 mt-2 block w-full rounded-full px-8 py-4 font-normal placeholder:text-base placeholder:font-light placeholder:opacity-20 max-md:px-6 max-md:py-3 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-primary-1400"
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
              Enter your email address to get started
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-x-3 mb-4 max-sm:mb-3">
              <input
                id="terms-checkbox"
                type="checkbox"
                checked={checked}
                onChange={() => setChecked((curr) => !curr)}
                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-primary-300 rounded"
                required
                data-testid="terms-checkbox"
              />
              <label 
                htmlFor="terms-checkbox"
                className="text-sm text-primary-100 cursor-pointer"
              >
                I agree to the terms and conditions
              </label>
            </div>
            
            <button
              type="submit"
              disabled={!checked}
              className="btn-primary bg-primary-500 primary-glow-hover transition-properties w-full cursor-pointer rounded-full py-4 text-lg/8 max-md:px-6 max-md:py-3 max-md:text-base/loose disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Submit sign-up form to get started"
              data-testid="signup-submit-button"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
