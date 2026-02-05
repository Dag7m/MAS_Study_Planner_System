"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import ResultBox from "@/components/ResultBox";

export default function PlannerPage() {

  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <main className="min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Study Planner
      </h1>

      <InputForm
        setResult={setResult}
        setLoading={setLoading}
      />

      <ResultBox
        result={result}
        loading={loading}
      />

    </main>
  );
}
