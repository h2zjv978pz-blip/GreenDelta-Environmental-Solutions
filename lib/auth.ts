export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "greendelta2024";
export const ADMIN_TOKEN   = process.env.ADMIN_TOKEN   ?? "greendelta-admin-token-2024";

export function validatePassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}
