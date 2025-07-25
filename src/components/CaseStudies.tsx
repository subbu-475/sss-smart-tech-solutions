import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-Commerce Platform Transformation',
      client: 'RetailTech Inc.',
      category: 'Full-Stack Development',
      description:
        'Complete redesign and development of a modern e-commerce platform with integrated payment processing, inventory management, and customer analytics.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '300%', label: 'Increase in Sales', icon: DollarSign },
        { metric: '50%', label: 'Faster Load Times', icon: TrendingUp },
        { metric: '200%', label: 'User Engagement', icon: Users }
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Enterprise Data Warehouse Migration',
      client: 'DataCorp Solutions',
      category: 'Data Services',
      description:
        'Migrated legacy data systems to modern cloud infrastructure with real-time analytics capabilities and advanced visualization dashboards.',
      image:
        'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '75%', label: 'Cost Reduction', icon: DollarSign },
        { metric: '10x', label: 'Query Performance', icon: TrendingUp },
        { metric: '99.9%', label: 'Data Accuracy', icon: Users }
      ],
      tags: ['AWS Redshift', 'Python', 'Tableau', 'ETL'],
      color: 'from-teal-600 to-blue-600'
    },
    {
      title: 'Cybersecurity Infrastructure Overhaul',
      client: 'SecureBank Financial',
      category: 'Cybersecurity',
      description:
        'Implemented comprehensive security measures including threat detection, identity management, and compliance monitoring for a financial institution.',
      image:
        'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: [
        { metric: '100%', label: 'Threat Detection', icon: TrendingUp },
        { metric: '0', label: 'Security Breaches', icon: Users },
        { metric: '95%', label: 'Compliance Score', icon: DollarSign }
      ],
      tags: ['SIEM', 'Zero Trust', 'Identity Management', 'Compliance'],
      color: 'from-red-600 to-purple-600'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Case{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Studies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from our clients who have transformed their businesses with our innovative solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${study.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-300`}
              ></div>
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 bg-gradient-to-r ${study.color} text-white text-sm font-medium rounded-full`}
                    >
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-purple-600 font-medium mb-4">{study.client}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="text-center">
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mb-2 mx-auto">
                          <result.icon className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="text-lg font-bold text-gray-900">{result.metric}</div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${study.color} bg-clip-text text-transparent hover:underline`}
                  >
                    View Full Case Study
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-8">Ready to become our next success story?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
