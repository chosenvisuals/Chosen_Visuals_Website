import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Video, Award } from "lucide-react";

interface CourseCardProps {
  title: string;
  subtitle: string;
  status: "In Progress" | "Live Class" | "Completed";
  progress: number;
  imageSrc: string;
  href: string;
  instructor?: { name: string; avatar?: string };
}

export function CourseCard({ title, subtitle, status, progress, imageSrc, href, instructor }: CourseCardProps) {
  // Determine badge styling based on status
  const badgeColors = {
    "In Progress": "bg-[#0052FF] text-white",
    "Live Class": "bg-[#F8A328] text-white",
    "Completed": "bg-green-600 text-white",
  };

  const actionText = {
    "In Progress": "Continue Learning",
    "Live Class": "Join Class",
    "Completed": "Review Certificate",
  };

  const ActionIcon = {
    "In Progress": ArrowRight,
    "Live Class": Video,
    "Completed": Award,
  }[status];

  // For the circular progress SVG
  const circleRadius = 36;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      
      {/* Thumbnail Section */}
      <div className="relative h-48 w-full overflow-hidden bg-[#000d26]">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
        />
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 text-[11px] font-bold rounded-md ${badgeColors[status]}`}>
          {status}
        </div>

        {/* Circular Progress Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center w-24 h-24 bg-black/40 rounded-full backdrop-blur-sm border border-white/10">
            {/* SVG Circle Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                className="text-white/20 stroke-current"
                strokeWidth="4"
                cx="50"
                cy="50"
                r={circleRadius}
                fill="transparent"
              />
              <circle
                className={`${status === 'Completed' ? 'text-green-500' : 'text-white'} stroke-current transition-all duration-1000 ease-out`}
                strokeWidth="4"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r={circleRadius}
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>
            <span className="text-white font-bold text-sm tracking-wider">{progress}%</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-4 font-medium">{subtitle}</p>

        {/* Linear Progress Bar */}
        <div className="w-full bg-gray-100 h-1.5 rounded-full mb-5 overflow-hidden">
          <div 
            className={`h-full rounded-full ${status === 'Completed' ? 'bg-green-500' : 'bg-[#0052FF]'}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Footer / Action */}
        <div className="mt-auto flex items-center justify-between pt-2">
          {instructor && status === "Live Class" ? (
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                <Image src="/logo.png" alt={instructor.name} width={24} height={24} className="object-cover" />
              </div>
              <span className="text-xs font-medium text-gray-600">{instructor.name}</span>
            </div>
          ) : (
            <div /> // Empty div to push button to the right if no instructor
          )}
          
          <Link 
            href={href} 
            className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
              status === 'Completed' ? 'text-green-600 hover:text-green-700' : 'text-[#0052FF] hover:text-blue-700'
            }`}
          >
            {actionText[status]}
            <ActionIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
