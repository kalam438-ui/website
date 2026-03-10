import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-black tracking-tighter mb-4">AK DECOR <span className="text-emerald-400">& DESIGN</span></h2>
            <p className="text-emerald-200/70 max-w-md mb-6 leading-relaxed">
              Transforming spaces with elegance and precision. We specialize in luxury gypsum designs, 
              modern interior decor, and bespoke furniture solutions in Muscat, Oman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="p-2 bg-emerald-900/50 rounded-full hover:bg-emerald-800 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4 text-emerald-200/70 font-medium">
              <li><a href="/" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-emerald-400 transition-colors">Products</a></li>
              <li><a href="/design" className="hover:text-emerald-400 transition-colors">Interior Design</a></li>
              <li><a href="/gypsum" className="hover:text-emerald-400 transition-colors">Gypsum Works</a></li>
              <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-emerald-200/70 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-emerald-900 text-center text-sm text-emerald-200/40">
          <p>© {new Date().getFullYear()} AK Decor and Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
