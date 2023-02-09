import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const docsHostname = 'https://commercial-mollusk-scarlet.motif.land'

export default async function middleware(req: NextRequest) {
  // const { pathname } = req.nextUrl

  // if (pathname.startsWith('/docs')) {
  //   return NextResponse.rewrite(docsHostname + pathname)
  // } else if (pathname.startsWith('/__motif/assets/_next/')) {
  //   return NextResponse.rewrite(docsHostname + pathname)
  // }

  return NextResponse.next()
}
