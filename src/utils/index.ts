export function formatMusicTime(seconds: number) {
  if (isNaN(seconds)) {
    return 'Invalid input';
  }
  let totalSeconds = parseInt(seconds.toString(), 10);
  let minutes = Math.floor(totalSeconds / 60);
  let remainingSeconds = totalSeconds % 60;
  let paddedMinutes = String(minutes).padStart(2, '0');
  let paddedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${paddedMinutes}:${paddedSeconds}`;
}

export function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}
