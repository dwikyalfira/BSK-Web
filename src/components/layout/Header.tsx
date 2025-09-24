import React, { useState, useEffect } from 'react';
import { AetherLogo } from '@/components/AetherLogo';
import { navLinks } from '@/data/content';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslation } from '@/hooks/use-translation';
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" aria-label="Batusangkar Indah Home">
            <AetherLogo className="text-foreground" />
          </a>
          <div className="hidden md:flex items-center space-x-2">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {t[link.labelKey.split('.')[0]][link.labelKey.split('.')[1]]}
                </a>
              ))}
            </nav>
            <LanguageToggle />
            <ThemeToggle className="relative top-auto right-auto" />
          </div>
          <div className="md:hidden flex items-center">
            <LanguageToggle />
            <ThemeToggle className="relative top-auto right-auto" />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {t[link.labelKey.split('.')[0]][link.labelKey.split('.')[1]]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}