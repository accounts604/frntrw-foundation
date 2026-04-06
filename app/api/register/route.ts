import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  // Log to console — wire up to email/CRM later
  console.log('[REGISTER]', new Date().toISOString(), body)
  return NextResponse.json({ ok: true })
}
