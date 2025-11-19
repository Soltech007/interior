import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { categories } from '@/lib/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { MobileNav } from './MobileNav';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects', sublinks: categories },
  { href: '/awards', label: 'Awards' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-auto text-primary" />
        </Link>

        <div className="flex items-center">
          <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium">
            
            {navLinks.map((link) =>
              link.sublinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                  
                    {/* All Projects */}
                    <DropdownMenuItem asChild>
                      <Link href="/projects">All Projects</Link>
                    </DropdownMenuItem>

                    {/* Categories */}
                    {link.sublinks.map((category) =>
                      category.subcategories ? (
                        <DropdownMenuSub key={category.slug}>
                          <DropdownMenuSubTrigger>
                            <span>{category.name}</span>
                          </DropdownMenuSubTrigger>

                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>

                              {/* Category link */}
                              <DropdownMenuItem asChild>
                                <Link href={`/projects/${category.slug}`}>
                                  All {category.name}
                                </Link>
                              </DropdownMenuItem>

                              {/* Subcategories - THESE DO NOT HAVE ROUTES */}
                              {category.subcategories.map((sub) => (
                                <DropdownMenuItem key={sub.slug} asChild>
                                  <Link 
                                    // FIXED: send to category page (not a broken route)
                                    href={`/projects/${category.slug}?sub=${sub.slug}`}
                                  >
                                    {sub.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}

                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ) : (
                        <DropdownMenuItem key={category.slug} asChild>
                          <Link href={`/projects/${category.slug}`}>
                            {category.name}
                          </Link>
                        </DropdownMenuItem>
                      )
                    )}

                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (

                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {link.label}
                </Link>
              )
            )}

          </nav>

          {/* Mobile Navbar */}
          <div className="md:hidden">
            <MobileNav navLinks={navLinks} />
          </div>

        </div>
      </div>
    </header>
  );
}
