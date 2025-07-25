import React from 'react';
import { Target, Eye, Zap, Shield, Award, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const { ref: statsRef, inView: statsVisible } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageVisible } = useInView({ triggerOnce: true, threshold: 0.3 });

  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses through cutting-edge technology solutions and digital transformation.'
    },
    {
      icon: Eye,
      title: 'Future-Focused',
      description: 'Staying ahead of technological trends to deliver tomorrow\'s solutions today.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Rapid deployment and implementation without compromising on quality or security.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures protecting your data and digital assets.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SSS Smart Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a forward-thinking technology company that transforms businesses through innovative digital solutions,
            comprehensive security measures, and strategic growth initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60 }}
            animate={imageVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>

            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imageVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">5 Years</div>
                  <div className="text-sm text-gray-600">Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Pioneering Digital Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Founded with a vision to democratize advanced technology solutions, SSS Smart Tech has grown from a small startup
              to a trusted partner for businesses worldwide. Our multidisciplinary approach combines data science, cybersecurity,
              content strategy, digital marketing, and full-stack development to deliver comprehensive solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 mx-auto">
                  <stat.icon className="h-8 w-8 text-teal-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number.includes('%') ? (
                    stat.number
                  ) : stat.number.includes('+') ? (
                    <>
                      {statsVisible && <CountUp end={parseInt(stat.number)} duration={3} />}+
                    </>
                  ) : (
                    statsVisible && <CountUp end={parseFloat(stat.number)} decimals={1} duration={3} />
                  )}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
