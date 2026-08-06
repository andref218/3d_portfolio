"""
FastAPI application for the Portfolio AI Assistant.
"""

from fastapi import FastAPI

from src.api.schemas import ChatRequest, ChatResponse
from src.rag.answer import answer

app = FastAPI(
    title="Portfolio AI API",
    description="RAG-powered AI assistant for André Fonseca's portfolio.",
    version="1.0.0",
)

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    """
    Answer a user question using the RAG pipeline.
    """

    response = answer(request.question)

    return ChatResponse(answer=response)