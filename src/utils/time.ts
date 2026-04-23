export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function getTimeWarningColor(seconds: number): string {
  if (seconds <= 60) return 'text-red-600'; // 1 minute
  if (seconds <= 300) return 'text-orange-600'; // 5 minutes
  if (seconds <= 600) return 'text-yellow-600'; // 10 minutes
  return 'text-gray-700'; // normal
}

export function getTimeWarningMessage(seconds: number): string | null {
  if (seconds === 60) return 'Waktu tinggal 1 menit!';
  if (seconds === 300) return 'Waktu tinggal 5 menit!';
  if (seconds === 600) return 'Waktu tinggal 10 menit!';
  return null;
}
