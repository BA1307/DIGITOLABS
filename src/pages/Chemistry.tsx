import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, Brain, Clock, ShieldCheck, Flame, FlaskConical, Sparkles } from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 opacity-80">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

interface ChemistryProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Chemistry({ setCurrentPage }: ChemistryProps) {
  // Reaction pathway active stage
  const [selectedPathwayStage, setSelectedPathwayStage] = useState<number>(0);

  // Titration Indicator State
  const [titrationType, setTitrationType] = useState<'strong-strong' | 'weak-strong' | 'strong-weak'>('strong-strong');

  // Active recall cards
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  const curriculum = [
    {
      level: 'Form Five Chemistry Syllabus',
      topics: [
        { title: 'General & Atomic Chemistry', desc: 'Atomic structure, quantum numbers, periodic trends, electronegativity, ionic/covalent structures, and gas laws.' },
        { title: 'Physical Chemistry', desc: 'Chemical Energetics, Hess’s law, Born-Haber cycles, chemical kinetics, rate laws, and dynamic chemical equilibrium.' },
        { title: 'Inorganic Chemistry (Group Trends)', desc: 'Diagonal relationships, period 3 element properties, s-block elements (Group I and II periodic progressions).' }
      ]
    },
    {
      level: 'Form Six Chemistry Syllabus',
      topics: [
        { title: 'Organic Chemistry Pathways', desc: 'Saturated, unsaturated and aromatic hydrocarbons, electrophilic and nucleophilic substitution mechanisms, functional groups.' },
        { title: 'Inorganic Transition Metals', desc: 'Electronic configurations, variable oxidation states, ligand complex formation, color mechanics, and catalysis.' },
        { title: 'Analytical & Practical Chemistry', desc: 'Theory of volumetric analysis, acid-base indicators, redox back titrations, qualitative chemical analysis, and confirmatory tests.' }
      ]
    }
  ];

  const synthesisPathway = [
    {
      step: 'Step 1: Alkane to Haloalkane',
      reactant: 'Ethane (CH3-CH3)',
      reagents: 'Halogen (Cl2 or Br2)',
      conditions: 'Ultraviolet (UV) Light or heat (300°C)',
      mechanism: 'Free Radical Substitution (Initiation, Elongation, Termination steps)',
      product: 'Bromoethane (CH3-CH2Br)'
    },
    {
      step: 'Step 2: Haloalkane to Primary Alcohol',
      reactant: 'Bromoethane (CH3-CH2Br)',
      reagents: 'Aqueous NaOH or Aqueous KOH',
      conditions: 'Heat under Reflux',
      mechanism: 'Nucleophilic Substitution (Sn2 mechanism for primary haloalkanes)',
      product: 'Ethanol (CH3-CH2OH)'
    },
    {
      step: 'Step 3: Primary Alcohol to Aldehyde',
      reactant: 'Ethanol (CH3-CH2OH)',
      reagents: 'Acidified Potassium Dichromate (K2Cr2O7 / H2SO4)',
      conditions: 'Distillation setup immediately to prevent further oxidation',
      mechanism: 'Mild Oxidation (Color changes from Orange Cr2O7 2- to Green Cr 3+)',
      product: 'Ethanal (CH3-CHO)'
    },
    {
      step: 'Step 4: Aldehyde to Carboxylic Acid',
      reactant: 'Ethanal (CH3-CHO)',
      reagents: 'Excess Acidified Potassium Dichromate or Tollens’ Reagent',
      conditions: 'Heat under Reflux (Tollens forms a shiny silver mirror deposit)',
      mechanism: 'Complete Oxidation',
      product: 'Ethanoic Acid (CH3-COOH)'
    }
  ];

  const qualitativeTitration = {
    'strong-strong': {
      title: 'Strong Acid vs Strong Base Titration',
      example: 'HCl (Hydrochloric Acid) vs NaOH (Sodium Hydroxide)',
      phRange: 'Rapid pH jump from pH 3 to 11 at equivalence point.',
      indicators: 'Phenolphthalein (Colorless in acid, pink in base) OR Methyl Orange (Red in acid, yellow in base). Both work perfectly.'
    },
    'weak-strong': {
      title: 'Weak Acid vs Strong Base Titration',
      example: 'CH3COOH (Ethanoic Acid) vs NaOH (Sodium Hydroxide)',
      phRange: 'Equivalence point is in the alkaline region (pH ~ 8.7).',
      indicators: 'Phenolphthalein (Colorless in acid, changes to pale pink at exactly pH 8.2 - 10.0). Methyl Orange is completely unsuitable.'
    },
    'strong-weak': {
      title: 'Strong Acid vs Weak Base Titration',
      example: 'HCl (Hydrochloric Acid) vs NH3 (Aqueous Ammonia)',
      phRange: 'Equivalence point is in the acidic region (pH ~ 5.3).',
      indicators: 'Methyl Orange (Changes color from red to orange/yellow at pH 3.1 - 4.4). Phenolphthalein is completely unsuitable.'
    }
  };

