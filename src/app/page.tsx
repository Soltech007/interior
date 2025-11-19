import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { featuredProjects, aboutFirm } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { getImageById } from '@/lib/data';

export default function Home() {
  const heroImage = getImageById('hero-home');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold">
            Designing Dreams, Building Realities
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            We craft bespoke spaces that reflect your vision and stand the test of time.
          </p>
          <Button asChild className="mt-8">
            <Link href="/projects">Explore Our Work</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-secondary-foreground">
              <h2 className="font-headline text-3xl md:text-4xl">
                About The Firm
              </h2>
              <p className="lead">{aboutFirm.summary}</p>
              <p>{aboutFirm.philosophy}</p>
              <Button asChild variant="link" className="p-0 h-auto text-base">
                <Link href="/about">Learn more about us &rarr;</Link>
              </Button>
            </div>
            <div>
              <Image
                src={getImageById('about-firm').imageUrl}
                alt={getImageById('about-firm').description}
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
                data-ai-hint={getImageById('about-firm').imageHint}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
