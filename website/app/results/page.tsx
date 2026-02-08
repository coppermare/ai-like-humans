import { Suspense } from "react";
import { ResultsClient } from "@/app/results/ResultsClient";

export default function ResultsPage() {
  return (
    <Suspense>
      <ResultsClient />
    </Suspense>
  );
}
