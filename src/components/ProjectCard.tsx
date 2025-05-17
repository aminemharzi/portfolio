
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  liveDemo?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  image, 
  github, 
  liveDemo 
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border border-border/50">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-secondary text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* <div className="flex space-x-3 mt-auto">
          {github && (
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-1 h-4 w-4" /> GitHub
              </a>
            </Button>
          )}
          
          {liveDemo && (
            <Button size="sm" asChild>
              <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
              </a>
            </Button>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
