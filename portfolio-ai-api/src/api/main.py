"""
FastAPI application for the Portfolio AI Assistant.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.schemas import ChatRequest, ChatResponse
from src.rag.answer import answer


app = FastAPI(
    title="Portfolio AI API",
    description="RAG-powered AI assistant for André Fonseca's portfolio.",
    version="1.0.0",
)

"""
Configure CORS to allow requests from the frontend application.
"""
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://andref218.github.io",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    """
    Answer a user question using the RAG pipeline.
    """

    response = answer(request.question)

    return ChatResponse(answer=response)