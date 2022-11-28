export function isServer() {
    return typeof window === "undefined";
}

export function getUniqueNumber(): string {
    const dateNow = new Date();

    return String(dateNow.getTime());
}
