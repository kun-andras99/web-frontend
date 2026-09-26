import { useMutation } from '@tanstack/react-query';

interface UploadAvatarResponse {
  url: string;
}

async function uploadAvatar(file: File): Promise<UploadAvatarResponse> {
  const formData = new FormData();
  formData.append('avatar', file);

  const res = await fetch('/api/upload/avatar', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new Error(body?.message ?? 'Nem sikerült feltölteni a képet');
  }

  return res.json();
}

export function useUploadAvatar() {
  return useMutation({ mutationFn: uploadAvatar });
}
