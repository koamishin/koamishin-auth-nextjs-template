import Link from "next/link";
import { Suspense } from "react";
import {
  Show,
  SignInButton,
  SignUpButton,
} from "@koamishin/auth-js/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-24 px-8 sm:px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
            @koamishin/auth-js + Next.js
          </span>
          <h1 className="max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Koamishin Next.js Quickstart
          </h1>
          <p className="max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Clerk-style authentication powered by Koamishin Portal OAuth 2.0
            PKCE and offline-verifiable RS256 session tokens:
          </p>
          <ul className="list-disc pl-6 text-sm leading-6 text-zinc-600 dark:text-zinc-400 text-left space-y-1">
            <li>
              <code>proxy.ts</code> with <code>koamishinMiddleware()</code> &amp;{" "}
              <code>createRouteMatcher()</code>
            </li>
            <li>
              <code>app/layout.tsx</code> with <code>&lt;KoamishinProvider&gt;</code>,{" "}
              <code>&lt;Show&gt;</code>, <code>&lt;SignInButton&gt;</code>,{" "}
              <code>&lt;SignUpButton&gt;</code>, and <code>&lt;UserButton&gt;</code>
            </li>
            <li>
              <code>app/auth/callback/page.tsx</code> with{" "}
              <code>&lt;AuthenticateWithRedirectCallback /&gt;</code>
            </li>
            <li>
              <code>app/dashboard/page.tsx</code> protected route reading server{" "}
              <code>await auth()</code> claims
            </li>
          </ul>
        </div>

        <Suspense>
          <Show when="signed-out">
            <div className="mt-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
              <SignInButton>
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-[158px] cursor-pointer"
                >
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center rounded-full bg-purple-700 px-6 text-white transition-colors hover:bg-purple-600 sm:w-[158px] cursor-pointer"
                >
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </Show>

          <Show when="signed-in">
            <div className="mt-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
              <Link
                href="/dashboard"
                className="flex h-12 items-center justify-center rounded-full bg-purple-700 px-6 text-white transition-colors hover:bg-purple-600"
              >
                Open Protected Dashboard &rarr;
              </Link>
            </div>
          </Show>
        </Suspense>
      </main>
    </div>
  );
}
