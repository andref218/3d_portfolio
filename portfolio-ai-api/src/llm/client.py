"""
LLM client.

Creates and returns the language model used by the application.

This module abstracts the underlying LLM provider so the rest of the
application remains unchanged if the model or provider changes
(e.g. Ollama during development, OpenRouter in production).
"""

from langchain_ollama import ChatOllama

from src.config import MODEL_NAME, TEMPERATURE


def get_llm() -> ChatOllama:
    """
    Create the language model client.

    Returns:
        Configured ChatOllama client.
    """

    return ChatOllama(
        model=MODEL_NAME,
        temperature=TEMPERATURE,
    )