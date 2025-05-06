import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle';
import FaqItem from '../components/FaqItem';

const Faq = () => {
  const generalFaqs = [
    {
      question: "What is ASRL?",
      answer: "The Aerospace Systems Research Laboratory (ASRL) is a student-led team at SRM Institute of Science and Technology that specializes in developing unmanned aerial vehicles (UAVs), autonomous systems, and aerospace technology. We formed through the merger of two technical teams: SRMUAV and SRMSCRO."
    },
    {
      question: "What types of projects does ASRL work on?",
      answer: "ASRL works on a variety of aerospace projects including fixed-wing UAVs, multirotors, hybrid VTOL aircraft, autonomous flight systems, and ground control stations. Our projects range from competition-focused designs to experimental research platforms."
    },
    {
      question: "Has ASRL won any competitions?",
      answer: "Yes, ASRL has achieved success in several competitions, including 1st place in the Design Category at the SUAS Competition (2019), 1st Place at the Essay Autonomous Design Challenge (2020), and recognition at the World Robotics Championship (2022)."
    },
    {
      question: "Is ASRL open to collaborations?",
      answer: "Absolutely! We're always interested in collaborating with industry partners, research institutions, and other student teams. If you're interested in working with us, please reach out through our contact page."
    }
  ];
  
  const joinFaqs = [
    {
      question: "How do I join ASRL?",
      answer: "To join ASRL, you can apply through our Careers page. We typically recruit new members at the beginning of each academic semester, but we also consider applications year-round for exceptional candidates."
    },
    {
      question: "Do I need aerospace experience to join?",
      answer: "No, prior aerospace experience is not required. We value passion, dedication, and a willingness to learn. Our team includes members from various engineering disciplines, and we provide training and mentorship to help new members develop the necessary skills."
    },
    {
      question: "What roles are available in the team?",
      answer: "ASRL has roles across multiple divisions including Flight Systems, Propulsion, Software, Design, and Research. Whether your interests lie in mechanical design, electronics, programming, research, or project management, there's a place for you in our team."
    },
    {
      question: "Is ASRL only for engineering students?",
      answer: "While many of our members are from engineering backgrounds, we welcome students from all disciplines. We need people with skills in design, communications, business, and more. Diversity of thought and expertise makes our team stronger."
    }
  ];
  
  const projectFaqs = [
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity. Small projects might be completed in a few weeks, while our competition aircraft can take 3-6 months from design to flight testing. Research projects often run continuously with iterative improvements."
    },
    {
      question: "How are projects funded?",
      answer: "Our projects are funded through a combination of university support, industry sponsorships, and competition winnings. We also operate efficiently by reusing components and materials when possible."
    },
    {
      question: "Do team members get to fly the UAVs?",
      answer: "Yes! Team members who work on a project are involved in flight testing, though for safety reasons, only trained pilots operate our aircraft during critical flight phases. We also use simulators for training and testing."
    },
    {
      question: "Can I propose my own project idea?",
      answer: "Absolutely! We encourage team members to bring their innovative ideas. New project proposals are reviewed by team leads, and if aligned with our goals and resources, they can be incorporated into our development pipeline."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-about-pattern bg-cover bg-center pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80">
              Find answers to common questions about ASRL, our projects, and how to get involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* General FAQs */}
            <div className="lg:col-span-3">
              <SectionTitle 
                title="General Questions"
                subtitle="Learn more about ASRL, our mission, and our achievements."
              />
              
              <div className="bg-space-900/40 backdrop-blur-sm rounded-lg p-6 border border-space-800">
                {generalFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
            
            {/* Joining FAQs */}
            <div className="lg:col-span-3">
              <SectionTitle 
                title="Joining ASRL"
                subtitle="Information about becoming a member of our team."
              />
              
              <div className="bg-space-900/40 backdrop-blur-sm rounded-lg p-6 border border-space-800">
                {joinFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
            
            {/* Projects FAQs */}
            <div className="lg:col-span-3">
              <SectionTitle 
                title="Projects & Development"
                subtitle="Details about our project development process and capabilities."
              />
              
              <div className="bg-space-900/40 backdrop-blur-sm rounded-lg p-6 border border-space-800">
                {projectFaqs.map((faq, index) => (
                  <FaqItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-space-800/50 backdrop-blur-sm rounded-lg p-8 border border-space-700 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-white/80 mb-6">
              If you couldn't find the answer to your question, feel free to reach out to us directly.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Faq;