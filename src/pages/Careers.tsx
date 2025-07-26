import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FileUpload from '@/components/FileUpload';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Mail, Phone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });
  const { toast } = useToast();

  const openPositions = [
    {
      title: "Senior Civil Engineer",
      department: "Engineering",
      location: "Mohmand District, KPK",
      type: "Full-time",
      deadline: "March 15, 2024",
      experience: "5+ years",
      description: "Lead construction activities and ensure quality standards for dam infrastructure development.",
      requirements: [
        "Bachelor's degree in Civil Engineering",
        "5+ years in large-scale construction projects",
        "Experience with hydroelectric projects preferred",
        "Strong project management skills"
      ]
    },
    {
      title: "Electrical Engineer",
      department: "Power Systems",
      location: "Mohmand District, KPK",
      type: "Full-time",
      deadline: "March 20, 2024",
      experience: "3+ years",
      description: "Design and implement electrical systems for power generation and transmission infrastructure.",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "3+ years in power system design",
        "Knowledge of turbine control systems",
        "Experience with high-voltage systems"
      ]
    },
    {
      title: "Environmental Specialist",
      department: "Environmental",
      location: "Mohmand District, KPK",
      type: "Full-time",
      deadline: "March 25, 2024",
      experience: "4+ years",
      description: "Monitor environmental compliance and implement sustainability measures throughout the project.",
      requirements: [
        "Bachelor's degree in Environmental Science",
        "4+ years in environmental compliance",
        "Knowledge of EIA procedures",
        "Strong analytical and reporting skills"
      ]
    },
    {
      title: "Safety Manager",
      department: "Health & Safety",
      location: "Mohmand District, KPK",
      type: "Full-time",
      deadline: "March 30, 2024",
      experience: "6+ years",
      description: "Develop and implement comprehensive safety protocols for construction activities.",
      requirements: [
        "Bachelor's degree in Safety Engineering or related field",
        "6+ years in industrial safety management",
        "NEBOSH or equivalent certification",
        "Experience with construction safety protocols"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      toast({
        title: "CV Required",
        description: "Please upload your CV before submitting the application.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted Successfully!",
      description: "We will review your application and contact you within 5-7 business days.",
    });

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: ''
    });
    setSelectedFile(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Career Opportunities
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Be part of Pakistan's largest hydroelectric project and help shape 
              the future of sustainable energy development.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore exciting career opportunities in various departments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {openPositions.map((position, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{position.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin size={16} />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users size={16} />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock size={16} />
                      <span>Deadline: {position.deadline}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setFormData({...formData, position: position.title});
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Apply for this position
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Submit Your Application
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and upload your CV to apply
              </p>
            </div>

            <Card className="shadow-strong">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applied For *</Label>
                      <Input
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:shadow-soft"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position..."
                      rows={4}
                      className="transition-all duration-300 focus:shadow-soft"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Upload CV/Resume *</Label>
                    <FileUpload
                      onFileSelect={setSelectedFile}
                      selectedFile={selectedFile}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HR Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                HR Contact Information
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions about our positions? Get in touch with our HR team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-strong transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">hr@mohmanddam.pk</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-strong transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+92-91-9210461</p>
              </Card>

              <Card className="text-center p-6 hover:shadow-strong transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Office</h3>
                <p className="text-muted-foreground">Mohmand District, KPK</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;