import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      <h1 className="title">CartDate Slug {JSON.stringify(date)}</h1>

      <Link href="/cart/2022/07/02">2022년 7월 2일</Link>

      <br />

      <button onClick={() => router.push('/cart/2022/06/01')}>
        2022년 6월 1일
      </button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return <>{page}</>
}
