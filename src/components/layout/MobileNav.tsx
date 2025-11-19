'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Logo } from '@/components/icons/Logo';
import type { Category } from '@/lib/definitions';

interface MobileNavProps {
  navLinks: {
    href: string;
    label: string;
    sublinks?: Category[];
  }[];
}

export function MobileNav({ navLinks }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <Link href="/" className="mb-4" onClick={() => setIsOpen(false)}>
            <Logo className="h-10 w-auto text-primary" />
          </Link>
        </SheetHeader>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) =>
            link.sublinks ? (
              <Accordion type="single" collapsible key={link.label}>
                <AccordionItem value={link.label} className="border-b-0">
                  <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-2 pl-4">
                      <Link
                        href="/projects"
                        className="text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        All Projects
                      </Link>
                      {link.sublinks.map((category) =>
                        category.subcategories ? (
                          <Accordion type="single" collapsible key={category.slug}>
                            <AccordionItem value={category.slug} className="border-b-0">
                              <AccordionTrigger className="py-2 text-base font-medium hover:no-underline text-muted-foreground">
                                {category.name}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col space-y-2 pl-4">
                                  <Link
                                    href={`/projects/${category.slug}`}
                                    className="text-muted-foreground hover:text-foreground text-sm"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    All {category.name}
                                  </Link>
                                  {category.subcategories.map((sub) => (
                                   <Link
  key={sub.slug}
  href={`/projects/${category.slug}?sub=${sub.slug}`}
  className="text-muted-foreground hover:text-foreground text-sm"
  onClick={() => setIsOpen(false)}
>
  {sub.name}
</Link>

                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <Link
                            key={category.slug}
                            href={`/projects/${category.slug}`}
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {category.name}
                          </Link>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-lg font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
