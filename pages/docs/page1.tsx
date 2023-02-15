import Link from 'next/link'

export default function Page1() {
  return (
    <>
      <main>
        <div>
          <Link href="/docs/page1">Page 1 (rewritten app)</Link>
          <Link href="/docs/page2">Page 2 (rewritten app)</Link>
        </div>
      </main>
    </>
  )
}
