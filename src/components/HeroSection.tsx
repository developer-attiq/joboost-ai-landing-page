
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              <span className="mr-2">✨</span> AI-powered job hunting assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Land Your Next Job <span className="text-primary">Faster</span> with AI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Track your job hunt and tailor every resume and cover letter with smart AI tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link to="/signup">
                <Button size="lg" className="px-8">
                  Start Free
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8">
                Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-2">
              No credit card required • Free plan available
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl -rotate-2 scale-95 opacity-70"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden animate-float">
              <div className="bg-gray-800 h-8 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600&h=900" 
                alt="joBoost.ai dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Small decoration elements */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-70 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-8 h-8 bg-purple-500 rounded-full opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
