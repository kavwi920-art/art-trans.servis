const SUPABASE_URL = 'https://akofqqpoknpwhqhonnst.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrb2ZxcXBva25wd2hxaG9ubnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MTQ3MDcsImV4cCI6MjEwMjE5MDcwN30.NZWcqIU5U4COT39T71Ft9nUW_6BJUcNugNZmbOVaIf4';

// Tworzymy klienta pod inną nazwą (supabase jest już zajęte przez bibliotekę)
window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
