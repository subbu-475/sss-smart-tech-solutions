import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Code, Database, Shield, Cloud, Smartphone, Globe } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      icon: Code,
      title: 'Frontend Technologies',
      color: 'from-blue-600 to-purple-600',
      technologies: [
        { name: 'React', description: 'Modern UI library' },
        { name: 'TypeScript', description: 'Type-safe development' },
        { name: 'Next.js', description: 'Full-stack framework' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' },
        { name: 'Vue.js', description: 'Progressive framework' },
        { name: 'Angular', description: 'Enterprise applications' }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'from-green-600 to-teal-600',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime' },
        { name: 'Python', description: 'Data & AI solutions' },
        { name: 'MongoDB', description: 'NoSQL database' },
        { name: 'PostgreSQL', description: 'Relational database' },
        { name: 'Redis', description: 'In-memory storage' },
        { name: 'GraphQL', description: 'API query language' }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-orange-600 to-red-600',
      technologies: [
        { name: 'AWS', description: 'Cloud platform' },
        { name: 'Docker', description: 'Containerization' },
        { name: 'Kubernetes', description: 'Orchestration' },
        { name: 'Terraform', description: 'Infrastructure as code' },
        { name: 'GitHub Actions', description: 'CI/CD pipeline' },
        { name: 'Microservices', description: 'Scalable architecture' }
      ]
    },
    {
      icon: Shield,
      title: 'Security & Monitoring',
      color: 'from-red-600 to-purple-600',
      technologies: [
        { name: 'OWASP', description: 'Security standards' },
        { name: 'JWT', description: 'Token authentication' },
        { name: 'SSL/TLS', description: 'Encrypted communication' },
        { name: 'Prometheus', description: 'Monitoring system' },
        { name: 'ELK Stack', description: 'Log management' },
        { name: 'Penetration Testing', description: 'Security assessment' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      color: 'from-purple-600 to-pink-600',
      technologies: [
        { name: 'React Native', description: 'Cross-platform apps' },
        { name: 'Flutter', description: 'Multi-platform UI' },
        { name: 'Swift', description: 'iOS development' },
        { name: 'Kotlin', description: 'Android development' },
        { name: 'PWA', description: 'Progressive web apps' },
        { name: 'Ionic', description: 'Hybrid framework' }
      ]
    },
    {
      icon: Globe,
      title: 'AI & Data Science',
      color: 'from-teal-600 to-blue-600',
      technologies: [
        { name: 'TensorFlow', description: 'Machine learning' },
        { name: 'Pandas', description: 'Data manipulation' },
        { name: 'Scikit-learn', description: 'ML algorithms' },
        { name: 'Apache Spark', description: 'Big data processing' },
        { name: 'Tableau', description: 'Data visualization' },
        { name: 'OpenAI API', description: 'AI integration' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to build scalable, secure, and high-performance solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-300`} />
              <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div>
                        <div className="font-semibold text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-600">{tech.description}</div>
                      </div>
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="mt-20 bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: 'Technologies Mastered', end: 50 },
              { label: 'Years Experience', end: 5 },
              { label: 'Latest Versions', end: 100, suffix: '%' },
              { label: 'Support Available', end: 24, suffix: '/7' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  <CountUp end={stat.end} duration={10} suffix={stat.suffix || ''} />
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">Ready to leverage these powerful technologies for your project?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Discuss Your Tech Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
