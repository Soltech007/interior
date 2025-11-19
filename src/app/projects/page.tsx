import { Metadata } from 'next';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';

export const metadata: Metadata = {
  title: 'Our Projects | Beyond Interior Design Studio',
  description: 'Explore our portfolio of residential, corporate, and hospitality projects.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of our passion, creativity, and dedication to crafting exceptional spaces.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
