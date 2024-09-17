import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // GET logic goes here
  return NextResponse.json({ message: 'Task details' });
}