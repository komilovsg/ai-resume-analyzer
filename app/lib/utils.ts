export function formatSize(bytes: number, options?: { maximumFractionDigits?: number }): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";

  const units = ["B", "KB", "MB", "GB", "TB", "PB"] as const;
  let unitIndex = 0;
  let value = bytes;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  const formatter = new Intl.NumberFormat("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: options?.maximumFractionDigits ?? 1,
  });

  return `${formatter.format(value)} ${units[unitIndex]}`;
}


export const generateUUID = () => {
  return crypto.randomUUID();
}