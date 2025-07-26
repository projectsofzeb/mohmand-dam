import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Droplets, Users, Calendar, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Clean Energy",
      description: "1,293 MW of sustainable hydroelectric power generation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Flood Protection",
      description: "Advanced flood control systems protecting millions"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Security",
      description: "Reliable irrigation for agricultural development"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Job Creation",
      description: "30,000+ employment opportunities created"
    }
  ];

  const stats = [
    { number: "65%", label: "Project Completion" },
    { number: "2026", label: "Expected Completion" },
    { number: "$2.9B", label: "Total Investment" },
    { number: "100", label: "Years Design Life" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Project Benefits</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transforming Pakistan's Future
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Mohmand Dam Project delivers multiple benefits to the nation through 
              sustainable infrastructure development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 hero-gradient rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Be Part of This Historic Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join our team of professionals working on Pakistan's largest hydroelectric 
              project and help shape the nation's energy future.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/project">
                <Button variant="hero" size="lg" className="group">
                  <Target className="mr-2" />
                  View Project Details
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button variant="outline" size="lg">
                  <Calendar className="mr-2" />
                  Explore Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
