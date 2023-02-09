import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Link href="/docs">Docs</Link>
        </div>
        <div>Main site</div>
      </main>
    </>
  )
}
