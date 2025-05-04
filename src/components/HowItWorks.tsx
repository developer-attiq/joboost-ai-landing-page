
import React from 'react';
import { FileText, PenTool, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: "Add Jobs",
    description: "Save job listings you're interested in with one click from any site",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "AI Tailors Resume",
    description: "Our AI analyzes job requirements and customizes your resume to match",
    icon: PenTool,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Apply & Track",
    description: "Submit applications and track progress through the hiring process",
    icon: CheckCircle,
    color: "bg-green-100 text-green-700",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From job discovery to interview, joBoost.ai helps you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-xl p-6 card-shadow"
            >
              <div className={cn("rounded-full p-4 mb-6", step.color)}>
                <step.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center mt-8">
                  <ArrowRight index={index} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ index }: { index: number }) => (
  <div className="absolute transform translate-x-full -translate-y-1/2" style={{ right: '-2rem', top: '50%' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5 12H19M19 12L12 5M19 12L12 19" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-gray-400"
      />
    </svg>
  </div>
);

export default HowItWorks;
