import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactDetails } from '@/data/content';
import { useTranslation } from '@/hooks/use-translation';
export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleOpen = () => setIsOpen(!isOpen);
  const containerVariants = {
    closed: { opacity: 0, y: 20 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="flex flex-col items-end space-y-3 mb-4"
          >
            {contactDetails.whatsappContacts.map((contact) => (
              <motion.a
                key={contact.location}
                href={`https://wa.me/${contact.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-surface-container-high text-on-surface px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                variants={itemVariants}
              >
                <span className="font-medium text-sm">{contact.location}</span>
                <Phone className="h-5 w-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <Button
        onClick={toggleOpen}
        className="rounded-full w-16 h-16 bg-primary text-on-primary shadow-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-100"
        aria-label={t.hero.cta}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'msg'}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
          </motion.div>
        </AnimatePresence>
      </Button>
    </div>
  );
}