  const activeRecallCards = [
    {
      q: 'What determines the suitability of an indicator in an acid-base titration?',
      a: 'The pH transition range of the indicator must fall completely within the rapid pH jump region of the titration curve at the equivalence point.'
    },
    {
      q: 'Why do transition metals exhibit variable oxidation states?',
      a: 'Because the energy difference between the 3d and 4s subshells is very small. Both 4s and 3d electrons can be lost or shared in chemical bonding.'
    },
    {
      q: 'State Hess’s Law of Constant Heat Summation.',
      a: 'The total enthalpy change in a chemical reaction is constant, regardless of whether the reaction occurs in a single step or through multiple sequential steps, provided initial and final states are identical.'
    },
    {
      q: 'Explain the mechanism of a nucleophilic substitution reaction (Sn1 vs Sn2).',
      a: 'Sn1 occurs in two steps via a stable carbocation intermediate (favored by tertiary haloalkanes). Sn2 occurs in a single concerted step through a pentacoordinate transition state (favored by primary haloalkanes).'
    }
  ];

  return (
    <div id="chemistry-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Header */}
      <section className="relative z-10 mb-16 p-6 md:p-12">
        <SectionHeader
          badge="Advanced Chemistry Lab"
          title="Form Five & Six Advanced Chemistry"
          subtitle="Master chemical energetics, transitional complex formations, multi-step organic synthesis mechanisms, and qualitative salts. Score top grades on physical and inorganic papers."
          gradientType="cyan"
        />
      </section>

      {/* Section 1: The Chemistry Curriculum */}
      <section className="mb-16 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {curriculum.map((levelBlock, index) => (
            <GlassCard key={index} className="p-6 md:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-brand-cyan/15 rounded-xl text-brand-cyan border border-brand-cyan/20">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {levelBlock.level}
                  </h3>
                </div>

                <div className="space-y-6">
                  {levelBlock.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5 border-l-2 border-brand-cyan/20 pl-4 py-1">
                      <div>
                        <h4 className="font-display font-semibold text-white text-base">
                          {topic.title}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                          {topic.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-brand-cyan font-mono uppercase tracking-wider">
                  National Curriculum Aligned
                </span>
                <span className="text-xs text-gray-500">
                  Perfected coverage
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Interactive Organic Reaction Pathways */}
      <section className="mb-16 text-left p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-yellow font-mono uppercase tracking-widest bg-brand-yellow/10 border border-brand-yellow/20 px-3 py-1 rounded-full">
            Organic Reaction Pathway Explorer
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Interactive Multi-Step Organic Synthesis
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Click on any step of the conversion pathway below to explore reagents, physical conditions, and structural reaction mechanisms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Timeline Controls */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-wider block">
              Synthesis Progression Steps:
            </span>
            <div className="flex flex-col gap-2">
              {synthesisPathway.map((stage, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPathwayStage(idx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                    selectedPathwayStage === idx
                      ? 'border-brand-yellow bg-brand-yellow/10 text-white shadow-lg'
                      : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                      selectedPathwayStage === idx ? 'bg-brand-yellow text-brand-dark' : 'bg-white/10 text-gray-400'
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <span className="font-display font-bold text-sm block leading-tight">
                        {stage.step.split(':')[1]}
                      </span>
                      <span className="text-[10px] text-gray-500 block">
                        {stage.step.split(':')[0]}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-60" />
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chemistry Lab Panel */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-brand-yellow/20 text-brand-yellow text-[10px] font-mono px-2 py-0.5 rounded border border-brand-yellow/30">
                Synthesis Lab Sheet
              </div>

              <div>
                <span className="text-xs text-brand-yellow font-mono uppercase tracking-widest block mb-1">
                  Active Reaction Stage
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-4">
                  {synthesisPathway[selectedPathwayStage].step}
                </h3>

                {/* Pathway flowchart visual block */}
                <div className="my-6 p-5 border border-white/10 rounded-2xl bg-brand-dark-card/50 flex flex-col justify-center relative min-h-[140px]">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 w-full sm:w-auto text-center">
                      <span className="block text-[9px] text-gray-500 font-mono uppercase">Reactant</span>
                      <span className="font-display font-bold text-sm text-brand-cyan">
                        {synthesisPathway[selectedPathwayStage].reactant}
                      </span>
                    </div>

                    <div className="flex flex-col items-center flex-1">
                      <span className="text-[10px] text-brand-yellow font-mono text-center bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-0.5 rounded-full mb-1">
                        {synthesisPathway[selectedPathwayStage].reagents}
                      </span>
                      <div className="w-full h-0.5 bg-gradient-to-r from-brand-cyan via-brand-yellow to-brand-magenta relative flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow absolute"></div>
                      </div>
                      <span className="text-[9px] text-gray-500 font-mono mt-1 text-center">
                        {synthesisPathway[selectedPathwayStage].conditions}
                      </span>
                    </div>

                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 w-full sm:w-auto text-center">
                      <span className="block text-[9px] text-gray-500 font-mono uppercase">Product</span>
                      <span className="font-display font-bold text-sm text-brand-magenta">
                        {synthesisPathway[selectedPathwayStage].product}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-display font-semibold text-brand-yellow text-xs uppercase tracking-wider mb-1">
                      Mechanistic Description:
                    </h5>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {synthesisPathway[selectedPathwayStage].mechanism}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] text-gray-500 font-mono">
                  Reaction Map Stage {selectedPathwayStage + 1} of 4
                </span>
                <span className="text-xs text-brand-yellow font-mono uppercase tracking-wider flex items-center">
                  <Flame className="h-3.5 w-3.5 mr-1" />
                  Yield: High
                </span>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Interactive Titration Guide */}
      <section className="mb-16 text-left p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Volumetric Analysis Guide
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Titration pH Curves & Indicator Choice
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Select a titration category to reveal pH equivalence characteristics and select perfect indicator solutions for quantitative practicals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {(Object.keys(qualitativeTitration) as Array<keyof typeof qualitativeTitration>).map((key) => (
            <button
              key={key}
              onClick={() => setTitrationType(key)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                titrationType === key
                  ? 'border-brand-cyan bg-brand-cyan/5 text-white'
                  : 'border-white/5 bg-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <span className="font-display font-bold text-sm">
                {qualitativeTitration[key].title}
              </span>
              <span className="text-[10px] text-gray-500 mt-2 block font-mono">
                {qualitativeTitration[key].example}
              </span>
            </button>
          ))}
        </div>

        <GlassCard className="p-6 md:p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center space-x-2 text-brand-cyan">
                <FlaskConical className="h-5 w-5 animate-pulse" />
                <h4 className="font-display font-bold text-base text-white">
                  {qualitativeTitration[titrationType].title} Practical Mechanics
                </h4>
              </div>
              
              <div>
                <span className="block text-[10px] text-gray-500 font-mono uppercase mb-1">Standard Reactants</span>
                <p className="text-sm text-gray-300 font-sans">
                  {qualitativeTitration[titrationType].example}
                </p>
              </div>

              <div>
                <span className="block text-[10px] text-gray-500 font-mono uppercase mb-1">pH Curve Equivalence</span>
                <p className="text-sm text-gray-300 font-sans">
                  {qualitativeTitration[titrationType].phRange}
                </p>
              </div>
            </div>

            <div className="p-5 bg-brand-cyan/5 border border-brand-cyan/15 rounded-2xl w-full md:max-w-xs text-left">
              <h5 className="font-display font-bold text-xs text-brand-cyan uppercase tracking-widest mb-2">
                Indicator Guideline (NECTA Rubric):
              </h5>
              <p className="text-gray-300 text-xs leading-relaxed">
                {qualitativeTitration[titrationType].indicators}
              </p>
            </div>
          </div>
        </GlassCard>
      </section>

      <SectionDivider />

      {/* Section 4: Active Recall Flashcards */}
      <section className="mb-16 p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-magenta font-mono uppercase tracking-widest bg-brand-magenta/10 border border-brand-magenta/20 px-3 py-1 rounded-full">
            Active Recall Flashcards
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            High-Yield Physical & Organic Concepts
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Test your knowledge of chemistry mechanisms and quantitative principles. Click card to flip and verify your mastery.
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
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan">Verified Answer Blueprint</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans max-w-lg overflow-y-auto">
                    {activeRecallCards[activeCardIndex].a}
                  </p>

                  <span className="text-[10px] text-brand-yellow font-mono italic">
                    Correct answers secure full marks
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

      {/* Section 5: Bottom Call To Action */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-cyan bg-brand-cyan/15 border border-brand-cyan/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <ShieldCheck className="h-3.5 w-3.5 mr-1 text-brand-cyan" />
              Enrollment Is Active
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Secure An <span className="text-gradient-cyan">Excellent Grade</span> in Chemistry?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Join Digitolabs and work directly in our physical laboratories. Access chemical pathways, titrations, salt analysis schemes, and group-cation separation practical runs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-brand-magenta/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request Chemistry Lab Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/255658515833?text=Hello%20Digitolabs%20I%20want%20to%20register%20for%20Advanced%20Chemistry%20classes."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all border border-white/10 text-center block cursor-pointer"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
