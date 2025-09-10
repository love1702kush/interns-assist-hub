import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  ExternalLink,
  Bell,
  TrendingUp
} from "lucide-react";

const ApplicationTracker = () => {
  const applications = [
    {
      id: 1,
      title: "Prime Minister's Internship Scheme - Software Development",
      organization: "Ministry of Electronics & IT",
      appliedDate: "Dec 10, 2024",
      deadline: "Dec 30, 2024",
      status: "Under Review",
      progress: 60,
      nextStep: "Document Verification",
      daysLeft: 5,
      documents: ["Resume", "ID Proof", "Educational Certificates"],
      statusColor: "warning"
    },
    {
      id: 2,
      title: "Space Technology Research Program",
      organization: "Indian Space Research Organisation",
      appliedDate: "Dec 08, 2024",
      deadline: "Jan 20, 2025",
      status: "Shortlisted",
      progress: 80,
      nextStep: "Interview Scheduled",
      daysLeft: 15,
      documents: ["Resume", "ID Proof", "Educational Certificates", "Portfolio"],
      statusColor: "success"
    },
    {
      id: 3,
      title: "Digital India Fellowship Program",
      organization: "Digital India Corporation",
      appliedDate: "Nov 25, 2024",
      deadline: "Jan 05, 2025",
      status: "Application Submitted",
      progress: 30,
      nextStep: "Initial Screening",
      daysLeft: 8,
      documents: ["Resume", "ID Proof"],
      statusColor: "primary"
    }
  ];

  const upcomingDeadlines = [
    {
      title: "Healthcare Innovation Fellowship",
      organization: "Ministry of Health",
      deadline: "Dec 28, 2024",
      daysLeft: 3,
      priority: "high"
    },
    {
      title: "Agricultural Innovation Internship",
      organization: "Ministry of Agriculture",
      deadline: "Dec 25, 2024",
      daysLeft: 0,
      priority: "urgent"
    },
    {
      title: "Digital India Fellowship",
      organization: "Digital India Corporation",
      deadline: "Jan 05, 2025",
      daysLeft: 8,
      priority: "medium"
    }
  ];

  const getStatusBadgeVariant = (color: string) => {
    switch (color) {
      case 'success':
        return 'default';
      case 'warning':
        return 'secondary';
      case 'primary':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-destructive';
      case 'high':
        return 'text-warning';
      case 'medium':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <section id="tracker" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="bg-success text-success-foreground mb-4">
            <TrendingUp className="mr-2 h-4 w-4" />
            Track Progress
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Application Tracker & Deadlines
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Monitor your application progress, get deadline reminders, and never miss an opportunity.
            Stay organized with our comprehensive tracking system.
          </p>
        </div>

        <Tabs defaultValue="applications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="deadlines">Upcoming Deadlines</TabsTrigger>
          </TabsList>

          <TabsContent value="applications" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Total Applications</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-success mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Shortlisted</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-warning mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Under Review</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-muted-foreground mb-1">1</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </CardContent>
              </Card>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
              {applications.map((app) => (
                <Card key={app.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{app.title}</CardTitle>
                        <p className="text-muted-foreground">{app.organization}</p>
                      </div>
                      <Badge variant={getStatusBadgeVariant(app.statusColor)}>
                        {app.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Application Progress</span>
                        <span className="font-medium">{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Applied: {app.appliedDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Deadline: {app.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-warning" />
                        <span>{app.daysLeft} days left</span>
                      </div>
                    </div>

                    {/* Next Step */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="font-medium text-sm">Next Step:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{app.nextStep}</p>
                    </div>

                    {/* Documents */}
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Submitted Documents:</span>
                      <div className="flex flex-wrap gap-2">
                        {app.documents.map((doc, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            <FileText className="mr-1 h-3 w-3" />
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bell className="mr-2 h-4 w-4" />
                        Set Reminder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deadlines" className="space-y-6">
            {/* Deadline Alerts */}
            <Card className="border-warning shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-warning">
                  <AlertCircle className="h-5 w-5" />
                  <span>Urgent Deadlines</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{deadline.title}</h4>
                        <p className="text-sm text-muted-foreground">{deadline.organization}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">Deadline: {deadline.deadline}</div>
                        <div className={`text-sm font-bold ${getPriorityColor(deadline.priority)}`}>
                          {deadline.daysLeft === 0 ? 'Today!' : `${deadline.daysLeft} days left`}
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="ml-4">
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendar View */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Deadline Calendar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {/* Calendar Header */}
                  <div className="font-medium text-muted-foreground">Sun</div>
                  <div className="font-medium text-muted-foreground">Mon</div>
                  <div className="font-medium text-muted-foreground">Tue</div>
                  <div className="font-medium text-muted-foreground">Wed</div>
                  <div className="font-medium text-muted-foreground">Thu</div>
                  <div className="font-medium text-muted-foreground">Fri</div>
                  <div className="font-medium text-muted-foreground">Sat</div>

                  {/* Calendar Days */}
                  {[...Array(31)].map((_, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded ${
                        i + 1 === 25 || i + 1 === 28 || i + 1 === 30
                          ? 'bg-warning text-warning-foreground font-bold'
                          : 'hover:bg-muted/50'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <span className="inline-block w-3 h-3 bg-warning rounded mr-2"></span>
                    Highlighted dates have application deadlines
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ApplicationTracker;