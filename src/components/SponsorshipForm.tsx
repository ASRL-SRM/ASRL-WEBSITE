import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

const SponsorshipForm = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('sponsorship_inquiries')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting sponsorship inquiry:', error);
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-space-800/30 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-space-700"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company_name" className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="contact_name" className="block text-sm font-medium mb-1">Contact Name</label>
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            value={formData.contact_name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
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
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
          />
        </div>
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
          placeholder="Tell us about your organization and sponsorship interests..."
          className="w-full px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white resize-none"
        ></textarea>
      </div>
      
      <div className="mt-6">
        <button 
          type="submit" 
          className={`btn-primary w-full sm:w-auto ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        {status === 'success' && (
          <p className="mt-4 text-green-500">Inquiry submitted successfully! We'll be in touch soon.</p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-red-500">Error submitting inquiry. Please try again.</p>
        )}
      </div>
    </motion.form>
  );
};

export default SponsorshipForm;