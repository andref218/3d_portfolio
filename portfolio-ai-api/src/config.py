from dotenv import load_dotenv
from os import getenv

load_dotenv()

# Embeddings

#Keeping it here temporarily for reference, but we are now using OpenRouter embeddings instead of HuggingFace embeddings.
#EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"

EMBEDDING_MODEL = getenv(
    "EMBEDDING_MODEL",
    "openai/text-embedding-3-small",
)

# Vector Database

VECTOR_DB_PATH = "data/vector_db"

# Retrieval

TOP_K = 4

# LLM

MODEL_NAME = getenv(
    "MODEL_NAME",
    "openrouter/free",
)

TEMPERATURE = 0

OPENROUTER_API_KEY = getenv("OPENROUTER_API_KEY")

OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1"