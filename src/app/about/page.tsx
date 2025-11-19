import Image from 'next/image';
import { Metadata } from 'next';
import { aboutFirm, getImageById } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us | Beyond Interior Design Studio',
  description:
    'Learn about our firm, our philosophy, and our commitment to design excellence.',
};

export default function AboutPage() {
  const founderImage = getImageById(aboutFirm.founder.imageId);

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-2">

        {/* Founder Section */}
        <div className="bg-secondary rounded-xl p-8 md:p-12 shadow-sm mt-10">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            
            {/* Image */}
            <div className="flex justify-center">
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                width={founderImage.width}
                height={founderImage.height}
                className="rounded-full object-cover aspect-square max-w-[220px]"
                data-ai-hint={founderImage.imageHint}
              />
            </div>

            {/* Text */}
            <div className="md:col-span-2">
              <h3 className="font-headline text-3xl md:text-4xl font-bold">
                {aboutFirm.founder.name}
              </h3>

              <p className="text-lg text-muted-foreground mb-5">
                {aboutFirm.founder.title}
              </p>

              <p className="text-base leading-relaxed">
                {aboutFirm.founder.bio}
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl font-bold mb-6">
            Our Philosophy
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {aboutFirm.philosophy}
          </p>
        </div>
      </div>
    </section>
  );
}
