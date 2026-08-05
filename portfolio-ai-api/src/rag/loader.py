from pathlib import Path

from langchain_core.documents import Document


KNOWLEDGE_BASE_PATH = Path("data/knowledge")


def load_documents() -> list[Document]:
    """
    Load every Markdown document from the knowledge base.

    Returns:
        list[Document]: List of LangChain Document objects.
    """

    documents = []

    markdown_files = KNOWLEDGE_BASE_PATH.rglob("*.md")

    for file_path in markdown_files:
        content = file_path.read_text(encoding="utf-8")

        document = Document(
            page_content=content,
            metadata={
                "source": str(file_path),
                "title": file_path.stem,
            },
        )

        documents.append(document)

    return documents

if __name__ == "__main__":
    # Manual test

    documents = load_documents()

    print(f"\nLoaded {len(documents)} documents.\n")

    print("First document:\n")
    print(documents[0].page_content[:250])

    print("\nMetadata:\n")
    print(documents[0].metadata)