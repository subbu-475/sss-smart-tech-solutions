import React from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';
import CountUp from 'react-countup';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-teal-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-teal-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 animate-fadeInUp">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              #1 Tech Solutions Provider
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp delay-200">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl animate-fadeInUp delay-400">
              Unlock unprecedented growth with our comprehensive suite of data services, cybersecurity solutions, content creation, digital marketing, and full-stack development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fadeInUp delay-600">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-fadeInUp delay-800">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-2 mx-auto">
                  <Users className="h-6 w-6 text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={150} duration={5} />+
                </div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-2 mx-auto">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={50} duration={5} />+
                </div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full mb-2 mx-auto">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp end={4.9} duration={5} decimals={1} />
                </div>
                <div className="text-sm text-white/70">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative animate-fadeInUp delay-1000">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-teal-600/30 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Technology Workspace"
                className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-2xl font-bold text-blue-900"><CountUp end={99.9} duration={5} decimals={2} />%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float delay-500">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;