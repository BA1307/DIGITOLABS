import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Brain, CheckCircle, Clock, Cpu, Star, Users, Zap } from 'lucide-react';
import { PageType } from '../types';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import { courses } from '../data/courses';
import CourseMobileCarousel from '../components/CourseMobileCarousel';
import CourseCard from '../components/CourseCard';

const AnimatedCounter = ({ value, duration = 1.8 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let active = true;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && active) {
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * value));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(value);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
};

interface HomeProps {
  setCurrentPage: (page: PageType) => void;
}

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 opacity-80">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default function Home({ setCurrentPage }: HomeProps) {
  const featuredCourses = courses.slice(0, 3);

  const stats = [
    { isNumeric: true, value: 49000, suffix: '+', label: 'Monthly Visitors', desc: 'Active learners engaging on our platform' },
    { isNumeric: true, value: 25000, suffix: '+', label: 'Social Followers', desc: 'Across our digital community channels' },
  ];

  const problemCards = [
    {
      title: 'The Digital Skills Gap',
      desc: 'Traditional education struggles to keep pace with rapid technological shifts, leaving a mismatch between academic curricula and actual job market requirements.',
      icon: Cpu,
      color: 'from-brand-magenta to-brand-violet'
    },
    {
      title: 'Employability Risks',
      desc: 'Modern businesses require workers who are already proficient in digital tools, collaborative cloud workspaces, and content strategy, making entry-level positions hard to secure.',
      icon: Users,
      color: 'from-brand-violet to-brand-blue'
    },
    {
      title: 'Stagnant Productivity',
      desc: 'Without modern workflow solutions and strategic Artificial Intelligence engineering, individuals waste hours daily on repetitive tasks that could easily be streamlined.',
      icon: Zap,
      color: 'from-brand-blue to-brand-cyan'
    }
  ];

  const whyChooseUs = [
    { title: 'Physical & Online Flexibility', desc: 'Learn in our modern DIGITOLABS classroom facilities in Dar es Salaam or join our live interactive online streams.' },
    { title: 'Project-Authoritative Curriculum', desc: 'No boring theories. You build real campaigns, design vector layouts, and build functional AI workflow models from day one.' },
    { title: 'NECTA Exam Specialization', desc: 'In-depth, academic instruction in A-Level Chemistry and Biology, tailored specifically for top national performance.' },
    { title: 'Active Industry Instructors', desc: 'Learn from active digital marketers, founders, and expert science educators who know what actually gets results.' }
  ];

  const testimonials = [
    {
      name: 'Amos Mwita',
      role: 'Operations Coordinator',
      quote: 'The AI & Productivity tools course completely changed how I manage my daily schedules. I optimized my workplace tasks and saved close to 15 hours every single week!',
      rating: 5,
      course: 'AI & Productivity Tools'
    },
    {
      name: 'Sabrina Kassim',
      role: 'Content Specialist',
      quote: 'I secured a remote social media marketing role just two weeks after completing the Content Creation course at DIGITOLABS. The hands-on vector designs and video editing projects prepared me perfectly.',
      rating: 5,
      course: 'Content Creation & Social Media Skills'
    }
  ];

  return (
    <div id="home-view" className="relative pt-24 md:pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <section id="hero-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 py-12 md:py-20 px-6 md:px-12">
        <div className="relative">
          {/* Hero Content */}
          <div className="space-y-8 text-center max-w-3xl mx-auto flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Jifunze Computer <br className="hidden sm:inline" />
              &{' '}
              <span className="text-gradient-sunset">
                Akili Bandia (AI)
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed mx-auto"
            >
              DIGITOLABS is the place where you can Master Practical Skills how to use Computer to Ease your daily activities.
            </motion.p>

            {/* Micro Authority Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 pt-10 border-t border-white/10 w-full max-w-2xl mx-auto"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2 text-center">
                  <div className="font-display font-black text-3xl sm:text-4xl text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-cyan">
                    {stat.isNumeric ? (
                      <>
                        <AnimatedCounter value={stat.value} />
                        <span>{stat.suffix}</span>
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-gray-200">{stat.label}</div>
                  <div className="text-xs text-gray-400 leading-tight hidden sm:block">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Glowing decorative backdrop shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-cyan/15 rounded-full blur-[80px] -z-10 pointer-events-none" />
        </div>
      </section>

      <SectionDivider />

      {/* The Problem We Solve Section */}
      <section id="problem-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 py-12 md:py-16 px-6 md:px-12">
        <SectionHeader
          title="The Educational Bottleneck and Why It Matters"
          subtitle="Tanzanian industries are advancing faster than standard training platforms. We bridge this disconnect directly with skillsets designed to maximize productivity."
          gradientType="coral"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard className="h-full flex flex-col items-start text-left hover:border-white/10 group">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white mb-6 shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Featured Courses Teaser Section */}
      <section id="featured-courses-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 py-12 md:py-16 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              What You <span className="text-gradient-cyan">Will Learn</span>
            </h2>
          </div>
          <button
            onClick={() => {
              setCurrentPage('courses');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-4 md:mt-0 group flex items-center space-x-1 text-sm font-semibold text-brand-cyan hover:text-white transition-all cursor-pointer"
          >
            <span>View all courses</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Desktop View Flex Grid */}
        <div className="hidden md:flex flex-row flex-wrap justify-center gap-0 max-w-[1035px] mx-auto">
          {featuredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CourseCard
                course={course}
                onClick={() => {
                  setCurrentPage('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider with progress dots and swipe-left animations */}
        <CourseMobileCarousel
          courses={featuredCourses}
          onEnroll={() => {
            setCurrentPage('courses');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          ctaText="Learn More"
        />
      </section>

      <SectionDivider />

      {/* Why Choose Us Section */}
      <section id="why-choose-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 py-12 md:py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              A Modern Infrastructure Engineered for{' '}
              <span className="text-gradient-blue">Professional Success.</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We do not rely on standard outdated slides. Our courses are fully localized, continually updated to match the highest industry benchmarks, and directed by certified tech leads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-left">
                  <CheckCircle className="h-5 w-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical Representation or Accents */}
          <div className="relative">
            <GlassCard className="p-8 text-left border border-white/10 !bg-brand-dark/50 relative overflow-hidden">
              <h3 className="font-display text-2xl font-bold text-white mb-4">The DIGITOLABS Standard</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                By focusing purely on high-intensity practical workshops, our students achieve fluency in modern tools faster than standard college programs.
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-gray-300">
                  <span>Hands-on Live Labs Practice</span>
                  <span className="font-mono text-brand-cyan font-bold">85%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-magenta to-brand-cyan rounded-full w-[85%]" />
                </div>

                <div className="flex justify-between items-center text-xs text-gray-300">
                  <span>AI Modeling & Application</span>
                  <span className="font-mono text-brand-magenta font-bold">90%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-violet to-brand-magenta rounded-full w-[90%]" />
                </div>

                <div className="flex justify-between items-center text-xs text-gray-300">
                  <span>Curriculum Up-to-date Speed</span>
                  <span className="font-mono text-brand-violet font-bold">100%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full w-[100%]" />
                </div>
              </div>
            </GlassCard>

            {/* Glowing backgrounds */}
            <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-brand-magenta/15 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Advanced Science Labs Section */}
      <section id="science-labs-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 md:mb-32 text-center py-12 md:py-16 px-6 md:px-12">
        <SectionHeader
          title="Form Five & Six Advanced Sciences"
          subtitle="Explore our highly specialized academic programs for Advanced Level Biology and Chemistry with direct hands-on laboratory experiments."
          gradientType="sunset"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 text-left">
          <GlassCard className="p-6 sm:p-8 border border-white/10 hover:border-brand-magenta transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-brand-magenta/15 rounded-xl text-brand-magenta border border-brand-magenta/20">
                  <Brain className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Biology Academy</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Master cytology, human physiology systems, organic biochemistry, genetics, and standard microscopic specimen drawing techniques to secure perfect national rankings.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('biology');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 bg-brand-magenta/10 hover:bg-brand-magenta/20 text-brand-magenta text-xs font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer inline-flex items-center space-x-2 self-start border border-brand-magenta/20"
            >
              <span>Explore Biology Program</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </GlassCard>

          <GlassCard className="p-6 sm:p-8 border border-white/10 hover:border-brand-cyan transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-brand-cyan/15 rounded-xl text-brand-cyan border border-brand-cyan/20">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">Chemistry Academy</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                Examine multi-step organic reaction pathways, volumetric back-titrations, chemical energetics, period 3 element transitions, and qualitative salt analysis formulas.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('chemistry');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan text-xs font-semibold py-2.5 px-4 rounded-xl transition-all cursor-pointer inline-flex items-center space-x-2 self-start border border-brand-cyan/20"
            >
              <span>Explore Chemistry Program</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </GlassCard>
        </div>
      </section>

      <SectionDivider />

      {/* Final Call to Action */}
      <section id="cta-section" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
        <div className="relative p-8 sm:p-12 md:p-16 text-center">
          {/* Glowing element inside CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-cyan/25 rounded-full blur-[90px] -z-10" />
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brand-magenta/25 rounded-full blur-[60px] -z-10" />

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-2xl mx-auto">
            Ready to Accelerate Your <span className="text-gradient-orange">Career Path?</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Reserve your seat for the upcoming cohort and secure your career competitive advantage today.
          </p>

          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="glow-btn bg-gradient-to-r from-brand-magenta to-brand-violet hover:from-brand-violet hover:to-brand-magenta text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-brand-magenta/25 inline-flex items-center space-x-2 cursor-pointer"
          >
            <span>Register Your Interest</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
