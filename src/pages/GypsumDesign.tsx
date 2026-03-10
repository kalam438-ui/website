import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Sparkles, Diamond, ShieldCheck, Zap, Ruler, PenTool, Hammer, CheckCircle2 } from 'lucide-react';

export const GypsumDesign: React.FC = () => {
  const gypsumProducts = PRODUCTS.filter(p => p.category === 'gypsum');

  const steps = [
    { icon: Ruler, title: 'Measurement', desc: 'Precise on-site measurements of your space.' },
    { icon: PenTool, title: '3D Design', desc: 'Custom 3D visualization of your gypsum ceiling.' },
    { icon: Hammer, title: 'Installation', desc: 'Professional installation by expert craftsmen.' },
    { icon: CheckCircle2, title: 'Finishing', desc: 'Premium painting and lighting integration.' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-emerald-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200" 
            alt="Gypsum Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-xs mb-6 block">
              Muscat's Gypsum Specialists
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
              Mastering the Art of <span className="text-emerald-400">Gypsum</span>
            </h1>
            <p className="text-xl text-emerald-100/60 mb-10 leading-relaxed">
              From minimalist modern ceilings to intricate classical moldings, we provide 
              the highest quality gypsum board solutions in Oman.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/96893245138" className="px-8 py-4 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-4">Our Gypsum Services</h2>
            <p className="text-emerald-800/60 max-w-2xl mx-auto">We offer a full range of gypsum decorative works for residential and commercial projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'False Ceilings', desc: 'Modern suspended ceilings with cove lighting and LED spots.', img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600' },
              { title: 'TV Wall Units', desc: 'Custom designed gypsum wall units for entertainment centers.', img: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=600' },
              { title: 'Wall Partitions', desc: 'Professional gypsum board partitions for offices and homes.', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-[2.5rem] overflow-hidden bg-emerald-50/30 border border-emerald-100 group"
              >
                <div className="h-64 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-emerald-950 mb-3">{service.title}</h3>
                  <p className="text-emerald-800/60">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-950 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-16 text-center">Our Working Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {steps.map((step, i) => (
                  <div key={i} className="text-center relative">
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-emerald-100/40 text-sm">{step.desc}</p>
                    {i < 3 && <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-emerald-800" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-emerald-950 tracking-tight mb-4">Gypsum Gallery</h2>
            <p className="text-emerald-800/60">Explore our latest gypsum designs and products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gypsumProducts.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl aspect-square"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-emerald-100/70 text-sm mb-6">{product.description}</p>
                  <span className="text-emerald-400 font-black">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'Seamless Finish', desc: 'Perfectly smooth surfaces for a premium look.' },
              { icon: Diamond, title: 'Luxury Designs', desc: 'Unique patterns tailored to your space.' },
              { icon: ShieldCheck, title: 'Durable Build', desc: 'High-quality materials that stand the test of time.' },
              { icon: Zap, title: 'Quick Install', desc: 'Efficient workflow without compromising quality.' }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-emerald-100/40 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 md:p-24 rounded-[3rem] bg-emerald-500 text-emerald-950 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400 rounded-full blur-3xl opacity-50" />
            
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 relative z-10">Ready to Transform Your Ceiling?</h2>
            <p className="text-emerald-900/70 max-w-2xl mx-auto mb-12 text-xl font-medium relative z-10">
              Join hundreds of satisfied clients in Muscat who chose AK Decor for their gypsum works.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a 
                href="tel:96893245138" 
                className="px-10 py-5 bg-emerald-950 text-white rounded-full font-black text-lg hover:scale-105 transition-transform"
              >
                Call: 968 93245138
              </a>
              <a 
                href="https://wa.me/96893245138" 
                className="px-10 py-5 bg-white text-emerald-950 rounded-full font-black text-lg hover:scale-105 transition-transform"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

