import { services } from '@/data/content';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};
export function DestinationsSection() {
  const { t } = useTranslation();
  const translatedServices = t.services.items;
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-on-surface-variant">
            {t.services.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-3xl bg-surface-container-low text-on-surface">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 rounded-full bg-primary-container text-on-primary-container">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{translatedServices[i].name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-on-surface-variant">{translatedServices[i].description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}