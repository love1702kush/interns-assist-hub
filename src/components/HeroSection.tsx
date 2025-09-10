import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, Users, Award, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-internship.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Students working on internships" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-secondary text-secondary-foreground mb-4">
                🇮🇳 Government Verified
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Gateway to 
                <span className="text-secondary"> Government Internships</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl">
                Discover, apply, and track all government internship schemes in one place. 
                Get AI-powered guidance and never miss a deadline again.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="text-lg">
                <Search className="mr-2 h-5 w-5" />
                Explore Internships
              </Button>
              <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                <Users className="mr-2 h-5 w-5" />
                Ask AI Assistant
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-primary-foreground/70">Active Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-primary-foreground/70">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-primary-foreground/70">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-lg p-3">
                  <Filter className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Smart Eligibility Filters</h3>
                  <p className="text-primary-foreground/70">
                    Find internships that match your qualifications, location, and interests instantly.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-lg p-3">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">AI-Powered Guidance</h3>
                  <p className="text-primary-foreground/70">
                    Get step-by-step application help and personalized recommendations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/10 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-success rounded-lg p-3">
                  <TrendingUp className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Application Tracking</h3>
                  <p className="text-primary-foreground/70">
                    Monitor your applications and get deadline reminders automatically.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <div className="w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20">
        <div className="w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;