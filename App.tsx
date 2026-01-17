
import React from 'react';
import StickyEmergencyButton from './components/StickyEmergencyButton';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Strike Warning & Rebate Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation animate-pulse"></i>
          <strong>NOTICE:</strong> Canada Post Strike may delay rebate checks. Direct Deposit is highly recommended.
        </span>
      </div>

      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-navy-900 text-white p-2 rounded-lg">
              <i className="fa-solid fa-faucet-drip text-2xl"></i>
            </div>
            <div>
              <span className="block text-xl font-black tracking-tighter text-navy-900 uppercase">Priority</span>
              <span className="block text-xs font-bold text-safetyOrange-600 uppercase -mt-1">Plumbing & Drains</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#rebates" className="text-sm font-semibold hover:text-safetyOrange-600 transition-colors uppercase tracking-wide">Rebates</a>
            <a href="#services" className="text-sm font-semibold hover:text-safetyOrange-600 transition-colors uppercase tracking-wide">Services</a>
            <a href="#ai-triage" className="text-sm font-semibold hover:text-safetyOrange-600 transition-colors uppercase tracking-wide">AI Triage</a>
            <a href="#areas" className="text-sm font-semibold hover:text-safetyOrange-600 transition-colors uppercase tracking-wide">Service Areas</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:2892164428" className="hidden sm:flex items-center gap-2 bg-navy-900 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-navy-800 transition-all shadow-md">
              <i className="fa-solid fa-phone"></i>
              (289) 216-4428
            </a>
            <button className="bg-safetyOrange-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-safetyOrange-600 transition-all shadow-md uppercase">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-navy-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-800 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-safetyOrange-500/10 text-safetyOrange-500 px-4 py-1 rounded-full text-sm font-bold mb-6">
              20+ YEARS OF GTA EXPERIENCE
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Fast, Professional <span className="text-safetyOrange-500 underline decoration-4 underline-offset-8">GTA Dispatch</span> – No More Cold Nights.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Toronto's most reliable team for 24/7 emergency furnace repair, plumbing disasters, and high-efficiency heat pump upgrades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-xl shadow-2xl transition-all transform hover:-translate-y-1">
                EMERGENCY SERVICE? CALL NOW
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg transition-all">
                GET A FREE QUOTE
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 items-center">
              <div className="flex items-center gap-2 text-white">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <span className="font-bold">4.7/5 HomeStars Rating</span>
              </div>
              <div className="w-px h-6 bg-gray-600 hidden sm:block"></div>
              <div className="flex items-center gap-2 text-white">
                <i className="fa-solid fa-shield-check text-green-400"></i>
                <span className="font-bold">Licensed & Insured</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10">
              <img src="https://picsum.photos/800/600?random=1" alt="Professional Technician" className="w-full grayscale-[0.2]" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-500">Last Dispatch</p>
                    <p className="text-sm font-black text-navy-900 uppercase">12 mins ago in North York</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Jessica Feature - AI Triage */}
      <section id="ai-triage" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-safetyOrange-500 rounded-full opacity-10"></div>
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-navy-900 text-white p-4 rounded-2xl">
                      <i className="fa-solid fa-microchip text-3xl"></i>
                    </div>
                    <h2 className="text-3xl font-black text-navy-900">AI-Powered <span className="text-safetyOrange-500">Technical Triage</span></h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our proprietary "Jessica" AI system identifies technical error codes and safety issues (like Red Tags) before the technician even arrives. 
                  </p>
                  <ul className="space-y-4">
                    {[
                      { icon: "fa-triangle-exclamation", color: "text-red-500", text: "Instant Safety Analysis (Gas Leaks/CO Risks)" },
                      { icon: "fa-qrcode", color: "text-blue-500", text: "Furnace Error Code Deciphering" },
                      { icon: "fa-bolt", color: "text-yellow-500", text: "Visual Triage for Plumbing Breaks" },
                      { icon: "fa-clock", color: "text-green-500", text: "Direct-to-Senior-Dispatch Routing" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <i className={`fa-solid ${item.icon} ${item.color} text-xl w-6`}></i>
                        <span className="font-bold text-gray-800">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 w-full bg-navy-900 text-white py-4 rounded-xl font-bold hover:bg-navy-800 transition-all flex items-center justify-center gap-3">
                    Try Virtual Triage Now
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-safetyOrange-500 font-black uppercase tracking-widest text-sm mb-4">Precision Engineering</h3>
              <h2 className="text-4xl lg:text-5xl font-black text-navy-900 leading-tight mb-8">
                Why we use AI for <span className="italic">Emergency Dispatch</span>.
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                In a crisis, every minute counts. Traditional dispatchers ask "Where do you live?" Jessica asks "What color is the flashing light on your circuit board?"
              </p>
              <div className="bg-white p-6 rounded-2xl border-l-8 border-safetyOrange-500 shadow-sm">
                <p className="text-gray-800 font-bold">
                  "By diagnosing the part needed before our truck leaves the shop, we increase our first-visit fix rate to 92%, compared to the 64% industry average."
                </p>
                <p className="mt-4 text-sm text-gray-500">— Founder, Priority Plumbing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rebates Section */}
      <section id="rebates" className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-safetyOrange-500"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">Ontario <span className="text-safetyOrange-500">Home Renovation</span> Savings</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up to <strong>$12,000</strong> in government rebates when you upgrade to high-efficiency Cold-Climate Heat Pumps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Electric-to-HP", amount: "$12,000", desc: "For homes replacing primary electric baseboard or furnace heating." },
              { title: "Gas-to-Hybrid", amount: "$2,000", desc: "For Enbridge customers adding a heat pump to their existing system." },
              { title: "Insulation/Windows", amount: "$7,700", desc: "Combined upgrades for attic, wall, and window energy efficiency." }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-safetyOrange-500/50 transition-all group">
                <p className="text-safetyOrange-500 font-black text-sm mb-2 uppercase">{card.title}</p>
                <p className="text-5xl font-black mb-4 group-hover:scale-110 transition-transform origin-left">{card.amount}</p>
                <p className="text-gray-400 font-medium leading-relaxed">{card.desc}</p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <a href="#" className="flex items-center gap-2 text-safetyOrange-500 font-bold hover:underline">
                    Check Eligibility <i className="fa-solid fa-chevron-right text-xs"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-red-600/20 border border-red-500/50 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4 text-left">
              <i className="fa-solid fa-circle-exclamation text-3xl text-red-500"></i>
              <div>
                <p className="font-black text-lg">URGENT: STRIKE WARNING</p>
                <p className="text-sm text-gray-300">Rebate check delivery may be impacted by Canada Post. We assist with direct deposit setup.</p>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all whitespace-nowrap">
              Secure My Rebate Slot
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-left">
              <h2 className="text-4xl font-black text-navy-900 mb-4">Our GTA <span className="text-safetyOrange-500">Service Map</span></h2>
              <p className="text-lg text-gray-500">We guarantee a technician at your door within 4 hours in these key zones.</p>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-black bg-green-50 px-4 py-2 rounded-lg">
              <span className="w-3 h-3 bg-green-600 rounded-full animate-ping"></span>
              24 Units Currently Active in GTA
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['North York', 'Etobicoke', 'Scarborough', 'Vaughan', 'Mississauga'].map((area) => (
              <div key={area} className="group bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:bg-navy-900 hover:text-white transition-all cursor-default">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-safetyOrange-500">
                  <i className="fa-solid fa-location-dot text-safetyOrange-500 group-hover:text-white"></i>
                </div>
                <h4 className="font-black text-xl mb-1">{area}</h4>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">Priority Zone</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="flex justify-center gap-1 mb-4 text-yellow-400 text-2xl">
                {[1, 2, 3, 4, 5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
              </div>
              <h3 className="text-2xl font-black text-navy-900 italic">"The fastest response I've ever seen in Etobicoke."</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Furnace died at 10 PM in January. Priority Plumbing's AI triage Jessica confirmed it was a faulty flame sensor via video call. The tech arrived at 11:30 PM with the exact part needed. Remarkable."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold">SM</div>
                  <div>
                    <p className="font-bold text-navy-900">Sandra M.</p>
                    <p className="text-xs text-gray-500 uppercase font-black">Scarborough Homeowner</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "Converted our oil boiler to a hybrid heat pump system. They handled the $12k rebate paperwork for us entirely. Our hydro bill dropped 40% immediately. Professional and honest."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold">RK</div>
                  <div>
                    <p className="font-bold text-navy-900">Robert K.</p>
                    <p className="text-xs text-gray-500 uppercase font-black">Vaughan Property Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-white text-navy-900 p-2 rounded-lg">
                  <i className="fa-solid fa-faucet-drip text-2xl"></i>
                </div>
                <div>
                  <span className="block text-xl font-black tracking-tighter uppercase">Priority</span>
                  <span className="block text-xs font-bold text-safetyOrange-500 uppercase -mt-1">Plumbing & Drains</span>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-sm">
                GTA's premier emergency HVAC and plumbing team. Utilizing AI diagnostic tools to provide faster, more accurate service.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-safetyOrange-500 transition-all">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-safetyOrange-500 transition-all">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-safetyOrange-500 transition-all">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-safetyOrange-500">Contact</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-phone text-safetyOrange-500"></i>
                  <a href="tel:2892164428" className="hover:text-white">(289) 216-4428</a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fa-solid fa-envelope text-safetyOrange-500"></i>
                  <span>dispatch@priorityplumbing.ca</span>
                </li>
                <li className="flex items-start gap-3">
                  <i className="fa-solid fa-location-dot text-safetyOrange-500 mt-1"></i>
                  <span>1594 Dupont Street<br/>Toronto, ON M6P 3S7</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6 uppercase tracking-widest text-safetyOrange-500">Hours</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between">
                  <span>Dispatch:</span>
                  <span className="font-bold text-green-400">24/7/365</span>
                </li>
                <li className="flex justify-between">
                  <span>Showroom:</span>
                  <span>9am - 5pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Assessments:</span>
                  <span>Mon - Sat</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Priority Plumbing & Drains. All Rights Reserved. TSSA Certified. Master Plumber Licensed.</p>
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
