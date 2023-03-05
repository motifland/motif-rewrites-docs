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

  // Attempt 3: remove following rewrite.
  // // The critical thing
  // if (pathname.startsWith('/_next/data/')) {
  //   const url = req.nextUrl.clone()
  //   const parts = pathname.split('/')
  //   const newPathname = [...parts.slice(0, 4), ...parts.slice(4)].join('/')
  //   url.pathname = newPathname
  //   console.log('newPathname', JSON.stringify(newPathname, null, 2))
  //   return NextResponse.rewrite(url)
  // }

  // Attempt 5: added following rewrite.
  if (pathname.startsWith('/_next/data/')) {
    const url = req.nextUrl.clone()
    const parts = pathname.split('/')
    const newPathname = [
      ...parts.slice(0, 4),
      'domains',
      'test',
      ...parts.slice(4),
    ].join('/')
    url.pathname = newPathname
    console.log('newPathname', JSON.stringify(newPathname, null, 2))
    return NextResponse.rewrite(url)
  }

  // Attempt 4: use middleware rewrites.
  if (pathname.startsWith('/docs')) {
    const url = req.nextUrl.clone()
    url.pathname = `/domains/test${pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
