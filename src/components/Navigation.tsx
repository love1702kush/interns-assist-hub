import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, MessageCircle, User, Search, Filter } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-card shadow-card sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-primary">
              InternHub
            </div>
            <Badge variant="secondary" className="hidden sm:block">
              Government Portal
            </Badge>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#internships" className="text-foreground hover:text-primary transition-colors">
              Internships
            </a>
            <a href="#tracker" className="text-foreground hover:text-primary transition-colors">
              My Applications
            </a>
            <a href="#ai-assistant" className="text-foreground hover:text-primary transition-colors">
              AI Assistant
            </a>
            <a href="#deadlines" className="text-foreground hover:text-primary transition-colors">
              Deadlines
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-warning text-warning-foreground text-xs flex items-center justify-center p-0">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;