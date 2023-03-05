import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

// export const config = {
//   matcher: ['/((?!api|_next/static|favicon.ico|site.webmanifest).*)'],
// }

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/__motif/assets/_next/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/__motif\/assets/, '')
    return NextResponse.rewrite(url)
  }

  if (pathname.startsWith('/_next/data/')) {
    const url = req.nextUrl.clone()
    const parts = pathname.split('/')
    const newPathname = [
      ...parts.slice(0, 4),
      'with-getstaticprops',
      ...parts.slice(4),
    ].join('/')
    url.pathname = newPathname
    return NextResponse.rewrite(url)
  }

  // if (pathname.startsWith('/with-getstaticprops')) {
  //   const url = req.nextUrl.clone()
  //   url.pathname = `/with-getstaticprops${pathname}`
  //   return NextResponse.rewrite(url)
  // }

  return NextResponse.next()
}
