import { useState } from "react";
import { frequentlyAskedQuestions } from "../../../utils/content";
import FAQList from "./FAQList";

export default function FAQs() {
  const [category, setActiveCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions
    .filter((obj) => obj.category === category)
    .at(0);
  const questionsArr = categoryObj.questions;

  const handleQuestionClick = (id) =>
    id === activeQuestion ? setActiveQuestion(null) : setActiveQuestion(id);

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setActiveCategory(category);
  };

  return (
    <section 
      id="faqs"
      className="bg-gradient-to-bottom justify-items-center"
      aria-labelledby="faqs-heading"
      data-testid="faqs-section"
    >
      <div className="w-full max-w-[90rem] py-32 max-xl:px-16 max-xl:py-24 max-lg:px-8 max-md:px-6">
        <h2 
          id="faqs-heading"
          className="text-primary-50 mb-8 text-center text-6xl/18 font-semibold tracking-tighter max-xl:mb-6 max-xl:text-5xl/16 max-lg:text-4xl/10 max-lg:tracking-tight max-md:mb-4 max-md:text-left max-sm:text-3xl/9 max-sm:tracking-tighter"
          data-testid="faqs-heading"
        >
          Frequently Asked Questions
        </h2>
        <div className="mb-8 text-xl/loose font-light max-lg:text-lg/8 max-sm:text-base/loose">
          <p className="text-primary-100 text-center max-md:text-left max-sm:hidden">
            The most commonly asked questions about StartGrid.{" "}
            <br className="max-md:hidden" />
            Have any other questions?{" "}
            <a
              href="#"
              className="link-hover group underline decoration-1 underline-offset-3"
              aria-label="Chat with our expert tech team for additional questions"
              data-testid="faqs-chat-link"
            >
              Chat with our expert tech team
            </a>
          </p>
        </div>
        
        <nav 
          className="mb-16 max-lg:mb-18"
          role="navigation"
          aria-label="FAQ categories"
          data-testid="faq-categories"
        >
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-4 max-md:justify-start" role="tablist">
            {frequentlyAskedQuestions.map((obj) => (
              <li key={obj.id} role="presentation">
                <button
                  className={`btn-secondary border-primary-50 text-primary-50 transition-properties cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 max-xl:px-6 max-xl:text-base/loose max-sm:py-3 ${
                    obj.category === category &&
                    "bg-primary-500 text-primary-1300 border-primary-500 primary-glow"
                  } ${obj.category !== category && "hover:bg-primary-50 hover:text-primary-1300"}`}
                  onClick={() => handleCategoryClick(obj.category)}
                  role="tab"
                  aria-selected={obj.category === category}
                  aria-controls={`faq-panel-${obj.category.toLowerCase().replace(/\s+/g, '-')}`}
                  data-testid={`faq-category-${obj.category.toLowerCase().replace(/\s+/g, '-')}`}
                  type="button"
                >
                  {obj.category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div 
          role="tabpanel"
          id={`faq-panel-${category.toLowerCase().replace(/\s+/g, '-')}`}
          aria-labelledby={`faq-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
          data-testid="faq-panel"
        >
          <FAQList
            category={category}
            questions={questionsArr}
            activeQuestion={activeQuestion}
            handleQuestionClick={handleQuestionClick}
          />
        </div>
      </div>
    </section>
  );
}
