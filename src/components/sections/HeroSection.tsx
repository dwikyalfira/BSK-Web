import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1570125909232-eb263c186f2e?q=80&w=2940&auto=format&fit=crop"
      >
        <source src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1096550/3b46983b5c0b9b7391062880756578d4955c330d.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          {t.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <Button size="lg" asChild className="text-on-primary bg-primary font-semibold px-8 py-6 text-lg rounded-2xl transition-shadow hover:shadow-lg">
            <a href="#services">{t.hero.cta}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}