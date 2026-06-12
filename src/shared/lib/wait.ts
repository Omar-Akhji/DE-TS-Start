/**
 * Delays execution for a specified duration in milliseconds (dev mode only).
 * Useful for debugging skeleton loaders or creating intentional async pauses.
 * In production/build mode, this resolves immediately with no delay.
 *
 * @param ms - The duration to wait in milliseconds.
 * @returns A promise that resolves after the specified duration.
 */
export function wait(ms: number): Promise<void> {
  if (import.meta.env.PROD) return Promise.resolve();
  return new Promise((resolve) => setTimeout(resolve, ms));
}
