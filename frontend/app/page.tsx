import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">

      <h1 className="text-4xl font-bold mb-6">
        Multi-Agent Study Planner
      </h1>

      <p className="text-gray-600 mb-8 text-center max-w-xl">
        AI-powered system using CrewAI and Gemini
        to generate personalized study plans.
      </p>

      <Link
        href="/planner"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Create Study Plan
      </Link>

    </main>
  );
}
