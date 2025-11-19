import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { projects, getImageById } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

type ProjectDetailPageProps = {
  params: {
    category: string;
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

// ✅ FIXED: params must be awaited
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug, category } = await params;

  const project = projects.find(
    (p) => p.slug === slug && p.category === category
  );

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Beyond Interior Design Studio`,
    description: project.description.substring(0, 160),
  };
}

// ✅ FIXED: params must be awaited
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug, category } = await params;

  const project = projects.find(
    (p) => p.slug === slug && p.category === category
  );

  if (!project) {
    notFound();
  }

  const coverImage = getImageById(project.coverImageId);
  const galleryImages = project.galleryImageIds.map(getImageById);

  return (
    <article>
      <header className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src={coverImage.imageUrl}
          alt={coverImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={coverImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
      </header>

      <div className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
        <div className="bg-background rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-muted-foreground">
            <span>{project.location}</span>
            <span>&bull;</span>
            <span>{project.year}</span>
            <span>&bull;</span>

            <Link href={`/projects/${project.category}`} className="hover:text-primary">
              <Badge variant="outline">{project.categoryName}</Badge>
            </Link>

            {project.subcategory && project.subcategoryName && (
              <>
                <span>&bull;</span>
                <Link
                  href={`/projects/${project.category}/${project.subcategory}`}
                  className="hover:text-primary"
                >
                  <Badge variant="secondary">{project.subcategoryName}</Badge>
                </Link>
              </>
            )}
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <p>{project.description}</p>
          </div>
        </div>
      </div>

      {galleryImages.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl text-center mb-12">
              Project Gallery
            </h2>

            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={image.width}
                      height={image.height}
                      className="w-full rounded-lg object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      )}
    </article>
  );
}
