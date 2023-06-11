import os
from supabase import create_client, Client


def connectSupabase():
    url = os.environment["SUPABASE_URL"]
    key = os.environment["SUPABASE_ID"]
    Client = create_client(url, key)
    return Client


