import { NextRequest, NextResponse } from "next/server";
import { getContent, updateSection } from "@/lib/content";
import { cookies } from "next/headers";

function isAuthenticated(): boolean {
  const token = cookies().get("admin_token");
  const expected = process.env.ADMIN_TOKEN ?? "greendelta-admin-token-2024";
  return token?.value === expected;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { section: string } }
) {
  if (!isAuthenticated()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const content = getContent() as unknown as Record<string, unknown>;
  const section = content[params.section];
  if (section === undefined) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(section);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { section: string } }
) {
  if (!isAuthenticated()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const data = await req.json();
  updateSection(params.section, data);
  return NextResponse.json({ success: true });
}
