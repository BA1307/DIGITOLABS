import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
  className?: string;
}

export default function CourseCard({ course, onClick, className = '' }: CourseCardProps) {
  const fallbackImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800';

  return (
    <div
      onClick={onClick}
      className={`relative w-full h-[400px] sm:h-[420px] rounded-2xl overflow-hidden group border border-white/15 shadow-xl cursor-pointer bg-slate-900 transition-all duration-300 ${className}`}
    >
      {/* Background Image */}
      <img
        src={course.imageUrl || fallbackImage}
        alt={course.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10 transition-opacity duration-300 group-hover:via-black/65" />

      {/* Card Content - Shifts upward on hover */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-350 ease-in-out transform group-hover:-translate-y-16">
        {/* Course Duration / Level Badge */}
        <div className="flex justify-between items-center mb-2.5 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-wider font-semibold font-mono text-brand-cyan">
            {course.duration}
          </span>
          <span className="text-[10px] uppercase tracking-wider font-semibold font-mono text-gray-300">
            {course.skillLevel}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-sans font-extrabold text-xl sm:text-2xl uppercase text-white text-left tracking-tight mb-2 leading-tight">
          {course.title}
        </h3>

        {/* Divider line exactly like the photo */}
        <div className="border-t border-white/20 my-3" />

        {/* Instructor & Rating Info Row */}
        <div className="flex justify-between items-center text-sm text-white/95 font-medium">
          <div className="flex items-center space-x-1.5">
            {/* User Avatar Circle */}
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
              <svg className="w-3.5 h-3.5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <span>{course.instructorName || 'Instructor'}</span>
          </div>

          <div className="flex items-center space-x-1">
            {/* Rating Star */}
            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold">{course.rating || '4.8'}</span>
            <span className="text-white/60 text-xs">({course.ratingCount || '120'})</span>
          </div>
        </div>
      </div>

      {/* Slide-Up Course Detail Button block exactly like the photo */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-in-out z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="w-[85%] bg-blue-600 text-white font-semibold text-xs py-3 px-4 rounded-none tracking-wider uppercase hover:bg-blue-700 active:scale-[0.98] transition-all cursor-pointer text-center"
        >
          Course Detail
        </button>
      </div>
    </div>
  );
}
