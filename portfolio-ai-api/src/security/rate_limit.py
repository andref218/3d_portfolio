"""
Rate limiting configuration.

Protects the public API against abuse by limiting
the number of requests per client IP.
"""

from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(
    key_func=get_remote_address,
)