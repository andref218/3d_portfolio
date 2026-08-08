"""
FastAPI application for the Portfolio AI Assistant.
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


from src.api.schemas import ChatRequest, ChatResponse
from src.rag.answer import answer

from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler

from src.security.rate_limit import limiter


app = FastAPI(
    title="Portfolio AI API",
    description="RAG-powered AI assistant for André Fonseca's portfolio.",
    version="1.0.0",
)

app.state.limiter = limiter
app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler,
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

@app.get("/health")
def health():
    """
    Health check endpoint used to verify that the API is running.
    """
    return {"status": "ok"}

@app.post("/chat", response_model=ChatResponse)
@limiter.limit("20/hour")
def chat(request: Request, body: ChatRequest) -> ChatResponse:
    """
    Answer a user question using the RAG pipeline.
    """

    response = answer(body.question)

    return ChatResponse(answer=response)