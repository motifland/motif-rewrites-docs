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
        <h4>With getStaticProps</h4>
        {Array.from(Array(3).keys()).map((i) => (
          <div key={i}>
            <Link href={`/with-getstaticprops/page${i + 1}`}>Page {i + 1}</Link>
          </div>
        ))}
        <hr />
        <h4>Without getStaticProps</h4>
        {Array.from(Array(3).keys()).map((i) => (
          <div key={i}>
            <Link href={`/without-getstaticprops/page${i + 1}`}>
              Page {i + 1}
            </Link>
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
