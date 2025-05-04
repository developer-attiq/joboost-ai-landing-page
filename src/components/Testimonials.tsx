
import React from 'react';

const testimonials = [
  {
    quote: "joBoost.ai helped me land interviews at 3 tech companies by customizing my resume to match exactly what they were looking for.",
    author: "Sarah T.",
    position: "Software Engineer",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "I was spending hours tailoring resumes. With joBoost.ai, I do it in minutes and the quality is actually better than what I was doing manually.",
    author: "Michael K.",
    position: "Marketing Director",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "As a career coach, I recommend joBoost.ai to all my clients. The ability to track applications and generate tailored materials saves them so much time.",
    author: "Jessica W.",
    position: "Career Coach",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of job seekers who've improved their application success rate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 card-shadow flex flex-col"
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <p className="text-base flex-grow mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-sm font-semibold">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
