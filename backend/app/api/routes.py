from fastapi import APIRouter
from pydantic import BaseModel

from app.crew.crew_setup import run_study_planner


router = APIRouter()


# Input format
class StudyRequest(BaseModel):
    subjects: str
    duration: str
    hours_per_day: str
    level: str


@router.post("/plan")
def generate_plan(data: StudyRequest):

    user_data = f"""
    Subjects: {data.subjects}
    Duration: {data.duration}
    Hours per day: {data.hours_per_day}
    Level: {data.level}
    """

    result = run_study_planner(user_data)

    return {
        "result": str(result)
    }
