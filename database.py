import os
from supabase import create_client, Client


def connectSupabase():
    url = os.environ["SUPABASE_URL"]
    key = os.environ["SUPABASE_ID"]
    Client = create_client(url, key)
    return Client


