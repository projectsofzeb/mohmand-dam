import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MD</span>
              </div>
              <span className="text-xl font-bold text-foreground">Mohmand Dam Hydropower</span>
            </div>
            <p className="text-muted-foreground">
              Empowering Pakistan through sustainable hydropower development and modern infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/project" className="text-muted-foreground hover:text-primary transition-colors">
                Project Details
              </Link>
              <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </nav>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Project</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Mohmand Dam Project</p>
              <p>Capacity: 1,293 MW</p>
              <p>Status: Under Construction</p>
              <p>Completion: 2026</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail size={16} />
                <span>info@mohmanddam.pk</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone size={16} />
                <span>+92-91-9210461</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Mohmand District, KPK, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Mohmand Dam Hydropower. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;