import { cn } from '@/lib/utils';
import { company } from '@/data/content';
interface AetherLogoProps {
  className?: string;
}
export function AetherLogo({ className }: AetherLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-on-primary shadow-md">
        <span className="font-display text-2xl font-bold tracking-tighter">
          {company.abbreviation}
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold tracking-wider text-on-background">
          {company.name}
        </span>
      </div>
    </div>
  );
}