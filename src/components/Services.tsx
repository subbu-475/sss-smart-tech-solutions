import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, PenTool, TrendingUp, Code, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Services',
      subtitle: 'Unlock the Power of Your Data',
      description: 'Transform your data infrastructure with modern warehouse and lake solutions, seamless integration, and stunning visualizations.',
      features: ['Data Warehouse & Lake Modernization', 'Data Integration & ETL', 'Advanced Data Visualization', 'Real-time Analytics'],
      color: 'from-blue-600 to-teal-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      subtitle: 'Fortress-Level Protection',
      description: 'Comprehensive end-to-end cybersecurity solutions to protect your digital assets and ensure business continuity.',
      features: ['Threat Detection & Response', 'Security Audits & Compliance', 'Identity & Access Management', '24/7 Security Monitoring'],
      color: 'from-red-600 to-purple-600',
      bgColor: 'bg-red-50',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: PenTool,
      title: 'Content Services',
      subtitle: 'Words That Convert',
      description: 'Professional content creation, editing, and proofreading services that engage audiences and drive results.',
      features: ['Professional Copy Editing', 'Proofreading & QA', 'Content Strategy & Writing', 'Brand Voice Development'],
      color: 'from-green-600 to-teal-600',
      bgColor: 'bg-green-50',
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Services',
      subtitle: 'Growth That Scales',
      description: 'Data-driven digital marketing strategies that amplify your brand presence and accelerate business growth.',
      features: ['Digital Marketing Strategy', 'SEO & Content Marketing', 'PPC & Social Media Ads', 'Marketing Analytics & ROI'],
      color: 'from-orange-600 to-red-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Code,
      title: 'Tech Services',
      subtitle: 'Full-Stack Excellence',
      description: 'Complete web development solutions using cutting-edge technologies like MERN stack and modern frameworks.',
      features: ['MERN Stack Development', 'Cloud Architecture & DevOps', 'Mobile App Development', 'API Design & Integration'],
      color: 'from-purple-600 to-blue-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and accelerate growth through innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mr-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-lg text-gray-600">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-8">{service.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              {/* Image */}
              <motion.div
                className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 rounded-3xl blur-xl`}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-80 object-cover rounded-3xl shadow-2xl"
                  />

                  {/* Floating Badge */}
                  <div className={`absolute -bottom-6 -right-6 ${service.bgColor} rounded-2xl p-4 shadow-xl border border-white`}>
                    <div className="flex items-center space-x-2">
                      <service.icon className={`h-6 w-6 text-${service.color.split('-')[1]}-600`} />
                      <span className="font-semibold text-gray-900">Professional</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
