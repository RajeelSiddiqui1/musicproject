import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses"
import WhyChooseUs from "@/components/WhyChooseUs"
import MusicSchoolTestimonials from "@/components/TestimonialCards"
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <h1 className="text-3xl text-center">
     <HeroSection/>
     <FeatureCourses/>
     <WhyChooseUs/>
     <MusicSchoolTestimonials/>
     <UpcomingWebinars/>
     <Instructors/>
     <Footer/>
    </h1>
   </main>
  );
}
