
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join thousands of job seekers who've boosted their career opportunities with our AI tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
