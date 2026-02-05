from crewai import Task


def create_evaluation_task(agent):

    return Task(
        description="""
        Analyze the study plan and improve efficiency.
        Suggest improvements.
        """,

        agent=agent,

        expected_output="""
        Optimized and improved study plan.
        """
    )
