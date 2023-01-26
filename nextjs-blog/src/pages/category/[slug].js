export default function CategorySlug() {
  return (
    <>
      <h1 className="title">CategorySlug</h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return <>{page}</>
}
