/**
 * Standard generic interface for all API responses.
 * Provides a consistent structure for data, errors, and metadata.
 */
interface ApiError {
  code: string;
  details?: unknown;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string | undefined;
  error?: ApiError | undefined;
  metadata?:
    | {
        timestamp: string;
        processingTimeMs: number;

        pagination?: { total: number; page: number; limit: number; totalPages: number };
      }
    | undefined;
}
