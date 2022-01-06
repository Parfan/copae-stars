import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Welcome to Copae draw</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque repellat distinctio ad quidem adipisci laborum ullam nesciunt corrupti nulla esse. Vero architecto hic repellat voluptatem odio iure sunt, molestiae deserunt?</p>
      <Link to="/draw">Get started</Link>
    </>
  )
}

export default Home
