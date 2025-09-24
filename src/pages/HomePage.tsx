import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { DestinationsSection } from '@/components/sections/DestinationsSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';
import { FloatingContactButton } from '@/components/FloatingContactButton';
export function HomePage() {
  useEffect(() => {
    document.title = "BSK";
  }, []);
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingContactButton />
      <Toaster richColors position="top-right" />
    </div>
  );
}