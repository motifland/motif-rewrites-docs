import { useRouter } from 'next/router'
import React from 'react'

export default function Slug() {
  const router = useRouter()

  return (
    <>
      <div>No middleware rewrite, without getStaticProps</div>
      <div>Query: {JSON.stringify(router.query)}</div>
    </>
  )
}
