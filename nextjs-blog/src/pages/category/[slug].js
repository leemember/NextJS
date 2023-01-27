import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query
  // 이처럼 router.query의 slug를 쓰면 url에 /category/{slug}에 있는 {slug}에 입력한 값이 화면에 찍힌다.
  // category/sports?from=event ---> 라는 url에서는 ?를 쿼리로 봐서 그 from 에 맞는 값을
  // 💡 여러개의 쿼리를 다 받아낼 수 있다. (쿼리는 물음표로 구분할 수 있음)
  return (
    <h1 className="title">
      Category {slug} from {from}
    </h1>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return <>{page}</>
}
