import { Suspense } from "react";
import { auth } from "@koamishin/auth-js/nextjs/server";
import { DashboardClientCard } from "./DashboardClientCard";

async function ServerSessionDetails() {
  const session = await auth();

  return (
    <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400">
        Server-Verified Session Claims (await auth())
      </h2>
      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
        Verified offline in Next.js Server Component against Portal{" "}
        <code>/oauth/jwks</code>
      </p>
      <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-950">
          <dt className="text-xs text-zinc-500">User ID (sub)</dt>
          <dd className="mt-1 font-mono text-xs text-zinc-900 dark:text-zinc-100">
            {session.userId ?? "—"}
          </dd>
        </div>
        <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-950">
          <dt className="text-xs text-zinc-500">Session ID (sid)</dt>
          <dd className="mt-1 font-mono text-xs text-zinc-900 dark:text-zinc-100 break-all">
            {session.sessionId ?? "—"}
          </dd>
        </div>
        <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-950">
          <dt className="text-xs text-zinc-500">Status (sts)</dt>
          <dd className="mt-1 font-mono text-xs text-zinc-900 dark:text-zinc-100">
            {session.sessionClaims?.sts ?? "—"}
          </dd>
        </div>
        <div className="rounded-lg bg-zinc-50 p-3 dark:bg-zinc-950">
          <dt className="text-xs text-zinc-500">Environment</dt>
          <dd className="mt-1 font-mono text-xs text-zinc-900 dark:text-zinc-100">
            {session.sessionClaims?.environment ?? "—"}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-start gap-6 py-16 px-8 sm:px-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white">
            Dashboard
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Protected by <code>koamishinMiddleware()</code> in{" "}
            <code>proxy.ts</code>.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="h-40 w-full animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
          }
        >
          <ServerSessionDetails />
          <DashboardClientCard />
        </Suspense>
      </main>
    </div>
  );
}
