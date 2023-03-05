import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export const config = {
  // matcher: ['/((?!api|_next|static|favicon.ico|site.webmanifest).*)'],
  matcher: ['/((?!api|_next|static|favicon.ico|site.webmanifest).*)'],
}

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl

  console.log('pathname', pathname)
  if (pathname.startsWith('/__motif/assets/_next/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/__motif\/assets/, '')
    return NextResponse.rewrite(url)
  }

  if (pathname.startsWith('/_next/data/')) {
    const url = req.nextUrl.clone()
    const domainPath = 'domains'
    const parts = pathname.split('/')
    const newPathname = [
      ...parts.slice(0, 4),
      domainPath,
      'test',
      ...parts.slice(4),
    ].join('/')
    url.pathname = newPathname
    return NextResponse.rewrite(url)
  }

  // if (pathname.startsWith('/_next/data/')) {
  //   // Input: /_next/data/development/docs/hi.json
  //   // Output: /_next/data/development/_projectdomain/joy-kin-arc/docs/hi.json
  //   const url = req.nextUrl.clone()
  //   const domainPath = 'domain'
  //   const parts = pathname.split('/')
  //   url.pathname = [
  //     ...parts.slice(0, 4),
  //     domainPath,
  //     'test',
  //     ...parts.slice(4),
  //   ].join('/')
  //   console.log('pathname', pathname, url.pathname)
  //   return NextResponse.rewrite(url)
  // }

  if (pathname.startsWith('/docs')) {
    const url = req.nextUrl.clone()
    url.pathname = `/domains/test${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
