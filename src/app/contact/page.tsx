import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { contactDetails, getImageById } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Beyond Interior Design Studio',
  description: 'Get in touch with us to discuss your next project.',
};

export default function ContactPage() {
  const heroImage = getImageById('contact-hero');
  return (
    <div>
      <section className="relative h-[40vh] w-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
          <h1 className="font-headline text-4xl md:text-6xl font-bold">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg">
            We'd love to hear about your project. Let's create something beautiful together.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-headline text-3xl md:text-4xl">Contact Information</h2>
              <p>
                Have a project in mind or just want to say hello? Reach out to us through any of the channels below.
              </p>
              <div className="space-y-4 not-prose">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>{contactDetails.address}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="hover:text-primary">{contactDetails.phone}</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href={`mailto:${contactDetails.email}`} className="hover:text-primary">{contactDetails.email}</a>
                </div>
              </div>
               <div className="flex space-x-4 mt-8">
                  <a href={contactDetails.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href={contactDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={contactDetails.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
            </div>

            <div>
              <h2 className="font-headline text-3xl md:text-4xl mb-4">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
