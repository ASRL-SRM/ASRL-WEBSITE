import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Wrench, Code, CircuitBoard, User, } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  const [division, setDivision] = useState('all');
  
  const divisions = [
    { id: 'all', name: 'Full Team', icon: <Users className="h-5 w-5" /> },
    { id: 'design', name: 'Design and Fabrication', icon: <Wrench className="h-5 w-5" /> },
    { id: 'flight', name: 'Flight Systems', icon: <CircuitBoard className="h-5 w-5" /> },
    { id: 'Coding', name: 'Coding', icon: <Code className="h-5 w-5" /> },
    { id: 'Corporate', name: 'Corporate', icon: <User className="h-5 w-5" /> },
  ];
  
  
    const teamMembers = [
      //Team Lead
      {
        name: 'Praneel Sharma',
        role: 'Team Lead',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(5).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/praneel-sharma-915827248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appsharma.praneel',
        emailAddress: 'sharmapraneelas@gmail.com',
        instagramUrl: 'https://www.instagram.com/sharma.praneel'
      },
      //All Domain Leads
      {
        name: 'Yash Verma',
        role: 'Flight Systems Lead',
        division: 'flight',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(10).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/yashverma2004/',
        emailAddress: 'yashverma7531@gmail.com',
        instagramUrl: 'https://www.instagram.com/'
      },
      {
        name: 'Aarya Menon ',
        role: 'Coding Lead',
        division: 'Coding',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(11).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/aarya-menon-83b420251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'am8957@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/_aaryamenon'
      },
       {
        name: 'Manan Agarwal',
        role: 'Design and Fabrication Lead',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(19).jpg',
        linkedinUrl: 'http://linkedin.com/in/manan-agarwal-a489a72b9',
        emailAddress: 'ma7595@stmist.edu.in',
        instagramUrl: 'https://www.instagram.com/Me_mananagarwal'
      },
       {
        name: 'Shagun Somani',
        role: 'Corporate Lead',
        division: 'Corporate',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(20).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/shagun-somani-00b29a24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        emailAddress: 'ss9416@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/shagunnn____?igsh=MjdmdjdleHNqdDV6'
      },
      //Seniors 
      {
        name: 'Laxmi Waghmare',
        role: 'Design and Frabrication Senior',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(7).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/laxmi-w',
        emailAddress: 'lw5951@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/_.l_.a_.x_.m_.i_'
      },
      
     {
        name: 'Divyansh Singh',
        role: 'Coding Senior',
        division: 'Coding',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(12).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/divyansh-singh-8b12b426a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'ds8556@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/just_divyaaaanshh'
      },
      
 
      {
        name: 'Akshika Pathania',
        role: 'Design and Fabrication Senior',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(6).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/akshika-pathania-b20304282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'ap7251@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/akshika2805'
      },
      //Members
      {
        name: 'Vedant Sardav',
        role: 'Flight Systems Engineer',
        division: 'flight',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(21).jpg',
        linkedinUrl:'',
        emailAddress: 'architamey@gmail.com',
        instagramUrl: 'https://www.instagram.com/@explorerobo2k19'
      },
       {
        name: 'Srinidhi B',
        role: 'Flight Systems Engineer',
        division: 'flight',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(24).jpeg',
        linkedinUrl:'',
        emailAddress: 'srinidhibalaganur16@gmail.com',
        instagramUrl: 'https://www.instagram.com/Sri_nidhi_balaganur'
      },
       {
        name: 'Archisha Sahoo',
        role: 'Flight Systems Engineer',
        division: 'flight',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(23).jpg',
        linkedinUrl: 'www.linkedin.com/in/Archisha_Sahoo',
        emailAddress: 'archishasahoo.16@gmail.com',
        instagramUrl: 'https://www.instagram.com/archisha_1016'
      },
       {
        name: 'Alysia Gomes',
        role: 'Flight Systems Engineer',
        division: 'flight',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(22).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/alysia-gomes-88b488303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'ag9456@srmist.edu.in',
        instagramUrl: ''
      },
      
  {
        name: 'Alapan Chatterjee',
        role: 'Design and Fabrication Engineer',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(14).jpg',
        linkedinUrl: 'https://www.linkedin.com/in/alapan-chatterjee-2a7766295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        emailAddress: 'ac0747@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/ace_.8202'
      },
  
  {
        name: 'Prithvi Shankar',
        role: 'Design and Fabrication Engineer',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(1).jpeg',
        linkedinUrl: 'www.linkedin.com/in/',
        emailAddress: 'ps0676@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/pritttthvi'
      },
  
  {
        name: 'Tejas R Nadig ',
        role: 'Design and Fabrication Engineer',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(16).jpg',
        linkedinUrl: 'www.linkedin.com/in/',
        emailAddress: 'tn1267@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/'
      },
  
  
  {
        name: 'Rishav Kamboj',
        role: 'Design and Fabrication Engineer',
        division: 'design',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(2).jpeg',
        linkedinUrl: 'www.linkedin.com/in/rishav-kamboj',
        emailAddress: 'rk6828@srmist.edu.in',
        instagramUrl: 'https://www.instagram.com/'
      },
  {
        name: 'Archit Amey',
        role: 'Flight Systems Engineer',
        division: 'flight',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(13).jpg',
        linkedinUrl: 'www.linkedin.com/in/',
        emailAddress: 'architamey@gmail.com',
        instagramUrl: 'https://www.instagram.com/'
      },
  
      {
        name: 'Akshansh Sharma  ',
        role: 'Flight Software Engineer',
        division: 'Coding',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(4).jpeg',
        linkedinUrl: 'https://www.linkedin.com/in/akshansh-sharma-16220832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        emailAddress: 'akshansh9816264920@gmail.com',
        instagramUrl: 'https://www.instagram.com/akshansh_shrma?igsh=eTFoYWQ4cm9zbGN5&utm_source=qr'
      },
      {
        name: 'P.SRIZAN SAI RAM' ,
        role: 'Flight Software Engineer',
        division: 'Coding',
        imageSrc: 'https://raw.githubusercontent.com/Akinc5/image/main/img%20(9).jpg',
        linkedinUrl: '',
        emailAddress:'sp8792@srmist.edu.in' ,
        instagramUrl: ''
      },
      {
        name: 'Rishabh Raushan',
        role: 'Flight Software Engineer',
        division: 'Coding',
        imageSrc:'https://raw.githubusercontent.com/Akinc5/image/main/img%20(17).jpg',
        linkedinUrl:' https://www.linkedin.com/in/rishabh-raushan-7762422a1/' ,
        emailAddress: 'rishabhraushan200524@gmail.com',
        instagramUrl: 'https://www.instagram.com/itszrishabh/'
      },
      {
        name: 'Polu Soneesh Reddy ',
        role: 'Flight Software Engineer',
        division: 'Coding',
        imageSrc:'https://raw.githubusercontent.com/Akinc5/image/main/img%20(18).jpg' ,
        linkedinUrl:'https://www.linkedin.com/in/soneesh-reddy-9ba81332a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_apppolu.soneesh' ,
        emailAddress: 'sp7983@srmist.edu.in',
        instagramUrl: ''
      },
      {
        name: 'Priyansh Sethi',
        role: 'Flight Software Engineer',
        division: 'Coding',
        imageSrc:'https://raw.githubusercontent.com/Akinc5/image/main/img%20(8).jpg' ,
        linkedinUrl:'' ,
        emailAddress: 'ps1508@srmist.edu.in',
        instagramUrl: ' https://www.instagram.com/priyanshsethi_'
      },
      {
        name: 'Siddharth Venkatesan',
        role: 'Flight Software Engineer',
        division: 'Coding',
        imageSrc:'https://raw.githubusercontent.com/Akinc5/image/main/img%20(15).png' ,
        linkedinUrl:'' ,
        emailAddress: 'sv4643@srmist.edu.in',
        instagramUrl: ''
      },
  ];
  
  const filteredMembers = division === 'all' 
    ? teamMembers
    : teamMembers.filter(member => member.division === division);
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-white/80">
              Meet the talented members behind ASRL's innovative aerospace projects and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="Our multidisciplinary team brings together engineering, computer science, electronics, and design expertise."
          />
          
          {/* Division Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setDivision(div.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  division === div.id 
                    ? 'bg-accent-500 text-white' 
                    : 'bg-space-800 text-white/70 hover:bg-space-700'
                }`}
              >
                <span className="mr-2">{div.icon}</span>
                {div.name}
              </button>
            ))}
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                linkedinUrl={member.linkedinUrl}
                emailAddress={member.emailAddress}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-space-800/50 backdrop-blur-sm rounded-lg p-8 border border-space-700 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students to join our multidisciplinary team. Whether you're interested in aerospace engineering, computer science, electronics, or design, there's a place for you at ASRL.
            </p>
            <a href="/careers" className="btn-primary">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
