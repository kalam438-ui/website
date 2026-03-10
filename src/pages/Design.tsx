import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Palette, Layers, Layout, ArrowRight, Image as ImageIcon } from 'lucide-react';

export const Design: React.FC = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (response.ok) {
          const data = await response.json();
          setUploadedImages(data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-emerald-950 tracking-tight mb-4">Interior Design Services</h1>
          <p className="text-emerald-800/60 max-w-2xl mx-auto text-lg">
            From concept to completion, we create spaces that inspire.
          </p>
        </div>

        {/* Customer Inspiration Section */}
        {uploadedImages.length > 0 && (
          <div className="py-24 border-t border-emerald-100">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
                <ImageIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-4">Customer Inspiration</h2>
              <p className="text-emerald-800/60 max-w-2xl mx-auto">Designs shared by our clients for their upcoming projects.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {uploadedImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-md border border-emerald-50 group relative"
                >
                  <img src={img} alt={`Uploaded inspiration ${i}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-emerald-600 px-3 py-1 rounded-full">New Idea</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

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
        <div className="space-y-32 mb-32">
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

        {/* Gypsum Gallery Section */}
        <div className="py-24 border-t border-emerald-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-4">Our All Designs</h2>
            <p className="text-emerald-800/60 max-w-2xl mx-auto">A quick look at our specialized gypsum board decorative works.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400',
              'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=400',
              'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400',
              'https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=400'
            ].map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img src={img} alt="Gypsum Work" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/gypsum" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-950 text-white rounded-full font-bold hover:bg-emerald-900 transition-colors">
              Explore Full Gypsum Gallery <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
