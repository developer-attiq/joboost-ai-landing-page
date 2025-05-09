
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for casual job seekers",
    features: [
      "5 job application entries",
      "Basic tracking features",
      "Resume storage",
      "Email support"
    ],
    buttonText: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For serious job hunters",
    features: [
      "Unlimited job entries",
      "AI resume tailoring",
      "Cover letter generator",
      "Application analytics",
      "Priority support"
    ],
    buttonText: "Start 7-Day Trial",
    highlighted: true
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "For career coaches & teams",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced analytics",
      "Bulk processing",
      "API access",
      "Dedicated support"
    ],
    buttonText: "Buy Now",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting out or a power user, we have a plan for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`flex flex-col bg-white rounded-xl p-6 ${
                plan.highlighted 
                  ? 'border-2 border-primary ring-4 ring-primary/10 shadow-xl relative' 
                  : 'border border-gray-200 card-shadow'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant={plan.highlighted ? "default" : "outline"}
                className={`w-full ${plan.highlighted ? "py-6" : ""}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground">
          All plans include a 30-day money-back guarantee. No questions asked.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
