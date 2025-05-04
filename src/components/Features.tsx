
import React from 'react';
import { FileText, PenTool, CheckCircle, List } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "Job Tracker",
    description: "Keep all your job applications in one organized dashboard with statuses, dates, and notes",
    icon: List,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Resume Rewriter",
    description: "AI technology tailors your resume to each job by highlighting relevant skills and experiences",
    icon: FileText,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Cover Letter Generator",
    description: "Create personalized cover letters in seconds that match job requirements and your profile",
    icon: PenTool,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Status Updates",
    description: "Track application progress with reminders for follow-ups and interview preparation",
    icon: CheckCircle,
    color: "bg-amber-100 text-amber-700",
  }
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Land Your Dream Job</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered tools help you manage applications and stand out with tailored materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-6 bg-white rounded-xl p-6 card-shadow"
            >
              <div className={cn("rounded-full p-3 h-fit", feature.color)}>
                <feature.icon size={24} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
