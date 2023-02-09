import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/__motif/assets/_next/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/__motif\/assets/, '')
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
