from dotenv import load_dotenv
from os import getenv

load_dotenv()

# Embeddings

EMBEDDING_MODEL = "BAAI/bge-small-en-v1.5"

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