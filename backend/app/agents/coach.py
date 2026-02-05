from crewai import Agent
from app.core.llm import get_gemini_llm


def create_coach_agent():

    llm = get_gemini_llm()

    return Agent(
        role="Motivation Coach",

        goal="Motivate students and build discipline",

        backstory="""
        You are a professional life coach specialized
        in helping students stay focused.
        """,

        llm=llm,

        verbose=True
    )
