import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, Brain, ShieldCheck, Target, Users, Zap, Compass, Star, FileText } from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 opacity-80">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

interface CbcProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Cbc({ setCurrentPage }: CbcProps) {
  // Competency tracker active element
  const [selectedCompetency, setSelectedCompetency] = useState<string>('problem-solving');

  // Flashcard states
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  const pillars = [
    {
      title: 'Student-Centered Learning',
      desc: 'Shifting the focal point from passive lecturing to active student exploration, encouraging inquiry and critical questioning.',
      icon: <Users className="h-5 w-5 text-brand-magenta" />
    },
    {
      title: 'Skills over Memorization',
      desc: 'Focusing on what students can *do* rather than just what they can memorize. Every theoretical element is coupled with real-world execution.',
      icon: <Target className="h-5 w-5 text-brand-cyan" />
    },
    {
      title: 'Continuous Formative Evaluation',
      desc: 'No single high-stakes final exam dictates progress. Ongoing diagnostic tests, self-assessment trackers, and laboratory tasks build the overall score.',
      icon: <FileText className="h-5 w-5 text-brand-yellow" />
    },
    {
      title: 'Digital & Practical Integration',
      desc: 'Seamless assimilation of digital literacy, advanced computer tools, and hands-on laboratory experiments directly into core lesson plans.',
      icon: <Zap className="h-5 w-5 text-brand-blue" />
    }
  ];

  const competencies = {
    'problem-solving': {
      title: 'Critical Thinking & Problem Solving',
      desc: 'The ability to analyze complex issues, synthesize diverse information, and formulate practical, data-driven solutions.',
      practicalApplication: 'Developing an algorithmic script to automate standard administrative computations or designing chemical titration strategies based on rapid indicators.',
      assessmentMethod: 'Project-based deliverables and live peer-review demonstrations.'
    },
    'digital-literacy': {
      title: 'Advanced Digital Literacy',
      desc: 'Navigating contemporary computer applications, understanding database infrastructure, utilizing generative AI responsibly, and editing professional content.',
      practicalApplication: 'Configuring custom databases, scripting automated sheets, and designing high-conversion social media assets.',
      assessmentMethod: 'Portfolio reviews, interactive sandbox challenges, and physical laboratory practical checks.'
    },
    'collaboration': {
      title: 'Collaboration & Team Dynamics',
      desc: 'Working effectively in diverse groups, leading project sprints, communicating objectives, and managing shared laboratory assets.',
      practicalApplication: 'Group research projects on biological tissue structures or co-developing a multi-page digital media campaign.',
      assessmentMethod: 'Peer evaluations, team presentation outputs, and laboratory teamwork rubrics.'
    },
    'self-reliance': {
      title: 'Self-Reliance & Lifelong Learning',
      desc: 'Cultivating inner drive, learning how to learn, adjusting to technological shifts, and taking agency over one’s academic and career trajectory.',
      practicalApplication: 'Independently working through active-recall science flashcards and launching self-designed research challenges.',
      assessmentMethod: 'Self-reflection journals, continuous personal progress audits, and milestone completion certificates.'
    }
  };

  const activeRecallCards = [
    {
      q: 'What is the primary difference between traditional curriculum and CBC?',
      a: 'Traditional curriculum emphasizes rote memorization and high-stakes end-of-year exams, whereas CBC focuses on practical skills mastery, continuous formative assessment, and the ability to apply knowledge to real-life challenges.'
    },
    {
      q: 'How does CBC prepare students for the modern workspace?',
      a: 'By prioritizing practical competencies like digital literacy, algorithmic problem solving, and effective collaboration over rigid theoretical facts, aligning directly with modern job market expectations.'
    },
    {
      q: 'What is "Formative Assessment" in CBC?',
      a: 'An ongoing evaluation process where instructors provide constructive, actionable feedback during the learning journey. This allows students to improve continuously through portfolios, practicals, and projects.'
    }
  ];

