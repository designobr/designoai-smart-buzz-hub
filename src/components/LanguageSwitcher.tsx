import { Check, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/config';
import { useI18n } from '@/i18n/I18nProvider';

interface LanguageSwitcherProps {
  /** `compact` for the header, `block` for the mobile menu. */
  variant?: 'compact' | 'block';
}

const LanguageSwitcher = ({ variant = 'compact' }: LanguageSwitcherProps) => {
  const { locale, switchLocale, t } = useI18n();

  const triggerClass =
    variant === 'compact'
      ? 'flex h-9 items-center gap-2 rounded-pill border border-border px-3 text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground'
      : 'flex h-12 w-full items-center justify-between rounded-pill border border-border px-4 text-base text-foreground';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        aria-label={t('common.language.select')}
        className={triggerClass}
      >
        <span className="flex items-center gap-2">
          <Globe className="h-4 w-4" strokeWidth={2} />
          {variant === 'compact' ? LOCALE_LABELS[locale].short : LOCALE_LABELS[locale].native}
        </span>
        {variant === 'block' && (
          <span className="text-sm text-muted-foreground">{LOCALE_LABELS[locale].short}</span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {LOCALES.map((code: Locale) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => code !== locale && switchLocale(code)}
            className="flex items-center justify-between gap-3 text-sm"
            aria-current={code === locale ? 'true' : undefined}
          >
            <span>{LOCALE_LABELS[code].native}</span>
            {code === locale && <Check className="h-4 w-4" strokeWidth={2} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
