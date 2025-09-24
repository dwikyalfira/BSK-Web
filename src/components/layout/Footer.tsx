import { AetherLogo } from '@/components/AetherLogo';
import { socialLinks, contactDetails, company } from '@/data/content';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <AetherLogo />
          </div>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>&copy; {new Date().getFullYear()} {company.name}. {t.footer.copyright}</p>
            {contactDetails.addresses.map(addr => (
              <p key={addr.locationKey}><span className="font-semibold">{t[addr.locationKey.split('.')[0]][addr.locationKey.split('.')[1]]}:</span> {addr.detail}</p>
            ))}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
              {contactDetails.phone.map((p) => (
                <span key={p.location}>
                  <span className="font-semibold">{p.location}:</span> {p.number}
                </span>
              ))}
            </div>
             <p className="pt-4">{t.footer.builtWith}</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((link, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${link.label}`}>
                  <link.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}