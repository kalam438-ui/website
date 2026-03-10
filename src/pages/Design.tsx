import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Palette, Layers, Layout, ArrowRight } from 'lucide-react';

export const Design: React.FC = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-emerald-950 tracking-tight mb-4">Interior Design Services</h1>
          <p className="text-emerald-800/60 max-w-2xl mx-auto text-lg">
            From concept to completion, we create spaces that inspire.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Layout, title: 'Space Planning', desc: 'Optimizing your layout for maximum functionality and flow.' },
            { icon: Palette, title: 'Color Consultation', desc: 'Expert advice on palettes that set the perfect mood.' },
            { icon: Layers, title: 'Material Selection', desc: 'Choosing premium finishes that last a lifetime.' }
          ].map((service, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50 transition-colors">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
                <service.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">{service.title}</h3>
              <p className="text-emerald-800/60 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="space-y-32">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-emerald-100 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="relative w-full aspect-[4/3] object-cover rounded-[2.5rem] shadow-2xl"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-emerald-600 font-black uppercase tracking-widest text-sm">Project {i + 1}</span>
                <h2 className="text-4xl md:text-5xl font-black text-emerald-950 tracking-tight">{project.title}</h2>
                <p className="text-xl text-emerald-800/60 leading-relaxed">
                  {project.description} We focused on creating a harmonious balance between traditional Omani 
                  elements and modern luxury aesthetics.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Modern', 'Luxury', 'Muscat', 'Villa'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold">#{tag}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                  View Case Study <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
