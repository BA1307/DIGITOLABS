import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Laptop, Cpu, TrendingUp, Video, Clock, Award, BookOpen, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Course, PageType } from '../types';
import { courses } from '../data/courses';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import CourseMobileCarousel from '../components/CourseMobileCarousel';
import CourseCard from '../components/CourseCard';

interface CoursesProps {
  setCurrentPage: (page: PageType) => void;
}

export default function Courses({ setCurrentPage }: CoursesProps) {
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="h-6 w-6 text-brand-cyan" />;
      case 'Cpu': return <Cpu className="h-6 w-6 text-brand-magenta" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6 text-brand-blue" />;
      case 'Video': return <Video className="h-6 w-6 text-brand-violet" />;
      default: return <Laptop className="h-6 w-6 text-brand-cyan" />;
    }
  };

  const activeCourse = courses.find(c => c.id === activeCourseId);

  return (
    <div id="courses-view" className="relative pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <section className="relative z-10 mb-16 p-6 md:p-12">
        <SectionHeader
          badge="Academic Catalog"
          title="What You Will Learn"
          subtitle="Explore our industry-standard training programs. All modules are fully practical, project-centric, and directed by veteran instructors."
          gradientType="blue"
        />
      </section>

      {/* Courses List Section */}
      <section className="relative z-10 p-6 md:p-8">
        {/* Courses Flex Row Grid */}
        <div className="hidden md:flex flex-row flex-wrap justify-center gap-0 max-w-[1035px] mx-auto">
          <AnimatePresence mode="popLayout">
            {courses.map((course) => (
              <motion.div
                layout
                key={course.id}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <CourseCard
                  course={course}
                  onClick={() => setActiveCourseId(course.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Swipe-Enabled Right-to-Left Course Slider */}
        <div className="block md:hidden my-8">
          <CourseMobileCarousel
            courses={courses}
            onLearnMore={(course) => setActiveCourseId(course.id)}
            onEnroll={() => {
              setCurrentPage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          ctaText="Quick Enroll"
        />
      </div>
      </section>

      {/* Course Modules Expansion Overlay (Modal) */}
      <AnimatePresence>
        {activeCourseId && activeCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseId(null)}
              className="absolute inset-0 bg-[#050619]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-[#0b0d30] border border-white/10 max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl relative z-10 p-6 md:p-8 shadow-2xl no-scrollbar text-left"
            >
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setActiveCourseId(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Course Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl">
                  {getIcon(activeCourse.iconName)}
                </div>
                <span className="text-xs font-semibold text-brand-cyan font-mono uppercase tracking-widest">
                  Detailed Outline
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-4 pr-10 leading-tight">
                {activeCourse.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-sans">
                {activeCourse.longDescription}
              </p>

              {/* Grid Structure */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6">
                {/* Left Side: Course Syllabus / Modules */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta" />
                    <span>Weekly Syllabus (Syllabi)</span>
                  </h4>
                  <ul className="space-y-3">
                    {activeCourse.modules.map((mod, index) => (
                      <li key={index} className="flex items-start space-x-2.5 text-xs text-gray-400 leading-relaxed">
                        <span className="text-[10px] font-mono font-bold text-brand-magenta bg-brand-magenta/10 px-2 py-0.5 rounded border border-brand-magenta/10 mt-0.5">
                          0{index + 1}
                        </span>
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Audience and Benefits */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      <span>Who should enroll?</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeCourse.audience.map((aud, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-400">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-cyan flex-shrink-0 mt-0.5" />
                          <span>{aud}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-violet" />
                      <span>Strategic Outcomes</span>
                    </h4>
                    <ul className="space-y-2">
                      {activeCourse.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-gray-400">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-violet flex-shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Enroll CTA bottom */}
              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <div className="text-xs text-gray-500 font-mono">Cohort Intake</div>
                  <div className="text-sm font-semibold text-white">Enrollment Ongoing</div>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    id="modal-cancel-btn"
                    onClick={() => setActiveCourseId(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all border border-white/5 text-center cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    id="modal-enroll-btn"
                    onClick={() => {
                      setActiveCourseId(null);
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-magenta to-brand-violet text-white text-xs font-bold transition-all hover:shadow-lg hover:shadow-brand-magenta/25 text-center cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
