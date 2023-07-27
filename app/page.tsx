import Layout from './components/Layout'
import PostList from './components/posts/PostList'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Layout>
         <PostList/>
      </Layout>
    </main>
  )
}
