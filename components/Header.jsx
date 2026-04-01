'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const clubLinks = [
    { title: 'Leitbild', href: '/club#mission' },
    { title: 'Philosophie', href: '/club#philosophy' },
    { title: 'Mitgliedschaft', href: '/club#membership' },
    { title: 'FAQ', href: '/club#faq' },
    { title: 'Verhaltenskodex', href: '/club#code' },
    { title: 'Trainer', href: '/club#coaches' },
    { title: 'Vorstand', href: '/club#board' },
  ];

  const groupLinks = [
    { title: 'Wettkampfmannschaft', href: '/groups#competition' },
    { title: 'Fitness-Boxen', href: '/groups#fitness' },
    { title: 'Frauenboxen', href: '/groups#women' },
    { title: 'Jugendtraining', href: '/groups#youth' },
    { title: 'Kindertraining', href: '/groups#kids' },
    { title: 'Anfängertraining', href: '/groups#beginners' },
    { title: 'Offenes Training', href: '/groups#open' },
  ];

  const trainingLinks = [
    { title: 'Wettkampfmannschaft', href: '/training-times#competition' },
    { title: 'Fitness-Boxen', href: '/training-times#fitness' },
    { title: 'Frauenboxen', href: '/training-times#women' },
    { title: 'Jugendtraining', href: '/training-times#youth' },
    { title: 'Kindertraining', href: '/training-times#kids' },
    { title: 'Anfängertraining', href: '/training-times#beginners' },
    { title: 'Offenes Training', href: '/training-times#open' },
  ];

  const isActive = (path) => pathname === path;

  const dropdownItemClass =
    'block select-none rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="KSL Boxing Lahr"
              width={48}
              height={48}
              className="rounded-lg"
              priority
            />
            <span className="text-xl font-bold hidden sm:block">KSL Boxing Lahr</span>
          </Link>

          {/* Desktop Navigation – single NavigationMenu for uniform spacing */}
          <nav className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${
                        isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/news"
                      className={`text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${
                        isActive('/news') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                      }`}
                    >
                      News
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Verein</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                      {clubLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <a href={link.href} className={dropdownItemClass}>
                              {link.title}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Gruppen</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                      {groupLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <a href={link.href} className={dropdownItemClass}>
                              {link.title}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">Trainingszeiten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                      {trainingLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink asChild>
                            <a href={link.href} className={dropdownItemClass}>
                              {link.title}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/photos"
                      className={`text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${
                        isActive('/photos') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                      }`}
                    >
                      Fotos
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className={`text-sm font-medium px-3 py-2 transition-colors hover:text-primary ${
                        isActive('/contact') ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                      }`}
                    >
                      Kontakt
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive('/') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/news"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive('/news') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  News
                </Link>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary">
                    Verein
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2">
                    {clubLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
                      >
                        {link.title}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary">
                    Gruppen
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2">
                    {groupLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
                      >
                        {link.title}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-foreground hover:text-primary">
                    Trainingszeiten
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 ml-4 space-y-2">
                    {trainingLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary py-1"
                      >
                        {link.title}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  href="/photos"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive('/photos') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Fotos
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive('/contact') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Kontakt
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
