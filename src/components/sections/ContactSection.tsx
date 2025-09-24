import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { contactDetails } from '@/data/content';
import { useTranslation } from '@/hooks/use-translation';
export function ContactSection() {
  const { t } = useTranslation();
  const formSchema = z.object({
    name: z.string().min(2, { message: t.contact.form.error.name }),
    email: z.string().email({ message: t.contact.form.error.email }),
    message: z.string().min(10, { message: t.contact.form.error.message }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success(t.contact.form.successTitle, {
      description: t.contact.form.successDescription,
    });
    form.reset();
  }
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-on-surface-variant">
            {t.contact.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {contactDetails.addresses.map((address, index) => (
            <motion.div
              key={address.locationKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold text-center">{t[address.locationKey.split('.')[0]][address.locationKey.split('.')[1]]}</h3>
              <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src={address.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {contactDetails.addresses.map((address) => (
              <div key={address.locationKey} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <contactDetails.addressIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{t[address.locationKey.split('.')[0]][address.locationKey.split('.')[1]]}</h3>
                  <p className="text-on-surface-variant">{address.detail}</p>
                </div>
              </div>
            ))}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <contactDetails.phoneIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t.contact.phone}</h3>
                <div className="space-y-1 mt-2">
                  {contactDetails.phone.map((phoneInfo) => (
                    <p key={phoneInfo.location} className="text-on-surface-variant">
                      <span className="font-medium">{phoneInfo.location}:</span> {phoneInfo.number}
                    </p>
                  ))}
                </div>
              </div>
            </div>
             <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <contactDetails.emailIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{t.contact.email}</h3>
                <p className="text-on-surface-variant">{contactDetails.email}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.name}</FormLabel>
                    <FormControl><Input placeholder={t.contact.form.namePlaceholder} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.email}</FormLabel>
                    <FormControl><Input placeholder={t.contact.form.emailPlaceholder} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t.contact.form.message}</FormLabel>
                    <FormControl><Textarea placeholder={t.contact.form.messagePlaceholder} className="resize-none" rows={5} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" size="lg" className="w-full font-semibold py-6 text-lg bg-primary text-on-primary rounded-2xl">
                  {t.contact.form.submit}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}