"use client";

import { useAuth, useUser } from "@koamishin/auth-js/nextjs";

export function DashboardClientCard() {
  const { user, isLoaded } = useUser();
  const { signOut } = useAuth();

  if (!isLoaded) {
    return (
      <div className="h-32 w-full animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
    );
  }

  return (
    <div className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
            Client Profile (useUser())
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {user ? `${user.name} (${user.email})` : "Not signed in"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => signOut({ redirectUrl: "/" })}
          className="rounded-full bg-zinc-900 px-5 py-2 text-xs font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
