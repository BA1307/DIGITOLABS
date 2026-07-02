import { motion } from 'motion/react';
import { Brain, Cpu, MessageSquare, Zap, Layers, Sparkles, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 opacity-80">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

interface AiTrainingProps {
  setCurrentPage: (page: PageType) => void;
}

export default function AiTraining({ setCurrentPage }: AiTrainingProps) {
  const tools = [
    {
      name: 'ChatGPT & Claude',
      role: 'Prompt Engineering & Reasoning',
      desc: 'Master the art of chain-of-thought prompt styles, multi-role agent systems, and dynamic contextual frameworks to draft high-fidelity research documents.',
      icon: MessageSquare,
      color: 'from-brand-magenta to-brand-violet'
    },
    {
      name: 'Midjourney & Canva AI',
      role: 'Generative Graphic Systems',
      desc: 'Formulate descriptive visual commands to construct professional vector designs, branding assets, social media imagery, and premium layouts in seconds.',
      icon: Sparkles,
      color: 'from-brand-violet to-brand-cyan'
    },
    {
      name: 'GitHub Copilot & v0',
      role: 'No-Code/Low-Code Dev Assistants',
      desc: 'Utilize specialized neural assistants to translate natural language queries into clean functional web layouts, simple automation scripts, and software logic.',
      icon: Code,
      color: 'from-brand-cyan to-brand-blue'
    },
    {
      name: 'Zapier & Make.com',
      role: 'AI Autonomous Workflow Loops',
      desc: 'Architect seamless background connectors that automatically route emails, transcribe audio summaries, generate records, and synchronize team tasks.',
      icon: Layers,
      color: 'from-brand-blue to-brand-orange'
    }
  ];

  const benefits = [
    { title: '10x Speed Accretion', desc: 'Accelerate your report drafting, technical research, and content schedules with pre-tested workspace prompts.' },
    { title: 'Automated Redundant Cycles', desc: 'Delegate structural formatting, data cleaning, and scheduling chores directly to autonomous AI connectors.' },
    { title: 'Cognitive Upskilling', desc: 'Understand the underlying LLM paradigms to continually adapt as artificial intelligence systems expand globally.' },
    { title: 'Resume Competitive Dominance', desc: 'Present yourself as an AI-augmented professional capable of delivering the output of an entire traditional team.' }
  ];

  const profiles = [
    { title: 'Undergraduate Students', reason: 'Learn difficult scientific and technical topics ten times faster, analyze complex journals quickly, and formulate flawless reports.' },
    { title: 'Creative Freelancers', reason: 'Expand your graphic design, copywriting, and media production bandwidth, allowing you to handle multiple premium clients.' },
    { title: 'Office Coordinators', reason: 'Upgrade spreadsheets, automate heavy correspondence, write summaries of long meetings instantly, and run smooth logistics.' },
    { title: 'Startup Founders', reason: 'Launch operations, code basic web structures, and run marketing funnels with close to zero starting capital.' }
  ];

  return (
    <div id="ai-training-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header and Intro Combined Section */}
      <section id="ai-header-intro" className="relative z-10 mb-24 p-6 md:p-12">
        <SectionHeader
          badge="Futuristic Engineering"
          title="Command Artificial Intelligence. Outpace the Curve."
          subtitle="AI is not a replacement; it is an amplifier. Acquire elite prompt engineering, custom workplace automations, and generative content workflows."
          gradientType="magenta"
        />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />

        {/* Two Column Intro: What is AI & Why It Matters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2 text-brand-magenta">
            <Brain className="h-5 w-5" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest">Core Definition</span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
            Demystifying Artificial Intelligence in Modern Workplace Ecosystems
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            At its core, modern Artificial Intelligence consists of deep neural models capable of parsing trillions of parameters of language, code, and visual contexts. Instead of learning complex technical code, humans can now instruct machines using standard natural language.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Proficiency in AI does not require a mathematics degree. It requires <strong>Prompt Competence</strong>—the ability to write clear, structured instructions that guide neural networks to generate optimal, precise outputs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <GlassCard className="p-8 border border-white/10 !bg-brand-dark/45 relative z-10 overflow-hidden">
            <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center space-x-2">
              <Cpu className="h-5 w-5 text-brand-cyan" />
              <span>The AI Imperative</span>
            </h3>

            <div className="space-y-5 text-xs text-gray-300">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-brand-cyan font-bold block mb-1">GLOBAL MARKET STATISTIC</span>
                <p className="leading-relaxed">
                  Over 82% of premium corporate roles now prioritize applicants who possess documented competencies in generative AI platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="font-mono text-brand-magenta font-bold block mb-1">PROMPT VELOCITY OUTLOOK</span>
                <p className="leading-relaxed">
                  Workers incorporating structural prompting models complete analytical writing and content operations 50% faster than traditional workflows.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Decorative cosmic gradient circle matching the background mockup */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-magenta/15 rounded-full blur-[60px] -z-10" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-cyan/15 rounded-full blur-[60px] -z-10" />
        </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* AI Tools Learned Grid */}
      <section className="mb-24 p-6 md:p-8">
        <SectionHeader
          badge="Syllabus Core"
          title="The AI Systems and Tools You Will Command"
          subtitle="Go beyond basic question-answering. Build structured prompts, create vector graphical assets, and program autonomous workspace logic."
          gradientType="cyan"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full group hover:border-white/10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} text-white w-fit mb-5 shadow-md`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-cyan uppercase tracking-wider block mb-1">
                    {tool.role}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-3 tracking-tight group-hover:text-brand-cyan transition-all">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    {tool.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Practical Benefits */}
      <section className="mb-24 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-4 space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan">
              Tangible Value
            </span>
            <h2 className="font-display text-3xl font-extrabold text-white leading-tight">
              Practical Benefits of Cognitive Mastery
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We design our cohorts to produce instant real-world improvements. Here is how your daily professional life shifts after our training.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((ben, idx) => (
              <GlassCard key={idx} hoverGlow={false} className="border border-white/5">
                <CheckCircle className="h-5 w-5 text-brand-cyan mb-3 flex-shrink-0" />
                <h3 className="text-sm font-bold text-white mb-2">{ben.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{ben.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Who Should Join Section */}
      <section className="mb-24 p-6 md:p-8">
        <SectionHeader
          badge="Target Audiences"
          title="Who Should Enroll in AI Cohorts?"
          subtitle="This program is designed for ambitious individuals looking to upgrade their efficiency and build a strong career advantage."
          gradientType="gold"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {profiles.map((profile, idx) => (
            <GlassCard key={idx} hoverGlow={true} className="flex flex-col justify-between h-full !p-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-magenta uppercase tracking-widest block mb-1">PROFILE 0{idx + 1}</span>
                <h3 className="font-display text-base font-bold text-white mb-3">
                  {profile.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {profile.reason}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Bottom CTA Block */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center shadow-3xl">
          <div className="absolute inset-0 bg-radial-gradient from-brand-violet/20 to-transparent blur-[80px]" />
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-brand-cyan mb-4">
            Unlock Advanced Cognitive Power
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight max-w-2xl mx-auto">
            Become an AI-Augmented Specialist
          </h2>

          <p className="text-sm text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Our registrations are open for the upcoming 4-week program. Secure your seat today.
          </p>

          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="glow-btn bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-brand-magenta/25 inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Register for AI Training</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
