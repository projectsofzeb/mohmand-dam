import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/mohmand-dam-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mohmand Dam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-primary-light rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-primary-dark rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm text-primary-foreground/90">
            <span className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
            Under Construction - 65% Complete
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Empowering Pakistan
            <br />
            <span className="text-gradient">Through Hydropower</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            The Mohmand Dam Project - A revolutionary infrastructure development bringing 
            sustainable energy, flood control, and irrigation to millions of Pakistanis.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary-light">800 MW</div>
              <div className="text-white/80">Power Generation</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary-light">Rs. 309B</div>
              <div className="text-white/80">Total Investment</div>
            </div>
            <div className="glass-effect p-4 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary-light">1.2M</div>
              <div className="text-white/80">Acre Feet Storage</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/project">
              <Button variant="hero" size="xl" className="group">
                Explore Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/careers">
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                <Play className="mr-2" size={18} />
                Apply for Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;