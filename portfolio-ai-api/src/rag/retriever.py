"""
Semantic retrieval.

Loads the Chroma vector database and retrieves the most
relevant document chunks for a user query.
"""

from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_core.retrievers import BaseRetriever

from src.rag.embeddings import get_embedding_model

from src.config import TOP_K, VECTOR_DB_PATH


def load_vector_store() -> Chroma:
    """
    Load the existing Chroma vector database.

    Returns:
        Chroma vector store.
    """

    return Chroma(
        persist_directory=VECTOR_DB_PATH,
        embedding_function=get_embedding_model(),
    )


def create_retriever() -> BaseRetriever:
    """
    Create a retriever from the vector store.

    Returns:
        Configured LangChain retriever.
    """

    vector_store = load_vector_store()

    return vector_store.as_retriever(
        search_type="similarity",
        search_kwargs={
            "k": TOP_K,
        },
    )


def retrieve(question: str) -> list[Document]:
    """
    Retrieve the most relevant document chunks for a user question.

    Args:
        question: User question.

    Returns:
        List of retrieved documents.
    """

    retriever = create_retriever()

    return retriever.invoke(question)


if __name__ == "__main__":
    # Manual test

    question = input("Question: ")

    documents = retrieve(question)

    print(f"\nRetrieved {len(documents)} chunks.\n")

    for index, document in enumerate(documents, start=1):

        print("=" * 80)
        print(f"Rank #{index}")
        print(f"Source: {document.metadata['source']}")

        if "h1" in document.metadata:
            print(f"H1: {document.metadata['h1']}")

        if "h2" in document.metadata:
            print(f"H2: {document.metadata['h2']}")

        if "h3" in document.metadata:
            print(f"H3: {document.metadata['h3']}")

        print("\nChunk:\n")
        print(document.page_content)
        print()