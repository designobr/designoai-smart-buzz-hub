# Architecture rules

- Use ServiceVideoSection for editorial service videos, passing asset-pointer URLs and a localized copy namespace, so playback and presentation stay consistent across service pages.- The client SaaS platform lives in src/platform under unlocalized /auth, /app and /admin routes, so it never alters the institutional site or its i18n routing.
- Platform roles are read only from the user_roles table via has_role; never from profile or client-side storage.
- Keep /app/login as a public login route alongside /auth/login, so institutional links work before a reverse proxy is configured.
- Subscriptions, credits, social connections and automation jobs are written only by edge functions (service role), so the client UI can never fake payments, integrations or publications.
