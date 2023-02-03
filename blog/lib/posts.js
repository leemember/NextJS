import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 슬래시해서 posts 가 붙었다고 보면된다.
const postsDirectory = path.join(process.cwd(), 'posts')
// 정렬된 데이터를 가져온다.
export function getSortedPostsData() {
  // Get file names under /posts
  // 파일 name을 읽어온다.
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    // uft8로 직접 읽어온다.
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // 메타데이터를 읽어낸다.
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
