from crewai import Crew, Process

from app.agents.planner import create_planner_agent
from app.agents.coach import create_coach_agent
from app.agents.evaluator import create_evaluator_agent

from app.tasks.planning import create_planning_task
from app.tasks.coaching import create_coaching_task
from app.tasks.evaluation import create_evaluation_task


def run_study_planner(user_data):

    # Create agents
    planner = create_planner_agent()
    coach = create_coach_agent()
    evaluator = create_evaluator_agent()

    # Create tasks
    task1 = create_planning_task(planner, user_data)
    task2 = create_coaching_task(coach)
    task3 = create_evaluation_task(evaluator)

    # Create crew
    crew = Crew(
        agents=[planner, coach, evaluator],
        tasks=[task1, task2, task3],

        process=Process.sequential,

        memory=True,
        verbose=True
    )

    result = crew.kickoff()

    return result
