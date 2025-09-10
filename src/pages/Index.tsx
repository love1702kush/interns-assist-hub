import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InternshipGrid from "@/components/InternshipGrid";
import ChatBot from "@/components/ChatBot";
import ApplicationTracker from "@/components/ApplicationTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <InternshipGrid />
      <ChatBot />
      <ApplicationTracker />
    </div>
  );
};

export default Index;
