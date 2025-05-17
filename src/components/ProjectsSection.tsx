import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projects: ProjectProps[] = [
  {
    title: "Chatbot for Alzheimer’s",
    description:
      "Built a custom NLP chatbot using GPT-2, fine-tuned to assist Alzheimer’s patients with accurate and adapted responses.",
    technologies: ["Python", "Transformers", "Hugging Face", "GPT-2"],
    image: "/images/Alzhemier.png",
    github: "https://github.com/aminemharzi", // Replace with actual repo
    liveDemo: "https://example.com"
  },
  {
    title: "Automated RAG Data Pipeline",
    description:
      "Implemented a Retrieval-Augmented Generation pipeline with Airflow, Kafka, PySpark, and FAISS for real-time data ingestion and intelligent querying.",
    technologies: ["Airflow", "Kafka", "PySpark", "FAISS", "RAG"],
    image: "/images/rag.png",
    github: "https://github.com/aminemharzi",
    liveDemo: "https://example.com"
  },
  {
    title: "E-Tourism Mobile App",
    description:
      "Developed a Flutter mobile application integrated with an ASP.NET API for booking, tourist recommendations, and interactive UX.",
    technologies: ["Flutter", "Dart", "ASP.NET", "REST API"],
    image: "/images/mdinti_app.png",
    github: "https://github.com/aminemharzi",
    liveDemo: "https://example.com"
  },
  {
    title: "Hotel Management Web System",
    description:
      "Created a PHP-based hotel management system with booking, room tracking, and email invoicing features.",
    technologies: ["PHP", "HTML", "CSS", "SMTP"],
    image: "/images/hotel.png",
    github: "https://github.com/aminemharzi",
    liveDemo: "https://example.com"
  },
  // {
  //   title: "Data Warehouse & BI Dashboards",
  //   description:
  //     "Designed ETL pipelines using Talend and built analytical dashboards with Power BI to visualize business insights.",
  //   technologies: ["Talend", "Power BI", "SQL", "ETL"],
  //   image: "/images/data_warehouse.png",
  //   github: "https://github.com/aminemharzi",
  //   liveDemo: "https://example.com"
  // },
  {
    title: "AI Doctor Recommender System",
    description:
      "Created a machine learning model to recommend doctors based on illness, availability, and geolocation using PostGIS.",
    technologies: ["Scikit-learn", "PostgreSQL", "PostGIS", "NLP"],
    image: "/images/DOCTOR_RECOMANDATION.png",
    github: "https://github.com/aminemharzi",
    liveDemo: "https://example.com"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Here are some of the real-world projects I’ve worked on in AI, Data Science, and Software Development. 
          They reflect my ability to design intelligent systems, automate data workflows, and build practical solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
