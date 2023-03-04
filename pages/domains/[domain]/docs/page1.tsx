import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <div>Page 1</div>
      <div>This is the rewritten app</div>
      <div>
        <Link href="/docs/page2">Page 2</Link>
        <Link href="/">Back to host app</Link>
      </div>
    </>
  )
}
