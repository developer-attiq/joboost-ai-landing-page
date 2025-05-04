
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = ({ className }: { className?: string }) => {
  return (
    <header className={cn('w-full py-4', className)}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary">joBoost<span className="text-sm text-muted-foreground">.ai</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
