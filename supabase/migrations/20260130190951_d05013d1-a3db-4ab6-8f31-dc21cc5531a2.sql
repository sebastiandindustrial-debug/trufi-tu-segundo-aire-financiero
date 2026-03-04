-- Fix 1: Add INSERT policy for profiles table
-- Allows authenticated users to create their own profile
CREATE POLICY "Users can create their own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Fix 2: Restrict settings table to only expose safe public keys
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can read settings" ON public.settings;

-- Create a restrictive policy that only exposes whitelisted non-sensitive settings
CREATE POLICY "Public can read non-sensitive settings"
ON public.settings
FOR SELECT
USING (key IN ('payment_link'));

-- Allow admins to read all settings
CREATE POLICY "Admins can read all settings"
ON public.settings
FOR SELECT
USING (is_admin());