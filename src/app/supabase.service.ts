import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const  SUPABASE_URL = 'http://localhost:8000';
const  SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJyb2xlIjogImFub24iLAogICJpc3MiOiAic3VwYWJhc2UiLAogICJpYXQiOiAxNzM5OTg5ODAwLAogICJleHAiOiAxODk3NzU2MjAwCn0.CWd6puWDZgHknKWq-9dWRe7XzUoMfboxlieYeBFKe6M';
// const  SUPABASE_URL = 'https://udntnmcxcfpqlfiemqww.supabase.co';
// const  SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkbnRubWN4Y2ZwcWxmaWVtcXd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNTAxNjUsImV4cCI6MjA1NTYyNjE2NX0.l4DwQTe7UerGAUFqrP3PIQzukUROd2E7os5uZUiP_iQ';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {

  constructor() {
  }

  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo:`${window.location.origin}/home`
      },
      
    });
    if (error) {
      console.error('Google Sign-In Error:', error.message);
    }
    return data;
  }

  async  signInWithAzure() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        scopes: 'openid profile email',
        redirectTo:`${window.location.origin}/home`,
      },
      
    });
    if (error) {
      console.error('Azure Sign-In Error:', error.message);
    }
    return data;
  }

}
