import { ProjectCard } from 'components/project-card';

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and Tailwind CSS.",
    image: "/mythic-logo-icon-obsidian.svg",  // update with your image path
    link: "/projects/project-one"
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with seamless integration and design.",
    image: "/mythic-logo-icon-obsidian.svg",
    link: "/projects/project-two"
  },
  {
    title: "Project Three",
    description: "A portfolio site that highlights creative design and functionality.",
    image: "/mythic-logo-icon-obsidian.svg",
    link: "/projects/project-three"
  },
  // Add more projects as needed
];

export default function PortfolioPage() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-heading font-bold text-center mb-12 text-start">
          Our Portfolio
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
