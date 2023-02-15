import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <main>
        <div>
          <Link href="/docs/page1">Page 1</Link>
        </div>
        <div>
          <Link href="/docs/page2">Page 2</Link>
        </div>
        <div>This is the rewritten app</div>
      </main>
    </>
  )
}
