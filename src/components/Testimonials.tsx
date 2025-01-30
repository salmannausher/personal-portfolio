import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Rusty Flick",
      role: "CEO",
      company: "Gomalu",
      content: "Salman is a very talented and knowledgable developer. He was an important part of the development team for several months and he was involved in almost all aspects of the project. He helped create a complex web application from scratch and worked on both complicated backend tasks, as well as frontend tasks. Salman did an excellent job and provided a high quality result. I hope to work with Salman again when the next phase of development begins. I highly recommend you hire him.",
      rating: 5
    },
    {
      name: "Shaun Hughston",
      role: "CEO",
      company: "Agility Automation",
      content: "I initially hired Salman to work on a small development project, and was extremely impressed by his expertise and efficiency. I have since worked with Salman on a range of projects, from small form builds right up to custom platform development and very complex API integrations. Recently, Salman was appointed Senior Web Application Developer and continues to be a valued member of the team. I highly recommend Salman - he has exceptional technical skills, and is reliable and trustworthy.",
      rating: 5
    },
    {
      name: "Mike",
      role: "CEO",
      company: "MyFan",
      content: "Working with Salman was a great experience and I would personally work with him again. Salman was very knowledgeable and very informative, when it came to researching and resolving all our issues. Great Job Salman!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Client Testimonials</h2>
        
        {/* Video Testimonial */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/cNoxcKFaYqU"
                title="Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Written Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}