  return (
    <div id="cbc-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Header */}
      <section className="relative z-10 mb-16 p-6 md:p-12">
        <SectionHeader
          badge="Educational Philosophy"
          title="Competency-Based Curriculum (CBC)"
          subtitle="Bridging the gap between knowledge and execution. Digitolabs embraces CBC methodology to deliver practical, student-centric training that translates into immediate real-world capability."
          gradientType="orange"
        />
      </section>

      {/* Section 1: Pillars of CBC */}
      <section className="mb-16 p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Core Methodology
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Our Four Pillars of CBC Excellence
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Every lecture, project, and lab session at Digitolabs is built on these foundational pillars of competency-based education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <GlassCard key={idx} className="p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 w-11 h-11 flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-3 flex items-center justify-between text-[10px] text-gray-500 font-mono">
                <span>0{idx + 1} / 04</span>
                <span className="uppercase text-brand-cyan">Active Pillar</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Interactive Competency Explorer */}
      <section className="mb-16 text-left p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Interactive Competency Grid
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Explore Core Life & Work Competencies
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Click on any competency below to review how we cultivate, apply, and evaluate it across our digital and science curricula.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Timeline Controls */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block mb-1">
              Select Competency Sector:
            </span>
            {(Object.keys(competencies) as Array<keyof typeof competencies>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCompetency(key)}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  selectedCompetency === key
                    ? 'border-brand-cyan bg-brand-cyan/10 text-white shadow-lg'
                    : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Compass className={`h-5 w-5 ${selectedCompetency === key ? 'text-brand-cyan' : 'text-gray-500'}`} />
                  <span className="font-display font-bold text-sm">
                    {competencies[key].title}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 opacity-60" />
              </button>
            ))}
          </div>

          {/* Details Box */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-brand-cyan/20 text-brand-cyan text-[10px] font-mono px-2 py-0.5 rounded border border-brand-cyan/30">
                Competency Rubric
              </div>

              <div>
                <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest block mb-1">
                  Pillar Evaluation Profile
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {competencies[selectedCompetency as keyof typeof competencies].title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {competencies[selectedCompetency as keyof typeof competencies].desc}
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                    <h5 className="font-display font-semibold text-brand-yellow text-xs uppercase tracking-wider mb-1.5 flex items-center">
                      <Star className="h-3.5 w-3.5 text-brand-yellow mr-1.5" />
                      Practical Sandbox Project:
                    </h5>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {competencies[selectedCompetency as keyof typeof competencies].practicalApplication}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-display font-semibold text-brand-cyan text-xs uppercase tracking-wider mb-1">
                      Continuous Assessment Method:
                    </h5>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {competencies[selectedCompetency as keyof typeof competencies].assessmentMethod}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                <span>Digitolabs Assessment Framework</span>
                <span className="text-brand-cyan font-mono">100% Practical</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Active Recall Flashcards */}
      <section className="mb-16 p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Active Recall Flashcards
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            High-Yield CBC Concepts
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Understand the core principles of Tanzania and East Africa’s transition to Competency-Based Curricula. Click card to flip and verify your understanding.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Card Frame */}
          <div className="perspective-1000 min-h-[220px] w-full" onClick={() => setIsCardFlipped(!isCardFlipped)}>
            <div
              className={`relative w-full h-48 transition-all duration-500 transform-style-3d cursor-pointer ${
                isCardFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front side */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <GlassCard className="h-full w-full p-8 flex flex-col justify-between items-center text-center border-2 border-brand-magenta/25 bg-[#0d0f2f]/90 hover:border-brand-magenta transition-all">
                  <div className="flex items-center space-x-2 text-brand-magenta mb-2">
                    <Brain className="h-5 w-5" />
                    <span className="text-[10px] uppercase font-mono tracking-widest">Question {activeCardIndex + 1} of {activeRecallCards.length}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-base sm:text-lg text-white max-w-md">
                    {activeRecallCards[activeCardIndex].q}
                  </h3>

                  <span className="text-xs text-gray-500 font-mono italic">
                    Click to flip & read answer
                  </span>
                </GlassCard>
              </div>

              {/* Back side */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <GlassCard className="h-full w-full p-6 sm:p-8 flex flex-col justify-between items-center text-center border-2 border-brand-cyan/20 bg-[#07132a]/90">
                  <div className="flex items-center space-x-2 text-brand-cyan mb-2">
                    <Star className="h-5 w-5 animate-pulse text-brand-cyan" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan">Verified Curriculum Framework</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans max-w-lg overflow-y-auto">
                    {activeRecallCards[activeCardIndex].a}
                  </p>

                  <span className="text-[10px] text-brand-yellow font-mono italic">
                    Competency over content
                  </span>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCardFlipped(false);
                setTimeout(() => {
                  setActiveCardIndex((prev) => (prev - 1 + activeRecallCards.length) % activeRecallCards.length);
                }, 150);
              }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              Previous Card
            </button>
            <span className="text-xs text-gray-500 font-mono">
              Card {activeCardIndex + 1} / {activeRecallCards.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCardFlipped(false);
                setTimeout(() => {
                  setActiveCardIndex((prev) => (prev + 1) % activeRecallCards.length);
                }, 150);
              }}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              Next Card
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Call To Action */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-magenta bg-brand-magenta/15 border border-brand-magenta/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <ShieldCheck className="h-3.5 w-3.5 mr-1 text-brand-magenta" />
              Tanzania Educational Standards
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Master <span className="text-gradient-orange">Practical Capabilities</span>?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Step away from passive lectures and enter the active, project-focused training labs at Digitolabs. Gain hands-on digital skills and laboratory competencies designed for 21st-century success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-brand-magenta/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Register for CBC Cohorts</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/255658515833?text=Hello%20Digitolabs%20I%20want%20to%20register%20for%20Practical%20CBC%20classes."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all border border-white/10 text-center block cursor-pointer"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
