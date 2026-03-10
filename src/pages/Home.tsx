import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ImageUpload } from '../components/ImageUpload';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 bg-emerald-500 text-white text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              Premium Interior Design in Oman
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
              Elevate Your Space with <span className="text-emerald-400">AK Decor</span>
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed font-medium">
              We bring your vision to life with exquisite gypsum designs and luxury interior solutions. 
              Craftsmanship that speaks elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                Explore Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/design" 
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Our Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Star, title: 'Premium Quality', desc: 'We use the finest materials for long-lasting beauty.' },
              { icon: Shield, title: 'Expert Team', desc: 'Highly skilled craftsmen with years of experience in Oman.' },
              { icon: Clock, title: 'Timely Delivery', desc: 'We respect your time and deliver projects as promised.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-900">{feature.title}</h3>
                <p className="text-emerald-800/60 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-4">Recent Projects</h2>
              <p className="text-emerald-800/60 max-w-lg">A glimpse into our world of design and craftsmanship across Muscat.</p>
            </div>
            <Link to="/design" className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-emerald-100/80 text-sm mb-4">{project.description}</p>
                  <Link to="/design" className="text-emerald-400 font-bold flex items-center gap-2">Read More <ArrowRight className="w-4 h-4" /></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-6">Have a Design in Mind?</h2>
              <p className="text-lg text-emerald-800/60 mb-8 leading-relaxed">
                Found a beautiful design on Pinterest or Instagram? Upload it here, and our experts will 
                give you a customized quote to bring that exact design to your home.
              </p>
              <ul className="space-y-4 mb-10">
                {['Free consultation', 'Customized measurements', 'Material selection guide'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-emerald-900">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2rem] blur-2xl -z-10" />
              <ImageUpload />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
