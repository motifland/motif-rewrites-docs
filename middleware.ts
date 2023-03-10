import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/((?!api|_next/static|favicon.ico|site.webmanifest).*)'],
}

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/__motif/assets/_next/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/__motif\/assets/, '')
    return NextResponse.rewrite(url)
  }

  // Without this middleware rewrite, everything works as expected on
  // prod. With the rewrite, it only works on localhost.
  if (
    pathname.startsWith('/docs-rewrite-gsp') ||
    pathname.startsWith('/docs-rewrite-nogsp')
  ) {
    // Rewrite /docs- to /domains/test/docs-
    const url = req.nextUrl.clone()
    url.pathname = `/domains/test${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
