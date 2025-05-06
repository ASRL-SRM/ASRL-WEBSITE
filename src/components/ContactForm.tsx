import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      // Send email notification
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'your_service_id',
          template_id: 'your_template_id',
          user_id: 'your_user_id',
          template_params: {
            to_email: 'asrlsrm2@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        }),
      });

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={handleSubmit}
      className="bg-space-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-space-700"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
          />
        </div>
      </div>
      
      <div className="mt-5">
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
        />
      </div>
      
      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white resize-none"
        ></textarea>
      </div>
      
      <div className="mt-6">
        <button 
          type="submit" 
          className={`btn-primary w-full sm:w-auto ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
          <Send className="ml-2 h-4 w-4" />
        </button>

        {status === 'success' && (
          <p className="mt-4 text-green-500">Message sent successfully!</p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-red-500">Error sending message. Please try again.</p>
        )}
      </div>
    </motion.form>
  );
};

export default ContactForm;