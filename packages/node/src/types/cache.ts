/**
 * Useful for clarity over functionality. Flag configs are JSON objects that
 * should not need to be inspected or modified after being received from the
 * server.
 */
export type FlagConfig = Record<string, unknown>;

/**
 * Used to store flag configs in-memory and share the configs between multiple
 * clients which use the same environment key.
 */
export interface FlagConfigCache {
  /**
   * Access flag configs from the cache. If the {@link flagKeys} argument is
   * empty, this function will return the entire cache.
   *
   * @param flagKeys the keys for the flags to access from the cache. If empty,
   * the entire cache will be returned.
   */
  get(flagKeys?: string[]): Promise<Record<string, FlagConfig>>;

  /**
   * Put flag configs into the cache. Existing configs for a flag key will be
   * overwritten.
   *
   * @param flags the flag configs to put in the cache.
   */
  put(flags: Record<string, FlagConfig>): void;

  /**
   * Clear the cache.
   */
  clear(): void;
}
