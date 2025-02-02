import { NextResponse } from 'next/server';
import services from 'data/services.json';

export const dynamic = 'force-dynamic'; // ensures the response isn’t cached

export async function GET() {
  return NextResponse.json(services);
}