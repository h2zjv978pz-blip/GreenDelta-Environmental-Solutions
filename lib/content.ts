import fs from "fs";
import path from "path";
import type { ContentData } from "@/types/content";

const CONTENT_FILE = path.join(process.cwd(), "data", "content.json");

export function getContent(): ContentData {
  const raw = fs.readFileSync(CONTENT_FILE, "utf-8");
  return JSON.parse(raw) as ContentData;
}

export function updateSection(section: keyof ContentData | string, data: unknown): void {
  const content = getContent() as unknown as Record<string, unknown>;
  content[section] = data;
  content.updatedAt = new Date().toISOString();
  fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");
}
