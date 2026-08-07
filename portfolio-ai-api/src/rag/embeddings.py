"""
Embedding model configuration.
"""
#Keeping it here temporarily for reference, but we are now using OpenRouter embeddings instead of HuggingFace embeddings.
#from langchain_huggingface import HuggingFaceEmbeddings
from langchain_openai import OpenAIEmbeddings

from src.config import (
    EMBEDDING_MODEL,
    OPENROUTER_API_KEY,
    OPENROUTER_BASE_URL,
)

def get_embedding_model() -> OpenAIEmbeddings:
    """
    Create and return the embedding model.

    Returns:
        Configured OpenAI embedding model.
    """

    return OpenAIEmbeddings(
        model=EMBEDDING_MODEL,
        api_key=OPENROUTER_API_KEY,
        base_url=OPENROUTER_BASE_URL,
    )


if __name__ == "__main__":
    embedding_model = get_embedding_model()

    print(f"\nEmbedding model loaded successfully.")
    print(f"Model: {EMBEDDING_MODEL}")