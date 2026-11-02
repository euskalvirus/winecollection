import { NextResponse } from "next/server";
import { getWines } from "@/lib/excel";

export async function GET() {
  return NextResponse.json(
    getWines()
  );
}
