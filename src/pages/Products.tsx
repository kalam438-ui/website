import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <div className="py-20 bg-emerald-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-emerald-950 tracking-tight mb-4">Our Products</h1>
          <p className="text-emerald-800/60 max-w-2xl mx-auto text-lg">
            Explore our curated collection of luxury decor items and gypsum solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-emerald-100 group"
            >
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-950 mb-2">{product.name}</h3>
                <p className="text-emerald-800/60 text-sm mb-6 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-emerald-50">
                  <span className="text-xl font-black text-emerald-600">{product.price}</span>
                  <button className="p-3 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-emerald-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800/50 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-800/50 rounded-full -ml-32 -mb-32 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10">Need Custom Furniture?</h2>
          <p className="text-emerald-100/70 max-w-2xl mx-auto mb-10 text-lg relative z-10">
            We design and build bespoke furniture tailored to your space and style.
          </p>
          <a 
            href="https://wa.me/96893245138" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-emerald-900 rounded-full font-black text-lg hover:scale-105 transition-transform relative z-10"
          >
            Request Custom Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
