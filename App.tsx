
import React from 'react';
import StickyEmergencyButton from './components/StickyEmergencyButton';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased text-slate-900">
      {/* Strike Warning & Rebate Bar */}
      <div className="bg-red-700 text-white py-2.5 px-4 text-center text-sm font-semibold tracking-wide shadow-md relative z-50">
        <span className="inline-flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation animate-pulse"></i>
          <strong>IMPORTANT:</strong> Canada Post Strike may delay rebate checks. We now offer Direct Deposit assistance.
        </span>
      </div>

      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-navy-900 text-white p-2.5 rounded-xl shadow-lg">
              <i className="fa-solid fa-faucet-drip text-2xl"></i>
            </div>
            <div>
              <span className="block text-2xl font-black tracking-tighter text-navy-900 uppercase leading-none">Priority</span>
              <span className="block text-[10px] font-black text-safetyOrange-600 uppercase tracking-[0.2em] mt-0.5">Plumbing & Drains</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#rebates" className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">Rebates</a>
            <a href="#services" className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">Services</a>
            <a href="#ai-triage" className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">AI Triage</a>
            <a href="#areas" className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">Service Areas</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:2892164428" className="hidden xl:flex items-center gap-3 text-navy-900 font-black text-lg hover:text-safetyOrange-600 transition-colors">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                <i className="fa-solid fa-phone"></i>
              </span>
              (289) 216-4428
            </a>
            <button className="bg-navy-900 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-navy-800 transition-all shadow-xl hover:shadow-navy-900/20 active:scale-95 uppercase tracking-wider">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-navy-900 pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-800/50 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-safetyOrange-500/15 text-safetyOrange-500 px-5 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest border border-safetyOrange-500/20">
              <span className="w-2 h-2 bg-safetyOrange-500 rounded-full animate-pulse"></span>
              24/7 GTA Emergency Dispatch
            </div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              GTA's Fastest <span className="text-transparent bg-clip-text bg-gradient-to-r from-safetyOrange-500 to-orange-400">Emergency</span> Triage.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We combine master craftsmanship with AI-powered diagnostic tools to fix your HVAC and plumbing issues faster than anyone else in Toronto.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(220,38,38,0.3)] transition-all transform hover:-translate-y-1 active:scale-95">
                URGENT REPAIR? CALL NOW
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95">
                GET A FREE QUOTE
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10 items-center opacity-80">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star text-sm"></i>)}
                </div>
                <span className="text-white font-bold text-sm tracking-wide">4.7/5 HomeStars Rating</span>
              </div>
              <div className="w-px h-10 bg-slate-700 hidden sm:block"></div>
              <div className="flex items-center gap-3 text-white">
                <i className="fa-solid fa-shield-check text-2xl text-green-500"></i>
                <span className="font-bold text-sm tracking-wide uppercase">Fully Licensed & Insured</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/5 group">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" alt="Professional Technician" className="w-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/20">
                      <i className="fa-solid fa-truck-fast text-xl"></i>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-0.5">Live Dispatch Status</p>
                      <p className="text-base font-black text-navy-900">Arrived in North York 4m ago</p>
                    </div>
                  </div>
                  <div className="text-green-600 font-black text-sm animate-pulse">
                    ONLINE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-navy-900 text-sm font-black uppercase tracking-[0.3em] mb-4">Master Craftsmanship</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-navy-900 mb-6">Our Core Specialties</h3>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From high-tech HVAC installations to emergency drain clearing, our master technicians are equipped for every GTA home challenge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-snowflake', title: 'HVAC & Cooling', desc: 'High-efficiency heat pumps and AC repair with guaranteed airflow optimization.' },
              { icon: 'fa-fire-flame-curved', title: 'Heating Repair', desc: 'Emergency furnace fixes and high-efficiency boiler maintenance for winter safety.' },
              { icon: 'fa-droplet', title: 'Drain Cleaning', desc: 'Hydro-jetting and camera inspections to resolve blockages permanently.' },
              { icon: 'fa-faucet', title: 'Plumbing Service', desc: 'Full-service leak detection, pipe repair, and fixture installations.' }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy-900 text-2xl mb-6 shadow-sm group-hover:bg-safetyOrange-500 group-hover:text-white transition-colors">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-xl font-black text-navy-900 mb-3">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Jessica Feature - AI Triage */}
      <section id="ai-triage" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute -right-24 top-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-safetyOrange-500/10 rounded-full blur-2xl"></div>
                <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative z-10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="bg-navy-900 text-white p-5 rounded-2xl shadow-xl shadow-navy-900/20">
                      <i className="fa-solid fa-microchip text-3xl"></i>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black text-navy-900 leading-tight">Virtual <span className="text-safetyOrange-500">Triage</span> Tool</h2>
                  </div>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                    Our proprietary "Jessica" AI system identifies technical issues remotely, ensuring our technicians arrive with the correct parts on the first visit.
                  </p>
                  <ul className="space-y-5">
                    {[
                      { icon: "fa-triangle-exclamation", color: "text-red-500", text: "Instant Safety Analysis (CO/Gas)" },
                      { icon: "fa-qrcode", color: "text-blue-500", text: "Furnace Error Code Diagnostics" },
                      { icon: "fa-bolt", color: "text-yellow-500", text: "Visual Triage via Secure Upload" },
                      { icon: "fa-clock", color: "text-green-500", text: "Direct Routing to Master Specialists" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-navy-900/10 transition-colors group">
                        <i className={`fa-solid ${item.icon} ${item.color} text-2xl w-8 text-center`}></i>
                        <span className="font-bold text-slate-800 text-base">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-12 w-full bg-navy-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-navy-800 transition-all shadow-xl hover:shadow-navy-900/30 flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest">
                    Launch Virtual Triage
                    <i className="fa-solid fa-bolt-lightning text-safetyOrange-500"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-safetyOrange-500 font-black uppercase tracking-[0.4em] text-xs mb-6">Technical Innovation</h3>
              <h2 className="text-4xl lg:text-6xl font-black text-navy-900 leading-[1.1] mb-10">
                Fixing problems before the <span className="italic">truck arrives</span>.
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Traditional companies send a "quote guy." We send a Master Technician with a data profile of your specific equipment malfunction, pre-generated by AI.
              </p>
              <div className="bg-white p-8 rounded-3xl border-l-[12px] border-safetyOrange-500 shadow-xl shadow-slate-200/50">
                <p className="text-navy-900 font-bold text-lg leading-relaxed italic">
                  "Our goal isn't just to arrive fast—it's to solve the issue on visit one. Technology allows us to provide a level of transparency the GTA hasn't seen before."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-navy-900 font-black text-xs uppercase tracking-tighter">GC</div>
                  <p className="text-sm font-black text-slate-400 uppercase tracking-widest">— Lead Engineer, Priority Dispatch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebates Section */}
      <section id="rebates" className="py-24 lg:py-32 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-safetyOrange-500 via-orange-400 to-safetyOrange-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">Ontario <span className="text-safetyOrange-500">Rebate</span> Fast-Track</h2>
            <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              We handle the audit, the installation, and the paperwork. Get your <strong>$12,000</strong> government rebate without the headache.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Electric-to-HP", amount: "$12,000", desc: "For homes replacing primary electric baseboard or old electric furnaces." },
              { title: "Gas-to-Hybrid", amount: "$2,000", desc: "For Enbridge customers adding a heat pump to supplement gas furnaces." },
              { title: "Multi-Measure", amount: "$7,700", desc: "Combined upgrades for attic insulation, walls, and energy-star windows." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:border-safetyOrange-500/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-safetyOrange-500/5 rounded-full blur-2xl group-hover:bg-safetyOrange-500/10 transition-colors"></div>
                <p className="text-safetyOrange-500 font-black text-xs mb-4 uppercase tracking-[0.2em]">{card.title}</p>
                <p className="text-6xl font-black mb-6 group-hover:scale-110 transition-transform origin-left tracking-tighter">{card.amount}</p>
                <p className="text-slate-400 font-semibold leading-relaxed mb-10">{card.desc}</p>
                <div className="pt-8 border-t border-white/10">
                  <a href="#" className="flex items-center justify-between text-white font-black text-sm uppercase tracking-widest hover:text-safetyOrange-500 transition-colors group/link">
                    Check Eligibility
                    <i className="fa-solid fa-arrow-right-long group-hover/link:translate-x-2 transition-transform"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-red-600/10 border border-red-500/30 p-8 rounded-3xl flex flex-col lg:flex-row items-center gap-8 justify-between backdrop-blur-md">
            <div className="flex items-center gap-6 text-left">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center text-red-500 text-3xl">
                <i className="fa-solid fa-circle-exclamation animate-pulse"></i>
              </div>
              <div>
                <p className="font-black text-xl mb-1 uppercase tracking-tight">Canada Post Strike Notice</p>
                <p className="text-base text-slate-400 font-medium">Rebate check delivery is currently stalled. We provide priority direct deposit filing for all customers.</p>
              </div>
            </div>
            <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/30 active:scale-95 whitespace-nowrap uppercase tracking-widest">
              Claim My Priority Slot
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left max-w-2xl">
              <h2 className="text-navy-900 text-xs font-black uppercase tracking-[0.4em] mb-4">Regional Coverage</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-navy-900 mb-6">Our GTA Response Network</h3>
              <p className="text-xl text-slate-500 leading-relaxed font-medium">We maintain local warehouses in each zone to guarantee emergency response times within 4 hours, rain or snow.</p>
            </div>
            <div className="flex items-center gap-4 text-green-600 font-black bg-green-50 px-6 py-4 rounded-2xl border border-green-100 shadow-sm whitespace-nowrap">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
              </span>
              24 Active Units Dispatched Right Now
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {['North York', 'Etobicoke', 'Scarborough', 'Vaughan', 'Mississauga'].map((area) => (
              <div key={area} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-navy-900 hover:text-white transition-all duration-500 cursor-default">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 group-hover:bg-safetyOrange-500 transition-colors">
                  <i className="fa-solid fa-location-dot text-safetyOrange-500 text-2xl group-hover:text-white transition-colors"></i>
                </div>
                <h4 className="font-black text-2xl mb-2 tracking-tight">{area}</h4>
                <p className="text-sm font-bold text-slate-400 group-hover:text-slate-400 uppercase tracking-widest">Priority Zone A</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1.5 mb-6 text-safetyOrange-500 text-3xl">
                {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-navy-900 italic tracking-tight leading-snug">"The most transparent repair service in Ontario."</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative group overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fa-solid fa-quote-right text-9xl"></i>
                </div>
                <p className="text-xl text-slate-600 italic mb-10 leading-[1.6] font-medium relative z-10">
                  "Furnace died at 10 PM in January. Priority's AI triage confirmed it was a faulty flame sensor via a secure video upload. The tech arrived at 11:30 PM with the exact part needed. I didn't even have to put a space heater on."
                </p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-white flex items-center justify-center font-black text-lg">SM</div>
                  <div>
                    <p className="font-black text-navy-900 text-lg">Sandra M.</p>
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest">Scarborough Homeowner</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative group overflow-hidden">
                <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <i className="fa-solid fa-quote-right text-9xl"></i>
                </div>
                <p className="text-xl text-slate-600 italic mb-10 leading-[1.6] font-medium relative z-10">
                  "Converted our oil boiler to a hybrid heat pump system. They handled the $12k rebate paperwork for us entirely. Our hydro bill dropped 40% immediately. Professional, punctual, and highly skilled."
                </p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-navy-900 text-white flex items-center justify-center font-black text-lg">RK</div>
                  <div>
                    <p className="font-black text-navy-900 text-lg">Robert K.</p>
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest">Vaughan Property Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-safetyOrange-500/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-white text-navy-900 p-3 rounded-2xl shadow-xl shadow-white/5">
                  <i className="fa-solid fa-faucet-drip text-3xl"></i>
                </div>
                <div>
                  <span className="block text-3xl font-black tracking-tighter uppercase leading-none">Priority</span>
                  <span className="block text-xs font-black text-safetyOrange-500 uppercase tracking-[0.2em] mt-1">Plumbing & Drains</span>
                </div>
              </div>
              <p className="text-xl text-slate-400 mb-10 max-w-md leading-relaxed font-medium">
                GTA's premier emergency HVAC and plumbing team. We blend decades of master trade experience with cutting-edge AI for faster solutions.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: 'fa-facebook-f', href: '#' },
                  { icon: 'fa-instagram', href: '#' },
                  { icon: 'fa-youtube', href: '#' },
                  { icon: 'fa-linkedin-in', href: '#' }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-safetyOrange-500 hover:text-white transition-all transform hover:-translate-y-1">
                    <i className={`fa-brands ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-safetyOrange-500">Contact Dispatch</h4>
              <ul className="space-y-6 text-slate-400">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-safetyOrange-500 group-hover:bg-safetyOrange-500 group-hover:text-white transition-colors">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-500 mb-1 tracking-widest">Call Anytime</p>
                    <a href="tel:2892164428" className="text-lg font-black text-white hover:text-safetyOrange-500 transition-colors tracking-tight">(289) 216-4428</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-safetyOrange-500 group-hover:bg-safetyOrange-500 group-hover:text-white transition-colors">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-500 mb-1 tracking-widest">Email Support</p>
                    <span className="text-lg font-bold text-white group-hover:text-safetyOrange-500 transition-colors">dispatch@priority.ca</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-safetyOrange-500 group-hover:bg-safetyOrange-500 group-hover:text-white transition-colors">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-slate-500 mb-1 tracking-widest">GTA Head Office</p>
                    <span className="text-lg font-bold text-white leading-snug">1594 Dupont Street<br/>Toronto, ON M6P 3S7</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-safetyOrange-500">Operational Hours</h4>
              <div className="bg-white/5 rounded-[2rem] p-8 border border-white/5">
                <ul className="space-y-6 text-lg">
                  <li className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">Emergency Dispatch</span>
                    <span className="font-black text-green-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      24/7/365
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">Showroom Hours</span>
                    <span className="font-black text-white">9am - 5pm</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-[0.2em]">Home Assessments</span>
                    <span className="font-black text-white">Mon - Sat</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-medium leading-relaxed uppercase tracking-widest text-center">
                    TSSA Certified Fuel Contractor<br/>Master Plumber License #9412
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-bold tracking-wide uppercase">
            <p>&copy; {new Date().getFullYear()} Priority Plumbing & Drains. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Dynamic Widgets */}
      <StickyEmergencyButton />
      <ChatWidget />
    </div>
  );
};

export default App;
