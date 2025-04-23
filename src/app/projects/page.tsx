import ProjectCard from "@/app/components/ProjectCard"; // Import the ProjectCard component

// Example project data
const projects = [
  {
    title: "AI Project",
    description: "A machine learning project to predict data trends.",
    link: "https://github.com/zia/ai-project",
    image: "/images/ai-project.jpg",
  },
  {
    title: "Portfolio Website",
    description: "This is the personal portfolio website I'm building.",
    link: "https://github.com/zia/portfolio",
    image: "/images/portfolio.jpg",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          image={project.image}
        />
      ))}
    </div>
  );
}
