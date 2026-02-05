from crewai import Task


def create_coaching_task(agent):

    return Task(
        description="""
        Provide motivational advice
        based on the generated study plan.
        """,

        agent=agent,

        expected_output="""
        Encouraging message with discipline tips.
        """
    )
