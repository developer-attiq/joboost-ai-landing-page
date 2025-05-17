import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const AboutUs = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">
              Founded in 2024, joBoost.ai is on a mission to revolutionize the job application process.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              We believe that finding your dream job shouldn't be a nightmare. Our AI-powered platform streamlines 
              the application process, helping job seekers stand out from the crowd and land interviews faster.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
            <p>
              After experiencing the frustration of modern job hunting firsthand, our founders set out to build a 
              solution that addresses the biggest pain points in the process. What started as a simple resume 
              optimization tool has evolved into a comprehensive job application assistant.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-medium mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">1</div>
                  <div>
                    <strong>Innovation</strong> - We're constantly pushing the boundaries of what AI can do to help job seekers.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">2</div>
                  <div>
                    <strong>Accessibility</strong> - We believe everyone deserves access to tools that help them succeed.
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 h-6 w-6 bg-primary/10 text-primary rounded-full flex items-center justify-center">3</div>
                  <div>
                    <strong>Empowerment</strong> - We aim to give job seekers confidence and control over their career journey.
                  </div>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
            <p>
              The joBoost team brings together experts in artificial intelligence, career coaching, and user experience 
              design. Our diverse backgrounds and shared passion for improving the job hunt drive us to create the best 
              possible product for our users.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              
              
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Get in Touch</h2>
            <p>
              We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
              feel free to reach out through our <a href="/contact" className="text-primary underline">contact page</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default AboutUs;