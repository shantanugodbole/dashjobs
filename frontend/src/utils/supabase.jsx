
import { createClient } from '@supabase/supabase-js'

// const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANONKEY)

const supabase = createClient('https://phapjdzdhybihvhudtku.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoYXBqZHpkaHliaWh2aHVkdGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0NTk3MzcsImV4cCI6MjAwMjAzNTczN30.n9TjINuwgR3SZmZdbkTv0Od-Rah4fxwGn2SiIGLp7Xo')


export async function userSignUp(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
    });
    console.log(data);
}

export async function userSignIn(userEmail, userPassword) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: userPassword,
    });
    console.log(data);
}

export async function fetchJobListings() {
    const { data, error } = await supabase
        .from('JobListings')
        .select();
    return data;
}