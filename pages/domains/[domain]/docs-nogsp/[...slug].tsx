import { useRouter } from 'next/router'
import React from 'react'

export default function Slug() {
  const router = useRouter()

  return (
    <>
      <div>Query: {JSON.stringify(router.query)}</div>
    </>
  )
}
