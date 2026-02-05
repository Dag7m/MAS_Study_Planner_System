from crewai import Task


def create_planning_task(agent, user_data):

    return Task(
        description=f"""
        Create a detailed study plan based on:

        {user_data}

        Include:
        - Daily schedule
        - Weekly goals
        - Break time
        """,

        agent=agent,

        expected_output="""
        A structured and realistic study plan.
        """
    )
