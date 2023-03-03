import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl

  console.log('pathname', pathname)
  if (pathname.startsWith('/__motif/assets/_next/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/__motif\/assets/, '')
    return NextResponse.rewrite(url)
  }

  // if (pathname.startsWith('/_next/data/development/')) {
  //   const url = req.nextUrl.clone()
  //   url.pathname = pathname
  //     .replace('/_next/data/development/', '/')
  //     .replace(/\.json$/, '')
  //   console.log(
  //     'Replace',
  //     pathname.replace('/_next/data/development/', '/').replace(/\.json$/, '')
  //   )
  //   return NextResponse.rewrite(url)
  // }

  // console.log('pathname', pathname)
  if (pathname.startsWith('/docs')) {
    const path = `/domains/test${pathname}`
    const url = req.nextUrl.clone()
    url.pathname = path
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
