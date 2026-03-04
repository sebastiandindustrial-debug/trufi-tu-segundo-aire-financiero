-- Allow first admin registration when no admins exist
-- This policy uses a subquery to check if there are no existing admins

CREATE POLICY "Allow first admin registration"
ON public.user_roles
FOR INSERT
WITH CHECK (
  -- Allow insert if no admins exist yet (first registration)
  NOT EXISTS (
    SELECT 1 FROM public.user_roles WHERE role = 'admin'
  )
  AND role = 'admin'
);

-- Also allow admins to insert roles (for future admin management)
DROP POLICY IF EXISTS "Only admins can manage roles" ON public.user_roles;

CREATE POLICY "Admins can manage roles"
ON public.user_roles
FOR ALL
USING (is_admin())
WITH CHECK (is_admin());