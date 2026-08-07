"""
Development utility.

Simple script used to verify that the OpenRouter connection
is working correctly and to inspect the model metadata,
token usage, and response.
"""

from src.llm.client import get_llm

llm = get_llm()

response = llm.invoke("Say hello in one sentence.")

print(response.content)
print()
print(response.response_metadata)