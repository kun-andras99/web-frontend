"use client";

import { useState, useTransition } from "react";
import { resendVerificationEmailAction } from "@/features/auth/lib/actions";

/**
 * Drop-in banner a védett layoutodba/dashboardodba, ha `getCurrentUser().emailVerified === false`.
 */
export function VerifyEmailNotice() {
  const [isPending, startTransition] = useTransition();
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleResend() {
    startTransition(async () => {
      const result = await resendVerificationEmailAction();
      setFeedback(result.message);
    });
  }

  return (
    <div role="status">
      <p>Erősítsd meg az email címed a fiókod teljes aktiválásához.</p>
      <button type="button" onClick={handleResend} disabled={isPending}>
        {isPending ? "Küldés…" : "Megerősítő email újraküldése"}
      </button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
}
