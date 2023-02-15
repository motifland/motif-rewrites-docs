import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        style={{
          width: 200,
          height: '100vh',
          position: 'fixed',
          overflowY: 'auto',
        }}
      >
        {Array.from(Array(100).keys()).map((i) => (
          <div key={i}>
            <Link href={`/docs/page${(i % 2) + 1}`}>Page {(i % 2) + 1}</Link>
          </div>
        ))}
      </div>
      <div
        style={{
          paddingLeft: 200,
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  )
}
