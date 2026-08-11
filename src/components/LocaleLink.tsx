import { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nProvider';
import type { PageKey } from '@/i18n/routes';

interface LocaleLinkProps extends Omit<LinkProps, 'to'> {
  /** Page key from src/i18n/routes.ts — resolved to the active locale slug. */
  page: PageKey;
  /** Optional hash appended to the localized path, e.g. "#contact". */
  hash?: string;
}

/** Internal link that always stays inside the active language. */
const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(
  ({ page, hash = '', ...rest }, ref) => {
    const { path } = useI18n();
    return <Link ref={ref} to={`${path(page)}${hash}`} {...rest} />;
  },
);

LocaleLink.displayName = 'LocaleLink';

export default LocaleLink;
