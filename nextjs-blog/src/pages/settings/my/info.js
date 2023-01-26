export default function MyInfo() {
  return (
    <>
      <h1 className="title">MyInfo</h1>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return <>{page}</>
}
