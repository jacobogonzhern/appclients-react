-- Ejecutar en Supabase -> SQL Editor.
-- Crea la tabla clients (si no existe), permite leer/insertar con la anon key y añade datos de prueba.

create table if not exists public.clients (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text
);

alter table public.clients enable row level security;

drop policy if exists "clients_select" on public.clients;
drop policy if exists "clients_insert" on public.clients;
drop policy if exists "clients_update" on public.clients;
drop policy if exists "clients_delete" on public.clients;

create policy "clients_select" on public.clients for select to anon using (true);
create policy "clients_insert" on public.clients for insert to anon with check (true);
create policy "clients_update" on public.clients for update to anon using (true);
create policy "clients_delete" on public.clients for delete to anon using (true);

insert into public.clients (name, email, phone) values
  ('Ana López', 'ana.lopez@example.com', '600111222'),
  ('Carlos Pérez', 'carlos.perez@example.com', '600333444'),
  ('Lucía Gómez', 'lucia.gomez@example.com', '600555666');
