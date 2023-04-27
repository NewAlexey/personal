export function errorTypeGuard(error: unknown): error is Error {
    return error instanceof Error;
}
