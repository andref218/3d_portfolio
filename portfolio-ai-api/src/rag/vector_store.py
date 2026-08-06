"""
Vector database creation.

Creates and manages the Chroma vector database.
"""

from pathlib import Path

from langchain_chroma import Chroma
from langchain_core.documents import Document

from chunking import chunk_documents
from embeddings import get_embedding_model
from loader import load_documents

from src.config import VECTOR_DB_PATH


def create_vector_store(chunks: list[Document]) -> Chroma:
    """
    Create a Chroma vector database from a list of document chunks.

    Args:
        chunks: List of chunked LangChain Documents.

    Returns:
        Chroma vector store.
    """

    embedding_model = get_embedding_model()

    db_path = Path(VECTOR_DB_PATH)

    # Remove the existing vector database.
    if db_path.exists():
        Chroma(
            persist_directory=VECTOR_DB_PATH,
            embedding_function=embedding_model,
        ).delete_collection()

    # Generate embeddings and store them in Chroma.
    vector_store = Chroma.from_documents(
        documents=chunks,
        embedding=embedding_model,
        persist_directory=VECTOR_DB_PATH,
    )

    return vector_store


if __name__ == "__main__":
    # Manual test

    documents = load_documents()

    chunks = chunk_documents(documents)

    vector_store = create_vector_store(chunks)

    collection = vector_store._collection

    count = collection.count()

    sample_embedding = collection.get(
        limit=1,
        include=["embeddings"],
    )["embeddings"][0]

    dimensions = len(sample_embedding)

    print("\nVector Store created successfully.")
    print(f"Database: {VECTOR_DB_PATH}")
    print(f"Vectors: {count}")
    print(f"Embedding dimensions: {dimensions}")
