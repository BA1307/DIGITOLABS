import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, Compass, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const directContacts = [
    {
      title: 'WhatsApp Admissions Advisor',
      desc: 'Connect immediately for seat registration guidelines, payment schedules, or corporate queries.',
      actionLabel: 'Chat on WhatsApp',
      actionUrl: 'https://wa.me/255745288882',
      color: 'border-emerald-500/10 hover:border-emerald-500/25',
      iconColor: 'text-emerald-400',
      btnBg: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/20'
    },
    {
      title: 'Voice Call Advisor',
      desc: 'Prefer a direct phone conversation? Call our helpdesk line during our regular business hours.',
      actionLabel: 'Call +255 745 288 882',
      actionUrl: 'tel:+255745288882',
      color: 'border-brand-cyan/10 hover:border-brand-cyan/25',
      iconColor: 'text-brand-cyan',
      btnBg: 'bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border-brand-cyan/20'
    },
    {
      title: 'Admissions Email Desk',
      desc: 'Send us your sponsorship details, verification requirements, or group registration rosters.',
      actionLabel: 'Email Admissions Desk',
      actionUrl: 'mailto:info@digitolabs.com',
      color: 'border-brand-magenta/10 hover:border-brand-magenta/25',
      iconColor: 'text-brand-magenta',
      btnBg: 'bg-brand-magenta/10 hover:bg-brand-magenta/20 text-brand-magenta border-brand-magenta/20'
    }
  ];

  return (
    <div id="contact-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <section className="relative z-10 mb-16 p-6 md:p-12">
        <SectionHeader
          badge="Connect Safely"
          title="We Are Ready to Accelerate Your Journey"
          subtitle="Connect directly with our advisors. There are no redundant forms—reach out via your erred channel."
          gradientType="emerald"
        />
      </section>

      {/* Two Column Grid */}
      <section className="relative z-10 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Cards for WhatsApp, Voice, Email */}
          <div className="lg:col-span-6 space-y-6">
          {directContacts.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard hoverGlow={false} className={`p-6 border transition-all ${contact.color}`}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${contact.iconColor}`}>
                    {idx === 0 ? <MessageSquare className="h-6 w-6" /> : idx === 1 ? <Phone className="h-6 w-6" /> : <Mail className="h-6 w-6" />}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      {contact.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {contact.desc}
                    </p>
                    <div className="pt-2">
                      <a
                        href={contact.actionUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${contact.btnBg}`}
                      >
                        <span>{contact.actionLabel}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Address, Business Hours & Map Placeholder */}
        <div className="lg:col-span-6 space-y-6">
          <GlassCard hoverGlow={false} className="border border-white/5 !p-6 md:!p-8">
            <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center space-x-2">
              <Compass className="h-5 w-5 text-brand-cyan" />
              <span>DIGITOLABS Headquarters</span>
            </h3>

            <div className="space-y-6 text-sm">
              {/* Address details */}
              <div className="flex items-start space-x-3.5">
                <MapPin className="h-5 w-5 text-brand-magenta flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Physical Location</span>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                    DIGITOLABS Facility, Block 4, Victoria Area,<br />
                    Old Bagamoyo Road, Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>

              {/* Hours details */}
              <div className="flex items-start space-x-3.5">
                <Clock className="h-5 w-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Admissions Hours</span>
                  <p className="text-xs text-brand-cyan font-bold mt-1 font-mono uppercase tracking-wider">
                    BY APPOINTMENT ONLY
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-sans">
                    Monday – Saturday: 9:00 AM – 6:00 PM<br />
                    Sundays & Public Holidays: Closed
                  </p>
                </div>
              </div>

              {/* Social Channels inside page */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-xs font-semibold text-gray-400 block mb-3 font-mono uppercase tracking-wider">Our Communities</span>
                <div className="flex space-x-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Map Visual Placeholder */}
          <GlassCard hoverGlow={false} className="border border-white/5 !p-0 overflow-hidden h-[250px] relative">
            {/* Elegant Map Backdrop */}
            <div className="absolute inset-0 bg-[#05061c] flex flex-col items-center justify-center text-center p-6 border border-white/5 rounded-2xl">
              {/* Radial gradient representing a mock map pin pulse */}
              <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20 animate-pulse mb-3">
                <MapPin className="h-6 w-6 text-brand-cyan" />
              </div>
              <h4 className="font-display text-sm font-bold text-white mb-1">Victoria Area Hub Visual</h4>
              <p className="text-[11px] text-gray-400 max-w-xs leading-relaxed">
                Dar es Salaam Old Bagamoyo Road. Easy transit routes with safe secure physical perimeter parking.
              </p>
              
              {/* Subtle visual grid markers to represent maps */}
              <div className="absolute inset-x-0 bottom-3 text-[10px] font-mono text-gray-600">
                Lat: -6.7725° S | Long: 39.2631° E
              </div>
            </div>
          </GlassCard>
        </div>

      </div>
      </section>

    </div>
  );
}
