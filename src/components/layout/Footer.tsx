import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { contactDetails, aboutFirm } from '@/lib/data';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="max-w-xs text-sm">
              Designing Dreams, Building Realities.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>{contactDetails.address}</p>
              <p>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="hover:text-primary">{contactDetails.phone}</a>
              </p>
              <p>
                <a href={`mailto:${contactDetails.email}`} className="hover:text-primary">{contactDetails.email}</a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={contactDetails.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={contactDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={contactDetails.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {aboutFirm.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
