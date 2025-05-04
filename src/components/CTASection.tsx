
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Job Search?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Start tracking applications and let AI help you stand out with personalized resumes and cover letters.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <Link to="/signup">
            <Button size="lg" className="w-full">
              Get Started For Free
            </Button>
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">No credit card required</p>
      </div>
    </section>
  );
};

export default CTASection;
