// src/components/ProjectCard.tsx
type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const ProjectCard = ({ title, description, link, image }: ProjectCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 mt-4 block text-center"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
