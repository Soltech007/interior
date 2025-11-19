import { Metadata } from 'next';
import { awards } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Awards & Recognition | Beyond Interior Design Studio',
  description: 'A list of our awards and accolades for design excellence.',
};

export default function AwardsPage() {
  const groupedAwards = awards.reduce((acc, award) => {
    (acc[award.year] = acc[award.year] || []).push(award);
    return acc;
  }, {} as Record<number, typeof awards>);

  const sortedYears = Object.keys(groupedAwards).map(Number).sort((a, b) => b - a);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Awards & Recognition</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We are proud to be recognized for our commitment to innovation and quality in design.
        </p>
      </div>

      <div className="space-y-12">
        {sortedYears.map((year) => (
          <section key={year}>
            <h2 className="font-headline text-3xl mb-8 border-b pb-4">{year}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedAwards[year].map((award, index) => (
                <Card key={index} className="bg-secondary">
                  <CardHeader>
                    <CardTitle className="text-xl">{award.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{award.project}</p>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
