import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, ExternalLink, Bookmark } from "lucide-react";

interface InternshipCardProps {
  title: string;
  organization: string;
  location: string;
  duration: string;
  stipend: string;
  deadline: string;
  eligibility: string[];
  description: string;
  isBookmarked?: boolean;
}

const InternshipCard = ({
  title,
  organization,
  location,
  duration,
  stipend,
  deadline,
  eligibility,
  description,
  isBookmarked = false,
}: InternshipCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-elevated transition-all duration-300 bg-gradient-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-muted-foreground font-medium">{organization}</p>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current text-warning' : ''}`} />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {eligibility.slice(0, 2).map((criteria, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {criteria}
            </Badge>
          ))}
          {eligibility.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{eligibility.length - 2} more
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-success font-medium">{stipend}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-destructive font-medium">{deadline}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 space-x-2">
        <Button variant="hero" className="flex-1">
          <ExternalLink className="mr-2 h-4 w-4" />
          Apply Now
        </Button>
        <Button variant="outline">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;