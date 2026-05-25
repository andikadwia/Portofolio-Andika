import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="w-full py-20 px-8 relative z-10 mb-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide">Contact Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Form Get in Touch */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-sm shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xl text-cyan-400">✉️</span>
              <h3 className="text-2xl font-bold text-white tracking-wide">Get in Touch</h3>
            </div>
            
            <form className="space-y-5">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wide">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-[#0B1120] border border-cyan-500/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wide">Your Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#0B1120] border border-cyan-500/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2 tracking-wide">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Write your message here..." 
                  className="w-full bg-[#0B1120] border border-cyan-500/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] mt-4 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Comments & Links */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="bg-slate-900/40 border border-cyan-500/10 rounded-3xl p-8 backdrop-blur-sm flex-1 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl text-cyan-400">💬</span>
                <h3 className="text-2xl font-bold text-white tracking-wide">Comments (1)</h3>
              </div>
              
              <div className="bg-[#0B1120] border border-cyan-500/5 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold text-slate-900">
                    G
                  </div>
                  <span className="text-cyan-300 font-medium text-sm tracking-wide">Guest User</span>
                  <span className="text-gray-500 text-xs ml-auto">Just now</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">Wah, warnanya siber futuristik gini jauh lebih keren dan sangar bang! 🔥</p>
              </div>

              <div>
                <textarea 
                  rows="2" 
                  placeholder="Leave a comment..." 
                  className="w-full bg-[#0B1120] border border-cyan-500/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none mb-3"
                ></textarea>
                <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium py-2 rounded-xl transition-all text-sm cursor-pointer">
                  Post Comment
                </button>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-cyan-500/10 rounded-3xl p-6 flex justify-between items-center shadow-xl">
              <div>
                <h4 className="text-white font-bold mb-1 tracking-wide">Let's Connect</h4>
                <p className="text-gray-400 text-sm">Find me on other platforms</p>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B1120] border border-cyan-500/10 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-colors">
                  <span className="text-lg">🐙</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0B1120] border border-cyan-500/10 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-colors">
                  <span className="text-lg">💼</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;