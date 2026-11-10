import { createKoamishinClient } from '@koamishin/auth-js';

/**
 * Singleton Koamishin client for this application.
 *
 * Mirrors the portal setup-guide step "Initialize Client Instance" and the
 * Clerk pattern of a shared auth client — but built on @koamishin/auth-js
 * (PKCE + Web Crypto API, no server secrets).
 */
export const koamishin = createKoamishinClient({
  portalUrl: process.env.NEXT_PUBLIC_KOAMISHIN_PORTAL_URL!,
  publishableKey: process.env.NEXT_PUBLIC_KOAMISHIN_PUBLISHABLE_KEY!,
  redirectUri: process.env.NEXT_PUBLIC_KOAMISHIN_REDIRECT_URI!,
  scopes: ['openid', 'profile', 'email', 'roles'],
});
