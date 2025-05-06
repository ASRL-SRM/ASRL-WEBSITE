import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="px-4 py-2 bg-space-800 border border-space-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm"
        required
      />
      <button 
        type="submit" 
        className={`btn-primary py-2 text-sm ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>

      {status === 'success' && (
        <p className="text-green-500 text-sm">Successfully subscribed!</p>
      )}

      {status === 'error' && (
        <p className="text-red-500 text-sm">Error subscribing. Please try again.</p>
      )}
    </form>
  );
};

export default NewsletterForm