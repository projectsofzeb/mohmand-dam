import { Github, Linkedin, Mail, Shield, Code, Bot, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const skills = [
    { name: 'Network Administration', icon: Network, color: 'bg-blue-500' },
    { name: 'Cybersecurity (CEH)', icon: Shield, color: 'bg-red-500' },
    { name: 'Python Security Tools', icon: Code, color: 'bg-green-500' },
    { name: 'AI Chatbot Development', icon: Bot, color: 'bg-purple-500' },
  ];

  const certifications = [
    'Certified Ethical Hacker (CEH)',
    'Computer Hacking Forensic Investigator (CHFI)',
    'BS in Information Technology'
  ];

  const technologies = [
    'Python', 'Dialogflow', 'Kommunicate', 'WhatsApp Automation',
    'Network Security', 'LLMs', 'React', 'TypeScript', 'Supabase'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              About the Developer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the tech enthusiast behind this project - passionate about cybersecurity, 
              network administration, and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <Card className="card-hover-effect">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20">
                        <img 
                          src="/lovable-uploads/4a1500e4-8aec-4803-95de-9f12d2d3f3b1.png" 
                          alt="Atif Zeb" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          Available for Projects
                        </Badge>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">Atif Zeb</h2>
                    <p className="text-primary font-medium mb-3">Junior Network Administrator</p>
                    <p className="text-muted-foreground mb-6">
                      Based in Peshawar, Pakistan
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Mail size={16} />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Linkedin size={16} />
                        LinkedIn
                      </Button>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Github size={16} />
                        GitHub
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* About */}
                <Card className="card-hover-effect">
                  <CardHeader>
                    <CardTitle className="text-2xl">About Me</CardTitle>
                    <CardDescription>
                      Passionate tech professional with expertise in network security and AI development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      I'm a dedicated Junior Network Administrator with a Bachelor's degree in Information Technology 
                      from Peshawar. My passion lies in cybersecurity and network administration, where I combine 
                      theoretical knowledge with hands-on experience to build secure and efficient systems.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Beyond traditional networking, I'm deeply involved in developing AI-powered solutions, 
                      particularly chatbots using modern platforms like Dialogflow and Kommunicate. I also 
                      specialize in Python-based security tools and have extensive experience with Large Language 
                      Models (LLMs) and WhatsApp automation.
                    </p>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card className="card-hover-effect">
                  <CardHeader>
                    <CardTitle className="text-2xl">Core Skills</CardTitle>
                    <CardDescription>
                      Specialized expertise across cybersecurity, networking, and AI development
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50">
                          <div className={`p-2 rounded-lg ${skill.color}`}>
                            <skill.icon size={20} className="text-white" />
                          </div>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card className="card-hover-effect">
                  <CardHeader>
                    <CardTitle className="text-2xl">Certifications & Education</CardTitle>
                    <CardDescription>
                      Professional qualifications and academic achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                          <Shield size={20} className="text-primary" />
                          <span className="font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies */}
                <Card className="card-hover-effect">
                  <CardHeader>
                    <CardTitle className="text-2xl">Technologies & Tools</CardTitle>
                    <CardDescription>
                      Programming languages, frameworks, and platforms I work with
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;