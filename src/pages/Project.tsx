import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectTimeline from '@/components/ProjectTimeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Droplets, Shield, Leaf, Building, Users } from 'lucide-react';
import damConstruction from '@/assets/dam-construction.jpg';
import powerGeneration from '@/assets/power-generation.jpg';
import environmentalImpact from '@/assets/environmental-impact.jpg';

const Project = () => {
  const objectives = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electricity Generation",
      description: "Generate 1,293 MW of clean hydroelectric power to meet Pakistan's growing energy demands.",
      impact: "Annual generation of 5.15 billion kWh"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Flood Control",
      description: "Protect downstream areas from devastating floods and provide water security.",
      impact: "Protects 2.5 million people from floods"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Irrigation",
      description: "Provide reliable water supply for agricultural development and food security.",
      impact: "Irrigates 16,737 acres of new land"
    }
  ];

  const specifications = [
    { label: "Dam Height", value: "213 meters" },
    { label: "Dam Length", value: "630 meters" },
    { label: "Reservoir Capacity", value: "1.29 MAF" },
    { label: "Installed Capacity", value: "1,293 MW" },
    { label: "Annual Generation", value: "5.15 TWh" },
    { label: "Project Cost", value: "USD 2.9 Billion" },
    { label: "Construction Period", value: "2019 - 2026" },
    { label: "Design Life", value: "100 years" }
  ];

  const gallery = [
    {
      image: damConstruction,
      title: "Construction Progress",
      description: "Current state of dam construction showing concrete work and infrastructure development."
    },
    {
      image: powerGeneration,
      title: "Power Generation Facility",
      description: "Advanced turbine systems and power generation equipment installation."
    },
    {
      image: environmentalImpact,
      title: "Environmental Integration",
      description: "Sustainable development with minimal environmental impact and ecosystem preservation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Infrastructure Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mohmand Dam Project
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              A multi-purpose hydroelectric project designed to transform Pakistan's 
              energy landscape and provide sustainable development for generations.
            </p>
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Objectives Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Objectives
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The Mohmand Dam serves multiple critical purposes for Pakistan's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 glass-effect">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 hero-gradient rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {objective.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{objective.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{objective.description}</p>
                  <div className="p-3 bg-accent rounded-lg">
                    <p className="text-sm font-semibold text-accent-foreground">{objective.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Specifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Detailed technical information about the Mohmand Dam infrastructure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg shadow-soft hover:shadow-strong transition-all duration-300">
                  <span className="font-medium text-foreground">{spec.label}</span>
                  <span className="font-bold text-primary text-lg">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Environmental Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sustainable development with comprehensive environmental protection measures
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clean Energy Production</h3>
                  <p className="text-muted-foreground">Reduces CO2 emissions by 2.3 million tons annually compared to fossil fuel alternatives.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ecosystem Preservation</h3>
                  <p className="text-muted-foreground">Comprehensive wildlife protection programs and habitat restoration initiatives.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Community Benefits</h3>
                  <p className="text-muted-foreground">Creates 30,000+ jobs and improves living standards for local communities.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={environmentalImpact}
                alt="Environmental Impact"
                className="w-full h-96 object-cover rounded-xl shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visual documentation of the Mohmand Dam construction progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Project;