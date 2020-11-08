const SECONDS_PER_DAY = 86400;
const HOURS_PER_DAY = 24;
export const secondsToHms = (seconds: number): string => {
  const days = Math.floor(seconds / SECONDS_PER_DAY);
  const remainderSeconds = seconds % SECONDS_PER_DAY;
  const hms = new Date(remainderSeconds * 1000).toISOString().substring(11, 19);
  const result = hms.replace(/^(\d+)/, (h) =>
    `${Number(h) + days * HOURS_PER_DAY}`.padStart(2, '0'),
  );
  return result.slice(3);
};
