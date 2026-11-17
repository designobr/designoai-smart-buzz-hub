import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import LocaleLink from '@/components/LocaleLink';
import type { PageKey } from '@/i18n/routes';

interface ServiceEditorialCardProps {
  page: PageKey;
  image: string;
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  actionLabel: string;
}

const ServiceEditorialCard = ({
  page,
  image,
  icon: Icon,
  number,
  title,
  description,
  actionLabel,
}: ServiceEditorialCardProps) => (
  <LocaleLink
    page={page}
    className="group block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 focus-visible:ring-offset-2"
    aria-label={`${title}: ${actionLabel}`}
  >
    <article className="card-surface card-surface-hover h-full cursor-pointer overflow-hidden p-2 sm:p-2.5">
      <div className="relative aspect-[4/5] min-h-[390px] overflow-hidden rounded-[1.15rem] bg-secondary sm:min-h-[420px]">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.035] group-hover:contrast-[1.04] motion-reduce:transition-none"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/35 to-foreground/5 transition-opacity duration-300 group-hover:opacity-95" />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/25 bg-foreground/25 text-primary-foreground backdrop-blur-sm">
            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold text-primary-foreground/80">
            {number}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground sm:p-6">
          <h3 className="text-xl font-bold leading-tight text-primary-foreground sm:text-2xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
            {description}
          </p>
          <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-foreground">
            {actionLabel}
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-[220ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  </LocaleLink>
);

export default ServiceEditorialCard;