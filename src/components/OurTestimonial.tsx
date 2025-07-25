import React from 'react';
import { motion } from 'framer-motion';
import TamilImage from '../assets/ourleaders/Tamil.png';
import AshikImage from '../assets/ourleaders/Ashik.png';

const testimonials = [
    {
        name: 'Tamilalagan L',
        title: 'Director & Co-Founder',
        image: TamilImage, // Use the imported image variable directly
        quote:
            'Our mission is to deliver intelligent, scalable solutions that exceed client expectations. We stand on the cutting edge of modern tech.',
    },
    {
        name: 'Ashik Ahamad',
        title: 'Director & Co-Founder',
        image: AshikImage, // Use the imported image variable directly
        quote:
            'Innovation and integrity drive us. We craft solutions that not only solve today’s challenges but future-proof your digital growth.',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Co-Founders</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Visionaries driving innovation, excellence, and digital transformation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-300" />
                            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-r from-purple-600 to-blue-600"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-md leading-relaxed italic">
                                    “{testimonial.quote}”
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
