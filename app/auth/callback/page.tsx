import { Suspense } from "react";
import { AuthenticateWithRedirectCallback } from "@koamishin/auth-js/nextjs";

export default function CallbackPage() {
  return (
    <Suspense>
      <AuthenticateWithRedirectCallback afterSignInUrl="/dashboard" />
    </Suspense>
  );
}
