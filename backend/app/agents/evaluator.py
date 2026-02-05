from crewai import Agent
from app.core.llm import get_gemini_llm


def create_evaluator_agent():

    llm = get_gemini_llm()

    return Agent(
        role="Performance Evaluator",

        goal="Analyze and improve study strategies",

        backstory="""
        You are a learning analytics expert
        who optimizes study performance.
        """,

        llm=llm,

        verbose=True
    )
