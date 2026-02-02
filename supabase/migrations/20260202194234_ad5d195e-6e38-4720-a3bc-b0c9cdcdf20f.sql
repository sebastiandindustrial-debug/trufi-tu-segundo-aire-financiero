-- Add DELETE policy for profiles table (users can delete their own profile)
CREATE POLICY "Users can delete their own profile"
ON public.profiles
FOR DELETE
USING (auth.uid() = user_id);

-- Add DELETE policy for profiles table (admins can delete any profile)
CREATE POLICY "Admins can delete profiles"
ON public.profiles
FOR DELETE
USING (is_admin());

-- Add DELETE policy for user_roles table (admins can revoke roles)
CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
USING (is_admin());

-- Add DELETE policy for settings table (admins can delete settings)
CREATE POLICY "Admins can delete settings"
ON public.settings
FOR DELETE
USING (is_admin());

-- Add policy for authors to view their own unpublished posts
CREATE POLICY "Authors can view their own posts"
ON public.posts
FOR SELECT
USING (auth.uid() = author_id);

-- Add policy for authors to update their own posts
CREATE POLICY "Authors can update their own posts"
ON public.posts
FOR UPDATE
USING (auth.uid() = author_id);

-- Add policy for authors to delete their own posts
CREATE POLICY "Authors can delete their own posts"
ON public.posts
FOR DELETE
USING (auth.uid() = author_id);