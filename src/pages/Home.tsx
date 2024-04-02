import Gallery from '@/components/Gallery'
import Header from '@/components/Header'

function Home() {
  return (
    <main className="w-full h-full bg-white overflow-auto">
      <Header />
      <Gallery />
    </main>
  )
}

export default Home
