interface Props {
  result: string;
  loading: boolean;
}


export default function ResultBox({ result, loading }: Props) {

  if (loading) {
    return (
      <p className="text-center mt-6">
        Generating plan...
      </p>
    );
  }

  if (!result) return null;


  return (
    <div className="max-w-3xl mx-auto mt-8 bg-gray-100 p-6 rounded text-black">

      <h2 className="text-xl font-bold mb-4">
        Your Study Plan
      </h2>

      <pre className="whitespace-pre-wrap">
        {result}
      </pre>

    </div>
  );
}
