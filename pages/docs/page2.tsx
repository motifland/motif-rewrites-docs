import Link from 'next/link'

export default function Page2() {
  return (
    <>
      <main>
        <div>
          <Link href="/docs/page1">Page 1 (rewritten app)</Link>
        </div>
        <div>
          <Link href="/docs/page2">Page 2 (rewritten app)</Link>
        </div>
        <div>This is the rewritten app</div>
      </main>
    </>
  )
}
