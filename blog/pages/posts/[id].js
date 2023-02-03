import Date from '../../components/Date'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
  // 배열을 줌
  const paths = getAllPostIds()

  /**
   * fallback은 url을 이탈했을 때
   * true로 하면 에러가 나온다
   * false로 하면 404 페이지가 나온다.
   * 'blocking'을 하면 다른 에러가 나온다.
   */
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        <h3>제목</h3>
        {postData.title}
        <br />
        <hr />
        <h3>날짜</h3>
        <Date dateString={postData.date} />
        <br />
        <hr />
        <h3>내용</h3>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}
