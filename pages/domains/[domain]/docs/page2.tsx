import Link from 'next/link'

export default function Page2() {
  return (
    <>
      <div>Page 2</div>
      <div>This is the rewritten app</div>
      <div>
        <Link href="/docs/page1">Page 1</Link>
        <Link href="/">Back to host app</Link>
      </div>
    </>
  )
}
