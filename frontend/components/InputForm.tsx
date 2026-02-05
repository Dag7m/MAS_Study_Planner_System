"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { generatePlan } from "@/services/api";


interface FormData {
  subjects: string;
  duration: string;
  hours: string;
  level: string;
}

interface Props {
  setResult: (value: string) => void;
  setLoading: (value: boolean) => void;
}


export default function InputForm({ setResult, setLoading }: Props) {

  const [form, setForm] = useState<FormData>({
    subjects: "",
    duration: "",
    hours: "",
    level: ""
  });


  function handleChange(e: ChangeEvent<HTMLInputElement>) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }


  async function handleSubmit(e: FormEvent) {

    e.preventDefault();

    setLoading(true);
    setResult("");

    try {
      const res = await generatePlan(form);
      setResult(res);

    } catch (err: any) {

      setResult("Error: " + err.message);
    }

    setLoading(false);
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 shadow rounded-lg"
    >

      {["subjects", "duration", "hours", "level"].map((field) => (

        <input
          key={field}
          name={field}
          placeholder={field}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded text-black"
          required
        />
      ))}

      <button
        type="submit"
        className="w-full bg-green-800 text-white p-2 rounded hover:bg-blue-700"
      >
        Generate Plan
      </button>

    </form>
  );
}
