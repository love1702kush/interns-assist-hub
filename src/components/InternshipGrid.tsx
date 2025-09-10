import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal, MapPin, Clock } from "lucide-react";
import InternshipCard from "./InternshipCard";

const InternshipGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const mockInternships = [
    {
      title: "Prime Minister's Internship Scheme - Software Development",
      organization: "Ministry of Electronics & IT",
      location: "Delhi, Mumbai, Bangalore",
      duration: "6 months",
      stipend: "₹25,000/month",
      deadline: "Dec 30, 2024",
      eligibility: ["B.Tech/B.E.", "Computer Science", "Age 18-25"],
      description: "Work on cutting-edge government digital initiatives including digital India projects, AI/ML applications for governance, and citizen service platforms.",
      isBookmarked: true
    },
    {
      title: "Research Internship in Renewable Energy",
      organization: "Ministry of New & Renewable Energy",
      location: "Delhi, Chennai",
      duration: "4 months",
      stipend: "₹20,000/month",
      deadline: "Jan 15, 2025",
      eligibility: ["Engineering", "Renewable Energy", "Age 20-26"],
      description: "Contribute to India's renewable energy mission by working on solar, wind, and hybrid energy projects with leading researchers."
    },
    {
      title: "Digital India Fellowship Program",
      organization: "Digital India Corporation",
      location: "Pan India",
      duration: "12 months",
      stipend: "₹30,000/month",
      deadline: "Jan 05, 2025",
      eligibility: ["Graduate", "Technology", "All Ages"],
      description: "Lead digital transformation initiatives in rural and urban areas, working directly with state governments to implement digital solutions."
    },
    {
      title: "Agricultural Innovation Internship",
      organization: "Ministry of Agriculture",
      location: "Punjab, Maharashtra, Karnataka",
      duration: "3 months",
      stipend: "₹15,000/month",
      deadline: "Dec 25, 2024",
      eligibility: ["Agriculture/Biology", "Graduate", "Age 21-28"],
      description: "Work on smart farming techniques, crop monitoring systems, and agricultural technology solutions for farmers across India."
    },
    {
      title: "Space Technology Research Program",
      organization: "Indian Space Research Organisation",
      location: "Bangalore, Thiruvananthapuram",
      duration: "8 months",
      stipend: "₹35,000/month",
      deadline: "Jan 20, 2025",
      eligibility: ["Aerospace/Mechanical", "B.Tech/M.Tech", "Age 22-30"],
      description: "Participate in India's space missions, satellite development, and space exploration technologies with ISRO scientists.",
      isBookmarked: true
    },
    {
      title: "Healthcare Innovation Fellowship",
      organization: "Ministry of Health & Family Welfare",
      location: "Delhi, Mumbai, Kolkata",
      duration: "6 months",
      stipend: "₹22,000/month",
      deadline: "Dec 28, 2024",
      eligibility: ["Medicine/Biotech", "Graduate", "Age 23-29"],
      description: "Develop healthcare solutions for rural India, work on telemedicine projects, and contribute to public health initiatives."
    }
  ];

  const departments = [
    "All Departments",
    "Ministry of Electronics & IT",
    "Ministry of New & Renewable Energy", 
    "Digital India Corporation",
    "Ministry of Agriculture",
    "Indian Space Research Organisation",
    "Ministry of Health & Family Welfare"
  ];

  const locations = [
    "All Locations",
    "Delhi",
    "Mumbai", 
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Pan India"
  ];

  const filteredInternships = mockInternships.filter(internship => {
    const matchesSearch = searchTerm === "" || 
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.organization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === "" || selectedDepartment === "All Departments" ||
      internship.organization === selectedDepartment;
    
    const matchesLocation = selectedLocation === "" || selectedLocation === "All Locations" ||
      internship.location.includes(selectedLocation);

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <section id="internships" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary text-primary-foreground mb-4">
            500+ Active Schemes
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Government Internship Opportunities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover verified government internships across all ministries and departments. 
            Filter by your qualifications and interests to find the perfect match.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SlidersHorizontal className="h-5 w-5" />
              <span>Find Your Perfect Internship</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search internships..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Department Filter */}
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Advanced Filters Button */}
              <Button variant="outline" className="w-full">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">
                <MapPin className="mr-1 h-3 w-3" />
                Remote Available
              </Badge>
              <Badge variant="secondary">
                <Clock className="mr-1 h-3 w-3" />
                Flexible Duration
              </Badge>
              <Badge variant="secondary">Stipend Available</Badge>
              <Badge variant="secondary">No Experience Required</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredInternships.length} of {mockInternships.length} internships
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Select defaultValue="deadline">
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="deadline">Deadline</SelectItem>
                <SelectItem value="stipend">Stipend</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
                <SelectItem value="relevance">Relevance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Internship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship, index) => (
            <InternshipCard key={index} {...internship} />
          ))}
        </div>

        {/* Load More */}
        {filteredInternships.length >= 6 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Internships
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipGrid;