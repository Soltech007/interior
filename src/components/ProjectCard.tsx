import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/definitions';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImageById } from '@/lib/data';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = getImageById(project.coverImageId);
  const projectUrl = `/projects/${project.category}/${project.slug}`;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <Link href={projectUrl}>
        <div className="overflow-hidden">
          <Image
            src={coverImage.imageUrl}
            alt={coverImage.description}
            width={coverImage.width}
            height={coverImage.height}
            className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={coverImage.imageHint}
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{project.location}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Badge variant="secondary">{project.categoryName}</Badge>
          {project.subcategoryName && <Badge variant="outline">{project.subcategoryName}</Badge>}
        </CardFooter>
      </Link>
    </Card>
  );
}
