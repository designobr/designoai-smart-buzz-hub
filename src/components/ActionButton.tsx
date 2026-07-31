import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'quiet';
type Size = 'md' | 'sm';

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-semibold tracking-[-0.01em] transition-all duration-[220ms] ease-out disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-foreground/90',
  secondary:
    'border border-border bg-background text-foreground hover:-translate-y-0.5 hover:border-foreground/30',
  quiet: 'text-muted-foreground hover:text-foreground',
};

const sizes: Record<Size, string> = {
  md: 'h-14 px-7 text-[15px]',
  sm: 'h-11 px-5 text-sm',
};

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
);
ActionButton.displayName = 'ActionButton';

export default ActionButton;
