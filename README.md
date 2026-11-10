# Koamishin Next.js Quickstart Template

Authentication starter for **Next.js App Router** powered by `@koamishin/auth-js`, modeled on Clerk's manual setup pattern (steps 1–7) using OAuth 2.0 S256 PKCE and offline-verifiable RS256 session tokens.

## Setup Steps

### 1. Install dependencies

```bash
bun install
```

### 2. Configure `.env.local`

Copy `.env.example` to `.env.local` and fill in the credentials from your Koamishin Portal application setup guide:

```dotenv
NEXT_PUBLIC_KOAMISHIN_PORTAL_URL=http://localhost:8000
NEXT_PUBLIC_KOAMISHIN_ENVIRONMENT=development
NEXT_PUBLIC_KOAMISHIN_PUBLISHABLE_KEY=pk_test_your_publishable_key
NEXT_PUBLIC_KOAMISHIN_REDIRECT_URI=http://localhost:3000/auth/callback
```

### 3. Proxy / Middleware (`proxy.ts`)

`proxy.ts` runs `koamishinMiddleware()` and `createRouteMatcher()` from `@koamishin/auth-js/nextjs/server` to verify the RS256 `__koamishin_session` cookie offline against `${portalUrl}/oauth/jwks` and protect `/dashboard(.*)`.

### 4. Root Layout (`app/layout.tsx`)

`app/layout.tsx` wraps the application in `<KoamishinProvider>` and renders `<Show when="signed-out">` (`<SignInButton />`, `<SignUpButton>`) and `<Show when="signed-in">` (`<UserButton />`) inside React's `<Suspense>` boundary for Next.js Cache Components compatibility.

### 5. Callback Route (`app/auth/callback/page.tsx`)

`app/auth/callback/page.tsx` renders `<AuthenticateWithRedirectCallback afterSignInUrl="/dashboard" />` to complete the PKCE code exchange and sync the session cookie.

This template serves the callback at `/auth/callback` only; it does not define `/api/auth/callback`. Register `http://localhost:3000/auth/callback` (or your app's corresponding host and port) in the Portal, and set `NEXT_PUBLIC_KOAMISHIN_REDIRECT_URI` to that exact URL. The registered URL, configured redirect URI, and app route must match. Restart the Next.js server after changing `.env.local`, then start a new sign-in.

### 6. Run the project

```bash
bun run dev
```

### 7. Create your first user

Open [http://localhost:3000](http://localhost:3000) and click **Sign Up** to create your first user on the Koamishin Portal and land on the protected `/dashboard` route.

