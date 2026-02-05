const API_URL = "http://127.0.0.1:8000";


interface StudyData {
  subjects: string;
  duration: string;
  hours: string;
  level: string;
}


export async function generatePlan(data: StudyData): Promise<string> {

  const response = await fetch(`${API_URL}/plan`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      subjects: data.subjects,
      duration: data.duration,
      hours_per_day: data.hours,
      level: data.level
    })
  });


  if (!response.ok) {
    throw new Error("Failed to generate plan");
  }


  const result = await response.json();

  return result.result;
}
