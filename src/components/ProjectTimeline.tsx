import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle, Clock } from 'lucide-react';

const ProjectTimeline = () => {
  const phases = [
    {
      title: "Project Planning & Design",
      period: "2017 - 2019",
      status: "completed",
      progress: 100,
      description: "Feasibility studies, environmental impact assessment, and detailed engineering design."
    },
    {
      title: "Construction Phase I",
      period: "2019 - 2022",
      status: "completed", 
      progress: 100,
      description: "Site preparation, diversion works, and foundation construction."
    },
    {
      title: "Construction Phase II",
      period: "2022 - 2024",
      status: "active",
      progress: 65,
      description: "Dam body construction, powerhouse installation, and turbine setup."
    },
    {
      title: "Testing & Commissioning",
      period: "2024 - 2025",
      status: "pending",
      progress: 0,
      description: "System testing, trial operations, and safety certifications."
    },
    {
      title: "Commercial Operation",
      period: "2026",
      status: "pending",
      progress: 0,
      description: "Full operational capacity and commercial electricity generation."
    }
  ];

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-success" size={20} />;
      case 'active':
        return <Clock className="text-primary animate-pulse" size={20} />;
      default:
        return <Circle className="text-muted-foreground" size={20} />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Project Timeline
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track the progress of the Mohmand Dam construction from planning to completion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Overall Progress */}
          <div className="mb-12 p-6 glass-effect rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-foreground">Overall Progress</h3>
              <span className="text-2xl font-bold text-primary">65%</span>
            </div>
            <Progress value={65} className="h-3" />
            <p className="text-muted-foreground mt-2">
              Expected completion: December 2026
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-border" />
                )}
                
                <div className="flex items-start space-x-4">
                  {/* Status Icon */}
                  <div className="flex-shrink-0 w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                    <StatusIcon status={phase.status} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-card rounded-lg p-6 shadow-soft hover:shadow-strong transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">
                          {phase.title}
                        </h3>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0">
                          {phase.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {phase.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{phase.progress}%</span>
                        </div>
                        <Progress 
                          value={phase.progress} 
                          className={`h-2 ${
                            phase.status === 'completed' ? '[&>div]:bg-success' :
                            phase.status === 'active' ? '[&>div]:bg-primary' :
                            '[&>div]:bg-muted-foreground'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;