from fastapi import FastAPI

app = FastAPI(
    title="Portfolio AI API",
    description="Backend API for André's AI Portfolio Assistant",
    version="0.1.0",
)

@app.get("/")
def health():
    return {
        "status": "running",
        "message": "Portfolio AI API is online"
    }