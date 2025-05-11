
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-slate max-w-none">
            <p className="text-lg mb-6">Last updated: May 11, 2025</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how joBoost.ai ("we", "us", or "our") uses cookies and similar technologies 
              on our website. This policy provides you with information about how we use cookies, why we use them, 
              and how you can control them.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit 
              websites. They are widely used to make websites work more efficiently and provide information to the website owners. 
              Cookies cannot harm your device or retrieve information from your hard drive.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Cookies</h2>
            <p>We use cookies for several purposes, including:</p>
            <ul className="list-disc pl-6 mt-2 mb-6">
              <li className="mb-2">
                <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable 
                core functionality such as security, network management, and account access.
              </li>
              <li className="mb-2">
                <strong>Functionality Cookies:</strong> These allow us to remember choices you make and provide enhanced, 
                personalized features.
              </li>
              <li className="mb-2">
                <strong>Performance and Analytics Cookies:</strong> We use these to collect information about how visitors 
                use our website, including the number of visitors, where they come from, and which pages they visit. This 
                helps us improve our website and services.
              </li>
              <li className="mb-2">
                <strong>Marketing Cookies:</strong> These track your online activity to help advertisers deliver more relevant 
                advertising or limit the number of times you see an ad.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Cookie Choices</h2>
            <p>
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer 
              and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually 
              adjust some preferences every time you visit a site, and some services and functionalities may not work.
            </p>
            <p className="mt-4">
              Most web browsers allow you to control cookies through their settings preferences. To find out more about cookies, 
              including how to see what cookies have been set and how to manage and delete them, 
              visit <a href="https://www.allaboutcookies.org" className="text-primary underline">www.allaboutcookies.org</a>.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new 
              Cookie Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at support@joboost.ai or 
              through the <a href="/contact" className="text-primary underline">contact form</a> on our website.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
