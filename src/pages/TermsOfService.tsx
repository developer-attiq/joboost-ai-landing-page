
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last updated: May 11, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the joBoost.ai website and services ("Services"), you agree to be bound by these Terms 
              of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p>
              joBoost.ai provides an AI-powered job application assistant platform that helps users enhance their job 
              applications through various tools and services. The specific features and functionality may change 
              over time as we improve and expand our Services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              Some features of our Services require you to create an account. You are responsible for maintaining the 
              confidentiality of your account credentials and for all activities that occur under your account. You 
              agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Content</h2>
            <p>
              Our Services may allow you to submit content, including resumes, cover letters, and other job application 
              materials ("User Content"). You retain ownership of your User Content, but you grant us a worldwide, 
              non-exclusive, royalty-free license to use, copy, modify, and display your User Content for the purpose 
              of providing our Services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li className="mb-2">Use our Services for any illegal purpose or in violation of any laws</li>
              <li className="mb-2">Violate or infringe other people's intellectual property or privacy rights</li>
              <li className="mb-2">Interfere with or disrupt our Services or servers</li>
              <li className="mb-2">Attempt to gain unauthorized access to our Services or systems</li>
              <li className="mb-2">Use our Services to spam, harass, or harm others</li>
              <li className="mb-2">Use our Services to distribute malware or other harmful code</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              Our Services, including all content, features, and functionality, are owned by joBoost.ai or our licensors 
              and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, 
              distribute, sell, or lease any part of our Services without our explicit permission.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privacy</h2>
            <p>
              Our Privacy Policy describes how we handle the information you provide to us when you use our Services. 
              By using our Services, you consent to our collection and use of information as explained in our 
              Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimers</h2>
            <p>
              OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
              WE DO NOT GUARANTEE THAT OUR SERVICES WILL ALWAYS BE SAFE, SECURE, OR ERROR-FREE, OR THAT THEY WILL FUNCTION 
              WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS INTERRUPTION, ARISING 
              OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF OR INABILITY TO USE OUR SERVICES.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we make material changes, we will provide notice or obtain 
              consent as required by law. By continuing to use our Services after the changes become effective, 
              you agree to be bound by the revised Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the state of Delaware, United States, without regard to its 
              conflict of law provisions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at support@joboost.ai or 
              through our <a href="/contact" className="text-primary underline">contact form</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
