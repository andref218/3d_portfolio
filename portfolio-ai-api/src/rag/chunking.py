from langchain_core.documents import Document
from langchain_text_splitters import (
    MarkdownHeaderTextSplitter,
    RecursiveCharacterTextSplitter,
)

from loader import load_documents


HEADERS_TO_SPLIT_ON = [
    ("#", "h1"),
    ("##", "h2"),
    ("###", "h3"),
]


def chunk_documents(
    documents: list[Document],
    chunk_size: int = 1000,
    chunk_overlap: int = 200,
) -> list[Document]:
    """
    Split Markdown documents into semantically meaningful chunks.

    The pipeline consists of two stages:

    1. Split documents by Markdown headers.
    2. Split oversized sections using a recursive character splitter.

    Args:
        documents: Documents returned by the loader.
        chunk_size: Maximum size of each chunk.
        chunk_overlap: Number of overlapping characters.

    Returns:
        List of chunked LangChain Documents.
    """

    markdown_splitter = MarkdownHeaderTextSplitter(
        headers_to_split_on=HEADERS_TO_SPLIT_ON,
    )

    recursive_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
    )

    chunked_documents = []

    for document in documents:

        # First split by Markdown headers
        markdown_chunks = markdown_splitter.split_text(
            document.page_content
        )

        for chunk in markdown_chunks:

            # Preserve metadata from the original document
            chunk.metadata.update(document.metadata)

            # Further split large chunks if necessary
            recursive_chunks = recursive_splitter.split_documents(
                [chunk]
            )

            chunked_documents.extend(recursive_chunks)

    return chunked_documents


if __name__ == "__main__":
    # Manual test

    documents = load_documents()

    chunks = chunk_documents(documents)

    print(f"\nDocuments: {len(documents)}")
    print(f"Chunks: {len(chunks)}")

    print("\nFirst Chunk\n")
    print(chunks[0].page_content)

    print("\nMetadata\n")
    print(chunks[0].metadata)

    print(f"\nAverage chunks per document: {len(chunks) / len(documents):.2f}")