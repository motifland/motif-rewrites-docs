import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'

// export const getStaticProps: GetStaticProps<{
//   params: ParsedUrlQuery | undefined
// }> = async ({ params }) => {
//   return { props: { params } }
// }

// export const getStaticPaths = async () => {
//   return { paths: [], fallback: 'blocking' }
// }

// export default function Slug({
//   params,
// }: InferGetStaticPropsType<typeof getStaticProps>) {
//   const router = useRouter()

//   return (
//     <>
//       <div>Params: {JSON.stringify(params)}</div>
//     </>
//   )
// }

export default function Slug() {
  const router = useRouter()

  return (
    <>
      No static props
      <div>Query: {JSON.stringify(router.query)}</div>
    </>
  )
}
