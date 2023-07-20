
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANONKEY)


export async function userSignUp (userEmail, userPassword){
    const { data, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
    });
    console.log(data);
}

export async function userSignIn(userEmail, userPassword){
    const { data, error } = await supabase.auth.signInWithPassword({
        email: userEmail,
        password: userPassword,
      });
    console.log(data);
}
