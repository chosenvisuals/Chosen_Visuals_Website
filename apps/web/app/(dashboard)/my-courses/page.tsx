import { CourseCard } from "@/components/CourseCard";
import { LayoutGrid } from "lucide-react";

export default function MyCoursesPage() {
  return (
    <div className="max-w-6xl flex flex-col gap-8 pb-12">
      {/* Header Area */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">My Courses</h1>
          <p className="text-gray-500 text-sm">Continue learning and achieve your goals.</p>
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-600 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 font-medium transition-colors">
          <LayoutGrid className="w-4 h-4" />
          Browse All Courses
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-gray-200">
        <button className="text-[#0052FF] border-b-2 border-[#0052FF] pb-3 text-sm font-semibold">All Courses</button>
        <button className="text-gray-500 hover:text-gray-900 pb-3 text-sm font-medium transition-colors">In Progress</button>
        <button className="text-gray-500 hover:text-gray-900 pb-3 text-sm font-medium transition-colors">Completed</button>
        <button className="text-gray-500 hover:text-gray-900 pb-3 text-sm font-medium transition-colors">Saved</button>
        <button className="text-gray-500 hover:text-gray-900 pb-3 text-sm font-medium transition-colors">Wishlist</button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CourseCard 
          title="UI/UX Design Masterclass"
          subtitle="Lesson 12 of 48 • 32h 30m left"
          status="In Progress"
          progress={68}
          imageSrc="/images/course_ui_ux_1785425281646.png"
          href="/courses/ui-ux"
        />
        <CourseCard 
          title="Video Production Fundamentals"
          subtitle="Live Class • Today, 2:00 PM"
          status="Live Class"
          progress={0}
          imageSrc="/images/course_video_1785425292925.png"
          href="/courses/video-prod"
          instructor={{ name: "Maryam Y." }}
        />
        <CourseCard 
          title="Brand Identity Design"
          subtitle="Completed on May 10, 2024"
          status="Completed"
          progress={100}
          imageSrc="/images/course_brand_1785425303878.png"
          href="/courses/brand"
        />
        <CourseCard 
          title="Motion Graphics Basics"
          subtitle="Lesson 8 of 30 • 12h 40m left"
          status="In Progress"
          progress={34}
          imageSrc="/images/course_motion_1785425314462.png"
          href="/courses/motion"
        />
      </div>

      {/* My Learning Path placeholder */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 mb-2">My Learning Path</h2>
        <p className="text-sm text-gray-500 mb-6">Track your progress and stay on top of your learning journey.</p>
        
        {/* We will build the LearningPathStepper component next! */}
        <div className="h-24 border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 bg-gray-50/50">
          Learning Path Stepper (Coming Next)
        </div>
      </div>
    </div>
  );
}
