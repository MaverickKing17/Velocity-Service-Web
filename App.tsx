
import React, { useState } from 'react';
import StickyEmergencyButton from './components/StickyEmergencyButton';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  /**
   * Centralized click handler for all navigation to prevent browser-level 
   * "Navigation Error" in sandboxed environments.
   */
  const handleNav = (e: React.MouseEvent, target: string | 'chat' | 'top') => {
    e.preventDefault();
    e.stopPropagation();

    if (target === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'chat') {
      setIsChatOpen(true);
      return;
    }

    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback for missing sections: open chat
      setIsChatOpen(true);
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased text-slate-900">
      {/* Strike Warning & Rebate Bar */}
      <div className="bg-red-700 text-white py-2.5 px-4 text-center text-sm font-semibold tracking-wide shadow-md relative z-50">
        <span className="inline-flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation animate-pulse"></i>
          <strong>STRIKE NOTICE:</strong> Canada Post Strike may delay rebate checks. We now support Direct Deposit setup.
        </span>
      </div>

      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" onClick={(e) => handleNav(e, 'top')} className="flex items-center gap-3 group">
            <div className="bg-navy-900 text-white p-2.5 rounded-xl shadow-lg group-hover:bg-safetyOrange-500 transition-colors">
              <i className="fa-solid fa-faucet-drip text-2xl"></i>
            </div>
            <div>
              <span className="block text-2xl font-black tracking-tighter text-navy-900 uppercase leading-none">Priority</span>
              <span className="block text-[10px] font-black text-safetyOrange-600 uppercase tracking-[0.2em] mt-0.5">Plumbing & Drains</span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" onClick={(e) => handleNav(e, 'rebates')} className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">Rebates</a>
            <a href="#" onClick={(e) => handleNav(e, 'services')} className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">Services</a>
            <a href="#" onClick={(e) => handleNav(e, 'ai-triage')} className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">AI Triage</a>
            <a href="#" onClick={(e) => handleNav(e, 'areas')} className="text-[13px] font-bold text-navy-900 hover:text-safetyOrange-600 transition-colors uppercase tracking-widest">Service Areas</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:2892164428" className="hidden xl:flex items-center gap-3 text-navy-900 font-black text-lg hover:text-safetyOrange-600 transition-colors">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                <i className="fa-solid fa-phone"></i>
              </span>
              (289) 216-4428
            </a>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-navy-900 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-navy-800 transition-all shadow-xl hover:shadow-navy-900/20 active:scale-95 uppercase tracking-wider"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-navy-900 pt-24 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-800/50 to-transparent opacity-50"></div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 grid lg:grid-cols-[1fr_55%] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-safetyOrange-500/15 text-safetyOrange-500 px-5 py-2 rounded-full text-xs font-black mb-8 uppercase tracking-widest border border-safetyOrange-500/20">
              <span className="w-2 h-2 bg-safetyOrange-500 rounded-full animate-pulse"></span>
              24/7 GTA Emergency Dispatch
            </div>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              GTA's Fastest <span className="text-transparent bg-clip-text bg-gradient-to-r from-safetyOrange-500 to-orange-400">Emergency</span> Triage.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Master craftsmanship meets AI diagnostics. We fix plumbing and HVAC issues faster than anyone else in Toronto.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a href="tel:2892164428" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(220,38,38,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center">
                URGENT? CALL DISPATCH
              </a>
              <button 
                onClick={() => setIsChatOpen(true)}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-sm px-10 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95"
              >
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
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/5 group transform lg:scale-105 origin-center">
              <img 
                src="https://i.ibb.co/B5GZDCS7/Untitled-design.png" 
                alt="AI Triage Specialists Chloe and Sam" 
                className="w-full h-auto transition-all duration-700 transform group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent"></div>
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
      <section id="services" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-navy-900 text-sm font-black uppercase tracking-[0.3em] mb-4">Expert Trade Solutions</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-navy-900 mb-6 tracking-tight">Core Maintenance Specialities</h3>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              GTA's most trusted team for complex HVAC systems and high-pressure plumbing emergencies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-snowflake', title: 'HVAC & Cooling', desc: 'High-efficiency heat pumps and AC repair with full airflow optimization.' },
              { icon: 'fa-fire-flame-curved', title: 'Heating Repair', desc: 'Emergency furnace fixes and high-efficiency boiler maintenance.' },
              { icon: 'fa-droplet', title: 'Drain Cleaning', desc: 'Hydro-jetting and camera inspections to resolve blockages permanently.' },
              { icon: 'fa-faucet', title: 'Plumbing Service', desc: 'Full-service leak detection, pipe repair, and fixture installations.' }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-navy-900 text-2xl mb-6 shadow-sm group-hover:bg-safetyOrange-500 group-hover:text-white transition-colors">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-xl font-black text-navy-900 mb-3">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
                <button onClick={() => setIsChatOpen(true)} className="mt-6 text-[11px] font-black uppercase tracking-widest text-navy-900 hover:text-safetyOrange-500 flex items-center gap-2">
                  Get Quote <i className="fa-solid fa-chevron-right text-[8px]"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Triage Section */}
      <section id="ai-triage" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-20">
        <div className="absolute -right-24 top-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl border border-slate-100 relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="bg-navy-900 text-white p-5 rounded-2xl shadow-xl shadow-navy-900/20">
                    <i className="fa-solid fa-microchip text-3xl"></i>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-black text-navy-900 leading-tight">Virtual <span className="text-safetyOrange-500">Triage</span> Tool</h2>
                </div>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                  "Chloe & Sam" identify technical issues remotely, ensuring our technicians arrive prepared with the exact parts required.
                </p>
                <ul className="space-y-5 mb-12">
                  {[
                    { icon: "fa-triangle-exclamation", color: "text-red-500", text: "Instant Safety Analysis (CO/Gas)" },
                    { icon: "fa-qrcode", color: "text-blue-500", text: "Furnace Error Code Diagnostics" },
                    { icon: "fa-bolt", color: "text-yellow-500", text: "Visual Triage via Secure Upload" },
                    { icon: "fa-clock", color: "text-green-500", text: "Direct Routing to Master Specialists" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-colors group">
                      <i className={`fa-solid ${item.icon} ${item.color} text-2xl w-8 text-center`}></i>
                      <span className="font-bold text-slate-800 text-base">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="w-full bg-navy-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-navy-800 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 uppercase tracking-widest"
                >
                  Start Chat Triage
                  <i className="fa-solid fa-bolt-lightning text-safetyOrange-500"></i>
                </button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-safetyOrange-500 font-black uppercase tracking-[0.4em] text-xs mb-6">Technical Innovation</h3>
              <h2 className="text-4xl lg:text-6xl font-black text-navy-900 leading-[1.1] mb-10">
                AI diagnosis for <span className="italic">faster fixes</span>.
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Traditional companies guess. We use data to provide a level of precision and speed the GTA hasn't seen before.
              </p>
              <div className="bg-white p-8 rounded-3xl border-l-[12px] border-safetyOrange-500 shadow-xl">
                <p className="text-navy-900 font-bold text-lg leading-relaxed italic">
                  "By diagnosing before the truck leaves, we increase our first-visit fix rate to over 90%."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebates Section */}
      <section id="rebates" className="py-24 lg:py-32 bg-navy-900 text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-safetyOrange-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">GTA <span className="text-safetyOrange-500">Rebate</span> Fast-Track</h2>
            <p className="text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              We handle the audit, the installation, and the $12,000 government rebate paperwork.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Electric-to-HP", amount: "$12,000", desc: "For homes replacing primary electric baseboard heating." },
              { title: "Gas-to-Hybrid", amount: "$2,000", desc: "For Enbridge customers adding heat pumps to gas furnaces." },
              { title: "Multi-Measure", amount: "$7,700", desc: "Combined upgrades for attic, walls, and energy windows." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 hover:border-safetyOrange-500 transition-all group">
                <p className="text-safetyOrange-400 font-black text-xs mb-4 uppercase tracking-widest">{card.title}</p>
                <p className="text-6xl font-black mb-6 group-hover:scale-105 transition-transform origin-left tracking-tighter">{card.amount}</p>
                <p className="text-slate-400 font-semibold leading-relaxed mb-10">{card.desc}</p>
                <a href="#" onClick={(e) => handleNav(e, 'ai-triage')} className="flex items-center justify-between text-white font-black text-sm uppercase tracking-widest hover:text-safetyOrange-500 transition-colors group/link">
                  Check Eligibility
                  <i className="fa-solid fa-arrow-right-long group-hover/link:translate-x-2 transition-transform"></i>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-red-600/10 border border-red-500/30 p-8 rounded-3xl flex flex-col lg:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
              <i className="fa-solid fa-circle-exclamation text-red-500 text-3xl"></i>
              <p className="text-lg font-bold text-slate-300">Don't wait for your check. We provide priority direct deposit filing support.</p>
            </div>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-xl active:scale-95 uppercase"
            >
              Secure My Rebate
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="text-left max-w-2xl">
              <h2 className="text-navy-900 text-xs font-black uppercase tracking-[0.4em] mb-4">Service Zones</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-navy-900 mb-6">Our GTA Response Network</h3>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">Guaranteed 4-hour emergency response times across Toronto and the surrounding regions.</p>
            </div>
            <div className="bg-green-50 text-green-700 font-black px-6 py-4 rounded-2xl border border-green-100 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
              Dispatch System Active
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {['North York', 'Etobicoke', 'Scarborough', 'Vaughan', 'Mississauga'].map((area) => (
              <div key={area} className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-navy-900 hover:text-white transition-all cursor-default">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-safetyOrange-500 group-hover:text-white transition-colors">
                  <i className="fa-solid fa-location-dot text-safetyOrange-500 group-hover:text-white text-2xl"></i>
                </div>
                <h4 className="font-black text-2xl mb-2 tracking-tight">{area}</h4>
                <p className="text-sm font-bold text-slate-400 group-hover:text-slate-300 uppercase tracking-widest">Zone A Priority</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-white text-navy-900 p-3 rounded-2xl">
                  <i className="fa-solid fa-faucet-drip text-3xl"></i>
                </div>
                <div>
                  <span className="block text-3xl font-black tracking-tighter uppercase leading-none">Priority</span>
                  <span className="block text-xs font-black text-safetyOrange-500 uppercase tracking-[0.2em] mt-1">Plumbing & Drains</span>
                </div>
              </div>
              <p className="text-xl text-slate-400 mb-10 max-w-sm font-medium leading-relaxed">
                GTA's premier emergency response team. Modern tech for traditional trades.
              </p>
              <div className="flex gap-4">
                {['facebook-f', 'instagram', 'youtube', 'linkedin-in'].map((icon, idx) => (
                  <a key={idx} href="#" onClick={(e) => handleNav(e, 'chat')} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-safetyOrange-500 transition-all">
                    <i className={`fa-brands fa-${icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-safetyOrange-500">Quick Links</h4>
              <ul className="space-y-4 text-slate-400 font-bold">
                <li><a href="#" onClick={(e) => handleNav(e, 'rebates')} className="hover:text-white transition-colors">Government Rebates</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'services')} className="hover:text-white transition-colors">Master Services</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'ai-triage')} className="hover:text-white transition-colors">AI Diagnostics</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'areas')} className="hover:text-white transition-colors">Service Coverage</a></li>
                <li><a href="tel:2892164428" className="text-safetyOrange-500 hover:underline">Emergency Line</a></li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-black text-sm mb-10 uppercase tracking-[0.3em] text-safetyOrange-500">Company</h4>
              <ul className="space-y-4 text-slate-400 font-bold mb-8">
                <li><a href="#" onClick={(e) => handleNav(e, 'top')} className="hover:text-white transition-colors">About Priority</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'chat')} className="hover:text-white transition-colors">Career Opportunities</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'chat')} className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, 'chat')} className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/5 text-xs text-slate-500 font-bold uppercase tracking-widest text-center">
                TSSA Certified #231294<br/>Master Licensed
              </div>
            </div>
          </div>
          <div className="mt-24 pt-10 border-t border-white/5 text-center text-sm text-slate-500 font-bold tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Priority Plumbing & Drains. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Dynamic Widgets */}
      <StickyEmergencyButton />
      <ChatWidget isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default App;
