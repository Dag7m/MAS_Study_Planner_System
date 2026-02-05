from crewai import Agent
from app.core.llm import get_gemini_llm


def create_planner_agent():

    llm = get_gemini_llm()

    return Agent(
        role="Study Planner",

        goal="Create realistic and effective study schedules",

        backstory="""
        You are an academic advisor with years of experience
        helping students organize their time and succeed.
        """,

        llm=llm,

        verbose=True
    )
