
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate is the AI for rewriting resumes?",
    answer: "Our AI has been trained on thousands of successful resumes and job descriptions. It identifies key requirements and matches your experience to them, highlighting relevant skills and achievements. While AI does the heavy lifting, you always have final editing control before submission."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access to the features in your plan until the end of your current billing period."
  },
  {
    question: "How many resumes can I create with joBoost.ai?",
    answer: "With our Free plan, you can store one master resume and track up to 5 job applications. Our Pro plan allows unlimited resumes and job applications, giving you the flexibility to customize for every opportunity."
  },
  {
    question: "Is my data secure with joBoost.ai?",
    answer: "Absolutely. We take data security very seriously. All your personal information and resume data is encrypted both in transit and at rest. We never share your information with third parties without your explicit consent."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with our service for any reason, contact our support team within 30 days of your purchase for a full refund."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about joBoost.ai
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 card-shadow">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Still have questions? <a href="#" className="text-primary font-medium">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
