
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 90, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  { name: "SQL", level: 80, category: "Languages" },
  { name: "JavaScript", level: 75, category: "Languages" },
  
  // Frameworks & Libraries
  { name: "TensorFlow", level: 85, category: "Libraries" },
    { name: "Rasa", level: 85, category: "Libraries" },
  { name: "PyTorch", level: 80, category: "Libraries" },
  { name: "Scikit-learn", level: 90, category: "Libraries" },
  { name: "Pandas", level: 95, category: "Libraries" },
  { name: "Flask", level: 95, category: "Libraries" },
  { name: "Flutter", level: 70, category: "Libraries" },
  
  // Tools & Platforms
  { name: "Docker", level: 75, category: "Tools" },

  { name: "PowerBI", level: 80, category: "Tools" },
];

const SkillsSection: React.FC = () => {
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Here's an overview of my technical skills and proficiency levels in various technologies,
          frameworks, and tools that I use in my data science and development work.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div key={category} className="bg-background rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-6">{category}</h3>
              <div className="space-y-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-xl mb-6">Other Skills & Expertise</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Data Visualization",
              "Predictive Analytics",
              "Statistics",
              "Hadoop",
              "Kafka",
              "Time Series Analysis",
              "ETL Pipelines",
              "Data Cleaning",
              "Feature Engineering",
              "Reinforcement Learning",
              "Data Warehousing",
              "Database Design",
              "Big Data Technologies",
              "API Development",
              "CI/CD Pipelines",
              "openstack",
              "Kafka",
              "Elastci Search",
              "Rasa"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
