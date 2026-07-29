-- Create a function that automatically inserts a user into our public."User" table
-- when a new user signs up via Supabase Auth.

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public."User" (id, email, name, role)
  values (
    new.id, 
    new.email, 
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', 'Unknown User'),
    'visitor'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Create the trigger on the auth.users table
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
