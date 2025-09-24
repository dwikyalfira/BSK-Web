import { whyUsFeatures } from '@/data/content';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';
export function WhyUsSection() {
  const { t } = useTranslation();
  const translatedFeatures = t.whyUs.features;
  return (
    <section id="about" className="py-24 md:py-32 bg-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-on-surface-variant">
            {t.whyUs.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {whyUsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-container text-on-primary-container">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{translatedFeatures[index].title}</h3>
                <p className="mt-2 text-on-surface-variant">{translatedFeatures[index].description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}