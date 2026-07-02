import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, CheckCircle, GraduationCap, ArrowRight, Brain, Clock, ShieldCheck, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 opacity-80">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

interface BiologyProps {
  setCurrentPage?: (page: PageType) => void;
}

export default function Biology({ setCurrentPage }: BiologyProps) {
  // Specimen selection for practical simulator
  const [selectedSpecimen, setSelectedSpecimen] = useState<'amoeba' | 'dicot' | 'nephron'>('amoeba');
  
  // Magnification calculator state
  const [eyepiece, setEyepiece] = useState<number>(10);
  const [objective, setObjective] = useState<number>(40);

  // Active recall card index
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  const curriculum = [
    {
      level: 'Form Five Biology Syllabus',
      topics: [
        { title: 'Cytology & Cell Biology', desc: 'Detailed exploration of organelle ultrastructure, membrane dynamics, and fluid mosaic representations.' },
        { title: 'Principles of Classification', desc: 'Taxonomy of key kingdoms (Monera, Protoctista, Fungi, Plantae, Animalia) with exact taxonomic keys.' },
        { title: 'Biochemistry of Biomolecules', desc: 'Structural formulas of carbohydrates, proteins, lipids, peptide bonding mechanisms, and enzyme kinetics.' },
        { title: 'Ecology & Ecosystems', desc: 'Energy flow kinetics, biogeochemical cycling, population ecology, and conservation biochemistry.' }
      ]
    },
    {
      level: 'Form Six Biology Syllabus',
      topics: [
        { title: 'Human & Plant Physiology', desc: 'Detailed gas exchange, double circulation pathways, autonomic coordination, and kidney counter-current multipliers.' },
        { title: 'Genetics & Molecular Biology', desc: 'Mendelian inheritance, non-Mendelian linkages, protein synthesis transcripts, and recombinant DNA technology.' },
        { title: 'Reproduction & Development', desc: 'Gametogenesis, hormonal control loops in plants and animals, and early embryonic differentiation.' },
        { title: 'Evolutionary Biology', desc: 'Lamarckian vs Darwinian mechanisms, neo-Darwinism, speciation, and biochemical evidence of evolution.' }
      ]
    }
  ];

  const biologicalSpecimens = {
    amoeba: {
      name: 'Amoeba proteus (Protoctista)',
      keyFeatures: [
        'Unicellular, asymmetrical body layout showing dynamic pseudopodia.',
        'Presence of a clear contractile vacuole for water balance (osmoregulation).',
        'Distinct dark nucleus and granulated endoplasm/clear ectoplasm boundary.'
      ],
      drawingTip: 'Draw with light, irregular stippled lines. Never make pseudopodia look perfectly spherical or symmetrical.',
      labeling: ['Pseudopodium', 'Contractile Vacuole', 'Nucleus', 'Food Vacuole', 'Ectoplasm']
    },
    dicot: {
      name: 'Dicotyledonous Stem (T.S.)',
      keyFeatures: [
        'Vascular bundles arranged in a distinct concentric ring pattern.',
        'Presence of cambium layer separating xylem and phloem vessels.',
        'Well-developed central pith and narrow cortical layer.'
      ],
      drawingTip: 'Ensure vascular bundle wedges align symmetrically along the perimeter. Label xylem elements inside and phloem outside.',
      labeling: ['Epidermis', 'Cortex', 'Phloem', 'Cambium', 'Xylem', 'Pith']
    },
    nephron: {
      name: 'Mammalian Nephron Structure',
      keyFeatures: [
        'Bowman’s capsule enclosing the dense capillary network (glomerulus).',
        'Proximal convoluted tubule (PCT) with highly folded brush border membranes.',
        'Descending and ascending loops of Henle running deep into the medulla.'
      ],
      drawingTip: 'Show capillary walls thin and simple, while convoluted tubules must have distinct cellular lining indicators.',
      labeling: ['Glomerulus', 'Bowman’s Capsule', 'PCT', 'Loop of Henle', 'DCT', 'Collecting Duct']
    }
  };

  const activeRecallCards = [
    {
      q: 'What is the role of the counter-current multiplier system in the Loop of Henle?',
      a: 'It establishes a steep hypertonic osmotic gradient in the medullary interstitium, allowing the collecting duct to actively reabsorb water via aquaporins under ADH control.'
    },
    {
      q: 'How does carbon dioxide transport occur in Mammalian blood?',
      a: 'Primarily as bicarbonate ions (70%) generated via carbonic anhydrase in erythrocytes, bound to hemoglobin as carbaminohemoglobin (20%), and dissolved in plasma (10%).'
    },
    {
      q: 'Explain the difference between sympatric and allopatric speciation.',
      a: 'Allopatric speciation is triggered by geographic isolation (physical barriers), while sympatric speciation occurs within the same geographic area due to genetic, behavioral, or ecological barriers.'
    },
    {
      q: 'What are the three main steps of translation in protein synthesis?',
      a: '1. Initiation (ribosomal binding to mRNA at AUG codon), 2. Elongation (peptide bond linkage between tRNAs at A and P sites), and 3. Termination (release factors bind stop codons).'
    }
  ];

  return (
    <div id="biology-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Header */}
      <section className="relative z-10 mb-16 p-6 md:p-12">
        <SectionHeader
          badge="Advanced Science Lab"
          title="Form Five & Six Advanced Biology"
          subtitle="Master the complexity of cellular structures, biochemical pathways, human physiology, and practical specimens. Gain high national ranking marks through fully structured reviews."
          gradientType="lime"
        />
      </section>

      {/* Section 1: The Biology Curriculum */}
      <section className="mb-16 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {curriculum.map((levelBlock, index) => (
            <GlassCard key={index} className="p-6 md:p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-brand-magenta/15 rounded-xl text-brand-magenta border border-brand-magenta/20">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {levelBlock.level}
                  </h3>
                </div>

                <div className="space-y-6">
                  {levelBlock.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-start space-x-3.5 border-l-2 border-brand-magenta/20 pl-4 py-1">
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
                <span className="text-xs text-brand-magenta font-mono uppercase tracking-wider">
                  National Syllabus Compliant
                </span>
                <span className="text-xs text-gray-500">
                  Fully covered
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: Interactive Specimen & Drawing Lab */}
      <section className="mb-16 text-left p-6 md:p-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-brand-cyan font-mono uppercase tracking-widest bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
            Practical Specimen Interactive Guide
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3">
            Specimen Drawing & Analysis Laboratory
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Perfect your specimen biological drawings (Paper 3). Learn critical features, drawing rules, and magnification scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls & Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider block">
                Select Study Specimen:
              </span>
              <div className="flex flex-col gap-2">
                {(Object.keys(biologicalSpecimens) as Array<keyof typeof biologicalSpecimens>).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSpecimen(key)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      selectedSpecimen === key
                        ? 'border-brand-cyan bg-brand-cyan/10 text-white shadow-lg'
                        : 'border-white/5 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Eye className={`h-5 w-5 ${selectedSpecimen === key ? 'text-brand-cyan' : 'text-gray-500'}`} />
                      <span className="font-display font-bold text-sm">
                        {biologicalSpecimens[key].name}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Magnification Tool */}
            <GlassCard className="p-5 border border-white/5 bg-white/2">
              <div className="flex items-center space-x-2 text-brand-cyan mb-4">
                <ZoomIn className="h-5 w-5" />
                <h4 className="font-display font-semibold text-sm">Linear Magnification Tool</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Calculate drawing magnification correctly: <code className="text-brand-yellow font-mono text-[10px]">Mag = Drawing Size / Actual Size</code>.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] text-gray-500 font-mono uppercase mb-1">Eyepiece Lens</label>
                  <select
                    value={eyepiece}
                    onChange={(e) => setEyepiece(Number(e.target.value))}
                    className="w-full bg-[#0d0e2c] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none"
                  >
                    <option value={10}>10x</option>
                    <option value={15}>15x</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 font-mono uppercase mb-1">Objective Lens</label>
                  <select
                    value={objective}
                    onChange={(e) => setObjective(Number(e.target.value))}
                    className="w-full bg-[#0d0e2c] border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none"
                  >
                    <option value={10}>10x (Low)</option>
                    <option value={40}>40x (High)</option>
                    <option value={100}>100x (Oil)</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 p-3 bg-brand-dark rounded-lg flex justify-between items-center border border-white/5">
                <span className="text-xs text-gray-400 font-medium">Total Microscopic Magnification:</span>
                <span className="text-sm font-mono font-bold text-brand-yellow">
                  {eyepiece * objective}x
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Rendering Box */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute top-3 right-3 bg-brand-cyan/20 text-brand-cyan text-[10px] font-mono px-2 py-0.5 rounded border border-brand-cyan/30">
                Interactive Viewer
              </div>
              
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {biologicalSpecimens[selectedSpecimen].name}
                </h3>
                
                <div className="my-6 border border-white/10 rounded-2xl p-4 bg-brand-dark-card/50 flex flex-col items-center justify-center min-h-[220px]">
                  {selectedSpecimen === 'amoeba' && (
                    <div className="relative w-44 h-44 bg-brand-cyan/5 border-2 border-dashed border-brand-cyan/20 rounded-full flex items-center justify-center animate-pulse">
                      <div className="w-36 h-28 bg-brand-cyan/10 rounded-full border border-brand-cyan/40 relative transform rotate-12">
                        {/* Nucleus */}
                        <div className="absolute top-10 left-12 w-6 h-6 bg-brand-magenta/40 border border-brand-magenta rounded-full"></div>
                        {/* Vacuole */}
                        <div className="absolute top-4 right-10 w-8 h-8 bg-brand-blue/30 border border-brand-blue/50 rounded-full flex items-center justify-center text-[8px] font-mono">CV</div>
                        {/* Pseudopodia lines */}
                        <div className="absolute -left-3 top-8 w-6 h-6 bg-brand-cyan/10 rounded-full border-t border-brand-cyan/30"></div>
                      </div>
                    </div>
                  )}

                  {selectedSpecimen === 'dicot' && (
                    <div className="relative w-44 h-44 bg-brand-magenta/5 border border-dashed border-brand-magenta/20 rounded-full flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border-2 border-brand-magenta/30 flex items-center justify-center relative">
                        {/* Concentric rings represent vascular bundles */}
                        <div className="w-28 h-28 rounded-full border-2 border-brand-cyan/30 border-dashed flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-brand-yellow/10 border border-brand-yellow/20"></div>
                        </div>
                        {/* Vascular wedges */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                          <div
                            key={idx}
                            style={{ transform: `rotate(${angle}deg) translateY(-60px)` }}
                            className="absolute w-3 h-5 bg-brand-magenta/30 border border-brand-magenta rounded-sm"
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedSpecimen === 'nephron' && (
                    <div className="relative w-44 h-44 bg-brand-yellow/5 border border-dashed border-brand-yellow/20 rounded-full flex items-center justify-center">
                      <div className="w-36 h-28 flex flex-col items-center justify-center space-y-2 relative">
                        {/* Bowman Capsule representation */}
                        <div className="w-16 h-16 rounded-full border-2 border-brand-yellow/50 flex items-center justify-center relative">
                          <div className="w-10 h-10 rounded-full bg-brand-magenta/30 border border-brand-magenta animate-pulse"></div>
                        </div>
                        {/* Loop representation */}
                        <div className="w-4 h-16 border-l-2 border-r-2 border-brand-cyan/40 rounded-b-full"></div>
                      </div>
                    </div>
                  )}

                  <span className="text-[10px] text-gray-500 font-mono mt-4">
                    Schematic representation of cell/tissue architecture
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="font-display font-semibold text-brand-yellow text-xs uppercase tracking-wider mb-1.5">
                      Identifying Criteria:
                    </h5>
                    <ul className="space-y-1">
                      {biologicalSpecimens[selectedSpecimen].keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-300">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-brand-yellow/5 border border-brand-yellow/10 rounded-xl">
                    <h5 className="font-display font-semibold text-brand-yellow text-xs mb-1">
                      Official Drawing Guideline (NECTA Standards):
                    </h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {biologicalSpecimens[selectedSpecimen].drawingTip}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mr-2 self-center">
                  Required Labels:
                </span>
                {biologicalSpecimens[selectedSpecimen].labeling.map((lab, i) => (
                  <span key={i} className="bg-white/5 border border-white/5 text-gray-400 text-[10px] font-mono px-2 py-0.5 rounded-md">
                    {lab}
                  </span>
                ))}
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
            High-Yield Concept Active Recall
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Test your knowledge of biological mechanisms and definitions. Click card to flip and verify your mastery.
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

      {/* Section 4: Bottom Call To Action */}
      <section className="max-w-5xl mx-auto py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-flex items-center space-x-1 text-xs text-brand-magenta bg-brand-magenta/15 border border-brand-magenta/30 px-3 py-1 rounded-full uppercase tracking-widest font-mono">
              <ShieldCheck className="h-3.5 w-3.5 mr-1 text-brand-magenta" />
              Enrollment Is Active
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Secure An <span className="text-gradient-lime">Excellent Grade</span> in Biology?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Join Digitolabs and work directly in our physical laboratories. Access microscope setups, interactive study aids, past-paper essay keys, and dedicated biological drawing seminars.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white font-semibold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg hover:shadow-brand-magenta/20 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Request Laboratory Walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/255658515833?text=Hello%20Digitolabs%20I%20want%20to%20register%20for%20Advanced%20Biology%20classes."
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
