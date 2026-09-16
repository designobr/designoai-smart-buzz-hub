import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import logoAsset from '@/assets/designoai-logo-oficial.png.asset.json';

interface EditorialImageOverlayProps {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  href?: string;
  external?: boolean;
  showBrand?: boolean;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  loading?: 'eager' | 'lazy';
  width?: number;
  height?: number;
}

const EditorialImageOverlay = ({
  src,
  alt,
  eyebrow,
  title,
  description,
  actionLabel,
  href,
  external = false,
  showBrand = false,
  className,
  imageClassName,
  contentClassName,
  loading = 'lazy',
  width,
  height,
}: EditorialImageOverlayProps) => {
  const content = (
    <>
      <img
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={cn(
          'h-full w-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none',
          href && 'group-hover:scale-[1.025]',
          imageClassName,
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 z-10 flex max-w-xl flex-col items-start p-6 text-primary-foreground sm:p-8',
          contentClassName,
        )}
      >
        {showBrand && (
          <img
            src={logoAsset.url}
            alt="DesignoAI"
            className="mb-5 h-9 w-9 rounded-lg object-cover shadow-card sm:h-10 sm:w-10"
          />
        )}
        {eyebrow && (
          <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/75 sm:text-xs">
            {eyebrow}
          </span>
        )}
        <h3 className="max-w-lg text-xl font-bold leading-tight text-primary-foreground sm:text-2xl">
          {title}
        </h3>
        {description && (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/80 sm:text-[15px]">
            {description}
          </p>
        )}
        {actionLabel && (
          <span className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-pill border border-primary-foreground/30 bg-primary-foreground/10 px-5 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors duration-200 group-hover:bg-primary-foreground group-hover:text-foreground">
            {actionLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </span>
        )}
      </div>
    </>
  );

  const sharedClassName = cn(
    'group relative block overflow-hidden rounded-3xl border border-border bg-secondary text-left shadow-card transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none',
    href && 'cursor-pointer hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card-hover',
    className,
  );

  if (!href) return <div className={sharedClassName}>{content}</div>;

  return (
    <a
      href={href}
      className={sharedClassName}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {content}
    </a>
  );
};

export default EditorialImageOverlay;