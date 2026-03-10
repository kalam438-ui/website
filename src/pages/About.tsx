import React from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Award, Users, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-emerald-950 tracking-tight mb-8">
                Crafting Elegance in <span className="text-emerald-600">Every Corner</span>
              </h1>
              <p className="text-xl text-emerald-800/60 leading-relaxed mb-8">
                AK Decor and Design is a premier interior design firm based in Muscat, Oman. 
                With over a decade of experience, we specialize in luxury gypsum works, 
                modern interior decor, and bespoke furniture solutions.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-emerald-600 mb-2">10+</h4>
                  <p className="text-sm font-bold text-emerald-900 uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-emerald-600 mb-2">500+</h4>
                  <p className="text-sm font-bold text-emerald-900 uppercase tracking-widest">Projects Done</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-200 rounded-[3rem] rotate-3 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Workshop" 
                className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-emerald-950 mb-4">Our Core Values</h2>
            <p className="text-emerald-800/60 max-w-xl mx-auto">The foundation of everything we build at AK Decor.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Award, title: 'Quality First', desc: 'We never compromise on materials or craftsmanship.' },
              { icon: Users, title: 'Client Centric', desc: 'Your vision is our priority. We listen and deliver.' },
              { icon: Heart, title: 'Passion', desc: 'We love what we do, and it shows in every detail.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-4">{value.title}</h3>
                <p className="text-emerald-800/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black mb-8">Get in Touch</h2>
                <p className="text-emerald-100/60 mb-12 text-lg">
                  Visit our showroom in Muscat or reach out to us for a free consultation.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Our Location</h4>
                      <p className="text-emerald-100/60">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Phone Number</h4>
                      <p className="text-emerald-100/60">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Email Address</h4>
                      <p className="text-emerald-100/60">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[400px] rounded-[2rem] overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117006.31131103328!2d58.2619747!3d23.58589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f0a07766d3d7%3A0x673094d3241938b6!2sMuscat%2C%20Oman!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
