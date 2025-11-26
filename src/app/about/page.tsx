import Image from 'next/image';
import { Metadata } from 'next';
import { aboutFirm, getImageById, awards } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Target, Lightbulb, Heart, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Beyond Interior Design Studio',
  description: 'Learn about our firm, our philosophy, and our commitment to design excellence.',
};

export default function AboutPage() {
  const founderImage = getImageById(aboutFirm.founder.imageId);

  return (
    <div className="bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gray-100 text-black py-20 md:py-28">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, hsla(0,0%,100%,.2) 1px, transparent 1px)', 
            backgroundSize: '2rem 2rem' 
          }}>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-black mb-6 px-6 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Est. 2004
            </Badge>
            <h1 className="font-headline text-4xl md:text-6xl font-black mb-6">
              {aboutFirm.name}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-primary-100">
              {aboutFirm.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">20+</div>
              <p className="text-sm md:text-base text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">500+</div>
              <p className="text-sm md:text-base text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">50+</div>
              <p className="text-sm md:text-base text-muted-foreground">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary-700 mb-2">15+</div>
              <p className="text-sm md:text-base text-muted-foreground">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-primary-700 text-black mb-4 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Leadership
              </Badge>
              <h2 className="font-headline text-3xl md:text-5xl font-bold">
                Meet Our Founder
              </h2>
            </div>

            <Card className="overflow-hidden shadow-xl border-0">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  
                  {/* Image Section */}
                  <div className="md:col-span-2 bg-gradient-to-br from-primary-700 to-primary-900 p-8 md:p-12 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                      <Image
                        src={founderImage.imageUrl}
                        alt={founderImage.description}
                        width={300}
                        height={300}
                        className="rounded-full object-cover aspect-square border-8 border-white/20 shadow-2xl relative z-10"
                        data-ai-hint={founderImage.imageHint}
                      />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="md:col-span-3 p-8 md:p-12 bg-white">
                    <h3 className="font-headline text-3xl md:text-4xl font-black text-gray-900 mb-2">
                      {aboutFirm.founder.name}
                    </h3>
                    
                    <p className="text-xl text-primary-700 font-semibold mb-6 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      {aboutFirm.founder.title}
                    </p>

                    <div className="space-y-4 text-base leading-relaxed text-gray-700">
                      <p>{aboutFirm.founder.bio}</p>
                      
                      <div className="pt-6 mt-6 border-t border-gray-200">
                        <h4 className="font-bold text-lg mb-3 text-gray-900">Expertise Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="secondary" className="bg-primary-50 text-primary-700 border border-primary-200">
                            Residential Design
                          </Badge>
                          <Badge variant="secondary" className="bg-primary-50 text-primary-700 border border-primary-200">
                            Commercial Spaces
                          </Badge>
                          <Badge variant="secondary" className="bg-primary-50 text-primary-700 border border-primary-200">
                            Hospitality Design
                          </Badge>
                          <Badge variant="secondary" className="bg-primary-50 text-primary-700 border border-primary-200">
                            Sustainable Design
                          </Badge>
                        </div>
                      </div>

                      <div className="pt-4">
                        <h4 className="font-bold text-lg mb-3 text-gray-900">Qualifications:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                            <span>Bachelor of Architecture, CEPT University</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                            <span>Master's in Interior Design, NID Ahmedabad</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                            <span>Certified LEED Green Associate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                            <span>Member, Indian Institute of Interior Designers (IIID)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-primary-700 text-black mb-4 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Our Approach
              </Badge>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
                Design Philosophy
              </h2>
            </div>

            <Card className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 shadow-lg border-0">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                {aboutFirm.philosophy}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Pushing boundaries with creative solutions</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Client-Centric</h3>
                  <p className="text-sm text-gray-600">Your vision is our priority</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600">Uncompromising quality standards</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every project we undertake.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Sustainability',
                  description: 'We are committed to environmentally responsible design practices, using sustainable materials and energy-efficient solutions.',
                },
                {
                  title: 'Collaboration',
                  description: 'Working closely with clients, architects, and artisans to create truly exceptional spaces.',
                },
                {
                  title: 'Timeless Design',
                  description: 'Creating interiors that remain relevant and beautiful for years to come, beyond fleeting trends.',
                },
                {
                  title: 'Attention to Detail',
                  description: 'Every element is carefully considered, from the grand concept to the smallest finishing touch.',
                },
              ].map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-primary-700">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
   

      {/* Process Section */}
      <section className="py-16 md:py-10 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">
                Our Design Process
              </h2>
              <p className="text-lg text-primary-100">
                A proven methodology that delivers exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your vision, needs, and aspirations' },
                { step: '02', title: 'Concept', description: 'Creating innovative design solutions tailored to you' },
                { step: '03', title: 'Development', description: 'Refining details and selecting materials' },
                { step: '04', title: 'Execution', description: 'Bringing the design to life with precision' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-black text-black/20 mb-4">{phase.step}</div>
                  <h3 className="font-bold text-xl mb-3">{phase.title}</h3>
                  <p className="text-sm text-primary-100">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}