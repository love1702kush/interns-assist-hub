import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles, MessageCircle } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm your AI internship assistant. I can help you find internships, understand eligibility criteria, guide you through applications, and answer any questions about government schemes. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "What internships am I eligible for?",
    "How do I apply for PM Internship Scheme?",
    "What documents do I need?",
    "Show me tech internships",
    "Deadline reminders for this week"
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput("");
  };

  const generateBotResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('eligible') || lowerInput.includes('qualification')) {
      return "Based on your profile, I can help you find eligible internships. Could you tell me:\n\n• Your current education level?\n• Your field of study?\n• Preferred location?\n• Any specific government department interest?\n\nThis will help me recommend the most suitable internships for you!";
    } else if (lowerInput.includes('apply') || lowerInput.includes('application')) {
      return "Here's a step-by-step guide to apply for government internships:\n\n1. **Verify Eligibility**: Check age, education, and other criteria\n2. **Prepare Documents**: Aadhar, educational certificates, passport photo\n3. **Online Registration**: Create account on the official portal\n4. **Fill Application**: Complete all sections carefully\n5. **Submit & Track**: Submit application and use our tracker\n\nWhich specific scheme are you interested in? I can provide detailed guidance!";
    } else if (lowerInput.includes('document') || lowerInput.includes('requirement')) {
      return "Common documents required for government internships:\n\n📄 **Essential Documents:**\n• Aadhar Card\n• Educational Certificates (10th, 12th, Current)\n• Passport Size Photograph\n• Caste Certificate (if applicable)\n• Income Certificate (if required)\n\n📄 **Additional (scheme-specific):**\n• Bank Account Details\n• Medical Certificate\n• Character Certificate\n\nWould you like me to check requirements for a specific scheme?";
    } else if (lowerInput.includes('tech') || lowerInput.includes('technology')) {
      return "Great choice! Here are current tech internships available:\n\n🚀 **Digital India Internship**\n• Duration: 6 months\n• Stipend: ₹25,000/month\n• Focus: Web development, AI/ML\n\n💻 **NIC Internship Program**\n• Duration: 3 months\n• Stipend: ₹15,000/month\n• Focus: Government IT systems\n\n🌐 **CDAC Summer Training**\n• Duration: 8 weeks\n• Stipend: ₹12,000/month\n• Focus: Advanced computing\n\nWould you like detailed information about any of these?";
    } else {
      return "I understand you're looking for information about government internships. I'm here to help with:\n\n• Finding eligible internships\n• Application guidance\n• Document requirements\n• Deadline tracking\n• Scheme-specific queries\n\nFeel free to ask me anything specific, or use one of the quick questions below!";
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <section id="ai-assistant" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <Badge className="bg-accent text-accent-foreground mb-4">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ask Your AI Assistant
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant answers about internship schemes, eligibility, application process, and more. 
            Our AI assistant is trained on all government internship programs.
          </p>
        </div>

        <Card className="shadow-elevated bg-card">
          <CardHeader className="bg-gradient-accent text-accent-foreground rounded-t-lg">
            <CardTitle className="flex items-center space-x-2">
              <Bot className="h-6 w-6" />
              <span>Internship Assistant</span>
              <Badge className="bg-success text-success-foreground ml-auto">
                Online
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <ScrollArea className="h-96 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-accent text-accent-foreground'
                        }`}
                      >
                        {message.type === 'user' ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Quick Questions */}
            <div className="p-4 border-t border-border bg-muted/30">
              <p className="text-sm text-muted-foreground mb-3">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs"
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about internships, eligibility, applications..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} variant="hero">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChatBot;