import Image from 'next/image';
import Link from 'next/link';

export function ProjectCard({ project }) {
  return (
    <div className="bg-white text-neutral-600 card shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105">
      {project.image && (
        <div className="relative h-48">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover" 
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-lg mb-4">{project.description}</p>
        <Link 
          href={project.link} 
          className="inline-block px-4 py-2 border border-primary rounded-full text-primary font-bold transition duration-200 hover:bg-secondary hover:text-primary-content"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}