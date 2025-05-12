import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Filter } from 'lucide-react';
import TimelineEvent from '../components/TimelineEvent'



import SectionTitle from '../components/SectionTitle';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [,setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const featuredProjects = [
    {
          name: 'Nether – Boeing Aeromodelling UAV (January)',
          year: '2025',
          description: 'Project Nether for Boeing Aeromodelling Chennai, involved building a high-wing RC aircraft with a semi-monocoque structure using birch, balsa, Depron, and carbon fiber. It achieved 110 km/h with a 1.5:1 thrust-to-weight ratio. Aerodynamic performance was validated using XFLR5 and ANSYS Fluent, and the power system delivered 10.5 minutes of endurance. The design featured a NACA 4412 airfoil and a modular wing for optimized stability and efficiency.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/nether.jpg',
        }, 
{
          name: 'Spectre – 3D Acrobatic Aircraft\n(March)',
          year: '2025',
          description: 'Project Spectre is a lightweight, Depron-foam RC aircraft designed for advanced aerobatics and pilot training at ASRL. Powered by a 1000KV brushless motor, it delivers high thrust-to-weight performance for stunts like torque rolls, hovers, and knife-edge flight. With a custom airframe and control surface design, Spectre serves as a technology demonstrator for fixed-wing agility and control in experimental flight testing.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/spectre.jpg'
        },
    {
          name: 'Trident - Tricopter (May)',
          year: '2025',
          description: 'This tricopter features a Y-configuration with servo-based yaw control, designed for modular payloads and stable flight. Built with birch, aluminum, and PETG-printed components, it supports an MTOW of 1.5 kg and 5+ minutes of flight.Powered by SunnySky X2212 motors and LiPo batteries, the design was validated through dynamic modeling and simulation, making it a versatile platform for surveillance, delivery, and research applications.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/tricop.jpg',
        },
  ];

  const timelineData = [
    {
      year: '2025',
      projects: [
        {
          name: 'Trident - Tricopter (May)',
          year: '2025',
          description: 'This tricopter features a Y-configuration with servo-based yaw control, designed for modular payloads and stable flight. Built with birch, aluminum, and PETG-printed components, it supports an MTOW of 1.5 kg and 5+ minutes of flight.Powered by SunnySky X2212 motors and LiPo batteries, the design was validated through dynamic modeling and simulation, making it a versatile platform for surveillance, delivery, and research applications.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/tricop.jpg',
        },
        {
          name: 'Spectre – 3D Acrobatic Aircraft\n(March)',
          year: '2025',
          description: 'Project Spectre is a lightweight, Depron-foam RC aircraft designed for advanced aerobatics and pilot training at ASRL. Powered by a 1000KV brushless motor, it delivers high thrust-to-weight performance for stunts like torque rolls, hovers, and knife-edge flight. With a custom airframe and control surface design, Spectre serves as a technology demonstrator for fixed-wing agility and control in experimental flight testing.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/spectre.jpg'
        },
        {
          name: 'Nether – Boeing Aeromodelling UAV (January)',
          year: '2025',
          description: 'Project Nether for Boeing Aeromodelling Chennai, involved building a high-wing RC aircraft with a semi-monocoque structure using birch, balsa, Depron, and carbon fiber. It achieved 110 km/h with a 1.5:1 thrust-to-weight ratio. Aerodynamic performance was validated using XFLR5 and ANSYS Fluent, and the power system delivered 10.5 minutes of endurance. The design featured a NACA 4412 airfoil and a modular wing for optimized stability and efficiency.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/nether.jpg',
        }, 
        {
          name: 'Horizon',
          year: '2025',
          description: 'Design for Boeing Aeromodelling',
          image: '',
        },
      ]
    },
    {
        year:'2024',
      projects: [
        {
          name: 'Firefly (November)',
          description: ' Firefly was ASRL’s entry to SAE Aerothon 2024 in Bangalore. The team developed an autonomous aerial vehicle optimized for autonomous navigation, target detection and payload drop.  Key innovations included solving structural resonance issues through vibration testing, dampening, and reinforced joints using rivets and lock nuts',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/firefly.jpg',
        },
        {
          name: 'Cargomax — Autonomous Cargo UAV (September)',
          description: 'Cargomax is a modular UAV developed by ASRL at SRM IST, designed for autonomous cargo delivery. Featuring a 2-meter collapsible fuselage with sectional wings, it balances portability and performance.Built using depron foam and 3D-printed bayonet mounts, the UAV minimizes drag while maximizing internal cargo space. Powered by twin 6S LiPo-driven motors, it reaches 60 km/h and carries up to 750 grams.Cargomax includes a custom payload dropping mechanism and is one of ASRL’s earliest ventures into lightweight cargo UAV systems',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/cgmax.jpg ',
           },
        {
          name: 'Arrow (March)',
          description: 'Fixed-wing UAV designed for NITTE UAV competition with enhanced stability and range.',
          image: '',   
          },
        {
          name: 'Zeus (March)',
          description: 'High-performance multirotor developed for precise aerial operations and payload delivery.',
          image: '',
        },
        {
          name: 'Ground Control Station ( January)',
          year: '2025',
          description: '',
          image: '',
        },
      ]
    },
    {
      year: '2023',
      projects: [
       
        {
          name: 'Terra (November)',
          description: 'TERRA is a modular ground robot developed by ASRL SRM for exploring hazardous terrains like caves and debris zones. It features LIDAR-based 3D mapping, a winch deployment system, and a 1–10 km telemetry range. With an all-wheel drive, live infrared camera feed, and a rich sensor suite, TERRA is built for reconnaissance, mapping, and search-and-rescue missions.',
          image: '',
        },
         
        {
          name: 'Marlin — Aerobatic Fixed-Wing Aircraft (July)',
          description: 'Marlin is a high-performance stunt aircraft developed by ASRL SRM for Technoxian 2023 – World Robotics Championship in New Delhi. Built with a birch wood airframe, it was engineered for both durability and agility under extreme flying conditions.With a Maximum Takeoff Weight of 3 kg and cruise speed of 22 m/s, Marlin was optimized for tight loops, rolls, and stall turns, thanks to a finely tuned powertrain and control surfaces. The design emphasized aerodynamic efficiency and structural integrity to maintain stability under high G-loads.Marlin demonstrated advanced piloting and robust design in a competitive, real-world environment.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/Marlin.png',
        },
        {
          name: 'Yagi Beam Antenna — Long-Range Telemetry Support (March)',
          description: 'Developed at ASRL SRM, this 3-element Yagi antenna was built using copper tubes and an aluminum boom, with isolated elements for optimal performance. Designed for 433 MHz Pixhawk telemetry, it delivered a gain of 8.6 dBi and achieved an estimated range of ~10 km line-of-sight, with a 50–80° field of view.This antenna significantly improved ground-to-air communication reliability for UAV operations.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/yagi.jpg',
        },
        {
          name: 'Osprey (March)',
          description: 'Multirotor drone with robotic arm capabilities for precision operations.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/Osprey%20Mission%20PAtch.png',
        },

      ]
    },
    {
      year: '2022',
      projects: [
        {
          name: 'Light Fury — Long-Endurance Surveillance UAV (November)',
          description: 'Light Fury is a fixed-wing UAV developed by ASRL SRM for aerial surveillance, reconnaissance, and data collection. Featuring a lightweight composite airframe, modular electronics bay, and optimized aerodynamics, it is built for stable, efficient, and autonomous flight.The UAV supports real-time telemetry, autonomous navigation, and live video streaming, making it ideal for both tactical and civilian applications. Key points included the design of a 3D-printed PLA landing gear with a Factor of Safety of 15, precision wing assembly, and structural testing to ensure mission readiness and durability.',
          image: 'https://github.com/Akinc5/image/raw/main/Mission%20Patches/Lf.jpg',
        },

        
      ]
    },
    {
      year: '2020',
      projects: [
        {
          name: 'AlphaX',
          description: 'Autonomous UAV designed for the Essay Autonomous Design Challenge.',
          image: '',
        },
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-project-pattern bg-cover bg-fixed pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/80">
              Explore our innovative UAVs, aerospace systems, and groundbreaking research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Our most innovative and impactful projects showcasing our capabilities."
          />
          
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {featuredProjects.map((project, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="h-[400px] rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                      <p className="text-accent-400 mb-4">{project.year}</p>
                      <p className="text-white/80">{project.description}</p>
                      <button className="btn-primary mt-6">Learn More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {instanceRef.current && (
              <>
                <button 
                  onClick={() => instanceRef.current?.prev()}
                  
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent-500/80 p-2 rounded-full disabled:opacity-30"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => instanceRef.current?.next()}
          
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent-500/80 p-2 rounded-full disabled:opacity-30"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
<section className="py-20 bg-space-900">
  <div className="container-custom">
    <div className="flex flex-wrap justify-between items-center mb-12">
      <SectionTitle 
        title="Project Timeline"
        subtitle="Our journey of innovation and achievement through the years."
      />
      <div className="flex items-center mt-6 lg:mt-0 bg-space-800/60 rounded-lg p-2">
        <Filter className="h-5 w-5 text-accent-400 mr-2" />
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-transparent text-white border-none focus:outline-none text-sm"
        >
          <option value="all" className="bg-space-900">All Years</option>
          <option value="2024" className="bg-space-900">2024</option>
          <option value="2023" className="bg-space-900">2023</option>
          <option value="2022" className="bg-space-900">2022</option>
          <option value="2021" className="bg-space-900">2021</option>
          <option value="2020" className="bg-space-900">2020</option>
          <option value="2019" className="bg-space-900">2019</option>
        </select>
      </div>
    </div>

    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-space-800 hidden md:block"></div>

      {/* Timeline Events */}
      <div className="space-y-10 md:ml-6">
        {timelineData
          .filter(data => filter === 'all' || data.year === filter)
          .map((yearData, index) => (
            <TimelineEvent 
              key={index}
              year={yearData.year}
              projects={yearData.projects}
            />
          ))
        }
      </div>
    </div>
  </div>
</section>
</div>
  );
};

export default Projects;