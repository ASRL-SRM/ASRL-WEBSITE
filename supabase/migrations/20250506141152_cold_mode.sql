/*
  # Create CMS tables for ASRL website

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `subject` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)
    
    - `sponsorship_inquiries`
      - `id` (uuid, primary key)
      - `company_name` (text)
      - `contact_name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for insert operations
*/

-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active'
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create contact_messages table
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'unread'
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to send contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create sponsorship_inquiries table
CREATE TABLE sponsorship_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE sponsorship_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to submit sponsorship inquiries"
  ON sponsorship_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);