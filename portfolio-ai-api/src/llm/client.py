"""
LLM client.

Creates and returns the language model used by the application.

This module abstracts the underlying LLM provider so the rest of the
application remains unchanged if the model or provider changes
(e.g. Ollama during development, OpenRouter in production).
"""

from langchain_openai import ChatOpenAI

from src.config import (
    MODEL_NAME,
    TEMPERATURE,
    OPENROUTER_API_KEY,
    OPENROUTER_BASE_URL,
)


def get_llm() -> ChatOpenAI:
    """
    Create the language model client.

    Returns:
        Configured ChatOpenAI client.
    """

    return ChatOpenAI(
        model=MODEL_NAME,
        temperature=TEMPERATURE,
        api_key=OPENROUTER_API_KEY,
        base_url=OPENROUTER_BASE_URL,
    )