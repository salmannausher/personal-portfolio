import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using EmailJS or a similar service would be better for production
      const mailtoLink = `mailto:salmanfasttian@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 animate-slide-in">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14a800] focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14a800] focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#14a800] focus:border-transparent"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#14a800] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3c8224] transition-colors flex items-center justify-center animate-slide-in"
              style={{ animationDelay: '0.4s' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <Mail className="w-8 h-8 text-[#14a800] mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">salmanfasttian@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <MessageSquare className="w-8 h-8 text-[#14a800] mr-4" />
              <div>
                <h3 className="font-semibold">Upwork</h3>
                <p className="text-gray-600">Top Rated Plus Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}