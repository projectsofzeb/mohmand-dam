-- Create storage policies for the cvs bucket to allow downloads
CREATE POLICY "Allow public access to CVs for download" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'cvs');

-- Allow anyone to upload CVs (for job applications)
CREATE POLICY "Allow CV uploads" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'cvs');

-- Update bucket to be public for easier access
UPDATE storage.buckets 
SET public = true 
WHERE id = 'cvs';