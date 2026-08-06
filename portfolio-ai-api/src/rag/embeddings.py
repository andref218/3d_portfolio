"""
Embedding model configuration.
"""

from langchain_huggingface import HuggingFaceEmbeddings

from src.config import EMBEDDING_MODEL

def get_embedding_model() -> HuggingFaceEmbeddings:
    """
    Create and return the embedding model.

    Returns:
        Configured HuggingFace embedding model.
    """

    return HuggingFaceEmbeddings(
        model_name=EMBEDDING_MODEL,
    )


if __name__ == "__main__":
    embedding_model = get_embedding_model()

    print(f"\nEmbedding model loaded successfully.")
    print(f"Model: {EMBEDDING_MODEL}")