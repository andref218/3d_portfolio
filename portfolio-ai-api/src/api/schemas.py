"""
Request and response models for the Portfolio AI API.
"""

from pydantic import BaseModel


class ChatRequest(BaseModel):
    """
    Request body for the chat endpoint.
    """

    question: str


class ChatResponse(BaseModel):
    """
    Response returned by the chat endpoint.
    """

    answer: str